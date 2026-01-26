---
draft: true
slug: workflow-rerun-regret
title: "Reprocessing Data: The Button Nobody Wants to Press"
authors: [mrlynn]
tags: [netpad, devlife, workflows, automation]
image: ./comic.webp
---

![Workflow Rerun Regret](./comic.webp)

## The Pain Is Real

The "Rerun Workflow" button sits there, glowing red, daring you to press it. The workflow had errors last night—100 records didn't process correctly. You need to rerun them. But the last time someone pressed this button, they created 10,000 duplicate emails, charged customers twice, and spent a week cleaning up the mess. Your finger hovers... and retreats.

<!-- truncate -->

## Why This Happens

Rerunning workflows is scary because most workflows have side effects:

- **Emails sent** - Rerun sends them again
- **Records created** - Rerun creates duplicates
- **APIs called** - Rerun charges again, notifies again, triggers again
- **State changed** - Rerun might transition already-processed items

Without careful design, reruns cause more problems than they solve. But careful design is hard:

- **Idempotency** - Making operations safe to repeat requires extra code
- **State tracking** - Knowing what was processed vs. what failed
- **Partial reruns** - Running just the failed items, not everything

Many teams just don't rerun. They manually fix the 100 failed records instead, which works until you have 10,000 failures.

## The NetPad Approach

NetPad's workflow replay is designed for safe reruns:

- **Dry run mode** - Preview what would happen without executing
- **Execution history** - See what ran, what failed, what succeeded
- **Selective replay** - Rerun only specific items or time ranges
- **Idempotency helpers** - Built-in duplicate detection
- **Side effect tracking** - Know which external calls would be made

Before pressing rerun, you can see exactly what will happen. The preview shows which records will be processed and what actions will be taken. Only when you're confident do you execute for real.

## Try It Yourself

Replay workflows with confidence. [Learn about workflow execution in NetPad](/docs/api/workflows) and make reruns safe instead of scary.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
