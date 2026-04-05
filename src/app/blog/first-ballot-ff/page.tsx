import Link from "next/link"

import { BlogArticleShell } from "@/components/BlogArticleShell"

export default function FirstBallotBlogPage() {
  return (
    <BlogArticleShell>
      <header className="space-y-3">
        <p className="text-[10px] tracking-[0.12em] text-[var(--warm-muted)] md:text-[11px]">
          2024
        </p>
        <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--warm-bone)] md:text-[2rem]">
          fantasy football, a hobby that took over all of my freetime. a labor of love, data,
          predictions, and mostly luck
        </h1>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          first ballot ff lives at the intersection of obsession and process: part product build,
          part community, and part weekly attempt to make sharper calls in a game built on
          uncertainty.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          what this project is
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          the goal is simple: help serious players evaluate uncertainty better than the crowd. that
          means framing ranges of outcomes, identifying fragile consensus takes, and making hard
          decisions with clarity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          focus areas
        </h2>
        <ul className="space-y-1 text-[11px] text-[var(--warm-cream-dim)] md:text-[13px]">
          <li>player evaluation and projection framing</li>
          <li>weekly decision support for starts, sits, and waiver moves</li>
          <li>data-informed strategy while respecting uncertainty</li>
          <li>clear communication for fast in-season decisions</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          build notes
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          this started as a hobby and became a disciplined product loop: ship, watch behavior,
          tighten the insight. the best features were rarely the loudest ones; they were the ones
          that helped people decide faster with less noise.
        </p>
      </section>

      <footer className="space-y-3 pt-2">
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          this is a placeholder write-up and will expand into season-by-season notes, model
          learnings, and the decision frameworks that held up under pressure.
        </p>
        <Link
              href="https://www.firstballotff.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] tracking-[0.12em] text-[var(--warm-cream)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[11px]"
        >
          open the first ballot ff project
        </Link>
      </footer>
    </BlogArticleShell>
  )
}
