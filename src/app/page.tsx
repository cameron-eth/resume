import Link from "next/link"

import { SiteHeader } from "@/components/SiteHeader"
import { projectBlogItems } from "@/content/projects"

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
            {projectBlogItems.map((item) => (
              <li
                key={`project-${item.year}-${item.projectName}`}
                className="flex flex-col gap-2 border-t border-[var(--warm-border)] pt-6 first:border-t-0 first:pt-0 md:flex-row md:items-start md:justify-between md:gap-8"
              >
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <Link
                      href={item.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-[var(--warm-bone)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-lg"
                    >
                      {item.projectName}
                    </Link>
                    <span className="text-[10px] tabular-nums text-[var(--warm-muted)] md:text-[11px]">
                      {item.value}
                    </span>
                  </div>
                  <p className="max-w-2xl text-[11px] leading-relaxed text-[var(--warm-cream-dim)] md:text-[12px]">
                    {item.subjects.join(" · ")}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3 md:pt-0.5">
                  <Link
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-[0.12em] text-[var(--warm-cream)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[10px]"
                  >
                    Live
                  </Link>
                  <Link
                    href={item.blogUrl}
                    target={item.blogUrl.startsWith("http") ? "_blank" : undefined}
                    rel={item.blogUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[9px] tracking-[0.12em] text-[var(--warm-muted)] underline-offset-4 transition-colors hover:text-[var(--warm-bone-bright)] hover:underline md:text-[10px]"
                  >
                    Write-up
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}
