# The Pose Club

A photo booth website built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Getting started

Install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app reloads as you edit its source files.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |

To test a production build locally:

```bash
npm run build
npm run start
```

## Project structure

```text
app/                    App Router pages, layout, and global styles
components/core/        Site header and home page sections
components/ui/          Reusable UI components, including shadcn/ui
lib/                    Shared utilities
public/                 Static images and other public assets
```

Static files in `public/` are served from the site root. For example, use `/photo_A1.png` to reference `public/photo_A1.png`.

## Adding shadcn/ui components

Add components with the shadcn CLI:

```bash
npx shadcn@latest add button
```

New UI components are added under `components/ui/`. Aliases and styling options are configured in `components.json`.
