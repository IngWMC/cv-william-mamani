# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page CV / portfolio landing page for William Mamani Cutipa (Technical Lead, Java & .NET), built with Angular 21. It is bilingual: Spanish and English.

**Content rule:** all page text lives in `src/app/data/cv.es.ts` (the source of truth) and `cv.en.ts` (a faithful translation of it). Facts that are the same in both languages, such as the email, the CV file and the hero stack, are in `cv.shared.ts`. Everything must be backed by the CV at `public/CV-William_Mamani_Cutipa.pdf`, which exists only in Spanish. Don't invent employers, metrics, certifications or links. There are no LinkedIn or GitHub URLs yet. `profile.social` is empty, and the contact section renders whatever is added there. When you change one language file, change the other too. A spec checks that both have the same ids and item counts. `../cv.html` and `../cv1.html` (outside the repo) are old templates with placeholder data. Don't use them as a source.

## Commands

- `npm start` (`ng serve`): dev server at http://localhost:4200
- `npm run build` (`ng build`): production build to `dist/cv-william-mamani/browser`
- `npm test` (`ng test`): Vitest and jsdom through `@angular/build:unit-test`. Use `ng test --watch=false` for a single run.
- Single spec file: `ng test --include src/app/app.spec.ts`
- Try a language directly: `http://localhost:4200/?lang=en`

No linter is set up. Prettier settings are in `package.json` (printWidth 100, single quotes), but Prettier is not installed.

## Architecture

- **Standalone, zoneless, signals.** There are no NgModules and no `zone.js`. State is held in signals, and every component uses `OnPush`. Components follow the Angular 20+ naming style: files have no `.component` suffix, and classes are named `Hero`, not `HeroComponent`.
- **i18n with no library:** the `Language` service (`src/app/i18n/language.ts`) holds a `lang` signal and a `content` computed signal holding a `CvContent` value. Every component reads `protected readonly t = inject(Language).content` and uses `t()` in its template, usually through `@let ui = t().ui.<section>`. The service picks the initial language in this order: `?lang=`, then `localStorage`, then the browser language. It also keeps `<html lang>`, the title and the meta tags in sync, and `set()` updates `?lang=` with `replaceState`. Interface text that isn't CV content goes in `ui`; there are no hard-coded strings in templates.
- `src/app/app.html` puts the sections in order. Each section is in `src/app/sections/<name>/`. Section ids, for example `experiencia`, are the same in both languages, and every section's `id` must match `nav`, because the header's scroll spy and the anchors depend on it. Ids that the UI tracks across a language switch, such as tech-group and layer ids, must also be the same in both languages.
- `src/app/shared/`:
  - `Ripple` (`appRipple`): Material-style ink ripple that uses Material's 225/150 ms timings.
  - `Reveal` (`appReveal`, `[appRevealDelay]`): reveals elements on scroll with an IntersectionObserver, and shows them immediately when there is none (as in jsdom).
  - `Icon` (`<app-icon name=…>`): decorative inline SVG icons that are always `aria-hidden`. The control around an icon must carry the accessible name.
- The mobile menu behaves like a modal: while it is open, the header's effect sets `inert` on `.skip-link`, `main` and `app-footer`. The desktop nav appears from the `lg` breakpoint (1200px) up; below that the hamburger is used.
- **Relative URLs only.** The app has no Router and no `<base href>`, on purpose. Every asset, the CV link and the `#section` anchors are relative, so the same build works at a domain root or under a sub-path (GitHub Pages project sites). Don't add `<base href="/">` or root-absolute `/…` URLs. With a base href, `href="#id"` resolves to `/#id` and drops `?lang=`, which causes a full page reload.
- **Deploy:** `.github/workflows/deploy.yml` tests, builds and publishes `dist/cv-william-mamani/browser` to GitHub Pages on every push to `main`. The repository's Pages source must be set to "GitHub Actions".
- Browser-only work goes inside `afterNextRender` and is guarded for missing `IntersectionObserver` and `matchMedia`, so the jsdom tests pass. High-frequency listeners (the hero parallax in `HeroVisual`) are attached with `addEventListener` rather than template bindings, so they don't trigger change detection.
- Angular Material is **not** installed. Its look and behaviour (state layers, elevation, ripple) are reproduced in SCSS. Don't add dependencies (Material, Tailwind, GSAP, Three.js) without the owner's approval.

## Styles

- **Fonts** are self-hosted variable WOFF2 files (latin subset) in `public/fonts/`. Their `@font-face` rules and preloads are in `src/index.html`, not in SCSS. The Angular build would try to resolve relative `url()`s in SCSS, while in `index.html` they resolve against the page.

- `src/styles/_tokens.scss` is the only place for raw values (palette, spacing, radii, elevation, type scale, motion, breakpoints). `_base.scss` turns them into CSS custom properties (`--color-accent`, `--space-4`, `--fs-h2`, `--ease-standard`, …), and components use `var(--…)`.
- Components bring in the breakpoint, reduced-motion and surface mixins with `@use '../../../styles/mixins' as *;`. The mixins file emits no CSS.
- Shared classes (`.container`, `.section`, `.section-head`, `.eyebrow`, `.btn--filled|tonal|outlined|text|icon`, `.chip`, `.reveal`, `.visually-hidden`) are global, in `_components.scss`.
- **Budget:** each component's styles warn at 4 kB and fail the build at 8 kB. When a component grows, split it (as was done for `HeroVisual` and `TechExplorer`) or move shared rules into `_components.scss`.
- Every animation needs a `prefers-reduced-motion` fallback (the `reduced-motion` mixin).
