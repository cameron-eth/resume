import type { Metadata } from "next"
import Link from "next/link"

import { SiteHeader } from "@/components/SiteHeader"
import { posts } from "@/content/projects"

export const metadata: Metadata = {
  title: "Blog | Cameron Norfleet",
  description: "Notes on building products, agents, data, and sports modeling.",
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen h-full bg-[var(--warm-bg)] text-[var(--warm-cream)]">
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10 md:px-10 md:pt-12">
        <SiteHeader />

        <main>
          <h1 className="mb-6 text-[9px] tracking-[0.14em] text-[var(--warm-muted)] md:mb-8 md:text-[10px]">
            Blog
          </h1>
          <div>
            {posts.map((item) => {
              const isExternalBlogLink = item.href.startsWith("http")

              return (
                <article
                  key={`${item.year}-${item.projectName}`}
                  className="grid grid-cols-[48px_1fr] gap-2 py-4 md:grid-cols-[72px_1fr_100px] md:gap-5 md:py-5"
                >
                  <span className="pt-1 text-[10px] text-[var(--warm-muted)] md:text-[11px]">
                    {item.year}
                  </span>
                  <div className="space-y-1.5">
                    <Link
                      href={item.href}
                      target={isExternalBlogLink ? "_blank" : undefined}
                      rel={isExternalBlogLink ? "noopener noreferrer" : undefined}
                      className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1rem] leading-[1.25] text-[var(--warm-bone)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[1.45rem] md:leading-[1.2]"
                    >
                      {item.title}
                    </Link>
                    <div className="hidden flex-wrap gap-1.5 md:flex">
                      {item.subjects.map((subject, idx) => (
                        <Link
                          key={idx}
                          href={item.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-sm border border-[var(--warm-border)] px-2 py-0.5 text-[8px] tracking-[0.08em] text-[var(--warm-cream-dim)] transition-colors hover:border-[var(--warm-border-hover)] hover:text-[var(--warm-bone-bright)] md:text-[9px]"
                        >
                          {subject}
                        </Link>
                      ))}
                    </div>
                    <p className="text-[9px] tabular-nums text-[var(--warm-muted)] md:hidden">
                      {item.value}
                    </p>
                  </div>
                  <span className="hidden pt-1 text-right text-[11px] tabular-nums text-[var(--warm-muted)] md:block">
                    {item.value}
                  </span>
                </article>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
