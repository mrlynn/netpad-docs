# Getting Started with NetPad

Learn what NetPad is, how it connects to MongoDB, and what you need to get started building forms.

## What is NetPad?

NetPad is a visual tool for building data collection forms that save directly to MongoDB. Design forms without writing code, and submissions are automatically stored in your database.

## What is MongoDB?

MongoDB is a popular database that stores data in flexible, JSON-like documents. It's used by millions of applications worldwide to store and manage data.

## What is a Connection String?

A connection string is like a URL to your database. It contains the address of your MongoDB server and the credentials needed to access it securely.

```
mongodb+srv://username:password@cluster.mongodb.net/database
```

- **mongodb+srv://** - The protocol used to connect
- **username:password** - Your database credentials
- **cluster.mongodb.net** - The server address
- **/database** - The specific database to use

## Getting Your Connection String

If you have a MongoDB Atlas account, you can find your connection string in the Atlas dashboard under **Connect** > **Connect your application**. Don't have MongoDB? No problem - NetPad can provision a free MongoDB Atlas cluster for you automatically when you create your workspace.

## Quick Setup

1. **Create a workspace** - Give your workspace a name
2. **Get a database** - Use your own MongoDB or let us provision a free one
3. **Build forms** - Use the visual Form Builder to design your forms
4. **Collect data** - Publish forms and start collecting submissions

:::tip
New to MongoDB? Let NetPad provision a free MongoDB Atlas cluster for you. It takes just a minute and requires no configuration.
:::

:::warning
Keep your connection string secure. It contains credentials to access your database. Never share it publicly or commit it to version control.
:::

## Next Steps

- [Connection Vault](../platform/connection-vault.md) - Learn more about connecting to MongoDB
- [Form Builder](../forms/form-builder.md) - Start building forms
- [Form Publishing](../forms/publishing.md) - Learn how to publish your forms
