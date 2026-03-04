# Andrew Vong — Personal Portfolio

A single-page, fluid-scrolling portfolio built with a dark aesthetic and micro-animations throughout. Features a translucent blurred photographic backdrop and a live Spotify integration.

## Tech Stack

- [React 19](https://react.dev/) — UI framework with hooks, built and served via Vite
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first CSS, configured via `@theme` in `index.css`
- [Vite](https://vitejs.dev/) — dev server and build tool
- [Framer Motion](https://www.framer.com/motion/) — scroll-driven animations and transitions
- [Vercel](https://vercel.com/) — hosting and serverless API functions

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add a `.env.local` file with your Spotify credentials:
   ```
   SPOTIFY_CLIENT_ID=...
   SPOTIFY_CLIENT_SECRET=...
   SPOTIFY_REFRESH_TOKEN=...
   ```
4. Start the dev server (Vercel CLI required for the Spotify API route):
   ```bash
   vercel dev
   ```
5. Open `http://localhost:3000` in your browser

## Notes

- The Spotify section calls `/api/spotify`, a serverless function that fetches your top tracks using the [Spotify Web API](https://developer.spotify.com/documentation/web-api). It requires OAuth credentials obtained via the Authorization Code flow.
- Layout is constrained to `max-w-[864px]` to preserve the composition from the original Figma mockup.
- Responsive typography uses `clamp()` throughout; navigation uses anchor-based smooth scrolling rather than a client-side router.
