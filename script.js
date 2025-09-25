// script.js
// Uses templates.js for predefined email templates
// Supports English/Japanese translation

const TRANSLATE_URL = "https://translate.argosopentech.com/translate";

let templates = [];
let displayed = [];
let targetLang = "en"; // default language

// UI elements
const listEl = document.getElementById("list");
const categorySel = document.getElementById("category");
const searchInput = document.getElementById("search");
const langSelect = document.getElementById("lang-select");
const progressBar = () => document.getElementById("progress-bar");
const progressText = () => document.getElementById("progress-text");
const loadingSection = document.getElementById("loading");

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

// Populate categories
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

// Render a card
function createCard(t) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h3>${escapeHtml(t.subject)}</h3>
    <div class="badge">${escapeHtml(t.category)}</div>
    <p>${targetLang === "en" ? "Good day Sir/Ma'am," : "ご担当者様"}</p>
    <p>${escapeHtml(t.body)}</p>
    <p>${targetLang === "en" ? "Best regards," : "よろしくお願いいたします"}<br>[Your Name]</p>
    <div class="copy-icon" title="Copy email">🗐</div>
  `;

  // Copy button behavior
  card.querySelector(".copy-icon").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    const full = `Subject: ${t.subject}\n\n${targetLang === "en" ? "Good day Sir/Ma'am," : "ご担当者様"}\n\n${t.body}\n\n${targetLang === "en" ? "Best regards," : "よろしくお願いいたします"}\n[Your Name]`;
    try {
      await navigator.clipboard.writeText(full);
      // Change to "Copied" ✅
      btn.textContent = "✓ Copied";
      btn.classList.add("copied");

      // Reset after 2 seconds
      setTimeout(() => {
        btn.textContent = "🗐";
        btn.classList.remove("copied");
      }, 2000);
    } catch {
      alert("Copy failed. Please copy manually.");
    }
  });

  return card;
}

// Render list
function renderList(filterCategory = "All", search = "") {
  listEl.innerHTML = "";
  const q = search.toLowerCase();
  displayed = templates.filter(t => {
    if (filterCategory !== "All" && t.category !== filterCategory) return false;
    if (!q) return true;
    return (t.subject + " " + t.body + " " + (t.category || "")).toLowerCase().includes(q);
  });
  if (displayed.length === 0) {
    listEl.innerHTML = `<p>${targetLang === "en" ? "No templates found." : "テンプレートが見つかりません。"}</p>`;
    return;
  }
  displayed.forEach(t => listEl.appendChild(createCard(t)));
}

// Update template count
function updateCount() {
  const countEl = document.getElementById("template-count");
  if (countEl) countEl.textContent = displayed.length;
}

// Render list
function renderList(filterCategory = "All", search = "") {
  listEl.innerHTML = "";
  const q = search.toLowerCase();
  displayed = templates.filter(t => {
    if (filterCategory !== "All" && t.category !== filterCategory) return false;
    if (!q) return true;
    return (t.subject + " " + t.body + " " + (t.category || "")).toLowerCase().includes(q);
  });
  updateCount(); // 👈 update here
  if (displayed.length === 0) {
    listEl.innerHTML = `<p>${targetLang === "en" ? "No templates found." : "テンプレートが見つかりません。"}</p>`;
    return;
  }
  displayed.forEach(t => listEl.appendChild(createCard(t)));
}


// Escape HTML
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Load templates from templates.js
async function fetchTemplates() {
  loadingSection.style.display = "block";
  progressBar().style.width = "0%";
  progressText().textContent = targetLang === "en" ? "Loading templates…" : "テンプレートを読み込み中…";

  try {
    templates = await Promise.all(customTemplates.map(async t => {
      const subject = await translateTextForce(t.subject, targetLang);
      const body = await translateTextForce(t.body, targetLang);
      return { ...t, subject, body };
    }));

    progressBar().style.width = "100%";
    progressText().textContent = targetLang === "en" ? "Done" : "完了";
    loadingSection.style.display = "none";

  } catch (err) {
    console.error("Failed to load templates:", err);
    templates = [...customTemplates];
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
