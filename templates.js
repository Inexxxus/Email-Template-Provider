// templates.js
// Comprehensive Email Template Library for Professional Communications
// Version 2.0 - Enhanced with Industry-Specific and Cross-Departmental Templates

// Common email template constants
const EMAIL_CONSTANTS = {
  // Basic salutations
  SHORT_SALUTATION: 'Dear [Name],\n\n',
  TEAM_SALUTATION: 'Dear Team,\n\n',
  DEPARTMENT_SALUTATION: 'Dear [Department] Team,\n\n',
  
  // Basic signatures
  SHORT_SIGNATURE: '\n\nRegards,\n[Name]',
  POSITION_SIGNATURE: '\n\nRegards,\n[Name]\n[Position]',
  DEPARTMENT_SIGNATURE: '\n\nRegards,\n[Name]\n[Department]',
  FULL_SIGNATURE: '\n\nRegards,\n[Name]\n[Position]\n[Department]\n[Contact Information]'
};

/*
Category Structure:
1. 🔧 Hardware Management
   - Device Assessment
   - Replacements
   - Maintenance
   - Disposal
2. 💻 Software & Systems
   - Installation
   - Updates
   - Licensing
   - Access Management
3. 🌐 Network & Infrastructure
   - Connectivity
   - Security
   - Performance
   - Maintenance
4. 🎫 Support & Service Desk
   - Tickets
   - Incidents
   - Requests
   - Notifications
5. 📊 Reports & Assessments
   - Performance
   - Compliance
   - Audits
   - Reviews
6. 👥 HR & Personnel
   - Onboarding
   - Training
   - Equipment
   - Access
7. 💰 Finance & Procurement
   - Purchases
   - Approvals
   - Budgets
   - Assets
8. 📅 Project Management
   - Planning
   - Status
   - Meetings
   - Deliverables
9. 🔒 Security & Compliance
   - Incidents
   - Policies
   - Audits
   - Training
10. 🤝 Client Relations
    - Updates
    - Services
    - Support
    - Reviews

11. 🏭 Manufacturing
    - Quality Control
    - Production Planning
    - Inventory Management
    - Equipment Maintenance

12. 🏥 Healthcare
    - Patient Care
    - Medical Equipment
    - Compliance
    - Staff Scheduling

13. 🏦 Financial Services
    - Risk Assessment
    - Compliance Reports
    - Audit Trails
    - Client Management

14. 🛍️ Retail Operations
    - Inventory Updates
    - Store Management
    - Customer Service
    - Sales Reports

15. 🏗️ Construction Projects
    - Site Reports
    - Safety Compliance
    - Material Management
    - Progress Updates

16. 📚 Education Sector
    - Course Management
    - Student Services
    - Faculty Resources
    - Academic Planning

17. 🔬 Research & Laboratory
    - Experiment Reports
    - Lab Safety
    - Equipment Requests
    - Research Proposals

18. 🤖 Technology Innovation
    - Product Development
    - Testing Reports
    - Feature Requests
    - Release Notes

19. 🤼 Cross-Departmental
    - Project Collaboration
    - Resource Sharing
    - Joint Initiatives
    - Team Integration

20. 🌐 Global Operations
    - International Coordination
    - Cultural Adaptation
    - Regional Compliance
    - Market Entry

21. 🏠 Remote Work Management
    - Work Requests
    - Equipment Setup
    - Virtual Meetings
    - Technical Support
    - Workspace Compliance

22. 🤝 Customer Success
    - Customer Onboarding
    - Feedback Collection
    - Success Stories
    - Account Reviews
    - Service Updates

23. 📣 Marketing Campaigns
    - Campaign Approvals
    - Performance Reports
    - Content Planning
    - A/B Testing
    - Analytics Reviews

24. 📋 Vendor Management
    - Vendor Evaluation
    - Contract Management
    - Performance Reviews
    - Service Level Agreements
    - Issue Resolution

25. 🔒 Data Privacy & Compliance
    - Access Requests
    - Privacy Assessments
    - Compliance Reports
    - Data Breaches
    - Policy Updates
*/

