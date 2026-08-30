import Link from "next/link"

import { BlogArticleShell } from "@/components/BlogArticleShell"

export default function FirstBallotBlogPage() {
  return (
    <BlogArticleShell>
      <header className="space-y-3">
        <p className="slug text-[10px] text-[var(--ink-3)]">
          2024
        </p>
        <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--ink)] md:text-[2rem]">
          fantasy football, a hobby that took over all of my freetime. a labor of love, data,
          predictions, and mostly luck
        </h1>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          first ballot ff lives at the intersection of obsession and process: part product build,
          part community, and part weekly attempt to make sharper calls in a game built on
          uncertainty.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          what this project is
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          the goal is simple: help serious players evaluate uncertainty better than the crowd. that
          means framing ranges of outcomes, identifying fragile consensus takes, and making hard
          decisions with clarity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          focus areas
        </h2>
        <ul className="space-y-1 text-[15px] text-[var(--ink-2)] md:text-[17px]">
          <li>player evaluation and projection framing</li>
          <li>weekly decision support for starts, sits, and waiver moves</li>
          <li>data-informed strategy while respecting uncertainty</li>
          <li>clear communication for fast in-season decisions</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          build notes
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          this started as a hobby and became a disciplined product loop: ship, watch behavior,
          tighten the insight. the best features were rarely the loudest ones; they were the ones
          that helped people decide faster with less noise.
        </p>
      </section>

      <footer className="space-y-3 pt-2">
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          this is a placeholder write-up and will expand into season-by-season notes, model
          learnings, and the decision frameworks that held up under pressure.
        </p>
        <Link
              href="https://www.firstballotff.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block slug text-[10px] text-[var(--ink-3)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline md:text-[15px]"
        >
          open the first ballot ff project
        </Link>
      </footer>
    </BlogArticleShell>
  )
}
