import type { Metadata } from "next"

import { SiteHeader, SiteFooter } from "@/components/SiteHeader"
import { TimelineList, type TimelineItem } from "@/components/TimelineList"
import { posts } from "@/content/projects"

export const metadata: Metadata = {
  title: "Blog | Cameron Norfleet",
  description: "Notes on building products, agents, data, and sports modeling.",
}

const items: TimelineItem[] = posts.map((p) => ({
  year: p.year,
  title: p.title,
  href: p.href,
  meta: p.value,
  external: p.href.startsWith("http"),
}))

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen h-full bg-[var(--warm-bg)] text-[var(--warm-cream)]">
      <div className="mx-auto w-full max-w-5xl px-6 pt-10 md:px-10 md:pt-12">
        <SiteHeader />
        <main>
          <h1 className="sr-only">Blog</h1>
          <TimelineList items={items} />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
