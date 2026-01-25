---
sidebar_position: 11
title: Referral Program
description: Manage referral codes, track referrals, configure benefits, and process commission payouts
---

# Referral Program

The NetPad Referral Program enables organizations to earn commissions by referring new users to the platform. Platform administrators can create and manage referral codes, configure incentives for both referrers and referred users, and process commission payouts.

:::info Cloud Feature
The referral program is a **cloud-only** feature available on NetPad Cloud deployments.
:::

## Overview

The referral system consists of two types of incentives:

1. **Commissions for Referrers** - Percentage of each invoice paid by the referred organization
2. **Benefits for Referred Users** - Discounts, credits, or trial extensions for new signups

## Accessing Referral Management

### Organization Dashboard (Referrer View)

Organization owners can access their referral dashboard at:
- **Settings → Referrals** tab
- View their referral code and share URL
- Track referral performance and earnings
- Request payouts when earnings become available

### Admin Dashboard (Platform Admin View)

Platform administrators can manage all referrals at:
- **Admin → Referrals** (`/admin/referrals`)
- Create and manage special referral codes
- View all referrals and their status
- Approve or reject payout requests

---

## Referral Code Types

NetPad supports different referral code types with varying commission structures:

| Code Type | Year 1 | Year 2 | Year 3 | Year N | Use Case |
|-----------|--------|--------|--------|--------|----------|
| **Standard** | 20% | 15% | 10% | 10% | Auto-generated for organizations |
| **Partner** | 30% | 25% | 20% | 15% | Strategic partnerships |
| **Influencer** | 25% | 20% | 15% | 10% | Content creators and advocates |
| **Campaign** | 20% | 15% | 10% | 10% | Marketing campaigns |

:::tip Commission Rates
Commission rates decrease over the lifetime of the referral. Year 1 applies for the first 12 months after attribution, Year 2 for months 13-24, and so on.
:::

---

## Commission Structure

### How Commissions Work

Commissions are calculated as a percentage of each invoice amount paid by the referred organization:

1. **Referral Attribution** - When a new user signs up using a referral code, they are "attributed" to the referrer
2. **Qualification Period** - Referrals must make 2 payments to become "qualified"
3. **Commission Accrual** - After qualification, each payment generates a commission
4. **Hold Period** - Commissions have a 30-day hold before becoming available
5. **Payout Request** - Referrers can request payouts once they have $50+ available

### Commission Calculation Example

If a referred organization pays a $100/month invoice:

| Referral Age | Commission Rate | Commission Amount |
|--------------|-----------------|-------------------|
| Month 1-12 | 20% | $20/month |
| Month 13-24 | 15% | $15/month |
| Month 25-36 | 10% | $10/month |
| Month 37+ | 10% | $10/month |

---

## Referred User Benefits

In addition to commissions for referrers, you can configure incentives for the person being referred:

### Available Benefit Types

| Benefit | Description | Example |
|---------|-------------|---------|
| **Discount Percentage** | X% off first N payments | 10% off first 3 payments |
| **Account Credit** | Flat dollar amount credited | $20 account credit |
| **Trial Extension** | Extra days added to trial | +14 extra trial days |
| **Feature Unlocks** | Temporary premium access | (Future enhancement) |

### Configuring Benefits

When creating a special referral code in the admin panel:

1. Toggle **"Add benefits for referred users"**
2. Configure the desired benefits:
   - **Discount**: Set percentage (0-100%) and number of payments
   - **Credit**: Set dollar amount
   - **Trial Extension**: Set number of extra days
3. Review the benefit summary before creating

:::note
Benefits are optional. You can create codes with only referrer commissions, only user benefits, or both.
:::

---

## Creating Referral Codes

### Automatic Code Generation (Standard)

Organizations automatically get a referral code when they access the Referrals section in Settings. These codes:
- Use the "standard" commission rates (20%/15%/10%/10%)
- Are tied to the organization
- Cannot have custom benefits

### Admin-Created Codes (Special)

Platform administrators can create special codes with custom configurations:

1. Navigate to **Admin → Referrals → Referral Codes** tab
2. Click **"Create Code"**
3. Configure the code:
   - **Code**: 4-20 alphanumeric characters (auto-uppercased)
   - **Type**: Partner, Influencer, or Campaign
   - **Benefits**: Optional incentives for referred users
   - **Organization**: Optional assignment (can be left unassigned)
4. Click **"Create"**

### Unassigned vs Assigned Codes

| Status | Description | Commission Recipient |
|--------|-------------|---------------------|
| **Unassigned** | Not linked to any organization | No commissions earned |
| **Assigned** | Linked to a specific organization | Organization earns commissions |

:::tip Pre-generating Codes
Create unassigned codes in advance for marketing campaigns or partnerships. Assign them to organizations when needed.
:::

---

## Referral Lifecycle

The complete journey of a referral:

