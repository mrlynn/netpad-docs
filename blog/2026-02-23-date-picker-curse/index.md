---
draft: true
slug: date-picker-curse
title: "Timezones: The Bug That Has Caused More Production Incidents Than Any Other"
authors: [mrlynn]
tags: [netpad, devlife, forms, data]
image: ./comic.webp
---

![Date Picker Curse](./comic.webp)

## The Pain Is Real

"The meeting is at 3pm." But whose 3pm? The user entered 3pm in Tokyo, your server interpreted it as 3pm UTC, and the confirmation email shows 3pm in the recipient's local time—which is 11pm, and now they've missed the meeting. Timezones: turning simple date fields into production incidents since the dawn of computing.

<!-- truncate -->

## Why This Happens

Dates and times are notoriously difficult in software. The challenges compound:

- **Timezone ambiguity** - Is "3pm" local time, server time, or UTC?
- **Daylight saving** - Some dates don't exist, others happen twice
- **Display vs storage** - Store in UTC, display in local, convert correctly
- **Date formats** - MM/DD/YYYY or DD/MM/YYYY? Depends who's asking
- **Calendar systems** - Not everyone uses the Gregorian calendar

Famous timezone bugs have caused real damage. Systems have double-billed customers, missed critical deadlines, and scheduled events at impossible times. One wrong timezone assumption can cascade through an entire system.

JavaScript's Date object is particularly problematic—it uses local timezone by default, leading to different behavior on different machines. What works in development breaks in production if the server is in a different timezone.

## The NetPad Approach

NetPad's date and time fields handle timezone complexity correctly:

- **Explicit timezone** - Optionally show and capture timezone with the date
- **UTC storage** - All dates stored in UTC for consistency
- **Local display** - Automatically convert to user's timezone for display
- **Format flexibility** - Configure display format per field
- **Range validation** - Min/max dates, business days only, custom rules
- **Relative dates** - "Today", "Next Monday", etc.

When you need timezone precision, NetPad captures it. When you just need a date, it handles the UTC conversion transparently. No more guessing what timezone the user meant.

## Try It Yourself

Handle dates without the existential dread. [Configure date fields in NetPad](/docs/forms/field-types) and stop timezone bugs before they start.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
