/**
 * Config Serializer
 * Converts form configuration to JSON and TypeScript formats
 */

import type { FieldConfig, ConditionalRule, ComputedFieldConfig, FormSettings } from '../types';

interface SerializeOptions {
  fields: FieldConfig[];
  conditionalLogic?: ConditionalRule[];
  computedFields?: ComputedFieldConfig[];
  settings?: FormSettings;
}

/**
 * Serialize configuration to JSON format
 */
export function serializeToJson(options: SerializeOptions): string {
  const config: Record<string, any> = {
    fields: options.fields,
  };

  if (options.conditionalLogic?.length) {
    config.conditionalLogic = options.conditionalLogic;
  }

  if (options.computedFields?.length) {
    config.computedFields = options.computedFields;
  }

  if (options.settings) {
    config.settings = options.settings;
  }

  return JSON.stringify(config, null, 2);
}

/**
 * Convert a value to TypeScript code representation
 */
function valueToTypeScript(value: any, indent: number = 0): string {
  const spaces = '  '.repeat(indent);

  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'string') return `'${value.replace(/'/g, "\\'")}'`;
  if (typeof value === 'number') return String(value);
  if (typeof value === 'boolean') return String(value);

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const items = value.map(item => valueToTypeScript(item, indent + 1));
    if (items.every(item => !item.includes('\n')) && items.join(', ').length < 60) {
      return `[${items.join(', ')}]`;
    }
    return `[\n${items.map(item => `${spaces}  ${item}`).join(',\n')}\n${spaces}]`;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value).filter(([_, v]) => v !== undefined);
    if (entries.length === 0) return '{}';

    const lines = entries.map(([key, val]) => {
      const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
      return `${spaces}  ${keyStr}: ${valueToTypeScript(val, indent + 1)}`;
    });

    return `{\n${lines.join(',\n')}\n${spaces}}`;
  }

  return String(value);
}

/**
 * Serialize a single field to TypeScript
 */
function fieldToTypeScript(field: FieldConfig, indent: number): string {
  const spaces = '  '.repeat(indent);
  const lines: string[] = [];

  // Required properties first
  lines.push(`${spaces}  type: '${field.type}'`);
  lines.push(`${spaces}  path: '${field.path}'`);
  lines.push(`${spaces}  label: '${field.label.replace(/'/g, "\\'")}'`);

  // Optional common properties
  if (field.required) lines.push(`${spaces}  required: true`);
  if (field.placeholder) lines.push(`${spaces}  placeholder: '${field.placeholder.replace(/'/g, "\\'")}'`);
  if (field.helpText) lines.push(`${spaces}  helpText: '${field.helpText.replace(/'/g, "\\'")}'`);
  if (field.defaultValue !== undefined) lines.push(`${spaces}  defaultValue: ${valueToTypeScript(field.defaultValue, indent + 1)}`);
  if (field.disabled) lines.push(`${spaces}  disabled: true`);
  if (field.hidden) lines.push(`${spaces}  hidden: true`);
  if (field.width && field.width !== 'full') lines.push(`${spaces}  width: '${field.width}'`);

  // Validation
  if (field.validation) {
    lines.push(`${spaces}  validation: ${valueToTypeScript(field.validation, indent + 1)}`);
  }

  // Type-specific properties
  if (field.options) {
    const optionsStr = field.options.map(opt =>
      `{ label: '${opt.label.replace(/'/g, "\\'")}', value: '${opt.value.replace(/'/g, "\\'")}' }`
    ).join(', ');
    lines.push(`${spaces}  options: [${optionsStr}]`);
  }
  if (field.rows) lines.push(`${spaces}  rows: ${field.rows}`);
  if (field.maxRating) lines.push(`${spaces}  maxRating: ${field.maxRating}`);
  if (field.icon) lines.push(`${spaces}  icon: '${field.icon}'`);
  if (field.min !== undefined) lines.push(`${spaces}  min: ${field.min}`);
  if (field.max !== undefined) lines.push(`${spaces}  max: ${field.max}`);
  if (field.step) lines.push(`${spaces}  step: ${field.step}`);
  if (field.currency) lines.push(`${spaces}  currency: '${field.currency}'`);

  return `${spaces}{\n${lines.join(',\n')}\n${spaces}}`;
}

/**
 * Serialize configuration to TypeScript format
 */
export function serializeToTypeScript(options: SerializeOptions): string {
  const lines: string[] = [];

  lines.push('const formConfig = {');

  // Fields
  lines.push('  fields: [');
  options.fields.forEach((field, index) => {
    const fieldStr = fieldToTypeScript(field, 1);
    lines.push(fieldStr + (index < options.fields.length - 1 ? ',' : ''));
  });
  lines.push('  ]' + (options.conditionalLogic?.length || options.computedFields?.length || options.settings ? ',' : ''));

  // Conditional logic
  if (options.conditionalLogic?.length) {
    lines.push('  conditionalLogic: ' + valueToTypeScript(options.conditionalLogic, 1) +
      (options.computedFields?.length || options.settings ? ',' : ''));
  }

  // Computed fields
  if (options.computedFields?.length) {
    lines.push('  computedFields: ' + valueToTypeScript(options.computedFields, 1) +
      (options.settings ? ',' : ''));
  }

  // Settings
  if (options.settings) {
    lines.push('  settings: ' + valueToTypeScript(options.settings, 1));
  }

  lines.push('};');

  return lines.join('\n');
}

/**
 * Serialize to the specified format
 */
export function serialize(
  options: SerializeOptions,
  format: 'json' | 'typescript'
): string {
  return format === 'json'
    ? serializeToJson(options)
    : serializeToTypeScript(options);
}
