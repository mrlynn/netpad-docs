# AI Configuration

Configure AI behavior, limits, and settings for conversational forms and AI agents.

## AI Settings

Access AI settings from **Settings > AI Configuration**.

### Global AI Settings

#### API Configuration

- **OpenAI API Key**: Your OpenAI API key for AI features
- **Model Selection**: Choose AI model (GPT-4, GPT-3.5, etc.)
- **Temperature**: Control randomness (0-1, default 0.7)
- **Max Tokens**: Maximum response length

#### Default Persona

Set default persona for new conversational forms:

- **Style**: Professional, Friendly, Casual, Empathetic
- **Default Tone**: Default tone description
- **Default Behaviors**: Default behavior list
- **Default Restrictions**: Default restrictions

#### Conversation Defaults

- **Default Max Turns**: Default maximum conversation exchanges
- **Default Max Duration**: Default maximum conversation time (minutes)
- **Default Min Confidence**: Default minimum confidence threshold (0-1)

## Conversational Form Configuration

### Per-Form Settings

Each conversational form has its own configuration:

#### Objective

Clear statement of what the form should accomplish:

```
"Collect IT support ticket information including issue 
description, urgency level, device information, and 
user contact details."
```

#### Context

Background information for the AI:

```
"We're an IT support team for a 500-person company. 
We handle hardware issues, software problems, network 
connectivity, and account access requests."
```

#### Topics

Define conversation topics:

```typescript
[
  {
    id: "issue-description",
    name: "Issue Description",
    description: "Detailed description of the technical problem",
    priority: "required",
    depth: "deep"
  },
  {
    id: "urgency-level",
    name: "Urgency Level",
    description: "How urgent is this issue?",
    priority: "required",
    depth: "surface"
  }
]
```

**Priority Options**:
- `required`: Must be collected
- `important`: Should be collected if possible
- `optional`: Collect if relevant

**Depth Options**:
- `surface`: Basic information only
- `moderate`: Some detail expected
- `deep`: Comprehensive information

#### Persona

Customize AI personality:

```typescript
{
  style: "professional",
  tone: "Helpful and patient, but efficient",
  behaviors: [
    "Ask one question at a time",
    "Provide reassurance when appropriate",
    "Clarify technical terms if needed"
  ],
  restrictions: [
    "Don't make technical diagnoses",
    "Don't promise specific resolution times",
    "Don't ask for passwords or sensitive credentials"
  ]
}
```

#### Conversation Limits

```typescript
{
  maxTurns: 15,        // Maximum conversation exchanges
  maxDuration: 10,     // Minutes
  minConfidence: 0.8    // 0-1 threshold
}
```

#### Extraction Schema

Define structured data fields:

```typescript
[
  {
    id: "issueCategory",
    name: "Issue Category",
    type: "select",
    required: true,
    options: ["hardware", "software", "network", "other"],
    validation: {
      required: true
    }
  },
  {
    id: "description",
    name: "Description",
    type: "textarea",
    required: true,
    validation: {
      minLength: 10,
      maxLength: 1000
    }
  }
]
```

### Advanced Configuration

#### Custom Prompts

Override default prompt templates:

```typescript
{
  greeting: "Hi! I'm here to help you...",
  followUp: "Can you tell me more about {topic}?",
  clarification: "I want to make sure I understand...",
  confirmation: "Great! I've collected: {summary}...",
  completion: "Thank you! Your ticket has been submitted..."
}
```

#### Topic Dependencies

Define relationships between topics:

```typescript
{
  "deviceInfo": {
    dependsOn: ["issueCategory"],
    condition: "issueCategory === 'hardware'"
  }
}
```

#### Confidence Thresholds

Set minimum confidence per field:

```typescript
{
  "issueCategory": 0.9,    // High confidence required
  "description": 0.7,     // Medium confidence OK
  "deviceInfo": 0.5       // Low confidence acceptable
}
```

## AI Agent Configuration

### Agent Settings

Configure individual agents:

#### Form Generator

- **Default Field Types**: Preferred field types
- **Auto-Validation**: Auto-add validation rules
- **Multi-Page Threshold**: When to suggest multi-page

#### Inline Suggestions

- **Suggestion Frequency**: How often to show (always, sometimes, rarely)
- **Confidence Threshold**: Minimum confidence for suggestions
- **Learning Mode**: Learn from your patterns

#### Formula Assistant

- **Preferred Syntax**: Formula syntax style
- **Auto-Optimize**: Auto-optimize formulas
- **Error Detection**: Level of error checking

#### Form Optimization

- **Optimization Level**: Aggressive, Moderate, Conservative
- **Focus Areas**: Performance, UX, Accessibility, All
- **Auto-Apply**: Auto-apply safe optimizations

## Usage Limits

### Tier-Based Limits

AI usage is limited by subscription tier:

| Tier | AI Generations/Month |
|------|---------------------|
| **Free** | 10 |
| **Pro** | 100 |
| **Team** | 500 |
| **Enterprise** | Unlimited |

### Monitoring Usage

Track AI usage:

- **Current Usage**: Generations used this month
- **Remaining**: Generations remaining
- **Usage History**: Historical usage data
- **Per-Agent Usage**: Usage by agent type

### Usage Alerts

Configure alerts:

- **Warning Threshold**: Alert when X% used
- **Limit Reached**: Alert when limit reached
- **Reset Notification**: Alert when limit resets

## Best Practices

1. **Clear Objectives**: Write clear, specific objectives
2. **Relevant Context**: Provide sufficient business context
3. **Appropriate Limits**: Set reasonable conversation limits
4. **Test Configuration**: Test before publishing
5. **Monitor Usage**: Track AI usage regularly
6. **Iterate**: Improve based on results

## Troubleshooting

### Low Confidence Scores

- Provide more context
- Clarify topic descriptions
- Adjust confidence thresholds
- Review extraction schema

### Conversations Too Long

- Reduce max turns
- Simplify topics
- Adjust depth levels
- Improve topic descriptions

### Poor Extraction

- Review extraction schema
- Improve topic descriptions
- Adjust confidence thresholds
- Test with sample conversations

## Next Steps

- [Conversational Forms](./conversational-forms.md) - Create conversational forms
- [Template Management](./templates.md) - Use templates
- [AI Agents](./agents.md) - Explore AI capabilities
