---
draft: true
slug: double-submit-disaster
title: "Why Your Form Has 47 Duplicate Submissions (And How to Stop It)"
authors: [mrlynn]
tags: [netpad, devlife, forms, ux]
image: ./comic.png
---

![Double Submit Disaster](./comic.png)

## The Pain Is Real

The user clicked Submit. Nothing happened immediately, so they clicked again. And again. Now you have 47 identical submissions, 47 confirmation emails sent, and one very confused user who just wanted to register for your newsletter once.

<!-- truncate -->

## Why This Happens

Double submissions are a classic race condition:

1. User clicks Submit
2. Request is processing (takes a few seconds)
3. User sees no feedback, clicks again
4. Second request also processes
5. Both succeed, creating duplicates

Without protection, every slow moment creates duplicates. Users have been trained by poor web experiences to click repeatedly when things feel stuck. They're not doing anything wrong—your form is.

The backend consequences multiply:
- Duplicate database records
- Duplicate charges on payment forms
- Duplicate emails to recipients
- Duplicate API calls to external systems

## The NetPad Approach

NetPad handles duplicate prevention at multiple levels:

- **UI protection** - Submit button disabled during submission
- **Loading feedback** - Clear indication that processing is happening
- **Idempotency** - Server-side duplicate detection
- **Request ID tracking** - Same submission recognized even if sent twice
- **Response caching** - Second identical request gets same response

When a user submits, they see immediate feedback. If they somehow manage to click twice (or their browser retries), the backend recognizes the duplicate and handles it gracefully—returning success without creating a second record.

## Try It Yourself

Prevent duplicates automatically. [Build forms with NetPad](/docs/forms/form-builder) and stop explaining to users why they received 47 confirmation emails.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
