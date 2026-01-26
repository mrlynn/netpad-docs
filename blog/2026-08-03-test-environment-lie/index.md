---
draft: true
slug: test-environment-lie
title: "'It's Just Test Data' Famous Last Words Before a Production Incident"
authors: [mrlynn]
tags: [netpad, devlife, devops]
image: ./comic.webp
---

![The Test Environment Lie](./comic.webp)

## The Pain Is Real

The sign says "Test Environment - Totally Safe!" You delete some records to clean up. Customers start complaining their data is gone. The "test environment" was pointing at production all along. The magnifying glass of incident review reveals the connection string nobody noticed.

<!-- truncate -->

## Why This Happens

Environment isolation is harder than it sounds:

- **Connection strings** - Easy to mix up in configuration
- **Shared resources** - Same database, different tables (supposedly)
- **Copied credentials** - Test env has prod creds "for convenience"
- **Environment variables** - Wrong values in wrong places
- **DNS confusion** - Which server is which again?

The dangerous pattern: test and production share something. Maybe the database, maybe credentials, maybe the network. The sharing seems harmless until someone runs a destructive operation in what they thought was a safe space.

Development teams discover this the hard way. Confidence in the test environment erodes. Developers become afraid to test anything meaningful because they're not sure where the data will end up.

## The NetPad Approach

NetPad enforces environment separation:

- **Project structure** - Dev, Staging, Production as distinct environments
- **Separate databases** - Each environment uses its own data store
- **Visual distinction** - Clear indicators of which environment you're in
- **Permission separation** - Different access controls per environment
- **Promotion workflow** - Explicit process to move changes between environments

When you're in the test environment, you're in the test environment. Different data, different connections, different visual cues. Deleting test data doesn't touch production because they're genuinely separate.

## Try It Yourself

Keep your environments actually separate. [Learn about NetPad's project structure](/docs/platform/projects) and stop playing environment roulette.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
