---
draft: true
slug: reaction-roulette
title: "Form Reactions: Turning 'Something Happened' into 'The Right Thing Happened'"
authors: [mrlynn]
tags: [netpad, devlife, forms, workflows]
image: ./comic.webp
---

![Reaction Roulette](./comic.webp)

## The Pain Is Real

User clicks Submit. Immediately: fireworks of activity. Emails fly. Slack notifications ping. Database updates cascade. Records appear in three different systems. The user just wanted to submit a support ticket, but they've triggered what feels like a small earthquake across your infrastructure.

<!-- truncate -->

## Why This Happens

Form submissions often need to trigger multiple actions:

- Send confirmation to submitter
- Notify the responsible team
- Create records in other systems
- Update dashboards and reports
- Trigger downstream workflows

Without careful design, these reactions pile up chaotically:

- **All at once** - Everything fires simultaneously
- **No prioritization** - Critical notifications delayed by bulk operations
- **No feedback** - User doesn't know what happened
- **Hard to debug** - Which reaction failed?
- **Tightly coupled** - Changing one reaction risks breaking others

The user experience suffers. They click Submit and either get overwhelming feedback (five emails!) or no feedback (did it work?). Behind the scenes, administrators can't tell which reactions ran successfully.

## The NetPad Approach

NetPad's Form Reactions system organizes post-submission behavior:

- **Ordered execution** - Control which reactions run first
- **Success/failure handling** - Different paths for different outcomes
- **User feedback** - Clear confirmation separate from background processing
- **Async processing** - Heavy reactions run without blocking the user
- **Reaction logs** - See exactly what triggered for each submission

Design your form's aftermath: acknowledge the user immediately, then run notifications, then update external systems. Each step is visible in the execution history. When something fails, you know exactly where.

## Try It Yourself

Control what happens after Submit. [Configure form reactions in NetPad](/docs/forms/form-builder) and turn chaotic triggers into orchestrated responses.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
