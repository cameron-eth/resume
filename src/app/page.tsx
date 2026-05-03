import Link from "next/link"

import { SiteHeader } from "@/components/SiteHeader"
import { projects, type ProjectStatus } from "@/content/projects"

const statusStyles: Record<ProjectStatus, string> = {
  building: "border-[var(--warm-bone)]/40 text-[var(--warm-bone-bright)]",
  "open source": "border-[var(--warm-border-hover)] text-[var(--warm-cream)]",
  sold: "border-[var(--warm-border-hover)] text-[var(--warm-cream)]",
  live: "border-[var(--warm-border)] text-[var(--warm-cream-dim)]",
}

function isRepoUrl(url: string) {
  return /^https?:\/\/(www\.)?github\.com\//.test(url)
}

export default function HomePage() {
  return (
    <div className="min-h-screen h-full bg-[var(--warm-bg)] text-[var(--warm-cream)]">
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10 md:px-10 md:pt-12">
        <SiteHeader />

        <main>
          <h1 className="mb-6 text-[9px] tracking-[0.14em] text-[var(--warm-muted)] md:mb-8 md:text-[10px]">
            Projects
          </h1>
          <ul className="space-y-6 md:space-y-7">
            {projects.map((item) => {
              const primaryLabel = isRepoUrl(item.url) ? "Repo" : "Live"
              return (
                <li
                  key={`project-${item.year}-${item.name}`}
                  className="flex flex-col gap-2 border-t border-[var(--warm-border)] pt-6 first:border-t-0 first:pt-0 md:flex-row md:items-start md:justify-between md:gap-8"
                >
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-[var(--warm-bone)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-lg"
                      >
                        {item.name}
                      </Link>
                      <span
                        className={`inline-block rounded-sm border px-1.5 py-0.5 text-[8px] tracking-[0.1em] uppercase md:text-[9px] ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                      {item.value ? (
                        <span className="text-[10px] tabular-nums text-[var(--warm-muted)] md:text-[11px]">
                          {item.value}
                        </span>
                      ) : null}
                    </div>
                    <p className="max-w-2xl text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[12px]">
                      {item.subjects.join(" · ")}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3 md:pt-0.5">
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] tracking-[0.12em] text-[var(--warm-cream)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[10px]"
                    >
                      {primaryLabel}
                    </Link>
                    {item.blogSlug ? (
                      <Link
                        href={item.blogSlug}
                        className="text-[9px] tracking-[0.12em] text-[var(--warm-muted)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[10px]"
                      >
                        Write-up
                      </Link>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        </main>
      </div>
    </div>
  )
}
