# 🏦 Cypress E2E — Zero Bank

![Cypress](https://img.shields.io/badge/Cypress-13.13.2-04C38E?style=flat-square&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

End-to-end test automation suite for the [Zero Bank](http://zero.webappsecurity.com) web application, built with **Cypress** and **JavaScript**. The project validates critical banking workflows including authentication, navigation, search, and session management.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Test Scenarios](#-test-scenarios)
- [Design Patterns](#-design-patterns)
- [Reports](#-reports)
- [Author](#-author)

---

## ✨ Features

- End-to-end testing of login, logout, navbar, and search workflows
- Data-driven tests using fixture files for valid and invalid credentials
- Reusable custom commands for common actions
- XPath selector support via `cypress-xpath`
- Granular npm scripts for running individual spec files or the full suite
- Lightweight, fast execution with Cypress Test Runner

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Cypress** | 13.13.2 | E2E test framework |
| **JavaScript** | ES6+ | Programming language |
| **cypress-xpath** | latest | XPath selector support |
| **Node.js** | ≥ 18 | Runtime environment |
| **npm** | ≥ 9 | Package manager |

---

## 📁 Project Structure

```
cypress-e2e-zerobank/
├── cypress/
│   ├── e2e/
│   │   ├── zerobank-login.cy.js
│   │   ├── zerobank-logout.cy.js
│   │   ├── zerobank-navbar.cy.js
│   │   └── zerobank-search.cy.js
│   ├── fixtures/
│   │   └── dataLogin.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- A Chromium-based browser (Chrome, Edge) or Firefox

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ridhotadjudin/cypress-e2e-zerobank.git
cd cypress-e2e-zerobank
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress Test Runner

```bash
npm run co
```

### 4. Run all tests in headless mode

```bash
npm run cr
```

### 5. Run individual specs

| Script | Command | Description |
|---|---|---|
| `co` | `npm run co` | Open Cypress Test Runner (interactive) |
| `cr` | `npm run cr` | Run all specs in headless mode |
| `crun-login` | `npm run crun-login` | Run login spec only |
| `crun-logout` | `npm run crun-logout` | Run logout spec only |
| `crun-navbar` | `npm run crun-navbar` | Run navbar spec only |
| `crun-search` | `npm run crun-search` | Run search spec only |

---

## 🧪 Test Scenarios

| Spec File | Scenario | Description |
|---|---|---|
| `zerobank-login.cy.js` | Login with valid credentials | Verifies successful authentication with correct username and password |
| `zerobank-login.cy.js` | Login with invalid credentials | Validates error handling for incorrect username, password, or both |
| `zerobank-logout.cy.js` | Logout verification | Confirms the user session is terminated and redirected appropriately |
| `zerobank-navbar.cy.js` | Navbar navigation | Tests navigation links in the navbar route to the correct pages |
| `zerobank-search.cy.js` | Search functionality | Validates the search feature returns relevant results |

---

## 🏗 Design Patterns

### Custom Commands

Reusable commands are defined in `cypress/support/commands.js` to encapsulate repetitive actions such as login flows, reducing duplication across spec files.

```javascript
// Example usage in a spec
cy.login(username, password);
```

### Fixtures (Data-Driven Testing)

Test data is externalized in `cypress/fixtures/dataLogin.json`, containing valid and invalid credential sets. This separates test logic from test data and makes maintenance straightforward.

```json
{
  "validUser": {
    "username": "username",
    "password": "password"
  },
  "invalidUser": {
    "username": "invalid_user",
    "password": "invalid_pass"
  }
}
```

---

## 📊 Reports

This project uses the **Cypress built-in test runner** for reporting. Test results are displayed directly in the terminal during headless runs and in the interactive Test Runner during GUI mode.

- **Headless mode** — pass/fail summary printed to the console after `npm run cr`
- **Interactive mode** — real-time execution and results via `npm run co`
- **Screenshots** — automatically captured on failure in `cypress/screenshots/`
- **Videos** — recorded during headless runs in `cypress/videos/`

---

## 👤 Author

**Ridho Tadjudin**

[![Website](https://img.shields.io/badge/Website-ridhotadjudin.id-04C38E?style=flat-square&logo=google-chrome&logoColor=white)](https://ridhotadjudin.id)
[![GitHub](https://img.shields.io/badge/GitHub-ridhotadjudin-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ridhotadjudin)

---

<div align="center">

Made with ❤️ and ☕ by [Ridho Tadjudin](https://ridhotadjudin.id)

</div>
