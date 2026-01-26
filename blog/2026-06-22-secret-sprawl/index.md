---
draft: true
slug: secret-sprawl
title: "Where Are Your API Keys Right Now? Be Honest."
authors: [mrlynn]
tags: [netpad, devlife, security, devops]
image: ./comic.png
---

![Secret Sprawl](./comic.png)

## The Pain Is Real

API keys taped to the monitor. Passwords in a Slack message from six months ago. The production database connection string in a `.env` file that's definitely not in `.gitignore`. An auditor walks in and you instinctively try to cover your screen with your hands. Where are your secrets? Everywhere. And nowhere secure.

<!-- truncate -->

## Why This Happens

Secrets sprawl happens gradually:

1. You need an API key to test something. You paste it in the code "temporarily."
2. Someone asks for the database password. You send it in Slack.
3. The deployment needs credentials. They go in environment variables on the server.
4. A new developer joins. The onboarding doc includes secrets "for convenience."

Before long, the same credential exists in multiple places:
- Source code (hopefully not committed, but...)
- Chat history
- Personal notes
- Configuration files
- Multiple servers
- Developer machines

When a secret needs to be rotated, you have to find everywhere it exists. When someone leaves the company, you don't know what they might have copied.

## The NetPad Approach

NetPad's Connection Vault centralizes secrets management:

- **Secure storage** - AES-256-GCM encryption for all credentials
- **Single source of truth** - Store once, reference everywhere
- **Access control** - Secrets visible only to authorized users
- **Audit logging** - Track who accessed which secrets
- **Rotation support** - Update in one place, works everywhere

Your API keys, database credentials, and service tokens live in the vault. Workflows reference them by name, not value. When a key needs to rotate, you update the vault—not dozens of scattered files.

## Try It Yourself

Centralize your secrets. [Set up connections in NetPad](/docs/platform/connection-vault) and stop wondering where your credentials are hiding.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
