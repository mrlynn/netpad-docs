# NetPad QA Quick Reference Card

> Print this or keep it open while testing

---

## Test Status Codes

| Status | When to Use |
|--------|-------------|
| ✅ **Pass** | All steps completed, expected results matched |
| ❌ **Fail** | Any step produced unexpected result → File bug |
| ⏸️ **Blocked** | Cannot proceed due to environment/dependency issue |
| ⏭️ **Skipped** | Intentionally not tested (document reason) |
| 🔄 **In Progress** | Currently being tested |

---

## Bug Severity Quick Guide

| Severity | Definition | Example |
|----------|------------|---------|
| 🔴 **Critical** | Unusable, data loss, security | Can't login, submissions lost |
| 🟠 **Major** | Feature broken, no workaround | Can't save form, workflow fails |
| 🟡 **Minor** | Broken but workaround exists | Export fails but can copy data |
| 🟢 **Trivial** | Cosmetic, typo | Button misaligned, spelling error |

---

## Evidence Checklist

When reporting a bug, always include:

- [ ] **Screenshot** - Full page with URL visible
- [ ] **Steps** - Numbered, reproducible
- [ ] **Expected vs Actual** - What should happen vs what did
- [ ] **Environment** - Browser, OS, account used
- [ ] **Console errors** - F12 → Console → copy red text
- [ ] **Network errors** - F12 → Network → failed requests

---

## Keyboard Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Open DevTools | `Cmd + Option + I` | `F12` |
| Screenshot (full) | `Cmd + Shift + 3` | `Win + Shift + S` |
| Screenshot (area) | `Cmd + Shift + 4` | `Win + Shift + S` |
| Hard refresh | `Cmd + Shift + R` | `Ctrl + Shift + R` |
| Clear cache | DevTools → Network → Right-click → Clear | Same |

---

## Test Data Standards

**Use these patterns for test data:**

| Field | Pattern | Example |
|-------|---------|---------|
| Name | `[TEST] + Name` | `[TEST] John Smith` |
| Email | `testuser+[id]@example.com` | `testuser+001@example.com` |
| Phone | `555-01XX` | `555-0123` |
| Company | `[TEST] Company` | `[TEST] Acme Corp` |

**Never use:**
- Real customer data
- Real email addresses
- Real phone numbers
- Production API keys

---

## Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| Page won't load | Hard refresh (Cmd+Shift+R), clear cache |
| Form won't save | Check for validation errors (red outlines) |
| Workflow not triggering | Verify workflow is "Active" |
| Can't see submissions | Check you have permission (Member or higher) |
| Email not received | Check spam folder, verify email config |

---

## Quick Test Paths

**Smoke Test (5 min):**
1. Login → Dashboard loads
2. Create form → Add 1 field → Save
3. Preview → Submit test data
4. View submissions → Data appears

**Form Builder (15 min):**
1. Create blank form
2. Add text, email, dropdown fields
3. Add conditional logic
4. Preview and test conditions
5. Save and publish

**Workflow (15 min):**
1. Create workflow
2. Add form trigger
3. Add email action
4. Connect and activate
5. Submit form, verify email

---

## Environment URLs

| Env | URL |
|-----|-----|
| Staging | `https://staging.netpad.io` |
| Production | `https://app.netpad.io` |
| Local | `http://localhost:3000` |

---

## Escalation Contacts

| Issue Type | Contact |
|------------|---------|
| Can't access environment | DevOps/IT |
| Requirements unclear | Product Manager |
| Technical question | Dev Lead |
| Blocked by bug | QA Lead |

---

## Daily Checklist

**Before starting:**
- [ ] Check Slack for announcements
- [ ] Verify test environment is up
- [ ] Review assigned test cases
- [ ] Check for new builds/deployments

**During testing:**
- [ ] Log results immediately
- [ ] Screenshot all failures
- [ ] File bugs as you find them
- [ ] Note any blockers

**End of day:**
- [ ] Update test tracker
- [ ] Report blockers to QA Lead
- [ ] Clean up test data if needed
- [ ] Note where you stopped

---

*Keep this card handy while testing!*
