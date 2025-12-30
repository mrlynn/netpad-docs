# Form Analytics

NetPad provides comprehensive analytics to help you understand form performance, submission trends, and user behavior.

## Overview

Access analytics from the form dashboard:
- Click on any form
- Navigate to "Analytics" tab
- View comprehensive metrics and charts

## Key Metrics

### Submission Metrics

**Total Submissions**:
- Total number of form submissions
- Count of all submissions (including incomplete)
- Real-time counter

**Completion Rate**:
- Percentage of started forms that were completed
- Calculated as: (Completed / Started) × 100
- Indicates form usability

**Average Completion Time**:
- Average time to complete form
- Helps identify form complexity
- Useful for optimization

### Time-Based Metrics

**Submissions Over Time**:
- Chart showing submission trends
- Daily, weekly, or monthly views
- Identify peak submission times

**Submission Rate**:
- Submissions per day/week/month
- Growth trends
- Seasonal patterns

## Field-Level Analytics

### Completion Rates

See which fields are:
- **Always Completed**: 100% completion rate
- **Frequently Skipped**: Low completion rate
- **Conditionally Shown**: Only appear for some users

**Use Cases**:
- Identify confusing or unnecessary fields
- Optimize form length
- Improve user experience

### Response Distribution

For choice fields (radio, dropdown, checkboxes):
- **Distribution Chart**: See answer frequencies
- **Most Common Answers**: Top selections
- **Response Patterns**: Identify trends

**Example**:
```
Question: "How did you hear about us?"
- Google: 45%
- Social Media: 30%
- Friend: 15%
- Other: 10%
```

### Average Response Time

Track how long users spend on each field:
- **Fast Fields**: Quick to answer
- **Slow Fields**: May need clarification
- **Optimization Opportunities**: Identify problem areas

## Drop-off Analysis

### Where Users Leave

Identify form abandonment points:
- **Page-Level**: Which page do users leave on?
- **Field-Level**: Which field causes drop-offs?
- **Time-Based**: When do users typically leave?

**Use Cases**:
- Identify problematic sections
- Optimize form flow
- Reduce abandonment

### Drop-off Reasons

Common reasons for drop-offs:
- **Form Too Long**: Users get overwhelmed
- **Confusing Fields**: Unclear questions
- **Technical Issues**: Form errors or bugs
- **Privacy Concerns**: Too much personal info

## Real-Time Analytics

### Live Dashboard

Monitor form activity in real-time:
- **Live Submissions**: See submissions as they happen
- **Active Users**: Users currently filling form
- **Recent Activity**: Latest submissions and events

### Real-Time Counters

- **Today's Submissions**: Count for current day
- **This Week**: Weekly submission count
- **This Month**: Monthly submission count

## Exporting Analytics

### Export Options

1. **CSV Export**:
   - Download submission data as CSV
   - Includes all field values
   - Compatible with Excel, Google Sheets

2. **JSON Export**:
   - Download as JSON
   - Preserves data structure
   - Useful for integrations

3. **Report Export**:
   - Generate analytics report
   - PDF or HTML format
   - Includes charts and metrics

### Scheduled Exports

Set up automatic exports:
- **Daily**: Receive daily summary
- **Weekly**: Weekly report
- **Monthly**: Monthly analytics

## Custom Analytics

### Custom Metrics

Define custom metrics:
- **Conversion Rate**: Submissions / Visitors
- **Cost Per Submission**: Ad spend / Submissions
- **Field Completion Score**: Average completion rate

### Custom Reports

Create custom reports:
- **Date Ranges**: Custom time periods
- **Filters**: Filter by field values
- **Grouping**: Group by categories

## Using Analytics for Optimization

### Identify Issues

1. **Low Completion Rate**:
   - Form may be too long
   - Fields may be confusing
   - Technical issues

2. **High Drop-off at Specific Field**:
   - Field may be problematic
   - Conditional logic issue
   - Validation too strict

3. **Slow Completion Times**:
   - Form too complex
   - Too many fields
   - Poor mobile experience

### Optimization Strategies

1. **Reduce Form Length**:
   - Remove unnecessary fields
   - Use conditional logic
   - Split into multiple pages

2. **Improve Field Clarity**:
   - Add help text
   - Improve labels
   - Provide examples

3. **Optimize Mobile Experience**:
   - Test on mobile devices
   - Improve touch targets
   - Simplify layout

## Analytics Best Practices

1. **Monitor Regularly**: Check analytics weekly
2. **Set Goals**: Define success metrics
3. **Track Trends**: Watch for changes over time
4. **A/B Testing**: Test form variations
5. **User Feedback**: Combine analytics with feedback
6. **Action on Data**: Make improvements based on insights

## Privacy & Compliance

### Data Privacy

- Analytics respect user privacy
- No personally identifiable information in public analytics
- Compliant with GDPR, CCPA

### Data Retention

- Analytics data retained per your settings
- Can export and delete data
- Follow data retention policies

## API Access

Access analytics programmatically:

```javascript
// Get form analytics
GET /api/forms/[formId]/analytics

// Response
{
  "totalSubmissions": 150,
  "completionRate": 0.85,
  "submissionsByDate": [...],
  "fieldAnalytics": {...}
}
```

See [API Reference](../api/forms.md) for details.

## Next Steps

- [Publishing](./publishing.md) - Learn about publishing forms
- [Building Forms](./building-forms.md) - Optimize your forms
- [API Reference](../api/forms.md) - Access analytics via API
