# Bug Report Template

> Copy this template when filing new bugs

---

## Bug Report

**Title:** [Short, descriptive summary - e.g., "Form builder crashes when adding 20+ fields"]

### Classification

| Field | Value |
|-------|-------|
| **Severity** | [ ] Critical [ ] Major [ ] Minor [ ] Trivial |
| **Module** | [ ] Forms [ ] Workflows [ ] Data [ ] AI [ ] Auth [ ] Other: ___ |
| **Found in Test Case** | TC-___-___ |
| **Reproducibility** | [ ] Always [ ] Sometimes [ ] Rarely [ ] Once |

---

### Environment

| Field | Value |
|-------|-------|
| **URL** | |
| **Browser** | |
| **Browser Version** | |
| **Operating System** | |
| **Screen Resolution** | |
| **Test Account Used** | |
| **Date/Time** | |

---

### Steps to Reproduce

1. 
2. 
3. 
4. 
5. 

---

### Expected Result

[What should have happened]

---

### Actual Result

[What actually happened]

---

### Evidence

**Screenshots:**
- [ ] Attached screenshot of the error
- [ ] Attached screenshot showing steps

**Screen Recording:**
- [ ] Attached video (if helpful)

**Console Errors:**
```
[Paste any browser console errors here]
```

**Network Errors:**
```
[Paste any failed API requests here]
```

---

### Additional Context

**Workaround available?**
[ ] Yes - describe: _______________
[ ] No

**Related bugs:**
- 

**Additional notes:**


---

### For Dev Team (leave blank)

| Field | Value |
|-------|-------|
| Assigned To | |
| Sprint | |
| Root Cause | |
| Fix Branch | |
| Verified Fix | |

---

## Severity Guide

| Level | When to Use |
|-------|-------------|
| **Critical** | System unusable, data loss, security vulnerability, blocks all users |
| **Major** | Important feature completely broken, no workaround, blocks common workflow |
| **Minor** | Feature impaired but workaround exists, affects subset of users |
| **Trivial** | Cosmetic issue, typo, minor UI imperfection |

## Good Bug Title Examples

❌ Bad: "Form doesn't work"
✅ Good: "Form submission fails with 500 error when file upload exceeds 5MB"

❌ Bad: "Workflow broken"
✅ Good: "Email workflow sends duplicate notifications when condition has AND logic"

❌ Bad: "UI issue"
✅ Good: "Dropdown options overflow container on mobile viewport (375px width)"
