// templates.js
// Master Email Templates for IT Support + General Company Use

const customTemplates = [
  // 🔹 Support & Ticketing
  {
    id: "sup-001",
    subject: "Ticket Acknowledgement",
    category: "Support",
    body: `Sir / Madam,

Good day!

We have received your support request and assigned it ticket #[ID].  
Our team is currently reviewing your case and will provide updates shortly.  

Best regards.`
  },
  {
    id: "sup-002",
    subject: "Ticket Resolution",
    category: "Support",
    body: `Sir / Madam,

Good day!

This is to inform you that your support ticket #[ID] has been resolved.  
Please review the solution and confirm if it addresses your concern.  

Best regards.`
  },
  {
    id: "sup-003",
    subject: "System Outage Notification",
    category: "Support",
    body: `Dear Team,

We are currently experiencing a temporary system outage affecting [Service].  
Our engineers are actively working to restore functionality as quickly as possible.  
Further updates will be provided.  

Thank you for your patience.`
  },

  // 🔹 IT Hardware Assessments
  {
    id: "hw-001",
    subject: "Battery Assessment Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please see below for the External Battery status of [Employee Name].

PC Name: [PC1234]  
Model: [Insert Model]  

External Battery:  
Serial Number: [1234]  
Product Number: [1234]  
FRU Part#: [1234]  

Findings:  
The built-in battery charge hold level is 31.30%, which is near 30% required capacity.  

Recommendation: For replacement, please coordinate with procurement.  

Best regards.`
  },
  {
    id: "hw-002",
    subject: "Printer Assessment & Disposal Recommendation",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to provide an assessment regarding the printer at [Department Name].  

Findings:  
- Initially diagnosed with faulty power supply.  
- Replaced but failed again within three weeks.  
- Signs of end-of-life hardware condition.  

Resolution Performed:  
- Replaced power supply.  
- Unit failed again and is no longer serviceable.  

Recommendation:  
- Dispose of unit as per IT asset disposal process.  
- Replace printer to ensure uninterrupted operations.  

Best regards.`
  },
  {
    id: "hw-003",
    subject: "PC Hardware Failure Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

The device [PC/Compaq] is unable to power on.  

Troubleshooting performed:  
- Verified power cables/outlets.  
- Cleaned ports.  
- Unable to reseat RAM due to rust.  
- HDD ports corroded, testing not possible.  

Findings:  
- Severe hardware failure.  
- Motherboard and RAM slots corroded.  

Recommendation:  
- Unit is beyond repair. Replace with new system.  
- Review maintenance and backup plan.  

Best regards.`
  },
  {
    id: "hw-004",
    subject: "Laptop Keyboard Replacement Completed",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to confirm that the laptop for [Employee Name] has undergone successful keyboard replacement.  

Details:  
- Device Name: [Device Name]  
- Service Performed: Keyboard replacement  
- Status: Fully functional and tested  

The laptop is ready for use.  

Best regards.`
  },
  {
    id: "hw-005",
    subject: "Device Component Replacement",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to confirm the replacement of the following components on [Device ID]:  

- [Component 1]  
- [Component 2]  

Post-replacement testing confirms normal functionality.  

Best regards.`
  },

  // 🔹 Servers & Network
  {
    id: "srv-001",
    subject: "Server Assessment Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

We conducted an assessment of [Server Name].  

Findings:  
- CPU usage reached critical levels during peak.  
- Disks show early warning signs of degradation.  

Recommendation:  
- Replace affected drives.  
- Consider capacity expansion.  

Best regards.`
  },
  {
    id: "net-001",
    subject: "Network Switch Failure Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

The switch at [Location] experienced hardware failure.  

Findings:  
- Multiple ports unresponsive.  
- Device reboots did not restore service.  

Recommendation:  
- Replace the switch immediately to prevent downtime.  

Best regards.`
  },

  // 🔹 Software & Applications
  {
    id: "sw-001",
    subject: "Application Installation Request - Approval Needed",
    category: "IT",
    body: `Sir / Madam,

Good day!

We received a request to install [Application Name] for [Employee/Department].  

Purpose: [Business Justification]  

Kindly confirm approval before proceeding.  

Best regards.`
  },
  {
    id: "sw-002",
    subject: "Application Installation Completed",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to confirm successful installation of [Application Name] on [Device/User].  
Testing confirmed the application is functional.  

Best regards.`
  },

  // 🔹 HR
  {
    id: "hr-001",
    subject: "Interview Invitation",
    category: "HR",
    body: `Dear [Candidate],

We are pleased to invite you for an interview for the [Position] role.  

Date/Time: [Insert Details]  
Location/Platform: [Insert Details]  

We look forward to meeting you.  

Best regards.`
  },
  {
    id: "hr-002",
    subject: "Job Offer",
    category: "HR",
    body: `Dear [Candidate],

Congratulations!

We are excited to extend you an offer for the [Position] role.  
Please review the attached offer letter and respond by [Deadline].  

Best regards.`
  },

  // 🔹 Finance
  {
    id: "fin-001",
    subject: "Invoice Issued",
    category: "Finance",
    body: `Sir / Madam,

Good day!

Please find attached invoice #[ID] for [Services].  
Payment is due by [Date].  

Thank you.`
  },
  {
    id: "fin-002",
    subject: "Payment Reminder",
    category: "Finance",
    body: `Sir / Madam,

Good day!

This is a reminder that payment for invoice #[ID] is due on [Date].  

Best regards.`
  },

  // 🔹 General Admin
  {
    id: "adm-001",
    subject: "Meeting Invitation",
    category: "Admin",
    body: `Dear Team,

You are invited to attend a meeting on [Date/Time].  
Please see attached agenda.  

Best regards.`
  },
  {
    id: "adm-002",
    subject: "Policy Update",
    category: "Admin",
    body: `Dear Team,

This is to notify you of policy updates effective [Date].  
Please review attached details.  

Best regards.`
  },
  // templates.js (additional templates)

// 🔹 Password & Account
  {
    id: "acc-001",
    subject: "Password Change Request Approved",
    body: `Sir / Madam,

Good day!

Your request to change the password for account [Username] has been approved and completed.  
If you did not initiate this change, please notify IT support immediately.

Best regards.`
  },
  {
    id: "acc-002",
    subject: "Temporary Password Issued",
    body: `Sir / Madam,

Good day!

A temporary password has been issued for your account [Username].  
Temporary Password: [Password]

Please log in and update your password at the earliest convenience.  

Best regards.`
  },
  {
    id: "acc-003",
    subject: "Account Lockout Notification",
    body: `Sir / Madam,

Good day!

The account [Username] has been locked after multiple failed login attempts.  

Recommendation: Please contact IT support to reset your credentials.

Best regards.`
  },

  // 🔹 Application & Installation
  {
    id: "app-001",
    subject: "Third-Party Software Installation Request",
    body: `Sir / Madam,

Good day!

We have received a request to install third-party application [Software Name] on [PC/User].  

Please review and confirm approval to proceed with installation.  

Thank you and best regards.`
  },
  {
    id: "app-002",
    subject: "Software Installation Denied",
    body: `Sir / Madam,

Good day!

After review, the request to install [Software Name] has been denied due to company policy restrictions.  

For approved alternatives, please consult the IT software catalog.

Best regards.`
  },
  {
    id: "app-003",
    subject: "License Renewal Required",
    body: `Sir / Madam,

Good day!

The license for [Application/Software] is due to expire on [Date].  

Recommendation: Please coordinate with procurement to renew before expiration to avoid disruption.

Best regards.`
  },

  // 🔹 Security & Compliance
  {
    id: "sec-001",
    subject: "Suspicious Activity Detected",
    body: `Sir / Madam,

Good day!

Unusual login activity was detected on your account [Username].  

Details:  
- Location: [City, Country]  
- Time: [Date/Time]  

Recommendation: If this was not you, please change your password immediately and contact IT support.  

Best regards.`
  },
  {
    id: "sec-002",
    subject: "Security Patch Deployment Notice",
    body: `Dear Team,

Good day!

A new security patch will be deployed on [Date/Time].  
Please save your work as your device may reboot automatically during the update.  

Thank you for your cooperation.`
  },
  {
    id: "sec-003",
    subject: "Antivirus Scan Report",
    body: `Sir / Madam,

Good day!

The scheduled antivirus scan for [Device] has been completed.  

Findings: No critical threats detected.  
Minor warnings: [List]  

Recommendation: Please keep your antivirus updated and avoid unverified downloads.  

Best regards.`
  },

  // 🔹 Project & Operations
  {
    id: "ops-001",
    subject: "Change Request Approval",
    body: `Sir / Madam,

Good day!

Your change request #[ID] has been reviewed and approved.  

Implementation is scheduled for [Date/Time]. Please prepare accordingly.  

Best regards.`
  },
  {
    id: "ops-002",
    subject: "Project Deployment Completed",
    body: `Dear Team,

Good day!

The deployment for project [Project Name] has been successfully completed.  

All systems are functioning as expected. Please report any issues to IT support.  

Best regards.`
  },
  {
    id: "ops-003",
    subject: "Pending User Access Request",
    body: `Sir / Madam,

Good day!

There is a pending access request for [System/Tool] from [Employee Name].  

Please review and confirm approval to proceed.  

Thank you and best regards.`
  },

  // 🔹 Reminders & Follow-ups
  {
    id: "rem-001",
    subject: "Pending Ticket Reminder",
    body: `Sir / Madam,

Good day!

This is a reminder that your support ticket #[ID] is pending your response.  

Please provide the required details so we can proceed with resolution.  

Best regards.`
  },
  {
    id: "rem-002",
    subject: "Device Check-Up Reminder",
    body: `Dear Team,

Good day!

This is a reminder to submit your assigned device [Device ID] for routine IT check-up scheduled on [Date/Time].  

Thank you for your cooperation.`
  },
  {
    id: "rem-003",
    subject: "System Backup Confirmation",
    body: `Sir / Madam,

Good day!

This is to confirm that your system backup for [Device/User] was completed successfully on [Date].  

Best regards.`
  },
  {
  id: "sup-010",
  subject: "Remote Assistance Session Scheduled",
  category: "Support",
  body: `Sir / Madam,

Good day!

We have scheduled a remote assistance session for your reported issue.  
Date/Time: [Insert]  
Platform: [Zoom/Teams]  

Please ensure your device is connected to the internet during this time.

Best regards.`
},
{
  id: "sup-011",
  subject: "Ticket Closure Notification",
  category: "Support",
  body: `Sir / Madam,

Good day!

We are closing your support ticket #[ID] as resolved.  
If the issue persists, kindly reopen the case.

Best regards.`
},

// 🔹 Password & Accounts
{
  id: "acc-004",
  subject: "Multi-Factor Authentication Enrollment Required",
  category: "Account",
  body: `Sir / Madam,

Good day!

As part of our security enhancement, enrollment in Multi-Factor Authentication (MFA) is required.  
Please complete registration by [Date].  

Instructions are attached.

Best regards.`
},

// 🔹 HR & Staff
{
  id: "hr-010",
  subject: "Probation Evaluation Meeting",
  category: "HR",
  body: `Dear [Employee],

This is a reminder of your probation evaluation scheduled on [Date/Time].  
We will review your performance and provide feedback.  

Best regards.`
},
{
  id: "hr-011",
  subject: "Employee Exit Clearance",
  category: "HR",
  body: `Dear [Employee],

Please be informed that your exit clearance process will begin on [Date].  
Coordinate with HR and IT to surrender your company assets.

Best regards.`
},

// 🔹 Finance
{
  id: "fin-010",
  subject: "Reimbursement Request Denied",
  category: "Finance",
  body: `Sir / Madam,

Good day!

Your reimbursement request #[ID] could not be processed due to missing receipts.  
Kindly resubmit with the required documents.

Best regards.`
},
{
  id: "fin-011",
  subject: "Budget Utilization Report",
  category: "Finance",
  body: `Dear [Manager],

Attached is the monthly budget utilization report for your department.  
Please review and confirm accuracy.

Best regards.`
},

// 🔹 General Operations
{
  id: "ops-010",
  subject: "Disaster Recovery Drill Announcement",
  category: "Operations",
  body: `Dear Team,

A disaster recovery drill will be conducted on [Date/Time].  
All staff are required to participate and follow instructions.

Thank you for your cooperation.`
},
{
  id: "ops-011",
  subject: "Inventory Audit Notice",
  category: "Operations",
  body: `Dear Team,

An inventory audit will take place in [Location] on [Date].  
Please ensure all equipment and devices are accounted for.

Best regards.`
},
// 🔹 Procurement & Asset Management
{
  id: "proc-001",
  subject: "Procurement Request Acknowledgement",
  category: "Procurement",
  body: `Sir / Madam,

Good day!

We have received your procurement request for [Item/Service].  
Our team will review the specifications and provide feedback within [X days].

Best regards.`
},
{
  id: "proc-002",
  subject: "Asset Disposal Approval",
  category: "Procurement",
  body: `Sir / Madam,

Good day!

Your request to dispose of [Asset/Device] has been approved.  
Please coordinate with the IT and Admin departments for proper disposal documentation.

Best regards.`
},
{
  id: "proc-003",
  subject: "Delivery Confirmation",
  category: "Procurement",
  body: `Sir / Madam,

Good day!

This is to confirm that the requested item [Item Name] has been delivered to [Location/Employee].  
Kindly acknowledge receipt.

Best regards.`
},

// 🔹 Training & Knowledge
{
  id: "train-001",
  subject: "Mandatory Training Invitation",
  category: "Training",
  body: `Dear Team,

You are required to attend the mandatory training session on [Topic] scheduled for [Date/Time].  
Please confirm your attendance via the attached form.

Best regards.`
},
{
  id: "train-002",
  subject: "Training Completion Certificate",
  category: "Training",
  body: `Dear [Employee],

Congratulations on successfully completing the [Training Topic] program.  
Please find your certificate attached.

Best regards.`
},

// 🔹 Compliance & Audit
{
  id: "audit-001",
  subject: "Internal Audit Notification",
  category: "Compliance",
  body: `Dear Team,

An internal audit will be conducted on [Date/Time] at [Department/Location].  
Please prepare all necessary records and documentation for review.

Best regards.`
},
{
  id: "audit-002",
  subject: "Policy Compliance Reminder",
  category: "Compliance",
  body: `Sir / Madam,

Good day!

This is a reminder to comply with company policy on [Policy Name].  
Please review the guidelines to avoid non-compliance.

Best regards.`
},

// 🔹 Client Communication
{
  id: "cli-001",
  subject: "Client Onboarding Welcome",
  category: "Client",
  body: `Dear [Client Name],

Welcome to [Company Name].  
We are delighted to begin working with you and look forward to a successful partnership.  

Attached is your onboarding kit with all required details.

Best regards.`
},
{
  id: "cli-002",
  subject: "Service Interruption Notice",
  category: "Client",
  body: `Dear [Client Name],

Please be informed that service [Service Name] will be temporarily unavailable on [Date/Time] due to scheduled maintenance.  
We apologize for any inconvenience and appreciate your understanding.

Best regards.`
},
{
  id: "cli-003",
  subject: "Quarterly Review Invitation",
  category: "Client",
  body: `Dear [Client Name],

We would like to schedule a quarterly business review to discuss performance, feedback, and future improvements.  
Please provide your availability.

Best regards.`
},

// 🔹 Events & Announcements
{
  id: "evt-001",
  subject: "Town Hall Meeting Invitation",
  category: "Events",
  body: `Dear Team,

You are invited to attend the upcoming Town Hall Meeting on [Date/Time].  
Agenda: [List Key Points].

We look forward to your participation.

Best regards.`
},
{
  id: "evt-002",
  subject: "Company Event Announcement",
  category: "Events",
  body: `Dear Team,

We are excited to announce the upcoming [Event Name] scheduled for [Date].  
Further details will follow shortly.

Best regards.`
},

// 🔹 IT Preventive Maintenance
{
  id: "maint-001",
  subject: "Preventive Maintenance Schedule",
  category: "Maintenance",
  body: `Dear Team,

Please be informed that preventive maintenance for [System/Equipment] will take place on [Date/Time].  
Services may be intermittently unavailable during this period.

Thank you for your cooperation.`
},
{
  id: "maint-002",
  subject: "Maintenance Completion Notice",
  category: "Maintenance",
  body: `Dear Team,

The preventive maintenance for [System/Equipment] has been successfully completed.  
All systems are now operational.

Best regards.`
}

];
