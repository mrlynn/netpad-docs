
# Modular Node System (2025+)

NetPad’s **modular node system** (introduced in Sprint 5) allows you to add or update node types in a single file, ensuring maintainability, type safety, and seamless browser/server compatibility.

---

## Key Principles

- **Single-file definitions** in `/src/app/node-system/definitions/`
- **All metadata, property definitions, validation, factory, and runner reference in one place**
- **Zero breaking changes**—legacy system automatically falls back for older nodes
- **Browser/server safety**—no Node.js-only dependencies in the browser bundle

---

## How to Add a New Node (Step-by-Step)

### 1. **Create the Node Definition File**

Copy an existing node (e.g., `ChatNode.js`) and update fields:

```js
// src/app/node-system/definitions/MyNewNode.js
import { z } from 'zod';

const MyNewNodeDefinition = {
  type: 'my_new_node',
  label: 'My New Node',
  description: 'What this node does',
  category: 'Utilities',
  version: '1.0.0',
  appearance: {
    icon: 'Settings',
    color: '#4caf50',
    defaultSize: { width: 120, height: 80 },
    style: 'rounded-rect'
  },
  ports: {
    input: [{ id: 'input1', label: 'Input', type: 'any' }],
    output: [
      { id: 'output1', label: 'Output', type: 'any' },
      { id: 'error', label: 'Error', type: 'error' }
    ]
  },
  properties: [
    {
      section: 'Configuration',
      fields: [
        { name: 'myProperty', type: 'text', label: 'My Property', required: true, default: 'default value' }
      ]
    }
  ],
  runtime: { runner: 'myNewNodeRunner', timeout: 30000, async: true },
  validation: {
    schema: z.object({
      myProperty: z.string().min(1, 'Required')
    })
  },
  create: (params = {}) => ({
    id: params.id || `node_${Date.now()}`,
    type: 'my_new_node',
    label: params.label || 'My New Node',
    x: params.x || 0,
    y: params.y || 0,
    width: 120,
    height: 80,
    params: { myProperty: '', ...params.params }
  })
};

export default MyNewNodeDefinition;
```

---

### 2. **Enable in Registry**

Add your node type to `browserSafeTypes` in `/src/app/node-system/core/NodeTypeRegistry.js` and `modernSafeTypes` in `/src/app/components/tabs/ModernPropertiesTab.js`:

```js
const browserSafeTypes = ['agent_node', 'chat_node', ..., 'my_new_node'];
const modernSafeTypes = ['agent_node', 'chat_node', ..., 'my_new_node'];
```

---

### 3. **Add to Palette (Optional)**

In `/src/app/components/ShapePalette.js`:

```js
{ type: 'my_new_node', label: 'My New Node', icon: Settings }
```

---

### 4. **Create the Runner (if needed)**

`/src/app/runners/myNewNodeRunner.js`:

```js
export async function runMyNewNode(node, { getInput, setOutput, trigger, context, log }) {
  try {
    const input = await getInput('input1');
    const result = processInput(input, node.params.myProperty);
    setOutput('output1', result);
    await trigger('output1');
  } catch (error) {
    log(`Error in ${node.type}: ${error.message}`);
    setOutput('error', error.message);
    await trigger('error');
  }
}
```

Register in `/src/app/engine/executionEngine.js`:

```js
import { runMyNewNode } from '../runners/myNewNodeRunner';

const defaultNodeRunners = {
  ...,
  my_new_node: runMyNewNode,
};
```

---

### 5. **Test the Node**

- It appears in the palette
- Can be created/placed on canvas
- Properties panel displays defined fields
- Validation works
- Node executes in workflows (if applicable)
- Persists correctly in saves/loads
- No browser/server errors

---

## Advanced Features

- **Complex Properties:** Use property types `multiline`, `select`, `boolean`, `nodeSelect`, etc.
- **Custom Validation:** Add Zod schema and/or custom `validate` function.
- **Custom Visuals:** Provide a custom React renderer for specialized UIs.

---

## FAQ

**Q: My node isn’t in the palette?**  
A: Make sure it’s in both the palette and the browser/modern safe type lists.

**Q: Properties panel doesn’t work?**  
A: Check `properties` field, and ensure the node type is using the modern system.

**Q: Runner not found?**  
A: Use a string reference, not direct import. Register runner in the execution engine.

**Q: Breaking changes?**  
A: The modular system is fully backward compatible—legacy fallback is automatic.

---

## Resources

- [Extending NetPad](./extending-netpad.md)
- [Architecture Guide](./architecture.md)

---

The modular node system enables rapid, safe, and scalable growth for NetPad—build confidently!
