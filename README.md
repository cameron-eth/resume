# resume

Personal site (Next.js App Router): **`/`** projects index, **`/blog`** post list + **`/blog/*`** write-ups.

## Where to run commands

The **app root** is the directory that contains **`package.json`** (this folder).

Some setups open a **parent folder** in the editor (e.g. a wrapper named `resume` around this repo). If you do not see `package.json` in your current path, move into the inner project directory first:

```bash
cd resume   # only if you are one level above package.json
yarn install
yarn dev
```

Build and start:

```bash
yarn build
yarn start
```

## Project layout

| Path                                  | Role                                                 |
| ------------------------------------- | ---------------------------------------------------- |
| `src/app/page.tsx`                    | Home — projects list                                 |
| `src/app/blog/page.tsx`               | Blog index (timeline)                                |
| `src/content/projects.ts`             | Shared data (`projectBlogItems`)                     |
| `src/components/SiteHeader.tsx`       | Shared nav (Projects / Blog / Contact / social)      |
| `src/app/blog/*/page.tsx`             | Individual posts                                     |
| `src/components/BlogArticleShell.tsx` | Post chrome (back → `/blog`, container, `<article>`) |
| `src/app/api/spotify/`                | Spotify API routes (optional)                        |
