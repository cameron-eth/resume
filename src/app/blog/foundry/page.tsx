import Link from "next/link"

import { BlogArticleShell } from "@/components/BlogArticleShell"

export default function FoundryBlogPage() {
  return (
    <BlogArticleShell>
      <header className="space-y-3">
        <p className="slug text-[10px] text-[var(--ink-3)]">
          2025
        </p>
        <h1 className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1.5rem] leading-[1.2] text-[var(--ink)] md:text-[2rem]">
          foundry: giving ai agents the ability to build their own tools at runtime
        </h1>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          the ceiling on what ai agents can accomplish is almost always set by the tools available
          to them. foundry is an attempt to remove that ceiling, a shared, dynamic tooling
          infrastructure where agents can describe what they need and get production-ready code in
          seconds.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          the idea
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          most agentic workflows are constrained by a fixed set of pre-built integrations. you get
          the tools the platform decided to give you, and you build around what is missing. this
          felt wrong to me.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          the more interesting architecture is one where the agent itself can define the tool it
          needs, right now, for the problem in front of it. describe the capability in plain
          language, get back a working, deployed, sandboxed function in under two seconds. call it
          immediately. that is what foundry is.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          i believe tooling infrastructure is the primary lever for uncapped progress in agentic
          workflows. foundry was built to democratize that infrastructure and give it a shared
          source of truth, a registry where agents can build tools for themselves, for other
          agents, and for entire business verticals, then reuse them freely across any context they
          are needed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          what it enables
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          when you give an agent the ability to build its own tools, something shifts. decisions
          that used to require a developer, defining the function signature, writing the logic,
          deploying and testing it, can now happen inside the agent loop itself. this is not just a
          developer productivity story. it is a fundamentally different model of how software gets
          created.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          non-deterministic tool calling becomes possible. an agent working on a healthcare problem
          can generate a vitals anomaly detector on the fly. an agent in a financial context can
          create a real-time pricing tool from a description. the domain does not need to be
          pre-anticipated by anyone.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          how it works
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          describe what you need. foundry generates production-ready python, validates it for
          safety, and deploys it into a fully sandboxed runtime, no network access, no filesystem,
          no system calls. tools are live in under two seconds, pre-warmed with zero cold starts,
          and billed only for compute time used.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          the api is minimal by design. one call to create. one call to invoke. the complexity is
          hidden completely behind the interface.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="slug text-[10px] text-[var(--ink-3)]">
          why it matters now
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          every serious agentic workflow eventually hits the same wall: the agent knows what it
          needs to do but does not have the tool to do it. right now, that is a developer problem.
          foundry makes it an agent problem, solvable in natural language, instantly.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-2)] md:text-[17px]">
          the long-term vision is a shared registry of agent-built tools. an ecosystem where the
          best solutions to common problems, flagging vitals anomalies, scraping a structured
          source, formatting a financial report, are built once by an agent, stored, and available
          to any agent that needs them. a true source of truth for agentic tooling across
          industries.
        </p>
      </section>

      <footer className="space-y-3 pt-2">
        <Link
          href="https://foundry-coral-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block slug text-[10px] text-[var(--ink-3)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline md:text-[15px]"
        >
          visit foundry
        </Link>
      </footer>
    </BlogArticleShell>
  )
}
