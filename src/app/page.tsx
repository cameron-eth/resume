"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { useState, useEffect } from "react"

import { projectBlogItems } from "@/content/projects"

const GITHUB_URL = "https://github.com/cameron-eth"
const X_URL = "https://x.com/camfleety"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

const navLinkClass =
  "text-[9px] tracking-[0.12em] text-[var(--warm-cream)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[10px]"

const iconLinkClass =
  "text-[var(--warm-cream)] transition-colors hover:text-[var(--warm-bone-bright)] p-1 -m-1 rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--warm-bone)]"

export default function Page() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      setCurrentTime(now.toLocaleString("en-US", options))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000) // Update every second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen h-full bg-[var(--warm-bg)] text-[var(--warm-cream)]">
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10 md:px-10 md:pt-12">
        <header className="mb-8 flex items-start justify-between md:mb-10">
          <div>
            <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Cameron Norfleet</h1>
            {currentTime && (
              <p className="mt-1 text-[9px] tracking-[0.12em] text-[var(--warm-muted)] md:text-[10px]">
                {currentTime}
              </p>
            )}
          </div>

          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 pt-1 md:gap-x-5">
            <Link href="#projects" className={navLinkClass}>
              Projects
            </Link>
            <Link href="#blog" className={navLinkClass}>
              Blog
            </Link>
            <Link
              href="http://cal.com/camfleety/30min?user=camfleety&month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              Contact
            </Link>
            <span className="hidden h-3 w-px bg-[var(--warm-border)] sm:inline-block" aria-hidden />
            <Link
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
              aria-label="Cameron on X"
            >
              <XLogo className="h-[14px] w-[14px] md:h-4 md:w-4" />
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
              aria-label="GitHub profile"
            >
              <Github className="h-[14px] w-[14px] md:h-4 md:w-4" strokeWidth={1.5} />
            </Link>
          </nav>
        </header>

        <section
          id="projects"
          className="scroll-mt-8 border-b border-[var(--warm-border)] pb-10 md:scroll-mt-10 md:pb-14"
        >
          <h2 className="mb-6 text-[9px] tracking-[0.14em] text-[var(--warm-muted)] md:mb-8 md:text-[10px]">
            Projects
          </h2>
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
        </section>

        <main id="blog" className="scroll-mt-8 pt-10 md:scroll-mt-10 md:pt-14">
          <h2 className="mb-6 text-[9px] tracking-[0.14em] text-[var(--warm-muted)] md:mb-8 md:text-[10px]">
            Blog
          </h2>
          <div>
            {projectBlogItems.map((item) => {
              const isExternalBlogLink = item.blogUrl.startsWith("http")

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
                      href={item.blogUrl}
                      target={isExternalBlogLink ? "_blank" : undefined}
                      rel={isExternalBlogLink ? "noopener noreferrer" : undefined}
                      className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1rem] leading-[1.25] text-[var(--warm-bone)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[1.45rem] md:leading-[1.2]"
                    >
                      {item.blogTitle}
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
                    {/* value badge: visible only on mobile, below the tags */}
                    <p className="text-[9px] tabular-nums text-[var(--warm-muted)] md:hidden">
                      {item.value}
                    </p>
                  </div>
                  {/* value column: visible only on desktop */}
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
