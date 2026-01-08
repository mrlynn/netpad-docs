# Form Analytics

Track form performance with comprehensive analytics including response trends, completion rates, and field-level statistics.

## Overview

The Analytics Dashboard provides insights into how your forms are performing. View response trends over time, completion rates, average submission time, and detailed statistics for each field.

## Key Metrics

### Total Responses
Count of all form submissions:
- Real-time counter
- Updates automatically
- Includes all submission statuses

### Completion Rate
Percentage of started forms that were completed:
- Indicates form usability
- Calculated as: (Completed / Started) × 100
- Higher is better

### Average Time
Average time to complete the form:
- Helps identify form complexity
- Useful for optimization
- Measured from first field to submission

### Response Trend
Volume of submissions over time:
- Daily, weekly, or monthly views
- Identify peak submission times
- Track growth patterns

## Time Range Filtering

Filter analytics by date range to analyze performance over specific periods:

- **Today** - Current day
- **Last 7 days** - Past week
- **Last 30 days** - Past month
- **Last 90 days** - Past quarter
- **Custom range** - Select specific dates

Compare trends across different timeframes to identify patterns.

## Real-Time Updates

The dashboard includes a real-time response counter that updates automatically:
- Shows current total number of responses
- Live updates as submissions come in
- No page refresh needed

## Accessing Analytics

1. Navigate to your form in the dashboard
2. Click **Analytics** tab
3. View comprehensive metrics and charts

Or access directly:
```
/forms/{formId}/analytics
```

:::tip
Use the Analytics tab to identify which fields have the highest drop-off rates or validation errors, helping you optimize your form design.
:::

## Dashboard Sections

### Summary Cards
Quick overview of key metrics:
- Total submissions
- Completion rate
- Average time
- Today's count

### Response Chart
Visual trend of submissions:
- Line or bar chart
- Multiple time periods
- Export as image

### Field Statistics
Per-field analytics:
- Completion rates
- Value distributions
- Error rates

## Using Analytics for Optimization

### Identify Issues
- **Low completion rate** - Form may be too long or confusing
- **High drop-off at specific field** - Field may be problematic
- **Slow completion times** - Form too complex

### Optimization Strategies
- Remove unnecessary fields
- Add help text to confusing fields
- Split long forms into pages
- Simplify validation rules

## Next Steps

- [Response Management](./response-management.md) - View and manage responses
- [Response Export](./response-export.md) - Export response data
- [Field Analytics](./field-analytics.md) - Detailed field statistics
