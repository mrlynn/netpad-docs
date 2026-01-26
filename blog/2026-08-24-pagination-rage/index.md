---
draft: true
slug: pagination-rage
title: "Pagination: The UX That Time Forgot"
authors: [mrlynn]
tags: [netpad, devlife, data, ux]
image: ./comic.png
---

![Pagination Rage](./comic.png)

## The Pain Is Real

"Page 1 of 847." Your hand cramps from clicking Next. Your eyes glaze over scanning identical-looking rows. The record you need is somewhere in those 847 pages, but traditional pagination makes you hunt through each one. This is data access from the dial-up era, somehow still standard.

<!-- truncate -->

## Why This Happens

Pagination was designed for technical constraints:

- **Database efficiency** - Fetch small chunks, not everything
- **Page rendering** - Display a manageable number of rows
- **Memory limits** - Don't crash browsers with huge tables

Those constraints still exist, but the UX doesn't have to be painful. The problem is that most pagination implementations do the minimum:

- Fixed page size (often too small)
- Sequential navigation (no jumping)
- No smart loading (page 847 takes 847 queries)
- Loses context (where was I?)

Users adapt by exporting everything to Excel—which defeats the purpose of having a web interface at all.

## The NetPad Approach

NetPad's data views respect both technical constraints and user sanity:

- **Smart loading** - Fetch data as you scroll
- **Virtual scrolling** - Handle thousands of records smoothly
- **Quick filters** - Narrow data before scrolling
- **Jump navigation** - Go directly to relevant sections
- **Context preservation** - Remember position and filters
- **Export when needed** - Get everything when you actually need it

You see your data as a continuous view, not arbitrary pages. Scroll to load more. Filter to narrow down. Jump to specific records. The technical pagination happens behind the scenes without forcing you to click through 847 pages.

## Try It Yourself

Browse data without the page rage. [Use NetPad's data browser](/docs/data-explorer/browsing-data) and access records without the Next button marathon.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
