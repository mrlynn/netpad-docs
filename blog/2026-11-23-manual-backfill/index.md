---
draft: true
slug: manual-backfill
title: "Backfilling Data: Because Sometimes You Need to Reprocess the Past"
authors: [mrlynn]
tags: [netpad, devlife, data, workflows]
image: ./comic.png
---

![The Manual Backfill](./comic.png)

## The Pain Is Real

"Just 2,000 more records to reprocess..." You're manually re-entering historical data because the new workflow needs to run against old submissions. The calendar shows days passing. Your eyes glaze over. There must be a better way than manually processing records one by one until the end of time.

<!-- truncate -->

## Why This Happens

Backfills become necessary when:

- **New workflows** need to process existing data
- **Bug fixes** require reprocessing affected records
- **Schema changes** need data migration
- **Integrations** need historical sync

But backfill tooling is often missing:

- Workflows designed for real-time, not batch
- No way to select historical records
- No progress tracking for large batches
- No safe way to replay without side effects

Teams resort to scripts, manual processing, or worse—leaving historical data unprocessed and hoping it doesn't matter.

## The NetPad Approach

NetPad supports backfill operations:

- **Historical replay** - Run workflows against past submissions
- **Date range selection** - Process records from specific periods
- **Batch processing** - Handle large volumes efficiently
- **Progress tracking** - See how far along you are
- **Safe replay** - Idempotency prevents duplicate processing

Need to run your new notification workflow against last month's submissions? Select the date range, choose the workflow, preview what will happen, and execute. Progress updates show completion. Failed items can be retried individually.

## Try It Yourself

Backfill without the manual labor. [Learn about workflow replay in NetPad](/docs/api/workflows) and process historical data systematically.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
