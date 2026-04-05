import Link from "next/link"

import { BlogArticleShell } from "@/components/BlogArticleShell"

export default function BetsyncBlogPage() {
  return (
    <BlogArticleShell>
      <header className="space-y-3">
        <p className="text-[10px] tracking-[0.12em] text-[var(--warm-muted)] md:text-[11px]">
          2024
        </p>
        <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--warm-bone)] md:text-[2rem]">
          building betsync: a 2 year long adventure into statistical modeling, exploring expected
          value in sports betting, and learning market theory
        </h1>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          betsync started as a side quest and turned into a long-running study of how markets price
          uncertainty. what began as model-building became a practical system for spotting edge
          before the line corrected.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          what i set out to learn
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          the first question was straightforward: can we build something that helps bettors think in
          expected value instead of highlights and hot takes? solving that meant turning noisy odds,
          movement, and context into clear decisions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          from prediction to pricing risk
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          we set out trying to maximize predictive accuracy, but eventually realized we were really
          in the business of auditing the price of risk and, by extension, expected value.
        </p>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          the most profitable bettors were not trying to win any single bet. they were trying to
          capture mispriced opportunities repeatedly.
        </p>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          every event has an implied probability reflected in the odds, and those odds are the price
          you pay to take risk on that event. while we actively modeled outcomes, the users who
          focused on pricing opportunities instead of outcome chasing were consistently more
          profitable.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          core themes
        </h2>
        <ul className="space-y-1 text-[11px] text-[var(--warm-cream-dim)] md:text-[13px]">
          <li>expected value modeling across books and lines</li>
          <li>market movement tracking and interpretation</li>
          <li>bankroll-aware product decisions</li>
          <li>signal vs noise in short-term outcomes</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          what shipped
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          over two years, the product moved from rough prototypes to a live tool with recurring
          revenue. each release got less theoretical and more useful: faster reads, clearer signals,
          and workflows that matched how real bettors actually think.
        </p>
      </section>

      <footer className="space-y-3 pt-2">
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          this is a placeholder write-up and will expand into a deeper technical breakdown of model
          design, feature engineering, and risk-adjusted decision logic.
        </p>
        <Link
              href="https://www.betsync.us/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] tracking-[0.12em] text-[var(--warm-cream)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[11px]"
        >
          open the betsync project
        </Link>
      </footer>
    </BlogArticleShell>
  )
}
