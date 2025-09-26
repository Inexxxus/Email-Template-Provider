// script.js
// Uses templates.js for predefined email templates
// Supports English/Japanese translation
// Shows consistent card sizes, modal with full email & navigation, template count

const TRANSLATE_URL = "https://translate.argosopentech.com/translate";

let templates = [];
let displayed = [];
let targetLang = "en"; // default language

// UI elements (assume these exist in your index.html)
const listEl = document.getElementById("list");
const categorySel = document.getElementById("category");
const searchInput = document.getElementById("search");
const langSelect = document.getElementById("lang-select");
const progressBar = () => document.getElementById("progress-bar");
const progressText = () => document.getElementById("progress-text");
const loadingSection = document.getElementById("loading");

// Modal state
let modalIndex = -1;
let modalEl = null;
let modalContentEl = null;
let modalPrevBtn = null;
let modalNextBtn = null;
let modalCloseBtn = null;
let modalCopyBtn = null;

// Ensure the template count UI exists (insert before search input if missing)
function ensureCountDisplay() {
  if (!document.getElementById("template-count")) {
    const wrapper = document.createElement("div");
    wrapper.className = "count-display";
    wrapper.innerHTML = `<label>Total Templates: <span id="template-count">0</span></label>`;
    // try to insert before search input
    if (searchInput && searchInput.parentNode) {
      searchInput.parentNode.insertBefore(wrapper, searchInput);
    } else {
      // fallback: prepend to body.wrap if present
      const wrap = document.querySelector(".wrap") || document.body;
      wrap.insertBefore(wrapper, wrap.firstChild);
    }
  }
}
ensureCountDisplay();

// Force-translate helper
async function translateTextForce(text, lang = "en") {
  if (!text) return "";
  try {
    const res = await fetch(TRANSLATE_URL, {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: lang,
        format: "text"
      }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    return data.translatedText || text;
  } catch (err) {
    console.error("Translation failed:", err);
    return text;
  }
}

// Populate categories dropdown
function populateCategories() {
  const set = new Set(["All"]);
  templates.forEach(t => set.add(t.category || "General"));
  categorySel.innerHTML = "";
  Array.from(set).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.text = cat;
    categorySel.appendChild(opt);
  });
}

// Escape HTML to avoid injection
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Create a card (with preview). idx is index in displayed[]
function createCard(t, idx) {
  const card = document.createElement("article");
  card.className = "card";
  // make a short preview text
  const previewText = (t.body || "").length > 140 ? (t.body.slice(0, 140) + "…") : t.body;

  card.innerHTML = `
    <h3>${escapeHtml(t.subject)}</h3>
    <div class="badge">${escapeHtml(t.category || "General")}</div>
    <div class="card-preview">
      <p class="greeting">${targetLang === "en" ? "Good day Sir/Ma'am," : "ご担当者様"}</p>
      <p class="preview-body">${escapeHtml(previewText)}</p>
      <p class="closing">${targetLang === "en" ? "Best regards," : "よろしくお願いいたします"}</p>
    </div>
    <div class="copy-icon" title="Copy email">🗐</div>
  `;

  // Card click opens modal, but clicking copy-icon should not open modal
  card.addEventListener("click", (e) => {
    if (e.target.closest(".copy-icon")) return;
    openModalByIndex(idx);
  });

  // Copy button behavior: stop propagation and copy the full email
  const copyBtn = card.querySelector(".copy-icon");
  copyBtn.addEventListener("click", async (e) => {
    e.stopPropagation();
    const btn = e.currentTarget;
    const full = `Subject: ${t.subject}\n\n${targetLang === "en" ? "Good day Sir/Ma'am," : "ご担当者様"}\n\n${t.body}\n\n${targetLang === "en" ? "Best regards," : "よろしくお願いいたします"}\n[Your Name]`;
    try {
      await navigator.clipboard.writeText(full);
      // show copied state
      btn.textContent = "✓ Copied";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "🗐";
        btn.classList.remove("copied");
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      alert("Copy failed. Please copy manually.");
    }
  });

  return card;
}

// Update template count display: "showing X / Y"
function updateCount() {
  const countEl = document.getElementById("template-count");
  if (countEl) {
    const total = templates.length || 0;
    const shown = displayed.length || 0;
    countEl.textContent = `${shown} / ${total}`;
  }
}

// Render list of cards based on filter/search
function renderList(filterCategory = "All", search = "") {
  listEl.innerHTML = "";
  const q = (search || "").toLowerCase();
  displayed = templates.filter(t => {
    if (filterCategory !== "All" && t.category !== filterCategory) return false;
    if (!q) return true;
    return (t.subject + " " + t.body + " " + (t.category || "")).toLowerCase().includes(q);
  });

  updateCount();

  if (displayed.length === 0) {
    listEl.innerHTML = `<p>${targetLang === "en" ? "No templates found." : "テンプレートが見つかりません。"}</p>`;
    return;
  }

  displayed.forEach((t, i) => {
    const card = createCard(t, i);
    listEl.appendChild(card);
  });
}

