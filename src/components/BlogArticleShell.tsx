import Link from "next/link"
import type { ReactNode } from "react"

import { Slug } from "@/components/brand/Slug"

/**
 * Specimen sheet for an article: running head, hairline rules, and body copy
 * at a real reading size.
 */
export function BlogArticleShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-paper">
      <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-10 md:px-10 md:pt-14">
        <div className="mb-10 flex items-baseline justify-between gap-6 border-b border-rule pb-2">
          <Link
            href="/blog"
            className="slug text-[10px] text-ink-3 transition-colors hover:text-ink"
          >
            ← Writing
          </Link>
          <Slug>Norfleet.tech</Slug>
        </div>

        <article className="space-y-8">{children}</article>
      </div>
    </main>
  )
}
