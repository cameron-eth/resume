import Link from "next/link"

import { BlogArticleShell } from "@/components/BlogArticleShell"

export default function AmigoBlogPage() {
  return (
    <BlogArticleShell>
      <header className="space-y-3">
        <p className="text-[10px] tracking-[0.12em] text-[var(--warm-muted)] md:text-[11px]">
          2025 — ongoing
        </p>
        <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--warm-bone)] md:text-[2rem]">
          seven months, one promotion, a million learnings: moving across the country to build ai
          agents
        </h1>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          i packed up, left everything familiar, and landed in new york city to work on something i
          believed in. seven months later i had a promotion, a fully different understanding of what
          it means to build ai, and more questions than when i started — which is usually the sign
          you are in the right place.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          what we are building
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          amigo is an ai agent platform. not a chatbot wrapper, not a prompt template — an actual
          agent layer that reasons, plans, and executes across tools and contexts with minimal
          hand-holding. the product is built for teams that need ai to do real work, not just assist
          with it.
        </p>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          my role sits at the intersection of agent engineering and product. i help define how
          agents should behave, what they should have access to, and how to build the feedback loops
          that actually make them get better over time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          what i have learned about agents
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          the gap between a demo and a reliable agent is enormous. demos are easy — one happy path,
          controlled inputs, a compelling output. production agents are a different problem
          entirely. they fail at edges you did not anticipate, drift when context gets long, and
          hallucinate with confidence when uncertain.
        </p>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          the agents that actually work share three things: tightly scoped objectives, clean tool
          boundaries, and observability that lets you catch failures before users do. building
          agents is less about prompting and more about systems design.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          the tooling problem
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          the hardest part of building agents is not the model — models are getting better fast and
          cheaply. the hard part is tooling. an agent without tools is just a text predictor. an
          agent with the right tools at the right time is a collaborator.
        </p>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          most tooling infrastructure is static: define your tools, register them, hope they cover
          the use case. the more interesting question — the one i have been thinking about most — is
          what happens when agents can build and register their own tools dynamically, on demand,
          for the problem in front of them. that is the unlock that makes agentic workflows truly
          non-deterministic and uncapped.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[11px] tracking-[0.11em] text-[var(--warm-muted)] md:text-[12px]">
          why this moment matters
        </h2>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          we are at an early and consequential point in the agentic era. the infrastructure choices
          being made right now — how tools are defined, how agents communicate, how trust and scope
          are managed — will set the defaults for what ai systems look like for a long time. working
          at amigo means being inside those decisions while they are still open.
        </p>
        <p className="text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[13px]">
          that is not a small thing.
        </p>
      </section>

      <footer className="space-y-3 pt-2">
        <Link
          href="https://amigo.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] tracking-[0.12em] text-[var(--warm-cream)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[11px]"
        >
          visit amigo.ai
        </Link>
      </footer>
    </BlogArticleShell>
  )
}