const customTemplates = [
  // 🏭 Manufacturing Templates
  {
    id: "mfg-qc-001",
    subject: "Quality Control Alert - [Product Line]",
    category: "Manufacturing",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Quality control alert for [Product Line]:

INSPECTION DETAILS:
• Batch Number: [Batch ID]
• Production Date: [Date]
• Line Number: [Line ID]
• Inspector: [Name]

QUALITY ISSUES:
• Deviation Type: [Issue Category]
• Affected Units: [Number/Percentage]
• Severity Level: [Critical/Major/Minor]

IMMEDIATE ACTIONS:
1. Production Status: [Halted/Modified]
2. Quarantined Units: [Number]
3. Investigation Status: [In Progress]

CORRECTIVE MEASURES:
• Immediate Fix: [Action Taken]
• Root Cause Analysis: [Findings]
• Preventive Steps: [Future Actions]

Please respond with acknowledgment.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  // 🏥 Healthcare Templates
  {
    id: "health-equip-001",
    subject: "Medical Equipment Maintenance Report",
    category: "Healthcare",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Equipment maintenance report:

EQUIPMENT DETAILS:
• Device Name: [Equipment Name]
• Serial Number: [S/N]
• Department: [Location]
• Certification: [Standard/Regulation]

MAINTENANCE PERFORMED:
• Type: [Routine/Emergency]
• Procedures: [List of Tasks]
• Parts Replaced: [Components]
• Calibration: [Results]

COMPLIANCE STATUS:
• Safety Checks: [Pass/Fail]
• Regulatory Standards: [Met/Not Met]
• Next Inspection Due: [Date]

ACTION REQUIRED:
• Staff Training: [If Needed]
• Documentation: [Updates Required]
• Special Handling: [Instructions]

${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  // 🏦 Financial Services Templates
  {
    id: "fin-compliance-001",
    subject: "Regulatory Compliance Report - [Quarter]",
    category: "Financial",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Quarterly compliance status report:

REVIEW PERIOD:
• Quarter: [Q1/Q2/Q3/Q4]
• Year: [YYYY]
• Division: [Department]

COMPLIANCE METRICS:
• Audits Completed: [Number]
• Issues Identified: [Count]
• Resolution Rate: [Percentage]

KEY FINDINGS:
1. [Major Finding 1]
2. [Major Finding 2]
3. [Major Finding 3]

RISK ASSESSMENT:
• High Risk Areas: [List]
• Mitigation Plans: [Actions]
• Monitoring Status: [Updates]

RECOMMENDATIONS:
• Policy Updates: [Changes]
• Training Needs: [Requirements]
• System Updates: [Modifications]

${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  // 🔬 Research & Laboratory Templates
  {
    id: "lab-experiment-001",
    subject: "Laboratory Experiment Report - [Project ID]",
    category: "Research",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Experiment results summary:

EXPERIMENT DETAILS:
• Project ID: [Number]
• Date: [Date]
• Researcher: [Name]
• Lab Location: [Room/Building]

METHODOLOGY:
• Protocol: [Reference]
• Equipment Used: [List]
• Controls: [Description]
• Variables: [List]

RESULTS:
• Primary Findings: [Data]
• Statistical Analysis: [Summary]
• Anomalies: [If Any]

CONCLUSIONS:
• Key Outcomes: [Findings]
• Implications: [Impact]
• Next Steps: [Actions]

DATA STORAGE:
• Location: [Repository]
• Format: [File Types]
• Access: [Permissions]

${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  // 🤼 Cross-Departmental Templates
  {
    id: "cross-proj-001",
    subject: "Cross-Department Project Initiative - [Project Name]",
    category: "Cross-Departmental",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Update on cross-departmental initiative:

PROJECT OVERVIEW:
• Name: [Project Title]
• Objective: [Goal]
• Timeline: [Duration]
• Departments: [List]

RESOURCE ALLOCATION:
Department 1: [Name]
• Lead: [Person]
• Resources: [List]
• Deliverables: [Items]

Department 2: [Name]
• Lead: [Person]
• Resources: [List]
• Deliverables: [Items]

INTEGRATION POINTS:
• Workflows: [Processes]
• Systems: [Tools]
• Data Sharing: [Methods]

TIMELINE:
• Phase 1: [Milestone]
• Phase 2: [Milestone]
• Phase 3: [Milestone]

Next Meeting: [Date/Time]

${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },
  // � Hardware Management
  {
    id: "hw-assessment-001",
    subject: "Comprehensive Hardware Assessment Report - [Device Type]",
    category: "Hardware Management",
    body: `Dear [Stakeholder],

Please find below the detailed hardware assessment report.

DEVICE IDENTIFICATION:
Device Type: [Hardware Category]
Manufacturer: [Brand]
Model Name/Number: [Model]
Serial Number: [S/N]
Asset Tag: [Company Asset ID]
MAC Address: [If Applicable]
IP Address: [If Applicable]
Firmware Version: [Version]
Purchase Date: [Date]
Warranty Status: [Details]

HARDWARE SPECIFICATIONS:
1. Processing Unit:
   • CPU Model: [Details]
   • Clock Speed: [Speed]
   • Cores/Threads: [Count]
   • Temperature: [°C]

2. Memory:
   • Total RAM: [Capacity]
   • Type: [DDR4/DDR5]
   • Speed: [MHz]
   • Slots Used: [X/Y]

3. Storage:
   • Type: [SSD/HDD]
   • Capacity: [Size]
   • Health Status: [%]
   • SMART Status: [Pass/Fail]

4. Power Supply:
   • Wattage: [W]
   • Efficiency: [Rating]
   • Status: [Condition]

PERFORMANCE METRICS:
1. System Performance:
   • Boot Time: [Seconds]
   • System Score: [Benchmark]
   • Response Time: [ms]

2. Resource Utilization:
   • CPU Usage: [%]
   • Memory Usage: [%]
   • Disk Usage: [%]

3. Temperature Readings:
   • CPU: [°C]
   • GPU: [°C]
   • System: [°C]

DIAGNOSTIC RESULTS:
1. Hardware Tests:
   • Memory Test: [Pass/Fail]
   • Disk Check: [Pass/Fail]
   • Network Test: [Pass/Fail]

2. Issues Detected:
   [List of Issues with Severity]

3. Performance Bottlenecks:
   [Identified Limitations]

RECOMMENDATIONS:
1. Critical Actions:
   • [Immediate Actions Required]
   • Priority: [High/Medium/Low]
   • Timeline: [Required Completion Date]

2. Maintenance Actions:
   • [Regular Maintenance Tasks]
   • Schedule: [Proposed Timeline]

3. Upgrades Recommended:
   • Component: [Details]
   • Reason: [Justification]
   • Cost Estimate: [Amount]

COMPLIANCE & SECURITY:
• Security Status: [Pass/Fail]
• Compliance Level: [Standards Met]
• Risk Assessment: [Risk Level]

COST ANALYSIS:
1. Immediate Costs:
   • Required Parts: [List/Cost]
   • Labor: [Estimate]

2. Projected Costs:
   • Maintenance: [Annual Estimate]
   • Upgrades: [Future Requirements]

NEXT STEPS:
1. [Action Item 1]
2. [Action Item 2]
3. [Action Item 3]

APPROVALS REQUIRED:
• Department Head: [Name]
• IT Manager: [Name]
• Finance (if needed): [Name]

Assessment Performed By:
[Technician Name]
[Certification/Position]
[Contact Information]

Date of Assessment: [Date]
Next Assessment Due: [Date]

Attachments:
1. Diagnostic Reports
2. Performance Graphs
3. Cost Estimates
4. Vendor Quotations

Best regards,
[Position]
[Department]
[Contact Information]`
  },

  {
    id: "hw-assessment-short-001",
    subject: "Quick Hardware Assessment - [Device Type]",
    category: "Hardware Management",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Brief assessment summary for [Device Type]:

DEVICE INFO:
• Model: [Model Number]
• Serial: [S/N]
• Asset Tag: [ID]

KEY FINDINGS:
• Performance: [Status]
• Issues Found: [Brief List]
• Priority Level: [High/Medium/Low]

ACTION NEEDED:
• [Key Action Items]
• Timeline: [Date]

Cost Estimate: [Amount]${EMAIL_CONSTANTS.SHORT_SIGNATURE}

Best regards.`
  },

  {
    id: "hw-repair-short-001",
    subject: "Quick Repair Report - [Device Type]",
    category: "Hardware Management",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Repair completed for [Device Type].

DEVICE:
• Asset ID: [Number]
• Location: [Place]

WORK DONE:
• Issue: [Problem]
• Solution: [Fix Applied]
• Parts Used: [If Any]

Status: [Working/Pending]
Next Steps: [If Any]${EMAIL_CONSTANTS.SHORT_SIGNATURE}

Best regards.`
  },

  // 💻 Quick Software Reports
  {
    id: "sw-install-short-001",
    subject: "Software Installation Brief",
    category: "Software",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Software installation completed.

DETAILS:
• Software: [Name]
• Version: [Number]
• License: [Type]

Status: [Success/Issues]
Notes: [Any Special Instructions]${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}

Best regards.`
  },

  // 🔒 Security Briefs
  {
    id: "sec-incident-short-001",
    subject: "Security Incident Brief - [Type]",
    category: "Security",
    body: `SECURITY ALERT

Incident Type: [Description]
Time Detected: [Time]
Status: [Active/Resolved]

IMPACT:
• Systems: [Affected Systems]
• Users: [Number/Groups]

ACTIONS:
• [Immediate Steps]
• [User Instructions]

Contact [Security Team] if needed.

Regards,
Security Team`
  },

  // 📃 Quick Updates
  {
    id: "status-update-short-001",
    subject: "Quick Status - [Project/Task]",
    category: "Updates",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Quick update on [Project/Task]:

STATUS: [On Track/Delayed/Complete]

KEY POINTS:
• [Achievement/Progress]
• [Current Focus]
• [Next Steps]

Needs Attention:
[If Any]${EMAIL_CONSTANTS.SHORT_SIGNATURE}

Best regards.`
  },

  // 💰 Quick Budget
  {
    id: "budget-short-001",
    subject: "Quick Budget Request - [Item]",
    category: "Finance",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Requesting budget approval:

ITEM: [Description]
COST: [Amount]
NEED BY: [Date]

JUSTIFICATION:
[Brief Reason]

Cost Center: [Code]${EMAIL_CONSTANTS.SHORT_SIGNATURE}

Best regards.`
  },

  // 📅 Brief Meeting Notes
  {
    id: "meeting-short-001",
    subject: "Meeting Brief - [Topic]",
    category: "Meetings",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Meeting summary for [Topic]:

KEY POINTS:
• [Point 1]
• [Point 2]

ACTION ITEMS:
• [Task 1] - [Owner]
• [Task 2] - [Owner]

Next Meeting: [Date/Time]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 🎓 Quick Training
  {
    id: "training-short-001",
    subject: "Training Feedback Brief",
    category: "Training",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Feedback for [Training Name]:

ATTENDANCE: [Number]
RATING: [X/5]

KEY FEEDBACK:
• [Positive Point]
• [Area for Improvement]

Suggestions: [Brief Notes]${EMAIL_CONSTANTS.SHORT_SIGNATURE}

Best regards.`
  },

  // � Facility Management
  {
    id: "fac-maintenance-001",
    subject: "Facility Maintenance Request - [Location]",
    category: "Facility",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please address the following maintenance request:

LOCATION DETAILS:
• Building: [Building Name]
• Floor: [Floor Number]
• Room/Area: [Specific Location]
• Access Requirements: [Special Access Needed]

MAINTENANCE TYPE:
• Category: [HVAC/Electrical/Plumbing/etc.]
• Priority: [Urgent/Normal/Scheduled]
• Impact: [Number of People Affected]

ISSUE DESCRIPTION:
• Problem: [Detailed Description]
• Duration: [How Long Issue Exists]
• Safety Concern: [Yes/No]

PREFERRED TIMING:
• Requested Date: [Date]
• Business Hours Impact: [Yes/No]
• Coordination Needed: [Departments]

Contact Person:
[Name]
[Department]
[Phone/Extension]

Regards,`
  },

  // 🏠 Remote Work Management
  {
    id: "remote-request-001",
    subject: "Remote Work Request - [Start Date]",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}I would like to request remote work arrangements:

REQUEST DETAILS:
• Duration: [Temporary/Permanent]
• Start Date: [Date]
• End Date: [If Temporary]
• Work Hours: [Time Zone & Hours]

EQUIPMENT NEEDS:
• Hardware: [List Required]
• Software: [List Required]
• Network: [VPN/Special Access]

WORK PLAN:
• Daily Tasks: [Key Responsibilities]
• Communication: [Tools & Schedule]
• Team Meetings: [Regular Times]

JUSTIFICATION:
[Brief Explanation]

Manager: [Name]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "remote-setup-001",
    subject: "Remote Workspace Setup Verification",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Please confirm your remote workspace setup:

WORKSPACE CHECKLIST:
• Dedicated Work Area: [Yes/No]
• Ergonomic Setup: [Yes/No]
• Adequate Lighting: [Yes/No]
• Internet Speed: [Mbps]

EQUIPMENT STATUS:
• Computer: [Model/Specs]
• Monitor: [Size/Resolution]
• Peripherals: [List]
• Software: [Installed/Needed]

NETWORK SETUP:
• Internet Provider: [Name]
• Backup Connection: [Available/None]
• VPN Tested: [Yes/No]
• Video Call Quality: [Good/Issues]

SECURITY MEASURES:
• Secure WiFi: [Yes/No]
• Password Policy: [Confirmed]
• Data Protection: [Measures]

Any issues or needs:${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "virtual-meeting-001",
    subject: "Virtual Team Meeting - [Topic]",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Details for our upcoming virtual team meeting:

MEETING INFO:
• Date: [Date]
• Time: [Time with TimeZone]
• Duration: [Length]
• Platform: [Tool Name]

ACCESS DETAILS:
• Link: [Meeting URL]
• Meeting ID: [ID]
• Password: [If Required]
• Dial-in: [Numbers]

AGENDA:
1. [Topic 1] - [Duration]
2. [Topic 2] - [Duration]
3. [Topic 3] - [Duration]

PREPARATION:
• Review: [Documents]
• Prepare: [Requirements]
• Test: [Tech Check]

Notes:
- Please join 5 minutes early
- Keep microphone muted when not speaking
- Use headphones if possible${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "customer-onboarding-001",
    subject: "Welcome to [Company Name] - Getting Started",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Welcome to [Company Name]! We're excited to have you on board.

NEXT STEPS:
1. Account Setup
   • Username: [Details]
   • Initial Password: [If Applicable]
   • Access Portal: [URL]

2. Implementation Timeline
   • Kickoff Call: [Date/Time]
   • Training Sessions: [Dates]
   • Go-Live Date: [Target]

3. Resources
   • Quick Start Guide: [Link]
   • Knowledge Base: [Link]
   • Support Portal: [Link]

YOUR TEAM:
• Account Manager: [Name]
• Technical Support: [Contact]
• Implementation Lead: [Name]

Please don't hesitate to reach out with any questions!${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "customer-feedback-001",
    subject: "Your Feedback Matters - [Product/Service] Review",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We value your experience with [Product/Service] and would appreciate your feedback:

QUICK REVIEW:
• Overall Satisfaction: [1-5 Stars]
• Ease of Use: [1-5 Stars]
• Value for Money: [1-5 Stars]

SPECIFIC FEEDBACK:
1. What do you like most?
   [Response]

2. What could be improved?
   [Response]

3. Additional Features Desired:
   [Suggestions]

USAGE EXPERIENCE:
• Primary Use Case: [Description]
• Time Using Product: [Duration]
• Key Benefits: [List]

Your feedback helps us improve our service!

Take our detailed survey: [Survey Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "success-story-001",
    subject: "Share Your Success Story with [Company Name]",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We'd love to feature your success with [Product/Service]:

SUCCESS HIGHLIGHTS:
• Challenge Solved: [Description]
• Solution Used: [Features]
• Results Achieved: [Metrics]

STORY DETAILS:
1. Background
   [Company Context]

2. Implementation
   [Process Overview]

3. Outcomes
   • Quantitative: [Numbers]
   • Qualitative: [Benefits]

PERMISSIONS:
• Case Study Use: [Yes/No]
• Quote Attribution: [Yes/No]
• Logo Usage: [Yes/No]

We'll send you a draft for review before publishing.${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "campaign-approval-001",
    subject: "Marketing Campaign Approval Request - [Campaign Name]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Please review and approve the following marketing campaign:

CAMPAIGN OVERVIEW:
• Name: [Campaign Name]
• Type: [Email/Social/PPC/etc.]
• Duration: [Timeline]
• Budget: [Amount]

TARGET AUDIENCE:
• Demographics: [Details]
• Segments: [List]
• Expected Reach: [Number]

CREATIVE ASSETS:
• Landing Pages: [URLs]
• Email Templates: [Links]
• Ad Creatives: [Links]
• Social Posts: [Links]

SUCCESS METRICS:
• Primary KPI: [Metric]
• Secondary KPIs: [List]
• Benchmark Goals: [Targets]

Timeline for approval needed: [Date]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "campaign-performance-001",
    subject: "Marketing Campaign Performance Report - [Campaign Name]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Here's the performance report for [Campaign Name]:

CAMPAIGN METRICS:
• Impressions: [Number]
• Engagement: [Rate]
• Conversions: [Number]
• ROI: [Percentage]

CHANNEL PERFORMANCE:
1. Email Marketing
   • Open Rate: [%]
   • Click Rate: [%]
   • Conversion: [%]

2. Social Media
   • Reach: [Number]
   • Engagement: [Rate]
   • Clicks: [Number]

3. Paid Advertising
   • Spend: [Amount]
   • CPC: [Cost]
   • CTR: [Rate]

KEY INSIGHTS:
• Top Performing: [Elements]
• Areas for Improvement: [List]
• Recommendations: [Actions]

Full report: [Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "content-plan-001",
    subject: "Content Calendar Review - [Month/Quarter]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Please review our content plan for [Period]:

CONTENT SCHEDULE:
Week 1:
• Blog: [Topic] - [Due Date]
• Social: [Topics] - [Platforms]
• Email: [Campaign] - [Send Date]

Week 2:
• Blog: [Topic] - [Due Date]
• Social: [Topics] - [Platforms]
• Email: [Campaign] - [Send Date]

RESOURCE NEEDS:
• Writers: [Names]
• Designers: [Names]
• Reviewers: [Names]

THEMES & MESSAGING:
• Key Topics: [List]
• Target Keywords: [List]
• Call-to-Actions: [List]

Please provide feedback by: [Date]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "vendor-eval-001",
    subject: "Vendor Evaluation Report - [Vendor Name]",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Here's the evaluation report for [Vendor Name]:

VENDOR DETAILS:
• Company: [Name]
• Service: [Type]
• Contract Value: [Amount]
• Relationship Duration: [Time]

PERFORMANCE METRICS:
1. Service Quality
   • Reliability: [Score/5]
   • Response Time: [Score/5]
   • Issue Resolution: [Score/5]

2. Business Terms
   • Cost Efficiency: [Score/5]
   • Payment Terms: [Score/5]
   • Contract Flexibility: [Score/5]

3. Communication
   • Responsiveness: [Score/5]
   • Reporting: [Score/5]
   • Account Management: [Score/5]

COMPLIANCE & RISK:
• Security Standards: [Met/Not Met]
• Insurance Coverage: [Status]
• Regulatory Compliance: [Status]

RECOMMENDATION:
• Continue/Modify/Terminate
• Action Items: [List]
• Timeline: [Dates]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "contract-renewal-001",
    subject: "Contract Renewal Review - [Vendor Name]",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Regarding the upcoming contract renewal with [Vendor Name]:

CONTRACT DETAILS:
• Current End Date: [Date]
• Renewal Deadline: [Date]
• Current Terms: [Summary]

PROPOSED CHANGES:
1. Service Level
   • Current: [Details]
   • Proposed: [Details]

2. Pricing
   • Current: [Amount]
   • Proposed: [Amount]

3. Terms
   • Duration: [Length]
   • Payment Terms: [Details]
   • Special Conditions: [List]

BUSINESS IMPACT:
• Cost Analysis: [Details]
• Service Impact: [Assessment]
• Risk Factors: [List]

Please review and approve by: [Date]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "vendor-issue-001",
    subject: "Vendor Service Issue Report - [Issue Type]",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We need to address the following service issue:

ISSUE DETAILS:
• Type: [Category]
• Severity: [Level]
• Start Date: [Date]
• Status: [Current State]

IMPACT ASSESSMENT:
• Business Impact: [Description]
• Affected Users: [Number]
• Workarounds: [If Any]

SLA REQUIREMENTS:
• Response Time: [Target]
• Resolution Time: [Target]
• Current Status: [Progress]

REQUESTED ACTION:
1. [Immediate Action]
2. [Follow-up Steps]
3. [Prevention Plan]

Please acknowledge and provide ETA for resolution.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "data-access-001",
    subject: "Data Access Request - [Request Type]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please process the following data access request:

REQUEST DETAILS:
• Type: [Access/Deletion/Correction]
• Requestor: [Name]
• ID Verification: [Status]
• Deadline: [Date]

DATA SCOPE:
• Systems: [List]
• Data Types: [Categories]
• Date Range: [Period]

VERIFICATION STEPS:
1. Identity Confirmed: [Yes/No]
2. Request Validity: [Verified]
3. Legal Basis: [Justification]

ACTION REQUIRED:
• Data Extraction: [Team]
• Review Process: [Steps]
• Delivery Method: [Format]

Please acknowledge receipt and confirm timeline.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "privacy-assessment-001",
    subject: "Privacy Impact Assessment - [Project Name]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Results of the Privacy Impact Assessment for [Project]:

PROJECT OVERVIEW:
• Name: [Project Title]
• Scope: [Description]
• Data Types: [Categories]
• Processing Purpose: [Explanation]

RISK ASSESSMENT:
1. Data Collection
   • Necessity: [Justified/Not]
   • Minimization: [Measures]
   • Consent: [Method]

2. Data Processing
   • Security: [Controls]
   • Access: [Restrictions]
   • Retention: [Period]

3. Data Sharing
   • Recipients: [List]
   • Safeguards: [Measures]
   • Agreements: [Status]

RECOMMENDATIONS:
1. [Key Finding 1]
2. [Key Finding 2]
3. [Key Finding 3]

Required Actions: [List]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "compliance-report-001",
    subject: "Data Privacy Compliance Report - [Period]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Compliance status report for [Period]:

COMPLIANCE OVERVIEW:
• Framework: [Standards]
• Audit Period: [Dates]
• Overall Status: [Rating]

KEY METRICS:
• Privacy Incidents: [Number]
• Access Requests: [Count]
• Response Time: [Average]

ASSESSMENT AREAS:
1. Policy Compliance
   • Documentation: [Status]
   • Training: [Completion %]
   • Reviews: [Frequency]

2. Technical Controls
   • Encryption: [Status]
   • Access Control: [Effectiveness]
   • Monitoring: [Coverage]

3. Third-Party Risk
   • Vendor Reviews: [Status]
   • Contract Updates: [Needed]
   • Due Diligence: [Completed]

ACTIONS REQUIRED:
1. [Priority Action 1]
2. [Priority Action 2]
3. [Priority Action 3]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "breach-notification-001",
    subject: "Data Breach Incident Report - [Severity Level]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Notification of a data breach incident:

INCIDENT DETAILS:
• Detection Date: [Date/Time]
• Breach Type: [Category]
• Affected Data: [Types]
• Impact Scope: [Number/Scale]

IMMEDIATE ACTIONS:
1. Containment
   • Status: [Contained/Ongoing]
   • Methods: [Actions Taken]
   • Timeline: [Updates]

2. Investigation
   • Root Cause: [Findings]
   • Vulnerabilities: [Identified]
   • Evidence: [Collected]

IMPACT ASSESSMENT:
• Data Sensitivity: [Level]
• Affected Parties: [Groups]
• Risk Level: [Rating]

NOTIFICATION REQUIREMENTS:
• Regulators: [Due Date]
• Individuals: [Timeline]
• Third Parties: [List]

Response Plan:
1. [Immediate Step]
2. [Short-term Action]
3. [Long-term Prevention]

URGENT: Respond with acknowledgment${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "vendor-review-001",
    subject: "Quarterly Vendor Performance Review",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Performance review for Q[X] [Year]:

SERVICE METRICS:
• Uptime: [Percentage]
• Response Times: [Average]
• Issue Resolution: [Rate]

FINANCIAL PERFORMANCE:
• Budget Adherence: [Status]
• Cost Savings: [Amount]
• Invoice Accuracy: [Rate]

RELATIONSHIP STATUS:
• Communication: [Rating]
• Innovation: [Examples]
• Partnership Value: [Assessment]

ACTION ITEMS:
1. [Improvement Area 1]
2. [Improvement Area 2]
3. [Improvement Area 3]

Next Review Date: [Date]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "ab-test-001",
    subject: "A/B Test Results - [Test Name]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Results from our recent A/B test:

TEST OVERVIEW:
• Element Tested: [Component]
• Variants: A vs B
• Duration: [Time Period]
• Sample Size: [Number]

RESULTS:
Variant A:
• Conversion Rate: [%]
• Engagement: [Metrics]
• Key Metrics: [List]

Variant B:
• Conversion Rate: [%]
• Engagement: [Metrics]
• Key Metrics: [List]

STATISTICAL SIGNIFICANCE:
• Confidence Level: [%]
• Lift: [Percentage]
• P-Value: [Number]

RECOMMENDATIONS:
• Winner: [A/B]
• Implementation: [Plan]
• Next Tests: [Ideas]

Detailed report: [Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "account-review-001",
    subject: "Quarterly Account Review - [Company Name]",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Let's review your account performance for [Quarter/Year]:

USAGE METRICS:
• Active Users: [Number]
• Feature Adoption: [Percentage]
• Support Tickets: [Number]

KEY ACHIEVEMENTS:
1. [Achievement 1]
2. [Achievement 2]
3. [Achievement 3]

OPPORTUNITIES:
• Unused Features: [List]
• Expansion Areas: [Possibilities]
• Training Needs: [Topics]

NEXT STEPS:
1. Review Meeting: [Proposed Date/Time]
2. Action Items: [List]
3. Goals for Next Quarter: [Objectives]

Please confirm your availability for the review call.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "remote-issue-001",
    subject: "Remote Work Technical Issue Report",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}I am experiencing technical issues while working remotely:

ISSUE DETAILS:
• Type: [Connection/Hardware/Software]
• Started: [Time/Date]
• Frequency: [Constant/Intermittent]
• Impact: [Work Effect]

TROUBLESHOOTING DONE:
• Steps Taken: [List Actions]
• Results: [Outcomes]
• Current Status: [State]

SYSTEM INFO:
• Device: [Details]
• Software: [Versions]
• Connection: [Speed/Type]

URGENCY:
[Impact Level]

Available for troubleshooting:${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  // 📱 Mobile Device Management
  {
    id: "mdm-001",
    subject: "Mobile Device Registration - [Device Type]",
    category: "MDM",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please register the following mobile device:

DEVICE INFORMATION:
• Type: [Smartphone/Tablet]
• Make: [Manufacturer]
• Model: [Model Name]
• IMEI: [Number]
• Phone Number: [If Applicable]

USER DETAILS:
• Name: [Employee Name]
• Department: [Department]
• Position: [Job Title]
• Employee ID: [Number]

ACCESS REQUIREMENTS:
• Email Configuration: [Yes/No]
• VPN Access: [Yes/No]
• Corporate Apps: [List Required Apps]

SECURITY SETTINGS:
• Password Policy: [Standard/Enhanced]
• Data Encryption: [Required/Optional]
• Remote Wipe: [Enabled/Disabled]

Regards,`
  },

  // 🌐 Cloud Services Management
  {
    id: "cloud-access-001",
    subject: "Cloud Service Access Request",
    category: "Cloud",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Requesting access to cloud services:

SERVICE DETAILS:
• Platform: [AWS/Azure/GCP/etc.]
• Service Type: [Compute/Storage/Database]
• Environment: [Dev/Test/Prod]

USER INFORMATION:
• Name: [Employee Name]
• Role: [Job Function]
• Project: [Project Name]
• Duration: [Access Period]

ACCESS LEVEL:
• Permission Type: [Read/Write/Admin]
• Resource Groups: [List]
• Special Privileges: [If Any]

BUSINESS JUSTIFICATION:
[Explain Need]

Cost Center: [Code]
Manager Approval: [Name]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  // 🔬 Research & Development
  {
    id: "rd-project-001",
    subject: "R&D Project Proposal",
    category: "R&D",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Project proposal details below:

PROJECT OVERVIEW:
• Name: [Project Name]
• Category: [Technology Area]
• Duration: [Timeframe]
• Team Size: [Number]

OBJECTIVES:
1. [Primary Goal]
2. [Secondary Goals]
3. [Expected Outcomes]

RESOURCE REQUIREMENTS:
• Budget: [Estimated Cost]
• Equipment: [Required Tools]
• Software: [Required Licenses]
• Personnel: [Skills Needed]

TIMELINE:
• Start Date: [Date]
• Key Milestones: [List]
• Completion: [Target Date]

ROI PROJECTION:
• Expected Benefits: [List]
• Market Impact: [Analysis]
• Risk Assessment: [Factors]

Best regards.
${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🎮 Digital Media & Content
  {
    id: "content-req-001",
    subject: "Digital Content Request",
    category: "Media",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Content creation request details:

PROJECT DETAILS:
• Content Type: [Video/Graphics/Animation]
• Purpose: [Marketing/Training/Internal]
• Target Audience: [Specify]
• Platform: [Where Content Will Be Used]

SPECIFICATIONS:
• Format: [File Type]
• Dimensions: [Size]
• Duration: [If Video/Animation]
• Brand Guidelines: [Reference]

KEY MESSAGES:
• Primary Message: [Main Point]
• Secondary Points: [List]
• Call to Action: [Specify]

TIMELINE:
• Draft Needed: [Date]
• Final Delivery: [Date]
• Review Cycles: [Number]

Regards,`
  },

  // 🤖 Automation & Workflows
  {
    id: "auto-req-001",
    subject: "Process Automation Request",
    category: "Automation",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Request for process automation:

PROCESS DETAILS:
• Current Process: [Description]
• Frequency: [Daily/Weekly/Monthly]
• Volume: [Transactions/Period]
• Current Time Spent: [Hours]

REQUIREMENTS:
• Inputs: [Data Sources]
• Processing: [Logic/Rules]
• Outputs: [Expected Results]
• Integration: [Systems Involved]

BUSINESS IMPACT:
• Time Saving: [Estimated Hours]
• Cost Saving: [Amount]
• Quality Improvement: [Metrics]
• Risk Reduction: [Factors]

STAKEHOLDERS:
• Process Owner: [Name]
• End Users: [Groups]
• Systems Team: [Contact]

Regards,`
  },

  // 📊 Data Analytics
  {
    id: "data-req-001",
    subject: "Data Analysis Request",
    category: "Analytics",
    body: `Dear Analytics Team,

Requesting data analysis support:

ANALYSIS REQUIREMENTS:
• Data Source: [Systems/Files]
• Time Period: [Date Range]
• Metrics: [KPIs]
• Segmentation: [Categories]

OBJECTIVES:
• Primary Question: [Main Analysis Goal]
• Secondary Areas: [Additional Insights]
• Decision Support: [How Will This Be Used]

OUTPUT FORMAT:
• Report Type: [Dashboard/Report/Raw Data]
• Visualization: [Charts/Graphs Needed]
• Delivery Method: [Platform/Format]
• Update Frequency: [One-time/Recurring]

TIMELINE:
• Required By: [Date]
• Milestone Reviews: [Checkpoints]

Regards,`
  },

  // 🔐 Identity & Access Management
  {
    id: "iam-req-001",
    subject: "Access Rights Modification",
    category: "IAM",
    body: `Dear IAM Team,

Request for access rights modification:

USER DETAILS:
• Name: [Employee Name]
• ID: [Employee Number]
• Department: [Department]
• Role: [Job Title]

ACCESS CHANGES:
• Systems: [List Applications]
• Permission Level: [Read/Write/Admin]
• Duration: [Temporary/Permanent]
• Effective Date: [Start Date]

JUSTIFICATION:
• Business Need: [Explanation]
• Project: [If Applicable]
• Manager Approval: [Name]

SECURITY REQUIREMENTS:
• Data Classification: [Level]
• Compliance: [Standards]
• Training Required: [Yes/No]

Regards,`
  },

  // 🎓 Learning & Development
  {
    id: "learning-req-001",
    subject: "Training Program Request",
    category: "Learning",
    body: `Dear L&D Team,

Request for training program:

TRAINING NEEDS:
• Topic: [Subject Area]
• Level: [Basic/Intermediate/Advanced]
• Target Audience: [Roles/Departments]
• Number of Participants: [Count]

PROGRAM DETAILS:
• Format: [Online/Classroom/Hybrid]
• Duration: [Length]
• Preferred Dates: [Timeline]
• Location: [If Physical]

LEARNING OBJECTIVES:
• Primary Skills: [List]
• Secondary Skills: [List]
• Certification: [If Required]

BUDGET:
• Cost Per Person: [Amount]
• Total Budget: [Amount]
• Cost Center: [Code]

Regards,`
  },

  // �🎫 Support & Ticketing
  {
    id: "sup-001",
    subject: "IT Support Ticket Acknowledgment - #[ID]",
    category: "Support",
    body: `Dear [Name],

Ticket #[ID] has been created for your support request.

TICKET DETAILS:
Priority: [Priority Level]
Category: [Issue Category]
Assigned To: [Team/Agent]
Response Time: [Expected Time]

NEXT STEPS:
1. Case review within [Response Time]
2. Status updates via email
3. Track at [Portal URL]

Urgent matters: [Emergency Contact]

Best regards.
[Signature]
[Title]
[Department]`
  },
  {
    id: "sup-002",
    subject: "IT Support Ticket Resolution - #[ID]",
    category: "Support",
    body: `Dear [Name],

Your support ticket #[ID] has been successfully resolved.

RESOLUTION DETAILS:
Issue: [Brief Description]
Resolution: [Solution Implemented]
Resolved By: [Agent Name]
Resolved Date: [Date]

ACTION REQUIRED:
Please verify that the solution meets your requirements. If you encounter any further issues:
1. Respond to this email within 48 hours
2. Create a new ticket referencing #[ID]
3. Contact your assigned support agent directly

FEEDBACK:
Your feedback helps us improve. Please take a moment to rate our service:
[Feedback Link]

Thank you for your cooperation.

Best regards.
${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}
`
  },
  {
    id: "sup-003",
    subject: "ALERT: System Outage Notification - [Service Name]",
    category: "Support",
    body: `Dear [Department/Team],

INCIDENT ALERT: We are currently experiencing a system outage.

INCIDENT DETAILS:
Service Affected: [Service Name]
Start Time: [Timestamp]
Estimated Recovery: [ETA]
Impact Level: [Severity]
Affected Areas: [List of Affected Systems/Regions]

CURRENT STATUS:
• Issue: [Brief Description of the Problem]
• Impact: [Business Impact Description]
• Resolution: Our engineering team is actively working on restoration

WORKAROUND:
[If Available, Provide Alternative Methods/Systems]

NEXT UPDATE:
The next status update will be provided by [Time] or sooner if there are significant developments.

For critical issues during this outage, please contact:
Emergency Support: [Emergency Contact]
Incident Manager: [Name/Contact]

We appreciate your patience and understanding.

Regards,`
  },

  // � Hardware Management
  {
    id: "hw-replacement-001",
    subject: "Hardware Replacement Request - [Device Type] - [Location]",
    category: "Hardware Management",
    body: `Dear [IT Manager/Procurement Team],

This is a formal request for hardware replacement based on our recent assessment.

DEVICE DETAILS:
Type: [Device Type]
Manufacturer: [Brand]
Model: [Model Number]
Serial Number: [S/N]
Asset Tag: [Company Asset ID]
Purchase Date: [Date]
Warranty Status: [In/Out of Warranty]
Location: [Building/Floor/Department]
User: [Employee Name/ID]

CURRENT SPECIFICATIONS:
• Processor: [CPU Details]
• Memory: [RAM Details]
• Storage: [Storage Details]
• Other Components: [Relevant Specs]

ISSUE ASSESSMENT:
• Primary Issue: [Brief Description]
• Diagnostic Results: [Test Findings]
• Performance Metrics: [Relevant Data]
• Impact Level: [High/Medium/Low]

REPLACEMENT JUSTIFICATION:
1. [Technical Reason]
2. [Business Impact]
3. [Cost Implications]

REQUESTED SPECIFICATIONS:
• Recommended Model: [New Device Model]
• Estimated Cost: [Amount]
• Priority Level: [Urgent/Normal/Low]
• Required Features: [List Key Requirements]

PROCUREMENT DETAILS:
Cost Center: [Code]
Budget Category: [Category]
Preferred Vendor: [If Any]
Quotation Reference: [If Available]

TIMELINE:
• Request Date: [Current Date]
• Required By: [Target Date]
• Business Justification: [Explain Urgency if Applicable]

ADDITIONAL NOTES:
• Data Migration Required: [Yes/No]
• Special Requirements: [Any Specific Needs]
• User Downtime Plan: [Mitigation Strategy]

APPROVALS REQUIRED:
1. Department Head: [Name]
2. IT Manager: [Name]
3. Finance (if above [threshold]): [Name]

Please review and provide your approval for this replacement request.

Best regards,
[Name]
[Position]
[Department]
[Contact Information]

Attachments:
1. Assessment Report
2. Cost Analysis
3. Vendor Quotations
4. Performance Logs`

  },

  // �🔹 IT Hardware Assessments
  {
    id: "hw-001",
    subject: "Battery Health Assessment Report - [Device ID]",
    category: "IT",
    body: `Dear [Stakeholder Name],

This report details the battery health assessment conducted on [Date].

DEVICE INFORMATION:
User: [Employee Name]
Department: [Department]
Device ID: [PC1234]
Model: [Device Model]

BATTERY SPECIFICATIONS:
Type: [Internal/External]
Serial Number: [SN1234]
Product Number: [PN1234]
FRU Part#: [FRU1234]
Original Capacity: [X] mAh

DIAGNOSTIC RESULTS:
• Current Capacity: [X] mAh
• Health Percentage: [X]%
• Charge Cycles: [X]
• Wear Level: [Normal/High]

ANALYSIS:
The battery is operating at [X]% of its original capacity, [above/below] the recommended 70% threshold.

RECOMMENDATIONS:
1. [Immediate/Scheduled] replacement required
2. Estimated replacement cost: [Amount]
3. Procurement reference: [REQ-XXX]

NEXT STEPS:
1. [Action Item 1]
2. [Action Item 2]
3. Schedule: [Timeline]

For procurement processing, please reference this report number: [Report-ID]

Best regards.
${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}
[Company Name]`
  },
  {
    id: "hw-002",
    subject: "Printer Assessment & Disposal Recommendation",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please find below an assessment regarding the printer at [Department Name].  

Findings:  
- Initially diagnosed with faulty power supply.  
- Replaced but failed again within three weeks.  
- Signs of end-of-life hardware condition.  

RESOLUTION:
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

This is to report a hardware failure on the following PC:
[PC Details]

Best regards.`
  },
  
  {
    id: "hw-004",
    subject: "Drive Assessment Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please see below the assessment for Drive123:

MODEL: [Insert Drive Model]
SERIAL: [Insert Serial Number]
SIZE: [Insert Drive Capacity]

IT RESOLUTION:
- Conducted comprehensive drive diagnostic tests
- Verified drive health status and SMART attributes
- Performed data integrity checks
- Tested read/write speeds and access times
- Evaluated physical condition of the drive

RECOMMENDATIONS:
- Based on the diagnostic results, [state if drive needs replacement or can continue use]
- [Add any specific maintenance tasks required]
- [Include backup recommendations if applicable]
- [Specify any performance optimization suggestions]
- [Note any warranty/support status]

Please let us know if you need any clarification or have additional questions.

Best regards,`
  },

  {
    id: "hw-005",
    subject: "Network Equipment Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please find below the assessment for the network equipment:

DEVICE TYPE: [Switch/Router/Access Point]
MODEL: [Device Model]
SERIAL: [Serial Number]
LOCATION: [Building/Floor/Department]

IT RESOLUTION:
- Performed network connectivity tests
- Checked port status and throughput
- Verified firmware version and updates
- Analyzed error logs and performance metrics
- Tested failover capabilities

RECOMMENDATIONS:
- [Specify if upgrade/replacement needed]
- [List configuration changes required]
- [Note any security concerns]
- [Suggest performance optimizations]
- [Include maintenance schedule]

Best regards,`
  },

  {
    id: "hw-006",
    subject: "Server Assessment Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

Below is the assessment report for the server:

SERVER INFO:
Model: [Server Model]
Serial: [Serial Number]
Role: [Application/Database/Web/etc.]
Location: [Data Center/Rack]

IT RESOLUTION:
- Conducted full system diagnostics
- Checked storage array status
- Verified backup systems
- Analyzed performance metrics
- Reviewed security protocols

RECOMMENDATIONS:
- [Hardware upgrade requirements]
- [Software/OS updates needed]
- [Capacity planning suggestions]
- [Backup strategy improvements]
- [Security enhancement recommendations]

Best regards,`
  },

  {
    id: "hw-007",
    subject: "UPS System Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please see below the UPS system assessment results:

UNIT DETAILS:
Model: [UPS Model]
Serial: [Serial Number]
Capacity: [kVA Rating]
Location: [Installation Site]

IT RESOLUTION:
- Tested battery condition
- Checked charging system
- Verified load distribution
- Conducted runtime test
- Inspected physical connections

RECOMMENDATIONS:
- [Battery replacement timeline]
- [Load balancing suggestions]
- [Maintenance schedule updates]
- [Capacity upgrade needs]
- [Environmental improvements]

Best regards,`
  },

  {
    id: "hw-008",
    subject: "Laptop Fleet Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is a fleet assessment report for department laptops:

ASSESSMENT SCOPE:
Department: [Department Name]
Number of Units: [Count]
Models Covered: [List of Models]

IT RESOLUTION:
- Performed hardware diagnostics
- Checked battery health
- Verified OS/Software versions
- Assessed security compliance
- Reviewed warranty status

RECOMMENDATIONS:
- [Units requiring replacement]
- [Upgrade recommendations]
- [Standardization suggestions]
- [Security improvements]
- [Procurement timeline]

Best regards,`
  },

  {
    id: "hw-009",
    subject: "Data Center Cooling Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

Below is the assessment of the data center cooling system:

SYSTEM DETAILS:
Type: [CRAC/CRAH/In-Row]
Model: [Cooling Unit Model]
Coverage: [Room/Row/Rack]
Current Load: [Percentage/BTU]

IT RESOLUTION:
- Monitored temperature distribution
- Checked airflow patterns
- Verified humidity levels
- Assessed power efficiency
- Reviewed redundancy systems

RECOMMENDATIONS:
- [Cooling optimization steps]
- [Maintenance requirements]
- [Energy efficiency improvements]
- [Capacity planning suggestions]
- [Emergency procedure updates]

Best regards`
  },

  {
    id: "hw-010",
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
    subject: "Server Performance Assessment Report - [Server ID]",
    category: "IT",
    body: `Dear [IT Manager/Stakeholder],

This report summarizes the comprehensive assessment of server [Server Name] conducted on [Date].

SERVER SPECIFICATIONS:
Hostname: [Server Name]
Role: [Primary/Backup/Development]
Location: [Data Center/Rack ID]
OS: [Operating System/Version]

PERFORMANCE METRICS:
1. CPU Utilization:
   • Average: [X]%
   • Peak: [X]%
   • Critical Threshold: [X]%

2. Memory Usage:
   • Total: [X] GB
   • Average Used: [X]%
   • Peak Used: [X]%

3. Storage Analysis:
   • Total Capacity: [X] TB
   • Used Space: [X]%
   • Growth Rate: [X]% per month

4. Network Performance:
   • Average Bandwidth: [X] Mbps
   • Peak Traffic: [X] Mbps

CRITICAL FINDINGS:
1. [Performance Issue 1]
2. [Performance Issue 2]
3. [Risk Assessment]

RECOMMENDATIONS:
1. Immediate Actions:
   • [Action Item 1]
   • [Action Item 2]

2. Short-term Improvements:
   • [Improvement 1]
   • [Improvement 2]

3. Long-term Planning:
   • [Strategic Plan 1]
   • [Strategic Plan 2]

BUDGET IMPLICATIONS:
• Estimated Costs: [Amount]
• Priority Level: [High/Medium/Low]
• ROI Analysis: [Details]

NEXT STEPS:
1. Review recommendations by [Date]
2. Approve action items
3. Schedule implementation

Please review and provide your approval for the recommended actions.

Best regards.
${EMAIL_CONSTANTS.POSITION_SIGNATURE}
[IT Infrastructure Team]
[Company Name]`
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

Thank you.
Best regards.`
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

Your request to change the password for account [User] has been approved and completed.  
If you did not initiate this change, please notify IT support immediately.

Best regards.`
  },
  {
    id: "acc-002",
    subject: "Temporary Password Issued",
    body: `Sir / Madam,

Good day!

A temporary password has been issued for your account [User].  
Temporary Password: [Password]

Please log in and update your password at the earliest convenience.  

Best regards.`
  },
  {
    id: "acc-003",
    subject: "Account Lockout Notification",
    body: `Sir / Madam,

Good day!

The account [User] has been locked after multiple failed login attempts.  

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

Unusual login activity was detected on your account [User].  

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

Thank you for your cooperation.
Best regards.`
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

Thank you for your cooperation.
Best regards.`

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
