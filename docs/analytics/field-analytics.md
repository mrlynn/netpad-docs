# Field Analytics

View detailed statistics and distributions for individual form fields. Understand how users interact with each field.

## Field Statistics

Each field in your form has its own analytics showing how users interact with it. Statistics vary by field type.

## Text Fields

### Statistics
- **Average length** - Mean character count
- **Min/Max length** - Shortest and longest entries
- **Common values** - Most frequently entered values
- **Empty rate** - Percentage of responses with no value

### Insights
- Identify if users are writing too much or too little
- Find common entries that could become dropdown options
- Detect fields users frequently skip

## Number Fields

### Statistics
- **Average** - Mean value
- **Median** - Middle value
- **Min/Max** - Range of values
- **Standard deviation** - Value spread
- **Distribution** - Histogram showing value frequency

### Insights
- Understand typical values
- Identify outliers
- Validate expected ranges

### Visualization
```
Value Distribution:
0-10:    ████████ 40%
11-20:   ████████████ 35%
21-30:   ██████ 20%
31+:     ██ 5%
```

## Choice Fields (Dropdown, Radio, Checkbox)

### Statistics
- **Distribution** - Count and percentage for each option
- **Most selected** - Highest popularity
- **Least selected** - Lowest popularity
- **Multi-select patterns** - Common combinations (for checkboxes)

### Visualization

#### Pie Chart
Visual breakdown of selections:
- Each option as a slice
- Percentages labeled
- Color-coded

#### Bar Chart
Horizontal or vertical bars:
- Option names
- Count and percentage
- Sorted by popularity

### Example
```
How did you hear about us?
├── Google         ████████████████ 45%
├── Social Media   ██████████ 30%
├── Friend         █████ 15%
└── Other          ███ 10%
```

## Date Fields

### Statistics
- **Earliest** - First date entered
- **Latest** - Most recent date entered
- **Date range** - Span of dates
- **Distribution** - Frequency by day, week, or month
- **Trend** - Pattern over time

### Insights
- Identify popular dates
- See seasonal patterns
- Find booking trends

## Boolean Fields

### Statistics
- **True count** - Number of "yes" responses
- **False count** - Number of "no" responses
- **Percentage** - Proportion of true vs false
- **Skip rate** - How often field is left blank

### Visualization
```
Subscribe to newsletter:
├── Yes  ████████████████ 65%
└── No   ████████ 35%
```

## Completion Metrics

### Field Completion Rate
Percentage of responses with this field filled:
- 100% = Always completed
- Low % = Often skipped

### Skip Rate
How often the field is left empty:
- Identifies optional vs required behavior
- Highlights confusing fields

### Error Rate
How often validation errors occur:
- Pattern validation failures
- Min/max violations
- Required field errors

## Time Spent

### Average Time on Field
How long users spend on each field:
- Quick fields (< 5 seconds)
- Normal fields (5-30 seconds)
- Slow fields (> 30 seconds)

### Insights
- Long time = potentially confusing
- Very quick = possibly skipped
- Expected time vs actual

## Correlation Analysis

Understand relationships between fields:

### Field Dependencies
- Which fields are filled together
- Conditional logic effectiveness
- Branching patterns

### Value Correlations
- When field A = X, field B usually = Y
- Predictive patterns
- User segments

:::tip
Use field analytics to identify fields that users frequently skip or fields with unexpected value patterns. This can help improve form design.
:::

## Accessing Field Analytics

1. Navigate to form **Analytics** tab
2. Scroll to **Field Statistics** section
3. Click on individual fields for details
4. Or view all fields in summary table

## Using Insights

### Optimize Field Labels
If a field has high error rate:
- Clarify the label
- Add help text
- Provide examples

### Convert to Dropdowns
If a text field has common values:
- Create dropdown with options
- Reduce data entry errors
- Improve consistency

### Make Optional
If a field has low completion:
- Consider making optional
- Move to later page
- Remove if not needed

### Adjust Validation
If a field has high validation errors:
- Loosen constraints
- Improve error messages
- Add format hints

## Best Practices

1. **Monitor regularly** - Check analytics weekly
2. **Compare periods** - Look for changes over time
3. **Act on insights** - Improve based on data
4. **A/B test changes** - Measure improvement
5. **Focus on problem fields** - Fix lowest performers first

## Next Steps

- [Form Analytics](./overview.md) - View overall analytics
- [Response Management](./response-management.md) - View individual responses
- [Response Export](./response-export.md) - Export data for analysis
