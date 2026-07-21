# Aditya Udiya — Portfolio (React)

React + Vite conversion of the original single-file HTML/CSS/JS portfolio. All content, sections, animations, and interactions are preserved.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Images

Drop your existing image folder into `public/images/` — paths are unchanged from the original site:

```
public/images/
  profile.jpg
  logos/vit.jpg
  logos/iitm.png
  projects/gcs.png
  projects/aroham.jpg
  hackathons/1.jpg … 4.jpg
  impact/1.jpg … 4.jpg
```

Missing images degrade gracefully — `MediaFrame` catches the load error and falls back to the diagonal-stripe placeholder with the file path shown, exactly like the original `onerror` behavior.

## Architecture

```
src/
  components/
    layout/     Navigation, Footer, Cursor, Preloader, ScrollProgress
    common/     Tag, SkillPill, SectionLabel, MediaFrame, IconLink,
                StatCard, TimelineItem, AchievementCard, Reveal, ErrorBoundary
    sections/   Hero, Education, Skills, Projects, Stats, Experience,
                Startup, Hackathons, Certifications, Research, Impact, Contact
  hooks/        useCursor, useScrollProgress, useRevealAnimation,
                useCountUp, useActiveSection
  styles/       globals, variables, animations, mixins,
                sectionText.module, photoStrip.module
  utils/        constants (all content), helpers
```

### Styling: CSS Modules

CSS Modules were chosen over styled-components because the original design is already a well-organized token system built on CSS custom properties. Modules keep that intact with zero runtime cost and no build-time CSS-in-JS overhead, while scoping component styles so `.title` in one section can't collide with `.title` in another.

Three things stay global by design:
- **`variables.css`** — design tokens, referenced everywhere
- **`mixins.css`** — `.reveal` / `.reveal-stagger` / `.clean-list`, applied dynamically by hooks or shared verbatim
- **`globals.css`** — reset, base `body`, and the shared `section` padding

### Content lives in `utils/constants.js`

Every string, bullet, link, and stat is in one file. Sections are purely presentational, so editing copy never means touching JSX.

### Performance

- **Code splitting** — everything below the fold is `React.lazy` + `Suspense`; Hero ships in the main bundle. Main chunk gzips to ~12 kB, vendor ~45 kB.
- **No re-render on mouse move** — `useCursor` stores position in refs and writes to the DOM inside a single `requestAnimationFrame` loop.
- **rAF-throttled scroll** — `useScrollProgress` and `useActiveSection` run at most once per frame.
- **One-shot observers** — reveal and count-up animations `unobserve` after firing.
- **`React.memo`** on `Tag`, `SkillPill`, `IconLink`, `TimelineItem`, `AchievementCard` — the hero alone renders ~20 tags whose props never change.
- **Lazy images** — every `MediaFrame` image is `loading="lazy"`.

### Accessibility & error handling

- Semantic `<section>` / `<nav>` / `<main>` / `<blockquote>` structure, `aria-label` on icon-only links, `aria-expanded` on the mobile menu toggle.
- `prefers-reduced-motion` is respected globally in `animations.css`.
- Each lazy section has its own `ErrorBoundary`, so one failure degrades to an inline notice instead of a blank page.

## Two fixes to original behavior

1. **Mobile menu now works.** The original had a hamburger button with no click handler — the nav links were simply unreachable below 768px. It now toggles a dropdown panel.
2. **Cursor hover uses event delegation.** Listeners are bound once on `document` rather than per-element, so `data-cursor` works on anything, including lazily-mounted sections.
