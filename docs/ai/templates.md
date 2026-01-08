# Template Management

NetPad includes built-in templates for conversational forms and allows you to create, clone, and customize your own templates.

## Built-in Templates

NetPad provides several pre-built templates for common use cases:

### IT Helpdesk

**Category**: Support  
**Use Case**: Technical support ticket creation

**Topics Covered**:
- Issue description and category
- Urgency level
- Device information
- User contact details
- Error messages
- Impact assessment

**Extraction Schema**:
- Issue category (hardware, software, network, other)
- Urgency level (low, medium, high, critical)
- Description (textarea)
- User email
- Device information
- Error messages

### Customer Feedback

**Category**: Feedback  
**Use Case**: Satisfaction and feedback collection

**Topics Covered**:
- Overall satisfaction
- Specific pain points
- Feature requests
- Improvement suggestions
- Follow-up preferences

**Extraction Schema**:
- Satisfaction rating (1-5)
- Feedback category
- Detailed feedback (textarea)
- Contact preference
- Follow-up consent

### Patient Intake

**Category**: Intake  
**Use Case**: Healthcare patient information

**Topics Covered**:
- Medical history
- Current symptoms
- Medication information
- Insurance details
- Appointment preferences

**Extraction Schema**:
- Patient name
- Date of birth
- Medical history
- Current medications
- Insurance information
- Appointment preference

### General Intake

**Category**: Intake  
**Use Case**: Flexible intake for various needs

**Topics Covered**:
- Basic information
- Specific requirements
- Preferences
- Additional details

**Extraction Schema**:
- Customizable based on needs

## Accessing Templates

### In Form Builder

1. Click **"New Form"**
2. Select **"Conversational Form"**
3. Choose **"Use Template"**
4. Browse available templates
5. Select a template to use

### In Settings

1. Navigate to **Settings > Templates**
2. View all templates (built-in + custom)
3. Filter by:
   - Source (Built-in, Custom)
   - Category
   - Tags

## Template Management

### Viewing Templates

The template management interface shows:

- **Template Name**: Display name
- **Category**: Template category
- **Source**: Built-in or Custom
- **Description**: What the template is for
- **Tags**: Searchable tags
- **Actions**: Clone, Edit, Delete

### Filtering Templates

Filter templates by:

- **Source**: Built-in only, Custom only, or All
- **Category**: Support, Feedback, Intake, etc.
- **Tags**: Search by tags
- **Search**: Text search across names and descriptions

## Using Templates

### Use as-is

1. Select a template
2. Configure basic settings (name, description)
3. Review and adjust topics if needed
4. Configure extraction schema
5. Publish

### Clone and Customize

1. Find the template you want
2. Click **"Clone"**
3. Customize:
   - Topics
   - Persona
   - Extraction schema
   - Conversation limits
4. Save as new template

## Creating Custom Templates

### From Scratch

1. Navigate to **Settings > Templates**
2. Click **"Create Template"**
3. Configure all sections:
   - Basics (name, description, category)
   - Persona & Limits
   - Topics
   - Extraction Schema
   - Prompts (optional)
4. Save template

### From Existing Form

1. Open a conversational form
2. Click **"Save as Template"**
3. Configure template details
4. Save

## Template Components

### 1. Basics

- **Name**: Template name
- **Description**: What it's used for
- **Category**: Template category
- **Priority**: Template priority level
- **Tags**: Searchable tags

### 2. Persona & Limits

- **Objective**: What to accomplish
- **Context**: Business context
- **Persona Style**: Professional, Friendly, Casual, Empathetic
- **Tone**: Custom tone description
- **Behaviors**: List of behaviors
- **Restrictions**: What not to do
- **Conversation Limits**: Max turns, duration, confidence

### 3. Topics

Define conversation topics:

- **Topic ID**: Unique identifier
- **Name**: Display name
- **Description**: What to collect
- **Priority**: Required, Important, Optional
- **Depth**: Surface, Moderate, Deep

### 4. Extraction Schema

Define structured data fields:

- **Field ID**: Unique identifier
- **Name**: Display name
- **Type**: Field type (text, select, email, etc.)
- **Required**: Whether field is required
- **Validation**: Validation rules
- **Options**: For select fields

### 5. Prompts (Advanced)

Custom prompt templates:

- **Greeting**: Initial message
- **Follow-up**: Follow-up question template
- **Clarification**: Clarification request
- **Confirmation**: Data confirmation
- **Completion**: Completion message

## Template Best Practices

1. **Clear Naming**: Use descriptive, searchable names
2. **Good Descriptions**: Explain what the template is for
3. **Appropriate Categories**: Use consistent categories
4. **Relevant Tags**: Add searchable tags
5. **Test Templates**: Test before sharing
6. **Document Custom Fields**: Explain custom extraction fields
7. **Version Control**: Track template changes

## Sharing Templates

### Within Organization

Templates are shared at the organization level:

- All organization members can view templates
- Admins can edit and delete templates
- Members can clone and use templates

### Export/Import

- **Export**: Download template as JSON
- **Import**: Upload template JSON file
- **Share**: Share template files with other organizations

## Template Examples

### Example: Event Registration

**Objective**: "Collect event registration information"

**Topics**:
1. Attendee Information (Required, Surface)
2. Event Preferences (Important, Moderate)
3. Dietary Restrictions (Optional, Surface)
4. Accessibility Needs (Optional, Surface)

**Extraction Schema**:
- Name (text, required)
- Email (email, required)
- Company (text, optional)
- Event Sessions (multi-select, required)
- Dietary Restrictions (select, optional)
- Accessibility Needs (textarea, optional)

## Next Steps

- [Conversational Forms](./conversational-forms.md) - Create conversational forms
- [AI Agents](./agents.md) - Explore AI capabilities
- [Configuration](./configuration.md) - Advanced configuration
