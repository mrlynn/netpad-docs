/**
 * Config Serializer
 * Converts template configuration to JSON and TypeScript formats
 */

import type { Template } from '../types';

/**
 * Convert a value to TypeScript code representation
 */
function valueToTypeScript(value: unknown, indent: number = 0): string {
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

  if (typeof value === 'object' && value !== null) {
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
 * Convert template name to camelCase for variable name
 */
function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

/**
 * Serialize template configuration to TypeScript format
 */
export function serializeToTypeScript(template: Template): string {
  const varName = toCamelCase(template.name) + 'Config';
  const lines: string[] = [];

  lines.push(`const ${varName} = {`);
  lines.push(`  name: '${template.name.replace(/'/g, "\\'")}',`);
  lines.push(`  fields: [`);

  template.fields.forEach((field, index) => {
    const isLast = index === template.fields.length - 1;
    lines.push(`    {`);
    lines.push(`      type: '${field.type}',`);
    lines.push(`      path: '${field.path}',`);
    lines.push(`      label: '${field.label.replace(/'/g, "\\'")}',`);
    if (field.required) {
      lines.push(`      required: true,`);
    }
    lines.push(`    }${isLast ? '' : ','}`);
  });

  lines.push(`  ],`);
  lines.push(`};`);

  return lines.join('\n');
}

/**
 * Serialize template configuration to JSON format
 */
export function serializeToJson(template: Template): string {
  const config = {
    name: template.name,
    fields: template.fields.map(field => ({
      type: field.type,
      path: field.path,
      label: field.label,
      ...(field.required && { required: true }),
    })),
  };

  return JSON.stringify(config, null, 2);
}

/**
 * Serialize to the specified format
 */
export function serialize(
  template: Template,
  format: 'json' | 'typescript'
): string {
  return format === 'json'
    ? serializeToJson(template)
    : serializeToTypeScript(template);
}
