import Link from "next/link"
import type { ReactNode } from "react"

const backLinkClass =
  "text-[10px] tracking-[0.12em] text-[var(--warm-muted)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[11px]"

export function BlogArticleShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--warm-bg)] text-[var(--warm-cream)]">
      <div className="mx-auto w-full max-w-3xl px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <div className="mb-8">
          <Link href="/" className={backLinkClass}>
            back
          </Link>
        </div>
        <article className="space-y-8">{children}</article>
      </div>
    </main>
  )
}
