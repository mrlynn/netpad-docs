---
draft: false
slug: conditional-spaghetti
title: "Conditional Logic Shouldn't Require a PhD in Spaghetti Architecture"
authors: [mrlynn]
tags: [netpad, devlife, forms, ux]
image: ./comic.webp
---

![Conditional Spaghetti](./comic.webp)

## The Pain Is Real

"Show this field only if the user selects 'Other'." Simple requirement, right? Fast forward three months and your form has 47 conditional rules, nested five levels deep, and nobody remembers why field 23 disappears when you select "Business" in the account type dropdown.

<!-- truncate -->

## Why This Happens

Show/hide logic seems simple when you have one or two conditions. But real-world forms grow organically. Insurance applications might have 50+ fields that appear or disappear based on user selections. Employee onboarding forms branch differently for contractors, full-time employees, and interns.

The problem compounds when conditions depend on other conditions. If field B only appears when A is "Yes", and field C only appears when B is greater than 100, and field D appears when either C is checked OR A is "No"... you've created a dependency graph that belongs in a computer science textbook.

Maintaining this in code becomes a nightmare. Developers are afraid to touch the logic because they don't know what might break. New requirements pile on top of existing complexity. Eventually, someone suggests "let's just rebuild the form from scratch"—and the cycle repeats.

## The NetPad Approach

NetPad's Visual Conditional Logic turns spaghetti into flowcharts. Instead of nested if/else statements buried in code, you see your logic as a visual diagram:

- **Point and click** - Select the field, choose the condition, pick the action
- **Visual overview** - See all conditions at a glance
- **Dependency tracking** - NetPad warns you about circular dependencies
- **Test mode** - Walk through your form and watch conditions fire in real-time

Complex conditions become manageable when you can see them. "Show shipping address when 'Different from billing' is checked" is one visual node, not fifteen lines of JavaScript.

## Try It Yourself

Untangle your conditional logic. [Learn about NetPad's conditional fields](/docs/forms/conditional-logic) and see how visual logic builders make complex forms maintainable.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
