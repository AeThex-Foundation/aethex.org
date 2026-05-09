# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build (outputs standalone)
npm run start    # Run production build
npm run lint     # ESLint via Next.js
```

There are no tests in this project.

## Architecture

Next.js 14 App Router site for the AeThex Foundation nonprofit. No backend — all pages are server-rendered or statically generated at build time.

**Key data flow for news/blog:**
- MDX files live in `content/news/*.mdx` with frontmatter (`title`, `excerpt`, `date`, `category`, `author`)
- `lib/mdx.ts` reads them from disk using `gray-matter` and exports `getAllPosts()`, `getPostBySlug()`, `getAllPostSlugs()`
- `app/news/page.tsx` calls `getAllPosts()` at render time (server component)
- `app/news/[slug]/page.tsx` uses `generateStaticParams()` + `MDXRemote` from `next-mdx-remote/rsc` for static generation
- To add a news post, create a `.mdx` file in `content/news/` — no other config needed

**Component split:**
- `components/Navbar.tsx` and `components/DiscordWidget.tsx` are `'use client'` (need state/effects)
- `components/Footer.tsx` and all page files are server components
- `DiscordWidget` fetches the Discord guild widget API client-side using `NEXT_PUBLIC_DISCORD_SERVER_ID`

## Styling Conventions

Tailwind with two custom color scales defined in `tailwind.config.js`:
- `foundation-*` — Foundation Red (`foundation-500` = `#DC2626`), used for all primary accents, CTAs, and brand elements
- `surface-*` — Neutral gray scale (`surface-900` = `#171717`), used for backgrounds, text, and borders

Fonts loaded via Google Fonts in `globals.css`:
- `font-display` → Outfit (headings, nav, buttons)
- `font-body` → DM Sans (body text, default)

Reusable CSS component classes in `globals.css` (`@layer components`):
- `.section-padding` — standard section padding (`px-6 py-20 ...`)
- `.container-wide` / `.container-narrow` — `max-w-7xl` / `max-w-5xl` centered containers
- `.btn-primary` / `.btn-secondary` — standard button styles
- `.card` — white bordered card with hover shadow

## Environment Variables

Copy `.env.example` to `.env.local`:
- `NEXT_PUBLIC_SITE_URL` — used in metadata (`https://aethex.org`)
- `NEXT_PUBLIC_DISCORD_SERVER_ID` — Discord server ID for the widget (requires Server Widget enabled in Discord settings)

## Deployment

- **Railway**: `railway.toml` configures nixpacks build + `npm run start`; `next.config.js` sets `output: 'standalone'`
- **Vercel**: `vercel.json` sets security headers and targets `iad1` region

## AeThex Trinity Context

This site (`aethex.org`) is the Foundation (nonprofit, red `#DC2626`). The other two entities are the Corporation (`aethex.com`, blue) and Labs (`aethex.dev`, yellow). Keep branding and copy consistent with the Foundation identity — open source, education, community.
