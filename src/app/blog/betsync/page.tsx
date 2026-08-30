import Link from "next/link"

import { BlogArticleShell } from "@/components/BlogArticleShell"

export default function BetsyncBlogPage() {
  return (
    <BlogArticleShell>
      <header className="space-y-3">
        <p className="slug text-[10px] text-[var(--ink-3)]">
          2024
        </p>
        <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--ink)] md:text-[2rem]">
          building betsync: a 2 year long adventure into statistical modeling, exploring expected
          value in sports betting, and learning market theory
        </h1>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          betsync started as a side quest and turned into a long-running study of how markets price
          uncertainty. what began as model-building became a practical system for spotting edge
          before the line corrected.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          what i set out to learn
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          the first question was straightforward: can we build something that helps bettors think in
          expected value instead of highlights and hot takes? solving that meant turning noisy odds,
          movement, and context into clear decisions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          from prediction to pricing risk
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          we set out trying to maximize predictive accuracy, but eventually realized we were really
          in the business of auditing the price of risk and, by extension, expected value.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          the most profitable bettors were not trying to win any single bet. they were trying to
          capture mispriced opportunities repeatedly.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          every event has an implied probability reflected in the odds, and those odds are the price
          you pay to take risk on that event. while we actively modeled outcomes, the users who
          focused on pricing opportunities instead of outcome chasing were consistently more
          profitable.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          core themes
        </h2>
        <ul className="space-y-1 text-[15px] text-[var(--ink-2)] md:text-[17px]">
          <li>expected value modeling across books and lines</li>
          <li>market movement tracking and interpretation</li>
          <li>bankroll-aware product decisions</li>
          <li>signal vs noise in short-term outcomes</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          what shipped
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          over two years, the product moved from rough prototypes to a live tool with recurring
          revenue. each release got less theoretical and more useful: faster reads, clearer signals,
          and workflows that matched how real bettors actually think.
        </p>
      </section>

      <footer className="space-y-3 pt-2">
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          this is a placeholder write-up and will expand into a deeper technical breakdown of model
          design, feature engineering, and risk-adjusted decision logic.
        </p>
        <Link
              href="https://www.betsync.us/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block slug text-[10px] text-[var(--ink-3)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline md:text-[15px]"
        >
          open the betsync project
        </Link>
      </footer>
    </BlogArticleShell>
  )
}
