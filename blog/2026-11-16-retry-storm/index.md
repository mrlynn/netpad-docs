---
draft: true
slug: retry-storm
title: "Exponential Backoff: Because Hammering a Failed Service Is Not a Strategy"
authors: [mrlynn]
tags: [netpad, devlife, workflows, devops]
image: ./comic.webp
---

![The Retry Storm](./comic.webp)

## The Pain Is Real

Retries rain from the sky like a storm. The email service is down, so your system retries. And retries. And retries. 10,000 times at once. The email service, struggling to recover, now faces a tsunami of requests. Your system overwhelms the very service it's trying to use. The server hunches over, crushed under self-inflicted load.

<!-- truncate -->

## Why This Happens

Naive retry logic causes retry storms:

```
if (failed) {
  retry immediately
}
```

When a service fails, everyone retries at once. The recovered service faces instant overwhelming load. It fails again. More retries. The cycle continues.

Retry storms cause:

- **Cascading failures** - Overwhelmed services fail further
- **Resource exhaustion** - Retries consume compute, memory, connections
- **Rate limiting** - Services block you for excessive requests
- **Extended outages** - Recovery prevented by retry load

The fix is exponential backoff: wait longer between each retry, with jitter to prevent synchronized retries.

## The NetPad Approach

NetPad's retry policies are designed for resilience:

- **Exponential backoff** - Increasing delays between retries
- **Jitter** - Randomization prevents thundering herd
- **Max retries** - Stop after configured attempts
- **Circuit breaker** - Stop trying if service is clearly down
- **Manual retry** - Option to retry failed items individually

Configure retry behavior per workflow: "Retry 3 times, with exponential backoff starting at 1 second, maximum 60 seconds, with jitter." The platform handles the math.

## Try It Yourself

Handle failures gracefully. [Configure retry policies in NetPad](/docs/api/workflows) and be a good citizen to the services you depend on.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
