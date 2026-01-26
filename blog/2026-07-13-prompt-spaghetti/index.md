---
draft: true
slug: prompt-spaghetti
title: "Prompt Engineering Shouldn't Mean Prompt Archaeology"
authors: [mrlynn]
tags: [netpad, devlife, ai, workflows]
image: ./comic.png
---

![Prompt Spaghetti](./comic.png)

## The Pain Is Real

`const prompt = "You are a helpful..."` appears 47 times in your codebase, each slightly different. Which one is production? Which is the test version? Which is the one that worked well before someone "improved" it? You're doing prompt archaeology, digging through code history to find prompts that were never meant to be managed this way.

<!-- truncate -->

## Why This Happens

Prompts started as simple strings. You needed AI to do something, you wrote a prompt, you moved on. But prompts evolved:

- **Iteration** - Prompts get refined through testing
- **Versioning** - Different versions for different use cases
- **A/B testing** - Comparing prompt performance
- **Reuse** - Same prompt needed in multiple places
- **Documentation** - Explaining what the prompt is supposed to do

When prompts live embedded in code:
- Changing a prompt requires a code deployment
- Testing prompts requires running the full application
- Tracking which prompt produced which output is difficult
- Non-developers can't contribute to prompt improvement

## The NetPad Approach

NetPad treats prompts as first-class workflow components:

- **LLM nodes** - Prompts configured visually, not coded
- **Version history** - See how prompts changed over time
- **Testing** - Run prompts independently with test inputs
- **Variables** - Dynamic prompts with form data insertion
- **Multiple models** - Same prompt, different AI providers
- **Execution logs** - See which prompt produced which output

Your prompts become visible, testable, versionable artifacts. When something works well, you know exactly which prompt version did it. When you need to improve, you can iterate without touching code.

## Try It Yourself

Manage prompts as real components. [Build AI workflows in NetPad](/docs/api/workflows) and stop digging through code for your prompts.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
