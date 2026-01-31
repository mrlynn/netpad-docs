---
sidebar_position: 1
title: RBAC & Access Control
description: Manage users, groups, roles, and permissions
---

# RBAC & Access Control

NetPad provides a comprehensive Role-Based Access Control (RBAC) system for managing who can access what within your organization.

## Overview

The RBAC system consists of four components:

| Component | Description |
|-----------|-------------|
| **Users** | Organization members with individual access |
| **Groups** | Collections of users for bulk role assignment |
| **Roles** | Predefined or custom permission sets |
| **Permissions** | Specific actions users can perform |

---

## Users

### Adding Users

**Via Web UI:**
1. Go to **Settings** → **Members**
2. Click **Invite Member**
3. Enter email and select role
4. User receives invite email

**Via CLI:**
```bash
netpad users add user@example.com -o org_xxx --role member
```

### User Roles (Quick Assignment)

When adding users, assign one of these quick roles:

| Role | Access Level |
|------|--------------|
| `admin` | Full organization access |
| `member` | Create/edit forms, view submissions |
| `viewer` | Read-only access |

### Managing Users

```bash
# List all members
netpad users list -o org_xxx

# Update user role
netpad users update user@example.com -o org_xxx --role admin

# Remove user
netpad users remove user@example.com -o org_xxx
```

---

## Groups

Groups make it easy to manage permissions for teams. Instead of assigning roles to each user individually, assign roles to groups.

### Creating Groups

**Via Web UI:**
1. Go to **Settings** → **Groups**
2. Click **Create Group**
3. Name the group (e.g., "Engineering", "Marketing")

**Via CLI:**
```bash
netpad groups create "Engineering" -o org_xxx
netpad groups create "Reviewers" -o org_xxx --description "Can review submissions"
```

### Managing Group Members

```bash
# Add user to group
netpad groups add-member grp_xxx user@example.com -o org_xxx

# Remove user from group
netpad groups remove-member grp_xxx user@example.com -o org_xxx

# List group members
netpad groups get grp_xxx -o org_xxx
```

### Why Use Groups?

- **Onboarding**: New team members get correct access automatically
- **Offboarding**: Remove from group, access revoked everywhere
- **Consistency**: All team members have same permissions
- **Audit**: Easy to see who has what access

---

## Roles

Roles define what actions users (or groups) can perform. NetPad includes builtin roles and supports custom roles.

### Builtin Roles

#### Organization-Level

| Role | Description |
|------|-------------|
| `org:admin` | Full organization access, manage members |
| `org:member` | Standard access, create forms |
| `org:viewer` | Read-only access |

#### Project-Level

| Role | Description |
|------|-------------|
| `project:admin` | Full project access |
| `project:editor` | Edit forms and workflows |
| `project:viewer` | View project content |

#### Form-Level

| Role | Description |
|------|-------------|
| `form:admin` | Full form access |
| `form:editor` | Edit form, view submissions |
| `form:submitter` | Submit data only |

### Custom Roles

Create custom roles for specific needs:

```bash
# Create a "Reviewer" role (can view but not edit)
netpad roles create "Reviewer" -o org_xxx \
  --base viewer \
  --description "Can view and comment on submissions"

# Create a "Data Exporter" role
netpad roles create "DataExporter" -o org_xxx \
  --permissions "submissions:read,submissions:export"
```

### Listing Roles

```bash
# List all roles (builtin + custom)
netpad roles list -o org_xxx

# Get role details
netpad roles get role_xxx -o org_xxx
```

---

## Role Assignments

Assign roles to users or groups, optionally scoped to specific resources.

### Assign to User

```bash
# Org-wide assignment
netpad assign user user@example.com project:editor -o org_xxx

# Project-scoped assignment
netpad assign user user@example.com project:editor -o org_xxx \
  --scope project:proj_xxx

# Form-scoped assignment
netpad assign user user@example.com form:admin -o org_xxx \
  --scope form:frm_xxx
```

### Assign to Group

```bash
# Give Engineering group project editor access
netpad assign group grp_engineering project:editor -o org_xxx

# Give Reviewers view-only access to specific project
netpad assign group grp_reviewers project:viewer -o org_xxx \
  --scope project:proj_xxx
```

### Remove Assignment

```bash
netpad unassign user user@example.com project:editor -o org_xxx
netpad unassign group grp_xxx project:editor -o org_xxx
```

### List Assignments

```bash
netpad assign list -o org_xxx
```

---

## Permissions

Permissions follow the `resource:action` pattern.

### Available Permissions

| Permission | Description |
|------------|-------------|
| `forms:create` | Create new forms |
| `forms:read` | View forms |
| `forms:update` | Edit forms |
| `forms:delete` | Delete forms |
| `forms:publish` | Publish/unpublish forms |
| `submissions:read` | View submissions |
| `submissions:create` | Submit to forms |
| `submissions:delete` | Delete submissions |
| `submissions:export` | Export submission data |
| `workflows:create` | Create workflows |
| `workflows:read` | View workflows |
| `workflows:update` | Edit workflows |
| `workflows:delete` | Delete workflows |
| `workflows:execute` | Run workflows |
| `users:read` | View org members |
| `users:manage` | Add/remove members |
| `groups:manage` | Manage groups |
| `roles:manage` | Manage custom roles |
| `settings:manage` | Manage org settings |
| `billing:manage` | Manage billing |

### Checking Permissions

```bash
# List user's effective permissions
netpad permissions check user@example.com -o org_xxx

# Check if user can perform action
netpad permissions can user@example.com "forms:create" -o org_xxx
```

---

## Web UI Management

### Settings → Members

- View all organization members
- Invite new members
- Change member roles
- Remove members
- View member's effective permissions

### Settings → Groups

- Create/edit/delete groups
- Add/remove group members
- Assign roles to groups

### Settings → Roles

- View builtin roles
- Create custom roles
- Edit custom role permissions
- Delete custom roles

### Settings → Assignments (Admin Panel)

- View all role assignments
- Filter by user, group, or role
- Manage cross-org assignments (platform admins)

---

## Common Patterns

### Onboard New Developer

```bash
# Add to org
netpad users add dev@company.com -o org_xxx --role member

# Add to Engineering group (inherits all group permissions)
netpad groups add-member grp_engineering dev@company.com -o org_xxx
```

### Setup Review Workflow

```bash
# Create Reviewer role
netpad roles create "Reviewer" -o org_xxx \
  --permissions "forms:read,submissions:read"

# Create Reviewers group
netpad groups create "Reviewers" -o org_xxx

# Assign role to group
netpad assign group grp_reviewers role_reviewer -o org_xxx

# Add reviewers to group
netpad groups add-member grp_reviewers reviewer1@company.com -o org_xxx
netpad groups add-member grp_reviewers reviewer2@company.com -o org_xxx
```

### Restrict Form Access

```bash
# Give user access to only one form
netpad assign user contractor@example.com form:editor -o org_xxx \
  --scope form:frm_specific_form
```

### Audit Access

```bash
# See who has access to what
netpad assign list -o org_xxx --json | jq '.[] | {user, role, scope}'

# Check specific user's permissions
netpad permissions check user@example.com -o org_xxx
```

---

## Best Practices

1. **Use groups** instead of individual assignments when possible
2. **Principle of least privilege**: Start with minimal access, add as needed
3. **Regular audits**: Review role assignments periodically
4. **Document custom roles**: Add descriptions explaining purpose
5. **Test permissions**: Verify access before sharing with users
6. **Use scopes**: Limit access to specific projects/forms when appropriate
