import Link from "next/link"

export default function FoundryBlogPage() {
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
            <p className="text-[10px] tracking-[0.12em] text-[var(--warm-muted)] md:text-[11px]">2025</p>
            <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--warm-bone)] md:text-[2rem]">
              foundry: giving ai agents the ability to build their own tools at runtime
            </h1>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              the ceiling on what ai agents can accomplish is almost always set by the tools available to them.
              foundry is an attempt to remove that ceiling — a shared, dynamic tooling infrastructure where agents
              can describe what they need and get production-ready code in seconds.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">the idea</h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              most agentic workflows are constrained by a fixed set of pre-built integrations. you get the tools the
              platform decided to give you, and you build around what is missing. this felt wrong to me.
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              the more interesting architecture is one where the agent itself can define the tool it needs, right now,
              for the problem in front of it. describe the capability in plain language, get back a working, deployed,
              sandboxed function in under two seconds. call it immediately. that is what foundry is.
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              i believe tooling infrastructure is the primary lever for uncapped progress in agentic workflows.
              foundry was built to democratize that infrastructure and give it a shared source of truth — a registry
              where agents can build tools for themselves, for other agents, and for entire business verticals,
              then reuse them freely across any context they are needed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">what it enables</h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              when you give an agent the ability to build its own tools, something shifts. decisions that used to
              require a developer — defining the function signature, writing the logic, deploying and testing it —
              can now happen inside the agent loop itself. this is not just a developer productivity story. it is
              a fundamentally different model of how software gets created.
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              non-deterministic tool calling becomes possible. an agent working on a healthcare problem can generate
              a vitals anomaly detector on the fly. an agent in a financial context can create a real-time pricing
              tool from a description. the domain does not need to be pre-anticipated by anyone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">how it works</h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              describe what you need. foundry generates production-ready python, validates it for safety, and deploys
              it into a fully sandboxed runtime — no network access, no filesystem, no system calls. tools are live
              in under two seconds, pre-warmed with zero cold starts, and billed only for compute time used.
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              the api is minimal by design. one call to create. one call to invoke. the complexity is hidden
              completely behind the interface.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">why it matters now</h2>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              every serious agentic workflow eventually hits the same wall: the agent knows what it needs to do but
              does not have the tool to do it. right now, that is a developer problem. foundry makes it an agent
              problem — solvable in natural language, instantly.
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
              the long-term vision is a shared registry of agent-built tools. an ecosystem where the best solutions
              to common problems — flagging vitals anomalies, scraping a structured source, formatting a financial
              report — are built once by an agent, stored, and available to any agent that needs them. a true source
              of truth for agentic tooling across industries.
            </p>
          </section>

          <footer className="space-y-3 pt-2">
            <Link
              href="https://foundry-coral-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] tracking-[0.12em] text-[var(--warm-cream)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[11px]"
            >
              visit foundry
            </Link>
          </footer>
        </article>
      </div>
    </main>
  )
}
