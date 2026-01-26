---
draft: true
slug: scheduled-job-surprise
title: "Scheduled Jobs: Because '* * * * *' Is Not Self-Documenting"
authors: [mrlynn]
tags: [netpad, devlife, workflows, devops]
image: ./comic.webp
---

![Scheduled Job Surprise](./comic.webp)

## The Pain Is Real

Your phone buzzes at 3am: "CRON JOB FAILED." You set the job to run at 3pm, not 3am. But wait—3pm in which timezone? The server is in UTC, you wrote the cron in your local time, and now you're debugging time math at an hour when your brain definitely doesn't work.

<!-- truncate -->

## Why This Happens

Cron expressions are powerful but cryptic. `0 15 * * 1-5` means "3pm on weekdays"—if you remember the format. But:

- **Timezone confusion** - Cron uses server time, not your time
- **Daylight saving** - Jobs shift by an hour twice a year
- **Expression errors** - One wrong number means wrong schedule
- **No feedback** - You won't know it's wrong until it runs (or doesn't)

The cron syntax itself is hostile. Five fields, each with different valid ranges, special characters that behave differently per field. Most developers have to look it up every time.

Debugging scheduled jobs is worse. When it runs at the wrong time, you need to figure out what time the server thinks it is, what timezone the cron is using, and whether daylight saving affected anything. By the time you've sorted it out, you've lost half your night's sleep.

## The NetPad Approach

NetPad's scheduled triggers use human-readable settings:

- **Visual scheduler** - Select time, days, and timezone from dropdowns
- **Timezone explicit** - Choose your timezone, see the UTC equivalent
- **Natural language** - "Every weekday at 3pm EST" not `0 15 * * 1-5`
- **Next run preview** - See exactly when the next execution will happen
- **Run history** - Track when jobs actually ran
- **Failure alerts** - Know immediately when schedules miss

You schedule jobs in your timezone, NetPad shows you when they'll run in server time, and you can verify the next several executions before saving. No more timezone math at 3am.

## Try It Yourself

Schedule workflows without the surprises. [Set up scheduled triggers in NetPad](/docs/api/workflows) and sleep through the night.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
