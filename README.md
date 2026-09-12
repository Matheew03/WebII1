# Game Vault - Gaming Digital Storefront & Hub

[![Angular Version](https://img.shields.io/badge/Angular-v21.1-dd0031.svg?style=flat-square&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9-3178c6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-v4.1-646cff.svg?style=flat-square&logo=vitest)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A modern, high-performance, single-page web application (SPA) built with **Angular 21** designed to serve as a digital gaming storefront ("Game Vault"). It allows gamers to explore title releases, check real-time stock availability, learn about specialized console services, and contact customer support via a fully validated reactive form.

---

##  Purpose & Key Features

### Problem Statement
Digital gaming stores require fast, responsive, and secure user interfaces where customers can browse game catalogs, review stock status, discover maintenance and trade-in services, and send support inquiries without page reloads.

### Key Solutions & Highlights
- **Dynamic Catalog & Stock Indicators**: Displays digital games with dynamic pricing, categories, and real-time out-of-stock badges (`@for`, `@if` control flow syntax).
- **Interactive Contact Form**: Custom client-side validation using Angular **ReactiveForms** (`FormBuilder`, regex pattern matchers, length restrictions) and accessible inputs.
- **Service Hub**: Promotes specialized services like console maintenance, digital gift card reloads, and trade-in programs.
- **Responsive Gamer Theme**: Custom CSS featuring dark gaming aesthetics, responsive CSS grids, and smooth interactive states.

---

##  Technology Stack & Dependencies

| Category | Technology / Library | Version | Purpose |
|---|---|---|---|
| **Framework** | [Angular](https://angular.dev/) | `^21.1.0` | Frontend Web Framework (Standalone Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `~5.9.2` | Strongly-typed JavaScript superset |
| **Reactive Paradigm** | [RxJS](https://rxjs.dev/) | `~7.8.0` | Asynchronous & Event-driven Programming |
| **Testing Runner** | [Vitest](https://vitest.dev/) | `^4.0.8` | Next-generation Unit Testing Framework |
| **CLI / Bundler** | [Angular CLI & Build](https://angular.dev/tools/cli) | `^21.1.2` | Application scaffolding, dev server & build pipeline |

---

##  Architecture & Component Design

The application adheres to modern **Angular Standalone Component Architecture** with modular routing and signal-based state signals.

```
src/
├── app/
│   ├── app.ts               # Root Component (Imports Header, Navbar, Footer, RouterOutlet)
│   ├── app.html             # Shell Layout
│   ├── app.routes.ts        # SPA Route Definitions
│   ├── app.config.ts        # Global Application Providers (Router, Zone configuration)
│   ├── header/              # Brand Header Banner
│   ├── navbar/              # Navigation Bar with RouterLink integration
│   ├── inicio/              # Landing Page / Hero & Highlights
│   ├── productos/           # Product Catalog Component
│   ├── servicios/           # Gaming Services Overview
│   ├── contacto/            # Reactive Contact Form Component
│   └── footer/              # Footer Component
├── assets/                  # Public Assets & Static Media
└── styles.css               # Global Styles & Theme Variables
```

### Component Interaction Diagram
```
              +----------------------------+
              |           App              |
              |       (app-root)           |
              +-------------+--------------+
                            |
   +----------------+-------+-------+----------------+
   |                |               |                |
+--v---------+   +--v---------+  +--v----------+  +--v---------+
|   Header   |   |   Navbar   |  | RouterOutlet|  |   Footer   |
+------------+   +------------+  +------+------+  +------------+
                                        |
                 +----------------------+----------------------+
                 |                      |                      |
          +------v-------+       +------v-------+       +------v-------+
          |    Inicio    |       |  Productos   |       |   Contacto   |
          +--------------+       +--------------+       +--------------+
```

---

## ⚙️ Installation & Setup Guide

### Prerequisites
- **Node.js**: `v18.19.0` or higher (Recommended: `v20.x` or `v22.x`)
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/proyecto-angular.git
cd proyecto-angular
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy the example environment configuration file to create your local `.env`:
```bash
cp .env.example .env
```
*Note: Sensitive variables such as API keys or environment secrets are strictly managed outside source control as defined in `.gitignore`.*

### 4. Run Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

### 5. Run Unit Tests
```bash
npm test -- --no-watch
```
All unit tests execute using Vitest with `@angular/build:unit-test`.

### 6. Build for Production
```bash
npm run build
```
Production build artifacts will be generated in the `dist/proyecto-angular` directory with hash-based caching and bundle optimization enabled.

---

##  Application Views & Navigation

1. **Home (`/`)**: High-impact gaming hero section with direct catalog CTA and store highlights.
2. **Products (`/productos`)**: Interactive grid listing current games, prices, categories, and stock availability badges.
3. **Services (`/servicios`)**: Service cards outlining console maintenance, instant gift card top-ups, and physical game trade-ins.
4. **Contact (`/contacto`)**: Interactive support form with full Angular Reactive Forms validation (nickname, email format, 10-digit phone number, description).

---

##  Security & Code Standards

- **Zero Credential Exposure**: Rigorous audit conducted to ensure no secrets or API keys are committed. `.gitignore` is pre-configured for `.env*` files and certificates.
- **Strict TypeScript**: Configured with strict type checking in `tsconfig.json`.
- **Standalone Angular Modern Architecture**: Zero legacy `NgModule` boilerplates; leverages standalone directives and Angular built-in control flows (`@for`, `@if`).

---

##  License

This project is open source and available under the [MIT License](LICENSE).

l