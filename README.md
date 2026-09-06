# bibhushansaakha-portfolio

Personal portfolio site for Bibhushan Saakha, built from scratch with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS v3** (see note below on why v3, not v4)
- **Framer Motion** for the few places motion is used
- **next/font** for self-hosted Google Fonts (Inter, Instrument Serif, JetBrains Mono)
- Hand-written SVG icons for brand logos (GitHub, LinkedIn, Instagram, X), since `lucide-react` dropped brand icons in this version

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
src/
  app/                    Routes (App Router)
    page.tsx              Home
    about/page.tsx         About + journey timeline + skills
    work/page.tsx          Case study index
    work/[slug]/page.tsx    Individual case study (data-driven)
    contact/page.tsx        Contact
    now/page.tsx             /now page
    sitemap.ts, robots.ts   SEO
  components/
    layout/                Header, Footer, Container
    ui/                     Button, Tag, SectionHeading, SocialIcons
    home/                   Homepage sections
    work/                   ProjectCard, case study layout, illustrative mockups
    about/                  Timeline, SkillsGrid
    contact/                ContactCard
  lib/content/
    site.ts                Site-wide constants (name, contact, social, /now items)
    projects.ts             All case study content (the main content file)
    timeline.ts              About page journey timeline
```

## Editing content

Almost everything text-based lives in `src/lib/content/`, not scattered across components. To update:

- **Bio, contact info, social links, /now list** -> `src/lib/content/site.ts`
- **Case studies** -> `src/lib/content/projects.ts` (add a new object to the `projects` array to add a new case study; the `/work` index and `/work/[slug]` pages pick it up automatically)
- **Journey timeline on /about** -> `src/lib/content/timeline.ts`

## A note on the Tigg case studies

Three case studies (Batch & Serial Number Tracking, Sign-In Page Redesign, Location-Based Permissions) are grounded in real work at Tigg, researched from actual commit history across the four repos you work in (`tigg-v2-ui`, `tigg-pos-ui`, `tigg-admin-ui`, `erp-business-ui`). To respect confidentiality:

- No actual proprietary code, API contracts, internal architecture, or real customer data is reproduced anywhere.
- The visual "mockups" on each case study page (`src/components/work/illustrations/`) are **original, illustrative recreations** built as real React components, not screenshots of the production product. Each one says so directly on the page.
- Each case study's content describes the problem, process, and decisions at a level appropriate for a public portfolio, not internal specifics.

**Before this goes live:** review the three Tigg case studies yourself, and ideally get informal sign-off from Tigg/Rara Labs that this level of detail is fine to publish. Nothing here should be a surprise to your employer, but it's your call to make, not mine.

## Deployment to bibhushansaakha.com.np

This is a standard Next.js app, deployable anywhere that supports Node.js or edge runtimes. The simplest path:

1. Push this to a GitHub repo (`git init`, commit, push, matching the pattern already used for your other repos).
2. Connect the repo to [Vercel](https://vercel.com) (same platform you've already used for the Pratistha Construction project).
3. In Vercel's project settings, add `bibhushansaakha.com.np` as a custom domain and follow their DNS instructions (usually an A record or CNAME at your domain registrar).
4. Every push to your main branch redeploys automatically.

## Known environment quirk (only relevant to the sandboxed build environment this was built in, not your Mac)

This project was built and verified inside a sandboxed environment that blocks native ARM64 binaries, which breaks both Next.js's default Turbopack bundler and Tailwind v4 (which depends on the native `lightningcss` binary). That's why this project uses **Tailwind v3** and was verified with `next build --webpack` / `next start` instead of the defaults. On your own machine, `npm run dev` and `npm run build` should work normally, including Turbopack, since there's no such restriction there. If you ever want to upgrade to Tailwind v4, it should be a drop-in change on a machine without this restriction.
