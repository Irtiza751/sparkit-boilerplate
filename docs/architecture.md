# Sparkit Boilerplate Architecture

Welcome to **Sparkit Boilerplate** — a modern, opinionated React starter built with Vite and designed for speed, scalability, and simplicity.

---

## Stack Overview

| Tool                | Purpose                     |
| ------------------- | --------------------------- |
| **Vite**            | Lightning-fast build tool   |
| **React**           | Core UI library             |
| **TypeScript**      | Static typing               |
| **Tailwind CSS**    | Utility-first styling       |
| **Zustand**         | Lightweight global state    |
| **React Hook Form** | Form state + validation     |
| **TanStack Query**  | Data fetching and caching   |
| **TanStack Router** | Type-safe routing           |
| **Helmet**          | SEO and head management     |
| **i18next**         | Internationalization (i18n) |

---

## Folder Structure

src/
├── assets/ # Static assets
├── classes/ # Business logic & reusable classes
├── cli/ # Custom CLI for generating files
├── components/ # Shared UI components
├── config/ # App-wide config (query, theme, SEO, axios)
├── hooks/ # Custom React hooks
├── i18n/ # i18n setup and translation files
├── interfaces/ # Global TypeScript interfaces
├── layouts/ # Page layouts (MainLayout, AuthLayout)
├── modules/ # Domain-based modules (auth, cart, etc.)
│ ├── components/ # Module-specific UI
│ ├── services.ts # API logic
│ ├── store.ts # Zustand store
│ └── types.ts # Module-specific types
├── pages/ # App-level routes (used by router)
├── providers/ # Context providers (i18n, query, helmet)
├── router/ # TanStack Router routes & config
├── services/ # Global service layer (API)
├── stores/ # App-level Zustand stores
├── types/ # Global enums & types
├── utils/ # Utility functions
├── App.tsx
└── main.tsx

---

## Modules Architecture

Each module (e.g. `auth`, `cart`) is self-contained:

- **UI** in `components/`
- **API** in `services.ts`
- **State** in `store.ts`
- **Types** in `types.ts`

This structure encourages separation of concerns and ease of maintenance.

---

## Routing

Using **TanStack Router** with:

- Lazy-loaded route components
- Nested layouts support
- Strong type inference
- Guards (via route loaders)

All routes are defined in `src/router/routes.tsx`.

---

## State Management

- **Zustand** handles global or local store needs per module.
- **React Query** handles async data and caching.
- Stores should be kept minimal and composable.

---

## CLI Tool

Inside `cli/`, a custom script generates:

- Components
- Interfaces
- Classes
- Modules

> Coming soon: automated route injection, i18n key scaffolding, and test boilerplates.

---

## Styling & Theming

- TailwindCSS provides atomic utility-first classes.
- Extend theme via `tailwind.config.js`
- Consistent design system encouraged in `config/theme.ts`

---

## i18n

- Managed using `react-i18next`
- Language files are in `src/i18n/`
- Auto-detects user language
- Modular translation keys preferred (`auth.login.title`, `cart.total.label`)

---

## SEO

- Helmet context provided app-wide
- Define SEO metadata in `config/seo.ts`
- Override per route using `<Helmet>` in pages

---

## Contributing

1. `yarn install`
2. `yarn dev`
3. Add a new module? Run CLI: `yarn cli g module auth`
4. Follow consistent coding style via ESLint + Prettier

---

## GitHub Template

This boilerplate is designed to be used via the **"Use this template"** button on GitHub.

---

## Future Plans

- CLI: More powerful generators
- Authentication flow
- Unit and E2E test setup
- GitHub Actions

---

## License

MIT

---

Built with love by Muhammad Irtiza (@Irtiza751).
