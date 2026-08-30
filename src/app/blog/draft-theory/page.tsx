import Link from "next/link"
import type { Metadata } from "next"

import { BlogArticleShell } from "@/components/BlogArticleShell"

export const metadata: Metadata = {
  title: "nfl draft theory | Cameron Norfleet",
  description:
    "a data-driven exploration of the nfl's parity machine: combine signals, surplus value, and why trading back compounds luck.",
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
      {children}
    </p>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="slug text-[10px] text-[var(--ink-3)]">
      {children}
    </h2>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l border-[var(--rule)] pl-4 text-[15px] italic leading-relaxed text-[var(--ink-2)] md:text-[17px]">
      {children}
    </blockquote>
  )
}

export default function DraftTheoryBlogPage() {
  return (
    <BlogArticleShell>
      <header className="space-y-3">
        <p className="slug text-[10px] text-[var(--ink-3)]">
          apr 5, 2026
        </p>
        <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--ink)] md:text-[2rem]">
          nfl draft theory: a data-driven exploration of the nfl&apos;s parity machine
        </h1>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          key concepts, combine signals, surplus value, and why the draft behaves less like scouting
          and more like a market, one where mis-priced assets matter more than picking the single
          best name on the board.
        </p>
      </header>

      <section className="space-y-4">
        <H2>key concepts &amp; glossary</H2>
        <dl className="space-y-4 text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          <div>
            <dt className="font-medium text-[var(--ink)]">draft capital</dt>
            <dd className="mt-1">
              the value associated with a player&apos;s selection position in the nfl draft. earlier
              picks carry higher expectations and historically produce greater career value.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--ink)]">draft stock</dt>
            <dd className="mt-1">
              a player&apos;s perceived value leading up to the draft, performance, film, combine,
              media, and team demand.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--ink)]">profile</dt>
            <dd className="mt-1">
              the full evaluative picture: athletic traits, production, measurables, and scouting
              analysis.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--ink)]">ev (expected value)</dt>
            <dd className="mt-1">
              the historical average career output expected from a player drafted at a given slot.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--ink)]">
              weighted approximate value (wav)
            </dt>
            <dd className="mt-1">
              pro-football-reference&apos;s career value metric, approximates contribution across
              seasons and positions.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--ink)]">position</dt>
            <dd className="mt-1">the role on the field (wr, rb, te, cb, etc.).</dd>
          </div>
        </dl>
      </section>

      <section className="space-y-3">
        <H2>introduction</H2>
        <P>
          the nfl draft is one of the most fascinating markets in sports. the careers of everyone
          involved depend largely on how well teams can predict player success.
        </P>
        <P>
          that isn&apos;t breaking news, but it might not be as intuitive as we think. there
          isn&apos;t a universal definition of what &ldquo;success&rdquo; even means. for this
          piece, we&apos;ll define it in buckets: position, profile, and draft capital, and walk
          the lifecycle of a prospect.
        </P>
      </section>

      <section className="space-y-3">
        <H2>the nfl combine</H2>
        <P>
          the combine is a three-day event where just over 300 players run drills built to stress
          height, weight, speed, and strength.
        </P>
        <P>
          the first combine was held in 1982 in tampa, florida. early on, psychological and medical
          screening mattered as much as physical testing. today it tilts physical, but it left a
          high-quality longitudinal dataset analysts and gms can use to ask a simple question: how
          predictive are these events, alone and together?
        </P>
      </section>

      <section className="space-y-4">
        <H2>the 40-yard dash</H2>
        <P>
          the marquee drill. for most players, one or two tenths of a second can mean millions of
          dollars in contract and draft position.
        </P>
        <div className="overflow-x-auto border border-[var(--rule)] text-[13px] md:text-[14px]">
          <table className="w-full border-collapse text-left text-[var(--ink-2)]">
            <thead>
              <tr className="border-b border-[var(--rule)] bg-[var(--raised)] slug text-[10px] text-[var(--ink-3)]">
                <th className="px-3 py-2 font-normal">player type</th>
                <th className="px-3 py-2 font-normal">draft pick</th>
                <th className="px-3 py-2 font-normal">expected wav</th>
                <th className="px-3 py-2 font-normal">actual wav</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--rule)]">
                <td className="px-3 py-2 text-[var(--ink)]">elite speed wr</td>
                <td className="px-3 py-2 font-mono">25</td>
                <td className="px-3 py-2 font-mono">40</td>
                <td className="px-3 py-2 font-mono text-neg">34</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-[var(--ink)]">average speed wr</td>
                <td className="px-3 py-2 font-mono">60</td>
                <td className="px-3 py-2 font-mono">22</td>
                <td className="px-3 py-2 font-mono text-pos">26</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          when a team drafts a 4.21 runner, they aren&apos;t buying what he is, they&apos;re buying
          what that number made them believe he could become. there&apos;s a tax on imagination: at
          pick 25 the expected bar can climb toward 40 wav; at pick 60 a slower, more productive
          receiver might only need ~22 to break even.
        </P>
        <Callout>
          the strategy isn&apos;t to avoid highly desired players. it&apos;s to know which metrics
          create asymmetric opportunity, and to stay aware of the tax embedded in the pick.
        </Callout>
      </section>

      <section className="space-y-4">
        <H2>historically notable 40 times (wr lens)</H2>
        <P>
          on one end: henry ruggs (4.27), john ross (4.22), donte&apos; stallworth (4.29) -
          explosive testers with brutal surplus returns (−38, −41, −8 surplus av in this framing).
          on the other: anquan boldin (4.72) +57, jordy nelson (4.51) +35, jauan jennings (4.72) +35
         , &ldquo;slow&rdquo; times that still produced huge surplus for the teams that bet on the
          full profile.
        </P>
        <P>
          the draft is a market. when one side of the board gets bid up, value has to land
          somewhere. combine assessment is where teams price traits; the draft is where that price
          meets reality.
        </P>
        <Callout>
          teams routinely overpay for perceived upside. that creates opportunity elsewhere on the
          board.
        </Callout>
      </section>

      <section className="space-y-3">
        <H2>the nfl draft: un-natural selection</H2>
        <P>
          variance is the engine of surplus value, and it helps explain why bad teams race to the
          bottom for the first pick. a rookie qb, a disruptive edge, or a bookend tackle can flip an
          organization. the 2024 commanders, 2025 patriots, and 2013 seahawks are recent reminders
          of what happens when surplus shows up in bulk.
        </P>
        <P>
          perceived value often peaks during the draft itself. teams pay for hope, not certainty -
          especially after a loud combine or when qb, lt, wr, or de scarcity spooks the room.
        </P>
        <P>
          the league is impatient: injuries, aging curves, and new talent are always incoming. gms
          picking high sometimes refuse the &ldquo;time tax&rdquo; of trading back for more bites at
          the apple, and cap their own optionality.
        </P>
        <Callout>
          it&apos;s better to walk in the right direction than sprint in the wrong one.
        </Callout>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="border border-[var(--rule)] bg-[var(--raised)] px-2 py-3">
            <p className="font-mono text-lg text-[var(--ink)]">36%</p>
            <p className="mt-1 text-[var(--ink-3)]">drafted players gone by year 4</p>
          </div>
          <div className="border border-[var(--rule)] bg-[var(--raised)] px-2 py-3">
            <p className="font-mono text-lg text-[var(--ink)]">6</p>
            <p className="mt-1 text-[var(--ink-3)]">median career length (yrs)</p>
          </div>
          <div className="border border-[var(--rule)] bg-[var(--raised)] px-2 py-3">
            <p className="font-mono text-lg text-[var(--ink)]">4–5</p>
            <p className="mt-1 text-[var(--ink-3)]">avg gm tenure (yrs)</p>
          </div>
        </div>
        <P>
          a gm may not even be in the building to see the full arc of a pick they make, which warps
          incentives toward short-term certainty over long-run portfolio thinking.
        </P>
      </section>

      <section className="space-y-3">
        <H2>the first round: a crap shoot</H2>
        <P>
          more targets, more misses. the higher the pick, the higher the pressure, and the
          franchise cost of being wrong isn&apos;t just wasted capital. it&apos;s opportunity cost:
          the player you should have taken is wearing someone else&apos;s colors.
        </P>
        <H2>the evidence</H2>
        <P>
          top-10 picks average about <span className="text-neg">−2.4 surplus av</span>; round
          2 averages roughly <span className="text-pos">+1.0</span>. round 1 top-10 ev is
          often priced like 40–60 av, a bar few clear, while round 2 is priced closer to 20–30,
          which is more achievable. the whiffs (ruggs, ross, mcfadden, ricky williams types) are
          catastrophic in magnitude.
        </P>
      </section>

      <section className="space-y-3">
        <H2>bad jimmy&apos;s</H2>
        <P>
          jimmy johnson helped popularize pick value charts, a modeled approach to the draft. with
          hindsight, the classic curve over-weights early selections relative to what surplus data
          suggests.
        </P>
        <div className="border border-[var(--rule)] bg-[var(--raised)] px-4 py-3 text-[15px] text-[var(--ink-2)] md:text-[17px]">
          <p className="slug text-[10px] text-[var(--ink-3)]">
            trade-back thesis
          </p>
          <p className="mt-2">
            each additional pick in a class adds about{" "}
            <span className="font-mono text-[var(--ink)]">+14.8</span> av on average{" "}
            <span className="text-[var(--ink-3)]">(r ≈ 0.39)</span>, one way to formalize
            exchanging one lottery ticket for two (or more) and diversifying injury, bust, and
            variance risk.
          </p>
        </div>
        <P>
          variance humbles everyone. career success isn&apos;t binary, sam darnold, odell beckham
          jr., and baker mayfield are different shapes of the same lesson: huge over-achievement in
          one chapter, under-achievement in another.
        </P>
        <Callout>
          realized value ≠ captured value. a player can outrun his slot over a career while the
          drafting team never benefits, bad development, early trade, or selling low before the
          breakout.
        </Callout>
        <P>
          darnold is the clean example: picked third overall (~53–54 wav ev by this framing),
          written off early, passed around, then eventually cleared the bar, after multiple teams
          had already moved on.
        </P>
      </section>

      <section className="space-y-3">
        <H2>post-draft meaning of draft capital</H2>
        <P>
          draft capital is just when you picked, and it turns out to be one of the strongest
          anchors for expected outcomes. it&apos;s also sunk cost: high investment makes it
          psychologically costly to admit a miss. dynasty players know the feeling; nfl gms face the
          same &ldquo;darnolded&rdquo; fear, admitting defeat can feel like career risk.
        </P>
      </section>

      <section className="space-y-3">
        <H2>so what&apos;s the takeaway?</H2>
        <Callout>
          the most profitable draft strategy has less to do with identifying the single best player
          and more to do with identifying mis-priced assets.
        </Callout>
        <P>
          this april las vegas holds the no. 1 pick; if the board converges on fernando mendoza as
          the qb of the future, that moment looks less like a scouting decision and more like buying
          a hyper-growth name at ipo, where another, more desperate bidder might pay a wild premium
          to take you out of the risk.
        </P>
        <P>which is one reason to seriously consider trading the pick.</P>
        <P>
          a multi-year rebuild is a portfolio problem: democratize risk, stack assets across years,
          and manufacture more draws from the same uncertainty.
        </P>
        <Callout>
          you don&apos;t beat the draft by finding the best player. you beat it by playing more
          hands, across more years.
        </Callout>
      </section>

      <section className="space-y-4 border-t border-[var(--rule)] pt-8">
        <H2>appendix: findings from the 2015–2024 model</H2>
        <P>
          the interactive build still lives on the project site; below is the quantitative spine
          from the same sample (2,397 players, 42 pre-draft features) that powers the surplus and ev
          framing above.
        </P>
        <div className="space-y-4">
          <div>
            <h3 className="slug text-[10px] text-[var(--ink-3)]">
              top 5 all-time draft gems (2015-2024)
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
              these players did not just beat expectations, they blew past the price implied by
              where they were picked.
            </p>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
              <li>tyreek hill (r5 p165): +259.0 surplus | ev 147.4 → actual 406.4</li>
              <li>budda baker (r2 p36): +173.8 surplus | ev 110.0 → actual 283.8</li>
              <li>t.j. watt (r1 p30): +168.2 surplus | ev 107.0 → actual 275.2</li>
              <li>dak prescott (r4 p135): +161.6 surplus | ev 7.2 → actual 168.8</li>
              <li>chris jones (r2 p37): +156.4 surplus | ev 42.1 → actual 198.5</li>
            </ul>
          </div>

          <div>
            <h3 className="slug text-[10px] text-[var(--ink-3)]">
              best and worst positions to draft
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
              some positions look chaotic in single seasons but still deliver positive long-run
              surplus; others skew boom-bust.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="slug text-[10px] text-[var(--ink-3)]">
                  best avg surplus
                </p>
                <ul className="space-y-1 text-[15px] text-[var(--ink-2)] md:text-[17px]">
                  <li>+5.6 nt (nose tackle)</li>
                  <li>+4.6 center</li>
                  <li>+4.0 punter</li>
                  <li>+3.6 guard</li>
                  <li>+0.8 qb</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="slug text-[10px] text-[var(--ink-3)]">
                  worst avg surplus
                </p>
                <ul className="space-y-1 text-[15px] text-[var(--ink-2)] md:text-[17px]">
                  <li>−1.6 wr</li>
                  <li>−2.6 cb</li>
                  <li>−3.2 de</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
              takeaway: interior linemen look consistently underrated; edge and db outcomes skew
              boom-bust; wr has lagged in surplus terms more than most people expect.
            </p>
          </div>

          <div>
            <h3 className="slug text-[10px] text-[var(--ink-3)]">
              top 5 biggest draft busts (2015-2024)
            </h3>
            <ul className="mt-2 space-y-1 text-[15px] text-[var(--ink-2)] md:text-[17px]">
              <li>eli apple (r1 p10): -76.8 surplus | ev 142.6 → actual 65.8</li>
              <li>ed oliver (r1 p9): -75.8 surplus | ev 164.2 → actual 88.4</li>
              <li>malik mcdowell (r2 p35): -70.0 surplus | low realized return</li>
            </ul>
          </div>

          <div>
            <h3 className="slug text-[10px] text-[var(--ink-3)]">
              best drafting teams by avg surplus per pick (2015-2024)
            </h3>
            <ul className="mt-2 space-y-1 text-[15px] text-[var(--ink-2)] md:text-[17px]">
              <li>1. chiefs: +10.9 (71 picks)</li>
              <li>2. cowboys: +5.3 (77 picks)</li>
              <li>3. rams (stl + la): +4.0 (88 picks)</li>
              <li>4. saints: +2.3 (58 picks)</li>
              <li>5. ravens: +2.1</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="space-y-3 pt-2">
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          model detail, feature importance, holdout design, and team-level patterns, continues on
          the dashboard.
        </p>
        <Link
          href="https://github.com/cameron-eth/draft-theory"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block slug text-[10px] text-[var(--ink-3)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline md:text-[15px]"
        >
          view the draft theory project on github
        </Link>
      </footer>
    </BlogArticleShell>
  )
}
