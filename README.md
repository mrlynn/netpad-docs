# NetPad Documentation

Welcome to the official documentation repository for **NetPad**, a modern, collaborative SVG diagram editor.

## 📚 Live Documentation

- **Docs Site:** [https://docs.netpad.io](https://docs.netpad.io)

## 🚀 Project Overview

NetPad is a web-based, real-time diagram editor built with React, Material UI, and MongoDB Atlas. This repository contains all user and developer documentation for NetPad, including guides, API references, and developer notes.

## ✨ Features
- Real-time collaborative editing
- Cloud diagram storage (MongoDB Atlas)
- SVG/PNG export
- Templates gallery
- User authentication (email, Google, GitHub)
- Extensible shape palette
- Developer guides for extending NetPad

## 📁 Documentation Structure
- **Getting Started**: Introduction, installation, quick start, FAQ
- **User Guide**: Editor, collaboration, templates, integrations, export/share
- **Advanced**: API, customization, troubleshooting
- **Developer Guide**: Extending NetPad, data model
- **Legal**: Privacy policy, terms of service

## 🛠️ Local Development

1. **Clone the repo:**
   ```sh
   git clone https://github.com/mrlynn/netpad-docs.git
   cd netpad-docs
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the local dev server:**
   ```sh
   npm run start
   ```
4. **Build for production:**
   ```sh
   npm run build
   ```

## 🌐 Deployment (GitHub Pages)
- The site is automatically deployed to [https://docs.netpad.io](https://docs.netpad.io) via GitHub Actions on every push to `main`.
- The custom domain is set via the `CNAME` file.
- See `.github/workflows/deploy.yml` for deployment details.

## 🤝 Contributing

Contributions are welcome! To propose changes:
1. Fork this repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

Please follow the existing documentation structure and style.

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

**Product Owner:** [Michael Lynn](https://mlynn.org)
