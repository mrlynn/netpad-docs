---
draft: true
slug: permissions-maze
title: "RBAC Doesn't Have to Feel Like a Maze"
authors: [mrlynn]
tags: [netpad, devlife, security]
image: ./comic.png
---

![Permissions Maze](./comic.png)

## The Pain Is Real

"I just need to give Sarah access to one form." You open the admin panel and find yourself in a labyrinth: roles within roles, permissions on permissions, inheritance rules that contradict each other. There's Admin, Super-Admin, Admin-Plus, and something called "Legacy-Admin-Migrated" that nobody remembers creating. Somewhere in this maze is the ability to let Sarah view a form.

<!-- truncate -->

## Why This Happens

Permission systems start simple and grow complex. First you have Admin and User. Then you need Editor. Then Viewer. Then someone needs Admin powers but only for one project. Then you need department-level permissions. Then exceptions.

Before long, you have:

- **Role explosion** - Dozens of roles for every possible permission combination
- **Inheritance confusion** - Does project permission override organization permission?
- **Orphaned permissions** - Roles that exist but nobody uses
- **Security gaps** - Users with more access than they should have
- **Audit nightmares** - Explaining why user X can access resource Y

The principle of least privilege—giving users only the access they need—becomes impossible when nobody understands the permission model.

## The NetPad Approach

NetPad's RBAC keeps it simple with a clear hierarchy:

- **Organization level** - Owner, Admin, Member
- **Project level** - Inherits from org, can be restricted
- **Application level** - Further refinement when needed
- **Form level** - Specific access for specific forms

The model is hierarchical but not tangled. Organization admins can access everything. Project members can access their projects. Form-level permissions let you share specific forms without broader access.

When you need to give Sarah access to one form, you do exactly that—add her as a viewer on that form. No maze navigation required.

## Try It Yourself

Manage access without the headaches. [Learn about NetPad's role-based access control](/docs/security/access-control) and build permission structures that make sense.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
