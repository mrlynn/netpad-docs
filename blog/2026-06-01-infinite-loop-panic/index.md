---
draft: true
slug: infinite-loop-panic
title: "The Day Our Workflow Decided to Run Forever"
authors: [mrlynn]
tags: [netpad, devlife, workflows, automation]
image: ./comic.webp
---

![Infinite Loop Panic](./comic.webp)

## The Pain Is Real

The iteration counter keeps climbing: 100, 1,000, 10,000, 100,000. Your workflow is eating its own tail—a form submission triggers a workflow that updates the form, which triggers the workflow again, which updates the form... The server room is metaphorically (or literally) catching fire. Someone shouts "MAKE IT STOP!" but the kill switch isn't obvious.

<!-- truncate -->

## Why This Happens

Infinite loops in workflows happen when the trigger condition is also a side effect:

- Form submit triggers workflow that updates form
- Record update triggers workflow that updates record
- Webhook response triggers webhook that triggers response

They're easy to create accidentally:
1. Create a workflow triggered by form updates
2. Add a step that updates the form (to mark it processed)
3. Watch in horror as each update triggers a new run

The consequences are severe: overwhelming the server, exhausting rate limits, filling up logs, potentially charging real money if external APIs are involved. And because the loop runs faster than you can react, damage accumulates quickly.

## The NetPad Approach

NetPad includes built-in loop detection:

- **Execution tracking** - Know how many times a workflow has run for the same trigger
- **Loop detection** - Automatic halt when the same item triggers repeatedly
- **Depth limits** - Configurable maximum recursion depth
- **Circuit breaker** - Automatic pause when something seems wrong
- **Manual override** - Stop any running workflow immediately

When you create a workflow that updates its trigger, NetPad warns you. If a loop starts anyway, it's detected and stopped before your infrastructure suffers. The workflow pauses, you get an alert, and you can investigate without a production crisis.

## Try It Yourself

Build workflows with safety rails. [Learn about NetPad's workflow execution](/docs/api/workflows) and know your automations won't run away.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
