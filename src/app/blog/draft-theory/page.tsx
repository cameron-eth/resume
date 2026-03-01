import Link from "next/link"

export default function DraftTheoryBlogPage() {
  return (
    <main className="min-h-screen bg-[var(--warm-bg)] text-[var(--warm-cream)]">
      <div className="mx-auto w-full max-w-3xl px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <div className="mb-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.12em] text-[var(--warm-muted)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[11px]"
          >
            back
          </Link>
        </div>

        <article className="space-y-8">
          <header className="space-y-3">
            <p className="text-[10px] tracking-[0.12em] text-[var(--warm-muted)] md:text-[11px]">jul 4, 2025</p>
            <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--warm-bone)] md:text-[2rem]">
              draft theory: findings from my 2015-2024 nfl draft analysis
            </h1>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              this post turns a long thread into one narrative: where draft capital was spent well, where it was
              burned, and what surplus value says about how teams actually create advantage.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
              top 5 all-time draft gems (2015-2024)
            </h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              these players did not just beat expectations. they blew past the price implied by where they were picked.
            </p>
            <ul className="space-y-3 text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              <li>tyreek hill (r5 p165): +259.0 surplus | ev 147.4 -> actual 406.4</li>
              <li>budda baker (r2 p36): +173.8 surplus | ev 110.0 -> actual 283.8</li>
              <li>t.j. watt (r1 p30): +168.2 surplus | ev 107.0 -> actual 275.2</li>
              <li>dak prescott (r4 p135): +161.6 surplus | ev 7.2 -> actual 168.8</li>
              <li>chris jones (r2 p37): +156.4 surplus | ev 42.1 -> actual 198.5</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
              best and worst positions to draft
            </h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              this is where the draft gets counterintuitive: some positions look chaotic in single seasons but still
              deliver positive long-run surplus.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.1em] text-[var(--warm-muted)] md:text-[11px]">best avg surplus</p>
                <ul className="space-y-1 text-[11px] text-[var(--warm-cream-dim)] md:text-[13px]">
                  <li>+5.6 nt (nose tackle)</li>
                  <li>+4.6 center</li>
                  <li>+4.0 punter</li>
                  <li>+3.6 guard</li>
                  <li>+0.8 qb</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.1em] text-[var(--warm-muted)] md:text-[11px]">worst avg surplus</p>
                <ul className="space-y-1 text-[11px] text-[var(--warm-cream-dim)] md:text-[13px]">
                  <li>-1.6 wr</li>
                  <li>-2.6 cb</li>
                  <li>-3.2 de</li>
                </ul>
              </div>
            </div>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              takeaway: interior linemen look consistently underrated, edge and db outcomes skew boom-bust, and wr has
              lagged in surplus terms more than most people expect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
              top 5 biggest draft busts (2015-2024)
            </h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              these are the picks where draft cost and on-field return were the most out of balance.
            </p>
            <ul className="space-y-1 text-[11px] text-[var(--warm-cream-dim)] md:text-[13px]">
              <li>eli apple (r1 p10): -76.8 surplus | ev 142.6 -> actual 65.8</li>
              <li>ed oliver (r1 p9): -75.8 surplus | ev 164.2 -> actual 88.4</li>
              <li>malik mcdowell (r2 p35): -70.0 surplus | low realized return</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
              best and worst drafting teams (2015-2024)
            </h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              using average surplus value per pick (actual minus expected), you can see which front offices repeatedly
              found value beyond consensus.
            </p>
            <ul className="space-y-1 text-[11px] text-[var(--warm-cream-dim)] md:text-[13px]">
              <li>1. chiefs: +10.9 (71 picks)</li>
              <li>2. cowboys: +5.3 (77 picks)</li>
              <li>3. rams (stl + la): +4.0 (88 picks)</li>
              <li>4. saints: +2.3 (58 picks)</li>
              <li>5. ravens: +2.1</li>
            </ul>
          </section>

          <footer className="space-y-3 pt-2">
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              this is the first pass. the full breakdown expands on model design, feature importance, and team-level
              patterns across the entire 2015-2024 sample.
            </p>
            <Link
              href="https://v0-draft-theory.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] tracking-[0.12em] text-[var(--warm-cream)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[11px]"
            >
              open the draft theory project
            </Link>
          </footer>
        </article>
      </div>
    </main>
  )
}