```
1. SHARE      → Referrer shares their code URL (netpad.io/signup?ref=CODE)
     ↓
2. CLICK      → Prospect clicks the link (code stored in 30-day cookie)
     ↓
3. SIGNUP     → Prospect creates account and organization
     ↓
4. ATTRIBUTED → Referral is recorded with "pending" status
     ↓
5. PAYMENT 1  → First payment → status becomes "qualifying"
     ↓
6. PAYMENT 2  → Second payment → status becomes "qualified" ✓
     ↓
7. ONGOING    → Each subsequent payment generates commission
     ↓
8. HOLD       → Commissions held for 30 days
     ↓
9. AVAILABLE  → Commissions become available for payout
     ↓
10. PAYOUT    → Referrer requests payout → Admin approves
```

### Referral Statuses

| Status | Description |
|--------|-------------|
| **Pending** | Attributed but no payments yet |
| **Qualifying** | Has 1 payment, needs 1 more to qualify |
| **Qualified** | Met qualification threshold, earning commissions |
| **Active** | Qualified and actively generating commissions |
| **Churned** | Referred organization cancelled subscription |

---

## Managing Payouts

### Payout Requirements

- **Minimum Payout**: $50 USD
- **Hold Period**: 30 days from commission accrual
- **Status**: Earnings must be "available" (not "pending")

### Payout Methods

Referrers can request payouts via:
- PayPal
- Wise
- Bank Transfer
- Other (with details)

### Admin Payout Workflow

1. Navigate to **Admin → Referrals → Pending Payouts** tab
2. Review the payout request:
   - Organization name
   - Amount requested
   - Payment method and details
3. Choose an action:
   - **Approve** - Marks for processing
   - **Reject** - Denies with reason

:::warning Manual Processing Required
Approved payouts require manual processing outside of NetPad. After approving, coordinate with finance to send the payment via the specified method.
:::

---

## Organization Search

When creating or assigning referral codes, administrators can search for organizations by:

- **Organization Name** - Full or partial name match
- **Organization Slug** - URL-friendly identifier
- **Owner Email** - Email address of the org owner

This makes it easy to assign codes to specific users or organizations.

---

## Tracking & Analytics

### Admin Dashboard Metrics

The referral management page displays:

| Metric | Description |
|--------|-------------|
| **Pending Payouts** | Payout requests awaiting approval |
| **Active Codes** | Total number of active referral codes |
| **Unassigned Codes** | Codes not yet linked to an organization |
| **Qualified Referrals** | Referrals that have reached qualification |

### Referral Details

For each referral, you can view:
- Referrer organization
- Referred organization
- Current status
- Payment count
- Attribution date
- Qualification date (if applicable)

---

## Best Practices

### For Platform Administrators

1. **Pre-generate campaign codes** - Create unassigned codes before marketing campaigns
2. **Use appropriate code types** - Match commission rates to partnership value
3. **Configure meaningful benefits** - Incentives for referred users increase conversion
4. **Process payouts promptly** - Build trust with referrers by timely payments
5. **Monitor churned referrals** - High churn may indicate targeting issues

### For Referrers

1. **Customize your code** - Use a memorable code that represents your brand
2. **Share consistently** - Include referral links in content and communications
3. **Track performance** - Monitor your referral dashboard for insights
4. **Request payouts regularly** - Don't let available earnings accumulate

---

## API Reference

### Admin Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/referrals` | GET | List all referrals |
| `/api/admin/referrals/codes` | GET | List all referral codes |
| `/api/admin/referrals/codes` | POST | Create special code |
| `/api/admin/referrals/codes/[code]/assign` | POST | Assign code to org |
| `/api/admin/referrals/payouts` | GET | List payout requests |
| `/api/admin/referrals/payouts/[id]/approve` | POST | Approve payout |
| `/api/admin/referrals/payouts/[id]/reject` | POST | Reject payout |

### Organization Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/organizations/[orgId]/referrals/code` | GET | Get org's referral code |
| `/api/organizations/[orgId]/referrals/stats` | GET | Get referral stats |
| `/api/organizations/[orgId]/referrals/earnings` | GET | List earnings |
| `/api/organizations/[orgId]/referrals/payouts` | POST | Request payout |

### Public Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/referrals/validate` | GET | Validate a referral code |

---

## Troubleshooting

### Common Issues

**Referral not attributed**
- Ensure the referral code cookie is set (30-day expiry)
- Check that the code is active and valid
- Verify the referred org wasn't already attributed

**Commission not appearing**
- Referral must be "qualified" (2+ payments)
- Check the 30-day hold period
- Verify the referred org is still active

**Payout request rejected**
- Verify minimum $50 threshold is met
- Ensure earnings are "available" not "pending"
- Check payment details are complete

### Support

For referral-related issues, contact support with:
- Referral code in question
- Organization ID (referrer and/or referred)
- Description of the issue
- Any error messages received
