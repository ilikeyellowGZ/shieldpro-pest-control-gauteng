# BugProctect Pro

Pest control website for BugProctect Pro Gauteng, built with React, Vite, and Tailwind CSS.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and set any required environment variables.
3. Run the app:
   `npm run dev`

Open the local Vite URL from the terminal output. Do not open `index.html` directly or serve the repo root with a generic static server, because Tailwind is compiled by Vite.

## Build

Run a production build:

`npm run build`

## GitHub Pages

The preferred deployment is the included GitHub Actions workflow, which builds `dist/` and publishes that artifact.

If GitHub Pages is set to "Deploy from a branch", select the `/docs` folder on `main` after running:

`npm run build:pages`
