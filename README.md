# 🎞️ The Pose Club

**Your own little photo booth, right in your browser. ♡**

The Pose Club is a photo booth website where you can capture moments, create cute photo strips, and give your pictures a personal touch. Choose your layout, take photos or upload your own, customize your strip, and download your creation to keep forever.

## ✨ Features

- 📸 **Photo booth layouts** — Choose from 1, 2, 3, or 4-photo layouts.
- 🖼️ **Capture or upload** — Take photos using your camera or upload your own pictures.
- 🎀 **Customize your strip** — Add a personal touch with decorative frames and backgrounds.
- 💾 **Download your memories** — Export your finished photo strip as a PNG or JPEG.
- 📱 **Responsive design** — Enjoy the experience across different screen sizes.

## 🛠️ Tech Stack

| Technology                                    | Purpose                        |
| --------------------------------------------- | ------------------------------ |
| [Next.js](https://nextjs.org/)                | App framework and routing      |
| [React](https://react.dev/)                   | Interactive UI components      |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development          |
| [Tailwind CSS](https://tailwindcss.com/)      | Styling and responsive layouts |
| [shadcn/ui](https://ui.shadcn.com/)           | Reusable UI components         |
| [Lucide React](https://lucide.dev/)           | Icons                          |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- npm installed

### Installation

Clone the repository and navigate to the project folder:

```bash
git clone <repository-url>
cd the-pose-club
```

Install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore The Pose Club. Changes to your source files will appear during development.

## 📜 Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run lint`  | Check code with ESLint           |
| `npm run build` | Build the app for production     |
| `npm run start` | Run the production build locally |

To test a production build:

```bash
npm run build
npm run start
```

## 📂 Project Structure

```text
app/                    App Router pages, layout, and global styles
components/
  core/                 Site sections and feature components
    layouts/            Photo booth layout previews
  ui/                   Reusable shadcn/ui components
lib/                    Shared utilities
public/                 Images, logos, and static assets
```

Static assets inside `public/` can be referenced from the site root. For example, `public/photo_A1.png` can be used as `/photo_A1.png`.

## 🧩 Adding UI Components

Add shadcn/ui components using the CLI:

```bash
npx shadcn@latest add button
```

The generated component will be added under `components/ui/`.

## 💌 The Idea

The Pose Club is all about turning everyday moments into little keepsakes — one pose, one strip, and one memory at a time.

**Strike a pose. Make it yours. Keep the memory. ♡**
