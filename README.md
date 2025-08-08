# Kaiross Frontend Boilerplate (React + Vite + Tailwind)

This is a high‑performance, responsive frontend prototype for Kaiross. It delivers a warm, playful visual style inspired by Snapchat, Clubhouse, and Instagram.

Note: This project uses React + Vite + Tailwind (with shadcn-ui) due to the Lovable environment. It mirrors the requested Next.js App Router structure via client‑side routes.

## Tech Stack
- React + Vite
- TypeScript
- Tailwind CSS (custom design tokens)
- shadcn‑ui components
- React Router

## Getting Started

Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open http://localhost:8080

## Mock Credentials
- Email: anish@harvard.edu
- Password: anishfyi

## Navigation
- Landing: /
- Login: /login
- Feed: /feed (protected)
- Discover: /discovery (protected)
- Profile: /profile (protected)
- Direct Messages: /dm (protected)

## Folder Structure
```
src/
  assets/                # Local images for avatars & posts
  components/
    ChatPanel.tsx
    Navbar.tsx
    PostCard.tsx
    RequireAuth.tsx
    UserCard.tsx
    ui/                  # shadcn‑ui components
  context/
    AuthContext.tsx
  data/
    mockData.ts          # Posts, Users, Messages, and mock credentials
  pages/
    DM.tsx
    Discovery.tsx
    Feed.tsx
    Index.tsx            # Landing page
    Login.tsx
    Profile.tsx
  App.tsx                # Routing & providers
  index.css              # Design system tokens & utilities
```

## Features
- Landing with signature spotlight background
- Mock login (client‑side) → redirects to Feed
- Feed with posts (text/image)
- Discover with user cards + inline chat panel
- Profile (Instagram‑like header + posts grid)
- Direct Messages with conversation list + chat
- SEO per‑page via react‑helmet‑async

## Design
- Warm, light palette with playful accents
- Tokens: gradients, shadows, smooth transitions (see src/index.css)
- Components use semantic Tailwind tokens; responsive and accessible

## Notes
- Authentication is mocked on the client via localStorage
- Images are locally bundled for fast, reliable loading

Enjoy building with Kaiross!