// Modal creation (create once)
function ensureModal() {
  if (modalEl) return;

  modalEl = document.createElement("div");
  modalEl.id = "template-modal";
  modalEl.className = "modal";
  modalEl.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true">
      <button class="modal-close" id="modal-close" aria-label="Close">&times;</button>
      <div id="modal-content" class="modal-content"></div>
      <div class="modal-actions">
        <button id="modal-prev" class="modal-nav">← Prev</button>
        <button id="modal-copy" class="modal-copy">Copy Email</button>
        <button id="modal-next" class="modal-nav">Next →</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalEl);

  modalContentEl = modalEl.querySelector("#modal-content");
  modalPrevBtn = modalEl.querySelector("#modal-prev");
  modalNextBtn = modalEl.querySelector("#modal-next");
  modalCloseBtn = modalEl.querySelector("#modal-close");
  modalCopyBtn = modalEl.querySelector("#modal-copy");

  // handlers
  modalCloseBtn.addEventListener("click", closeModal);
  modalPrevBtn.addEventListener("click", showPrevModal);
  modalNextBtn.addEventListener("click", showNextModal);
  modalCopyBtn.addEventListener("click", async () => {
    if (modalIndex < 0 || !displayed[modalIndex]) return;
    const t = displayed[modalIndex];
    const full = `Subject: ${t.subject}\n\n${targetLang === "en" ? "Good day Sir/Ma'am," : "ご担当者様"}\n\n${t.body}\n\n${targetLang === "en" ? "Best regards," : "よろしくお願いいたします"}\n[Your Name]`;
    try {
      await navigator.clipboard.writeText(full);
      modalCopyBtn.textContent = "✓ Copied";
      setTimeout(() => (modalCopyBtn.textContent = "Copy Email"), 2000);
    } catch (err) {
      console.error("Copy failed in modal:", err);
      alert("Copy failed. Please copy manually.");
    }
  });

  // close modal by clicking overlay
  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) closeModal();
  });

  // keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modalEl || modalEl.style.display !== "flex") return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") showNextModal();
    if (e.key === "ArrowLeft") showPrevModal();
  });
}

// Open modal to display item at displayed[index]
function openModalByIndex(index) {
  if (index < 0 || index >= displayed.length) return;
  ensureModal();
  modalIndex = index;
  showModal();
  modalEl.style.display = "flex";
}

// Show modal content for modalIndex
function showModal() {
  if (modalIndex < 0 || modalIndex >= displayed.length) return;
  const t = displayed[modalIndex];
  modalContentEl.innerHTML = `
    <h2>${escapeHtml(t.subject)}</h2>
    <div class="badge">${escapeHtml(t.category || "General")}</div>
    <div class="modal-body">
      <p class="greeting">${targetLang === "en" ? "Good day Sir/Ma'am," : "ご担当者様"}</p>
      <pre class="full-body">${escapeHtml(t.body)}</pre>
      <p class="closing">${targetLang === "en" ? "Best regards," : "よろしくお願いいたします"}<br>[Your Name]</p>
    </div>
  `;
  // update prev/next disable state
  modalPrevBtn.disabled = modalIndex <= 0;
  modalNextBtn.disabled = modalIndex >= (displayed.length - 1);
  // ensure copy button text reset
  modalCopyBtn.textContent = "Copy Email";
}

// Prev / Next handlers
function showPrevModal() {
  if (modalIndex > 0) {
    modalIndex--;
    showModal();
  }
}
function showNextModal() {
  if (modalIndex < displayed.length - 1) {
    modalIndex++;
    showModal();
  }
}
function closeModal() {
  if (!modalEl) return;
  modalEl.style.display = "none";
  modalIndex = -1;
}

// Load templates from templates.js (and translate)
async function fetchTemplates() {
  loadingSection.style.display = "block";
  if (progressBar()) progressBar().style.width = "0%";
  if (progressText()) progressText().textContent = targetLang === "en" ? "Loading templates…" : "テンプレートを読み込み中…";

  try {
    // translate each template's subject and body
    templates = await Promise.all(customTemplates.map(async t => {
      const subject = await translateTextForce(t.subject, targetLang);
      const body = await translateTextForce(t.body, targetLang);
      return { ...t, subject, body };
    }));

    if (progressBar()) progressBar().style.width = "100%";
    if (progressText()) progressText().textContent = targetLang === "en" ? "Done" : "完了";
    loadingSection.style.display = "none";
  } catch (err) {
    console.error("Failed to load templates:", err);
    templates = [...customTemplates]; // fallback
    loadingSection.style.display = "none";
  }

  populateCategories();
  renderList();
}

// Events
categorySel.addEventListener("change", () => renderList(categorySel.value, searchInput.value));
searchInput.addEventListener("input", () => renderList(categorySel.value, searchInput.value));
langSelect.addEventListener("change", () => {
  targetLang = langSelect.value;
  fetchTemplates();
});

// Run
fetchTemplates();
