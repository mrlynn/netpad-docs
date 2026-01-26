---
draft: true
slug: encryption-paranoia
title: "Encryption at Rest: Why 'We Think It's Encrypted' Isn't Enough"
authors: [mrlynn]
tags: [netpad, devlife, security]
image: ./comic.webp
---

![Encryption Paranoia](./comic.webp)

## The Pain Is Real

"Is the data encrypted?" The security auditor asks. "I think so," you reply, wrapping your laptop in metaphorical tinfoil. "Like, the database probably encrypts it? Or maybe the disk does?" The auditor's pen hovers over the 'FAIL' checkbox while you frantically search for documentation that doesn't exist.

<!-- truncate -->

## Why This Happens

Encryption at rest sounds simple, but the details matter:

- **What's encrypted?** - The disk? The database? Individual fields?
- **What algorithm?** - AES-256? Something weaker?
- **Who has the keys?** - Where are encryption keys stored?
- **Is it actually on?** - Default settings vary by database

Many teams assume encryption is handled "somewhere" in the stack. The cloud provider encrypts disks. The database has encryption options. Surely someone enabled them? But assumptions aren't evidence, and auditors need evidence.

Compliance frameworks are specific: HIPAA requires encryption for PHI, PCI DSS requires it for cardholder data, GDPR doesn't require encryption but heavily favors it for breach protection. "We think it's encrypted" doesn't satisfy any of these requirements.

## The NetPad Approach

NetPad's data storage is encrypted by design:

- **MongoDB Atlas encryption** - AES-256 encryption at rest, enabled by default
- **TLS in transit** - All data encrypted between services
- **Key management** - Keys managed securely, rotated regularly
- **Audit evidence** - Documentation ready for compliance reviews
- **No configuration needed** - Encryption isn't optional or off by default

You don't have to wonder if encryption is enabled—it is. When the auditor asks about encryption at rest, you have clear answers: AES-256, MongoDB Atlas key management, encryption applied to all data, no exceptions.

## Try It Yourself

Store sensitive data with confidence. [Learn about NetPad's security architecture](/docs/security/encryption) and have ready answers for your next audit.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
