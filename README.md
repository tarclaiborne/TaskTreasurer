# 🧾 TaskTreasurer

Modular, typed, and contributor-first ESLint config for scalable hygiene across ecosystems.

[![npm version](https://img.shields.io/npm/v/eslint-config-tasktreasurer)](https://www.npmjs.com/package/eslint-config-tasktreasurer)
![CI](https://github.com/tasktreasurer/TaskTreasurer/actions/workflows/ci.yml/badge.svg)
![Test Status](https://github.com/tasktreasurer/TaskTreasurer/actions/workflows/test.yml/badge.svg)
![Lint Status](https://github.com/tasktreasurer/TaskTreasurer/actions/workflows/lint.yml/badge.svg)
![Coverage](https://codecov.io/gh/tasktreasurer/TaskTreasurer/branch/main/graph/badge.svg)
![License](https://img.shields.io/github/license/tasktreasurer/TaskTreasurer)
![Node](https://img.shields.io/badge/node-20.x-blue.svg)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

---

## 🎉 v1.0.1 — First Public Release

🚀 Just published `eslint-config-tasktreasurer@1.0.1`  
Modular ESLint config for scalable hygiene, typed exports, and contributor-first onboarding.

🧩 Layers: `base`, `typescript`, `jest`, `prettier`  
✅ Postbuild validator included  
📦 [npmjs.com/package/eslint-config-tasktreasurer](https://www.npmjs.com/package/eslint-config-tasktreasurer)

🎂 Released on my birthday. This one’s for the community.

---

## 🌟 Vision

TaskTreasurer was built to raise the standard for open-source hygiene, empathy, and contributor experience.  
It’s not just a config—it’s a philosophy:  
- Respect contributors  
- Automate diagnostics  
- Eliminate onboarding friction  
- Build tools that scale across ecosystems

---

## 🧠 Design Philosophy

- 🧼 Hygiene-first workflows
- 🔍 Automated validation over manual debugging
- 🤝 Contributor-first onboarding
- 📦 Modular layers for reuse and clarity
- 🧪 CI/CD as a safety net, not a bottleneck

---

## 🚀 Install

```bash
npm install --save-dev eslint-config-tasktreasurer

🔧 Usage
In your .eslintrc.js:

module.exports = {
  extends: [
    'eslint-config-tasktreasurer',
    'eslint-config-tasktreasurer/typescript',
    'eslint-config-tasktreasurer/jest',
    'eslint-config-tasktreasurer/prettier'
  ]
};

Available layers:
• 	tasktreasure/base
• 	tasktreasure/typescript
• 	tasktreasure/jest
• 	tasktreasure/prettier

📦 Peer Dependencies
Make sure you have:

npm install --save-dev eslint typescript prettier jest

🧪 Validate Your Setup

Run the built-in validator:
npm run postbuild
Or manually:
npx tsx scripts/validate-exports.ts

🧹 ESLint Hygiene
Scripts:

pnpm run lint        # Check for lint issues
pnpm run lint:fix    # Auto-fix lint issues
pnpm run format      # Check formatting
pnpm run format:fix  # Auto-format code
pnpm run validate    # Run all hygiene checks

🛠️ CI/CD Workflow
GitHub Actions runs:
• 	✅ Environment validation
• 	✅ ESLint & Prettier
• 	✅ Unit & integration tests
• 	✅ Coverage reporting
• 	✅ CRLF enforcement
• 	✅ Optional build step
• 	🚀 Semantic-release for automated publishing

📦 Semantic-release
Automates:
• 	📈 Version bumps
	  📝 Changelog generation
• 	📦 npm publishing
• 	📣 GitHub release notes
Releases are triggered automatically on  via CI.

🧑‍💻 Contributor Setup
TaskTreasurer uses pnpm for fast, workspace-aware installs.

npm install -g pnpm
pnpm install

Run diagnostics and hygiene checks:

pnpm run validate
pnpm run lint
pnpm run format
pnpm test
pnpm run test:coverage
pnpm run fix-crlf

📦 Project Structure

src/
├── controllers/
├── models/
├── routes/
├── services/
config/
scripts/
tests/

🧪 Testing
Run all tests:
pnpm test

Generate coverage report:
pnpm run test:coverage

📊 API Documentation
• 	Swagger UI: coming soon
• 	Health check: coming soon

🔐 Authentication
JWT is required for protected routes.
Example request:

curl -H "Authorization: Bearer <token>" http://localhost:3000/tasks

🤝 Contributing
We welcome thoughtful, respectful contributions. TaskTreasurer empowers contributors with:
• 	🔍 Automated diagnostics
• 	🧼 Frictionless onboarding
• 	📚 Discoverable documentation
• 	🧪 Bulletproof hygiene

Please follow our contributing guide and open issues for bugs, ideas, or improvements.

🗺️ Roadmap
Coming soon:
- eslint-config-tasktreasurer/react
  eslint-config-tasktreasurer/node
- eslint-config-tasktreasurer/security

• 	GitHub templates for issues, PRs, and onboarding


📷 QR Code for Direct Access
QR code for eslint-config-tasktreasurer https://raw.githubusercontent.com/tasktreasurer/TaskTreasurer/main/assets/tasktreasurer-qr.png

🌐 Repository
GitHub → tasktreasurer/eslint-config-tasktreasurer

✨ Maintainer
Built and maintained by @Tarinno
Architecting open-source empathy one config at a time.


---
