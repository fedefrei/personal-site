# Redesign: modern dark theme

Approved direction: dark background, single cyan accent, Inter + JetBrains Mono, text-first hero. No "available for opportunities" badge.

- [x] New `public/css/theme.css` (design tokens, replaces template `style.css` + `custom-style.css`)
- [x] `_document.js`: drop Font Awesome x2 + Open Sans, load Inter + JetBrains Mono, load theme.css
- [x] Shared `SectionTitle` component (numbered eyebrow + title + subtitle)
- [x] Header: translucent sticky nav, FF monogram, mobile menu (keeps main.js hooks)
- [x] Hero: text-first, round photo, CTAs
- [x] About: bio + key facts, AZ-900 badge
- [x] In production: restyled cards with status pill + stack chips
- [x] Skills: compact cards
- [x] Experience: vertical timeline + freelance grid
- [x] Learning: dense cards, dark search
- [x] Contact + footer: "Let's talk" CTA
- [x] Verify: `next build`, browser desktop + mobile (incl. mobile menu), console clean, screenshots

## Review
- `next build` passes. Checked in browser at 1280 and 375 wide: all sections, mobile menu (open, navigate, close), no horizontal overflow.
- Fixed during verification: About row `g-5` overflowed 12px on phones (now `gy-5 gx-lg-5`); duplicate "behind login" text on private cards; ".net Framework" casing.
- Removed template `style.css` / `custom-style.css`, Font Awesome (2 CDN files) and Open Sans. Nothing referenced them (grep-checked).
- Local console: only the Vercel-only `/_vercel/insights/script.js` 404 (expected outside Vercel).
- Not done: light theme / toggle (not requested), CV link (none provided).
