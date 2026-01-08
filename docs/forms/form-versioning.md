# Form Versioning

Save snapshots of your form configuration over time. Restore to previous versions if needed.

## Creating Versions

Click the **+** button in the Version History panel to create a new version snapshot. Add optional change notes to describe what changed.

### When to Create Versions

- Before making significant changes
- After completing a feature
- Before publishing
- When sharing with others for review

## Version Information

Each version includes:

- **Version number** - Auto-incremented (v1, v2, v3...)
- **Timestamp** - When the version was created
- **Change notes** - Description of modifications
- **Field count** - Number of fields at that version
- **Page count** - Number of pages at that version
- **Published status** - Whether form was published at that time

## Version History Panel

Access version history from the Form Builder:

1. Open the form in Form Builder
2. Click **Version History** in the toolbar or sidebar
3. Browse all saved versions
4. View details of each version

## Restoring Versions

Click the **restore** button on any version to revert your form to that state.

### Restore Process

1. Select the version to restore
2. Click **Restore** button
3. Confirm the restoration
4. Current configuration is saved as a new version first
5. Form reverts to the selected version

:::warning
Restoring a version replaces all current field configurations, pages, and variables with the snapshot values.
:::

### Undo a Restore

Since your current configuration is saved before restoration, you can:

1. Go to Version History
2. Find the version that was auto-saved
3. Restore that version to undo

## Comparing Versions

View differences between versions:

- **Fields added** - New fields in newer version
- **Fields removed** - Fields deleted
- **Fields modified** - Changed configurations
- **Settings changes** - Form-level setting differences

## Version Best Practices

1. **Descriptive notes** - Write clear change descriptions
2. **Version before changes** - Save before major edits
3. **Regular snapshots** - Version periodically, not just at milestones
4. **Review before restore** - Check version details before restoring
5. **Test after restore** - Verify form works correctly

## Auto-Versioning

NetPad can automatically create versions:

- **Before publish** - Auto-version before going live
- **On schedule** - Daily/weekly snapshots
- **Before restore** - Always saves current state

## Version Retention

Configure version retention:

- **Keep all** - Never delete versions
- **Keep last N** - Retain only recent versions
- **Keep published** - Always retain published versions
- **Time-based** - Delete versions older than X days

## Use Cases

### Feature Development

```
v1: Initial form with basic fields
v2: Added validation rules
v3: Added conditional logic
v4: Added multi-page structure
v5: Published to production
```

### A/B Testing

```
v1: Original form
v2: Test variation A (different layout)
v3: Test variation B (different fields)
v4: Winner (restored from v2)
```

### Rollback

```
v5: Current (has issues)
v4: Stable production version
→ Restore v4 to fix issues quickly
```

## API Access

Access versions programmatically:

```javascript
// Get version history
GET /api/forms/{formId}/versions

// Get specific version
GET /api/forms/{formId}/versions/{versionId}

// Restore version
POST /api/forms/{formId}/versions/{versionId}/restore
```

## Next Steps

- [Form Builder](./form-builder.md) - Create and edit forms
- [Form Library](./form-library.md) - Manage saved forms
- [Form Publishing](./publishing.md) - Publish your forms
