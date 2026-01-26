---
draft: true
slug: import-nightmare
title: "Importing Data: Why 'Just Upload the CSV' Is Never That Simple"
authors: [mrlynn]
tags: [netpad, devlife, data]
image: ./comic.png
---

![The Import Nightmare](./comic.png)

## The Pain Is Real

The client sent their "clean data" for import. You open the CSV and find: mixed date formats, phone numbers with and without country codes, empty rows scattered throughout, encoding that displays special characters as question marks, and column headers that don't match your schema. Welcome to data import reality.

<!-- truncate -->

## Why This Happens

Users create data in spreadsheets, and spreadsheets are permissive:

- **Mixed formats** - Dates in three different formats in the same column
- **Invisible characters** - Non-printing characters that break parsing
- **Encoding chaos** - Excel saves in various encodings depending on moon phase
- **Missing data** - Empty cells that might be null, empty string, or "N/A"
- **Extra data** - Columns you don't need mixed with ones you do
- **Human variations** - "USA", "U.S.A.", "United States", "US" all meaning the same thing

Every import becomes a data cleaning project. You write scripts to normalize formats, deduplicate entries, validate required fields, and handle edge cases. Then the client sends a new file with a new set of problems.

## The NetPad Approach

NetPad's import tools expect messy data:

- **Column mapping** - Visually map source columns to destination fields
- **Preview** - See how data will be transformed before importing
- **Validation** - Check data against form field rules
- **Error handling** - Skip invalid rows or fail entire import
- **Transformation** - Clean and normalize during import
- **Duplicate detection** - Identify and handle duplicates

Upload the CSV, map the columns, preview the results, fix any issues, and import. The mapping can be saved as a template for recurring imports from the same source.

## Try It Yourself

Import data without the drama. [Learn about NetPad's import tools](/docs/data-explorer/browsing-data) and handle messy CSVs with confidence.

---

*This post is part of our weekly DevLife comic series. [Subscribe to the blog](/blog) to get new comics every Monday.*
