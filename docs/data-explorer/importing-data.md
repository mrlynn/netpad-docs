# Importing Data

Import data from CSV or XLSX files into MongoDB collections using NetPad's import wizard.

## Starting an Import

1. **Navigate to Data Import**:
   - Go to Data Explorer
   - Click "Import Data" button
   - Or go to `/data/import`

2. **Select File**:
   - Click "Choose File"
   - Select CSV or XLSX file
   - File uploads to NetPad

## Import Wizard Steps

### Step 1: Upload File

- **Select File**: Choose CSV or XLSX
- **File Size Limit**: Check file size limits
- **Supported Formats**: CSV, XLSX
- **Upload**: File uploads automatically

### Step 2: Analyze File

NetPad analyzes your file:
- **Detects Columns**: Identifies all columns
- **Detects Types**: Infers data types
- **Shows Preview**: Displays sample rows
- **Identifies Issues**: Flags potential problems

### Step 3: Map Columns

Map file columns to MongoDB fields:

1. **View Columns**:
   - See all file columns
   - See detected types
   - See sample values

2. **Map to Fields**:
   - Select target field for each column
   - Create new fields if needed
   - Skip columns you don't need

3. **Configure Mapping**:
   - Field names
   - Data types
   - Default values
   - Transformations

### Step 4: Configure Import

Set import options:

- **Target Collection**: Select or create collection
- **Import Mode**:
  - **Insert**: Add new documents
  - **Update**: Update existing documents
  - **Upsert**: Insert or update
- **Duplicate Handling**: Skip or update duplicates
- **Batch Size**: Documents per batch

### Step 5: Preview

Review mapped data:
- **Preview Rows**: See how data will look
- **Verify Mapping**: Check field mappings
- **Check Types**: Verify data types
- **Identify Issues**: Fix any problems

### Step 6: Execute Import

Run the import:
1. **Click "Import"**: Start import process
2. **Monitor Progress**: Watch import progress
3. **View Results**: See import summary
4. **Review Errors**: Check any errors

## Column Mapping

### Automatic Mapping

NetPad tries to map columns automatically:
- **Name Matching**: Matches column names to field names
- **Type Matching**: Matches data types
- **Smart Detection**: Infers relationships

### Manual Mapping

Manually map columns:
1. **Select Column**: Click column
2. **Choose Field**: Select target field
3. **Configure**: Set mapping options
4. **Transform**: Apply transformations if needed

### Field Creation

Create new fields during import:
1. **Click "New Field"**: For unmapped column
2. **Set Field Name**: Enter field name
3. **Set Type**: Choose data type
4. **Configure**: Set field options

## Data Transformations

### Type Conversions

Convert data types:
- **String to Number**: Parse numbers
- **String to Date**: Parse dates
- **Format Dates**: Standardize date formats
- **Trim Whitespace**: Clean strings

### Value Transformations

Transform values:
- **Uppercase/Lowercase**: Change case
- **Replace Text**: Find and replace
- **Concatenate**: Combine columns
- **Split**: Divide into multiple fields

### Default Values

Set defaults for missing values:
- **Empty Cells**: Fill with default
- **Null Values**: Replace nulls
- **Missing Fields**: Add default values

## Import Modes

### Insert Mode

Add new documents:
- **New Documents**: Creates new documents
- **No Updates**: Doesn't modify existing
- **Use When**: Importing new data

### Update Mode

Update existing documents:
- **Matches Existing**: Finds matching documents
- **Updates Fields**: Modifies existing documents
- **Use When**: Updating existing data

**Matching Criteria**:
- Match by `_id`
- Match by unique field
- Match by multiple fields

### Upsert Mode

Insert or update:
- **Insert New**: Creates new documents
- **Update Existing**: Modifies existing
- **Use When**: Mixed new and existing data

## Handling Duplicates

### Skip Duplicates

Ignore duplicate entries:
- **Detect Duplicates**: Based on matching criteria
- **Skip**: Don't import duplicates
- **Report**: Show skipped count

### Update Duplicates

Update existing duplicates:
- **Find Duplicates**: Match criteria
- **Update**: Modify existing documents
- **Merge**: Combine data

### Duplicate Criteria

Define what counts as duplicate:
- **By ID**: Match `_id` field
- **By Field**: Match specific field
- **By Multiple Fields**: Match combination

## Import Progress

### Monitoring

Watch import progress:
- **Progress Bar**: Shows completion percentage
- **Documents Processed**: Count of processed documents
- **Errors**: Number of errors
- **Time Remaining**: Estimated time

### Results

View import results:
- **Total Documents**: Number imported
- **Successful**: Successfully imported
- **Failed**: Failed imports
- **Errors**: Error details

## Error Handling

### Common Errors

**Invalid Data Types**:
- Fix: Adjust type mapping
- Solution: Transform data

**Missing Required Fields**:
- Fix: Map required fields
- Solution: Set default values

**Duplicate Keys**:
- Fix: Adjust duplicate handling
- Solution: Update instead of insert

**File Format Issues**:
- Fix: Check file format
- Solution: Re-export file

### Error Reports

View detailed errors:
- **Error Messages**: What went wrong
- **Row Numbers**: Which rows failed
- **Field Names**: Which fields had issues
- **Fix Suggestions**: How to fix

## Best Practices

1. **Prepare Data**: Clean data before import
2. **Test First**: Import small sample first
3. **Backup**: Backup collection before import
4. **Verify Mapping**: Check all mappings
5. **Monitor Progress**: Watch for errors
6. **Review Results**: Verify imported data

## File Format Requirements

### CSV Files

- **Encoding**: UTF-8 recommended
- **Delimiter**: Comma (configurable)
- **Headers**: First row should be headers
- **Quotes**: Use quotes for fields with commas

### XLSX Files

- **Format**: Excel 2007+ format
- **Sheets**: First sheet used by default
- **Headers**: First row should be headers
- **Data Types**: Preserved from Excel

## Next Steps

- [Browsing Data](./browsing-data.md) - View imported data
- [Exporting Data](./exporting-data.md) - Export data
