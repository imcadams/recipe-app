# Copilot Instructions

## Architecture

This is a full-stack recipe app with two independent projects that communicate over HTTP:

- **`backend/`** — ASP.NET Core 8 Minimal API (C#). Serves JSON at `/api/recipes` and `/api/recipes/{id}`. No database; recipe data lives in a static in-memory store (`RecipeStore` in `Models/Recipe.cs`).
- **`frontend/`** — React 18 SPA built with Vite and TypeScript. Uses `react-router-dom` v6 with `createBrowserRouter`. The Vite dev server proxies `/api` requests to the backend at `http://localhost:5000`.

The backend must be running before the frontend can fetch data during development.

## Build & Run

### Backend (`backend/`)

```sh
dotnet restore
dotnet build
dotnet run          # starts on http://localhost:5000
```

### Frontend (`frontend/`)

```sh
npm install
npm run dev         # starts Vite dev server on http://localhost:5173
npm run build       # production build (runs tsc then vite build)
```

## Key Conventions

- **Recipe IDs** are kebab-case slugs derived from the title (e.g. `chicken-stir-fry`). The backend does case-insensitive matching on lookups.
- **Data layer**: All recipe data is defined in `backend/Models/Recipe.cs` inside the static `RecipeStore` class. To add or modify recipes, edit that file — there is no database migration step.
- **Shared types**: The frontend mirrors the backend `Recipe` shape in `frontend/src/types.ts`. Keep these in sync when changing the API contract.
- **Frontend routing**: Routes are defined in `frontend/src/main.tsx`. `App.tsx` is a layout shell that renders child routes via `<Outlet />`. Page components live in `frontend/src/pages/`.
- **API proxy**: During development, the Vite proxy in `vite.config.ts` forwards `/api/*` to the backend. CORS is also configured in `Program.cs` for `localhost:5173` as a fallback.
