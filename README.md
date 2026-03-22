# Recipe App

A simple full-stack web application for browsing recipes. The app displays a list of recipes and allows you to view detailed information including ingredients and yield for each recipe.

## Architecture

- **Backend**: ASP.NET Core 8 Minimal API (C#) serving JSON endpoints
- **Frontend**: React 18 SPA with TypeScript and Vite
- **Data**: In-memory recipe store (no database)

## Prerequisites

- **.NET 8 SDK** — [Download](https://dotnet.microsoft.com/download/dotnet/8.0)
- **Node.js 18+** — [Download](https://nodejs.org/)

## Project Structure

```
recipe-app/
├── backend/          # ASP.NET Core 8 Minimal API
│   └── Models/
│       └── Recipe.cs (recipe model & in-memory store)
├── frontend/         # React + TypeScript + Vite
│   └── src/
│       ├── pages/    (RecipeList, RecipeDetail components)
│       └── types.ts  (Recipe type definition)
└── recipe-app.sln
```

## Running the App

### Backend

```sh
cd backend
dotnet restore
dotnet build
dotnet run
```

The backend will start on `http://localhost:5000`.

### Frontend

```sh
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173` with auto-proxying of `/api` requests to the backend.

### Production Build

Frontend production build:
```sh
cd frontend
npm run build
```

This runs TypeScript type-checking followed by Vite's production build.

## API Endpoints

- `GET /api/recipes` — Returns all recipes
- `GET /api/recipes/{id}` — Returns a specific recipe by ID

## Features

- Browse all recipes on the home page
- Click a recipe to see full details including ingredients and yield
- Responsive navigation between pages
