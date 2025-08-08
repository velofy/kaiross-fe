# Kaiross Frontend Boilerplate

A high-performance, responsive Next.js + Tailwind CSS prototype inspired by Snapchat's playfulness, Clubhouse's warmth, and Instagram's polished feed aesthetics.

## Tech
- Next.js (App Router)
- React 18+
- Tailwind CSS

## Requirements
- Node.js >= 18.18.0

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Mock Auth
- Email: `anish@harvard.edu`
- Password: `anishfyi`

On successful login you will be redirected to `/feed`. Use the navbar to logout.

## Navigation
- Landing: `/landing`
- Login: `/login`
- Feed: `/feed`
- Discovery: `/discovery`
- Profile: `/profile`
- Direct Messages: `/dm`

## File Structure
```
/frontend
  ├─ app
  │  ├─ layout.jsx
  │  ├─ page.jsx (redirects to /landing)
  │  ├─ globals.css
  │  ├─ landing/page.jsx
  │  ├─ login/page.jsx
  │  ├─ feed/page.jsx
  │  ├─ discovery/page.jsx
  │  ├─ profile/page.jsx
  │  └─ dm/page.jsx
  ├─ components
  │  ├─ Navbar.jsx
  │  ├─ Card.jsx
  │  └─ Avatar.jsx
  ├─ styles
  │  └─ mockData.js
  ├─ package.json
  ├─ tailwind.config.js
  └─ postcss.config.js
```

## Notes
- Styling uses a warm, light palette with playful accents.
- Pages use `useState`/`useEffect` for mock stateful behavior.
- Mock data lives in `styles/mockData.js` and powers Feed, Discovery, and DM pages.

Enjoy building with Kaiross! ✨
