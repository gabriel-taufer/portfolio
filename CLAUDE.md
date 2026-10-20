# CLAUDE.md

## What this is

Gabriel Taufer's personal site. Astro 5, static output, Tailwind 3, TypeScript strict.
Repo: `github.com/gabriel-taufer/portfolio`, **public**. Live at `https://taufer.dev`.

`.github/workflows/deploy.yml` builds on Node 20 and publishes `dist/` to GitHub Pages.
It triggers on **push to `main`** and on `workflow_dispatch`. A push to `main` publishes the
live site — there is no staging step between the two.

Path alias: `@*` → `./src/*` (so `@consts`, `@types`). Analytics is a Umami script tag in
`src/components/Head.astro`.

## Build and verify

`npm run build` is `astro check && astro build`, so **type errors fail the build**. On `main` it
ends at 0 errors / 0 warnings / 3 hints and 14 pages. `astro check` alone is a quick pass.

Two warnings on `main` are expected: `src/content/blog/` and `src/content/projects/` hold only
`.gitkeep`, so `rss.xml.ts` logs "collection does not exist or is empty" for both. An
empty-but-valid `/rss.xml` is the intended state on `main` and on `feat/blog-and-links`, not a
bug to fix.

## Content

Content lives in parallel locale directories, one per collection:

- `src/content/work/` and `src/content/work-pt/` — 8 files each, kept in sync
- `src/content/blog/` and `src/content/projects/` — empty on `main`

**One markdown file per role**, not per company. Multiple roles at the same employer are
separate files sharing a `company` value (`lumenalta-data-engineer.md`,
`lumenalta-javascript-fullstack.md`, `lumenalta-python-developer.md`). Frontmatter:
`company`, `role`, `dateStart`, `dateEnd`, optional `parentCompany`. `dateEnd` takes either
`YYYY-MM-DD` or a free string like `"Current"`. `src/content/config.ts` parses dates as local
time on purpose, so `2022-07-01` does not shift a day.

Collections are registered in the exported `collections` map at the bottom of
`src/content/config.ts` — the PT one needs a quoted key for the hyphen:
`{ blog, work, "work-pt": workPt, projects }`. A new directory does nothing until it is there.

Routes mirror the locale split: `src/pages/…` for EN, `src/pages/pt/…` for PT. **Adding a
route means adding it in both trees** plus the strings in `src/i18n/ui.ts`. The trees are not
symmetric today — `main` has `/projects` and `/blog/[...slug]` with no PT counterpart. Current
state, not a bug to go fix unasked.

`astro.config.mjs` sets `defaultLocale: "en"` with `prefixDefaultLocale: false`, so EN is
unprefixed and PT lives under `/pt/`.

## Where things live

- **Strings** — `src/i18n/ui.ts`: a `ui` object keyed `en` / `pt`, `as const`, plus
  `getLangFromUrl()` and `useTranslations()`. A missing PT key falls back to the EN value.
- **Site metadata** — `src/consts.ts`: `SITE` (name, email, homepage counts), `HOME`, `BLOG`,
  `WORK`, `PROJECTS`, `SOCIALS`.
- **Feature flags** — none on `main`. A `FEATURES` object in `src/consts.ts` exists only on
  `wip/portfolio-extras`.

## Branches

Shelved is not dead. Nothing below needs restoring, resurrecting or merging unless Gabriel
asks for it by name.

- **`main`** (`ff062a8`) — what is live. Pre-redesign.
- **`feat/blog-and-links`** (`d0c9eaf`, on `origin`, 2 commits ahead of `main`) — blog list
  fetched from `poorthoughts.com/rss.xml` at build time, local blog post route deleted, daily
  `cron` added to `deploy.yml` so new posts appear without a commit, the RSS `alternate` in
  `Head.astro` repointed at `https://poorthoughts.com/rss.xml`, an inline rehype plugin in
  `astro.config.mjs` that opens external markdown links in a new tab. `/rss.xml` is kept but no
  longer advertised: it serves the `projects` collection only, which is empty on this branch, so
  the feed builds valid and itemless. The route was kept rather than deleted, so it starts
  working on its own if project content ever lands there.
- **`wip/swiss-redesign`** (`a745eec`, local only, 87 files in one commit) — a Swiss redesign:
  self-hosted Mona Sans + Barlow Condensed, an ink/porcelain/cobalt palette, 11 components and
  10 pages restyled, tech icons on the skills page. **Shelved on purpose.** The keeper branch
  was rebuilt from `main` without it.
- **`wip/portfolio-extras`** (`2934ec2`, local only, in its own worktree) — stacked on
  `wip/swiss-redesign`, plus cherry-picks of the two `feat/blog-and-links` commits
  (different hashes, so not a descendant of that branch). Adds a `projects-pt` collection, the
  work history rewritten in first person EN+PT, reading-progress and link-preview components
  behind `FEATURES` flags, `DESIGN.md` and `PRODUCT.md`.
- **`feat/digest-section`** (`8fe8caf`, local only, 11 commits, in its own worktree) — branched
  off `main`, not off the redesign. A digest section whose content loader reads a `DIGEST_DIR`
  env var and degrades to an empty collection when it is unset.
- **`snapshot/pre-split`** (`0f5994b`) — a fallback commit holding all of the above in one
  place before it was split. Leave it alone.
- On `origin` only: `gh-pages` (the Pages artifact, machine-written) and `revamp` (old).

## Known defects, parked on purpose

Do not file these as discoveries, and do not fix them without asking.

- `wip/swiss-redesign` → `tailwind.config.mjs` sets `slate: "#e4e8ff"` as a single hex, which
  replaces Tailwind's `slate-50`…`slate-950` scale. 12 numbered-slate classes across 5 files
  (`404`, `contact`, `projects/[...slug]`, `skills`, `work`) therefore resolve to nothing.
- Same file: `teal` is `#0a0a0a` (black) and `lavender` is `#fffff0` (ivory). Misleading names,
  but both are used as hover tokens across 5 files, so renaming them is a real change rather
  than a cleanup. `cobalt` is declared and never used as a utility.
- `public/fonts/MonaSans-{Light,Regular,SemiBold}.ttf` in the working tree are **saved HTML
  pages, not fonts**. Untracked. The real fonts are the committed `.woff2` files, which are on
  `main` already. Do not commit the `.ttf` files and do not try to repair them.

## Never commit

The repo is public. The main checkout holds six untracked top-level directories of private
drafts, none of them in `.gitignore`, so `git add -A` or `git add .` would stage them into a
public repo. Never stage by wildcard here: add files by explicit path and read `git status`
before every `add`. An untracked directory you did not create for the task in hand is not
yours to commit.

## Outward actions

No push, pull request, force-push, merge or PR close without Gabriel's explicit approval for
that specific action. Approval for one push does not carry to the next. Branching, editing and
committing locally are fine; publishing is not. When something is ready, show the diff and the
target branch, then ask.

Gabriel reviews in small reviewable groups and defers rather than discards. If a change grows
bigger than what was asked, split it.
