import type { Metadata } from "next"

import { SiteHeader, SiteFooter } from "@/components/SiteHeader"
import { TimelineList, type TimelineItem } from "@/components/TimelineList"
import { Slug } from "@/components/brand/Slug"
import { posts } from "@/content/projects"

export const metadata: Metadata = {
  title: "Writing | norfleet.tech",
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
    <div className="min-h-screen bg-paper">
      <div className="mx-auto w-full max-w-5xl px-6 pt-10 md:px-10 md:pt-12">
        <SiteHeader />

        <main>
          <h1 className="sr-only">Writing</h1>

          <section>
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <Slug strong>Notes</Slug>
              <Slug>
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </Slug>
            </div>
            <TimelineList items={items} />
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
