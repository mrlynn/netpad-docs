---
draft: true
slug: search-sadness
title: "Ctrl+F Isn't a Data Strategy: Real Search for Form Submissions"
authors: [mrlynn]
tags: [netpad, devlife, data]
image: ./comic.webp
---

![Search Sadness](./comic.webp)

## The Pain Is Real

"Find the submission from last Tuesday, from that client, with 'urgent' somewhere in the description." You scroll through hundreds of records. Ctrl+F finds matches in the current view but misses everything below. The record you need is there, somewhere, in a haystack of data that your tools can't meaningfully search.

<!-- truncate -->

## Why This Happens

Basic search works for basic needs:

- **Exact matches** - Find records with specific values
- **Current page** - Search what's visible
- **Single field** - Match one column

But real search needs are more complex:

- **Fuzzy matching** - "John" should find "Jon" and "Jonn"
- **Date ranges** - "Last week" not "2026-08-10 to 2026-08-17"
- **Cross-field** - Match in any field, not just one
- **Operators** - Contains, starts with, greater than
- **Saved searches** - Reuse common queries

Without proper search, finding data becomes a chore. Users export to Excel just to use better filtering. Or they give up and ask someone with database access to run a query.

## The NetPad Approach

NetPad's data browser includes real search capabilities:

- **Full-text search** - Find matches across all text fields
- **Field-specific filters** - Narrow by specific columns
- **Operators** - Equals, contains, greater than, between dates
- **Combinable** - Multiple filters create complex queries
- **Saved searches** - Save common queries for reuse
- **Search forms** - Custom search interfaces for complex needs

Build the search you need: submissions from last week, with status "pending", where priority is high. Save it as "Urgent Pending Items" and run it whenever you need it.

## Try It Yourself

Search your data like you actually need to. [Explore NetPad's data browser](/docs/data-explorer/browsing-data) and find records in seconds, not minutes.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
