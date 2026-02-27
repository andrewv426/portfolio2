# Andrew Vong — Personal Portfolio

A single-page, fluid-scrolling portfolio built with a moody, dark aesthetic and fluid typography. The entire site features a translucent, blurred photographic backdrop and interactive micro-animations.

## 🛠 Tech Stack
This project uses modern web development tools:
- **[React 19](https://react.dev/)** — UI framework (with React Hooks via Vite)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework (configured natively via `@theme` in `index.css`)
- **[Vite](https://vitejs.dev/)** — Fast ESM-based build tool and dev server

## 🚀 Running Locally
To run this project on your local machine:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser (usually defaults to `http://localhost:5173`)

## ✨ Design Philosophy
The site uses responsive fluid typography (`clamp()`), anchor-based smooth scrolling rather than a router, and leans entirely on CSS utility classes without generic components. The core container size intentionally tracks to a `max-w-[864px]` to preserve the 60% viewport composition originally mocked up in an infinite-canvas Figma file.
