"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

type ProjectBlogItem = {
  year: string
  projectName: string
  projectUrl: string
  blogTitle: string
  blogUrl: string
  value: string
  subjects: string[]
}

const projectBlogItems: ProjectBlogItem[] = [
  {
    year: "2025",
    projectName: "foundry",
    projectUrl: "https://foundry-coral-six.vercel.app/",
    blogTitle: "foundry: giving ai agents the ability to build their own tools at runtime",
    blogUrl: "/blog/foundry",
    value: "live",
    subjects: ["ai agents", "tool generation", "infra", "developer tooling"],
  },
  {
    year: "2025",
    projectName: "amigo",
    projectUrl: "https://amigo.ai",
    blogTitle: "seven months, one promotion, a million learnings: moving across the country to build ai agents",
    blogUrl: "/blog/amigo",
    value: "current",
    subjects: ["ai agents", "engineering", "product"],
  },
  {
    year: "2024",
    projectName: "betsync",
    projectUrl: "https://betsync.us",
    blogTitle:
      "building betsync: a 2 year long adventure into statistical modeling, exploring expected value in sports betting, and learning market theory",
    blogUrl: "/blog/betsync",
    value: "$2.1k mrr",
    subjects: ["sports betting", "expected value", "data modeling", "market theory"],
  },
  {
    year: "2024",
    projectName: "first ballot ff",
    projectUrl: "https://www.firstballotff.com",
    blogTitle: "fantasy football, a hobby that took over all of my freetime. a labor of love, data, predictions, and mostly luck",
    blogUrl: "/blog/first-ballot-ff",
    value: "public launch",
    subjects: ["fantasy football", "data modeling"],
  },
  {
    year: "2023",
    projectName: "draft theory",
    projectUrl: "https://v0-draft-theory.vercel.app/",
    blogTitle: "draft theory: modeling draft outcomes across 2,397 nfl prospects",
    blogUrl: "/blog/draft-theory",
    value: "r² 0.414",
    subjects: ["data modeling", "nfl draft"],
  },
]

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

          <nav className="flex items-center gap-4 pt-1 md:gap-5">
            <Link
              href="#blog"
              className="text-[9px] tracking-[0.12em] text-[var(--warm-cream)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[10px]"
            >
              Blog
            </Link>
            <Link
              href="http://cal.com/camfleety/30min?user=camfleety&month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.12em] text-[var(--warm-cream)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[10px]"
            >
              Contact
            </Link>
            <Link
              href="https://x.com/camfleety"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.12em] text-[var(--warm-cream)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[10px]"
            >
              Follow me
            </Link>
          </nav>
        </header>

        <main id="blog">
          <div>
            {projectBlogItems.map((item) => {
              const isExternalBlogLink = item.blogUrl.startsWith("http")

              return (
                <article
                  key={`${item.year}-${item.projectName}`}
                  className="grid grid-cols-[48px_1fr] gap-2 py-4 md:grid-cols-[72px_1fr_100px] md:gap-5 md:py-5"
                >
                  <span className="pt-1 text-[10px] text-[var(--warm-muted)] md:text-[11px]">{item.year}</span>
                  <div className="space-y-1.5">
                    <Link
                      href={item.blogUrl}
                      target={isExternalBlogLink ? "_blank" : undefined}
                      rel={isExternalBlogLink ? "noopener noreferrer" : undefined}
                      className="font-[ui-serif,Georgia,Cambria,Times_New_Roman,Times,serif] text-[1rem] leading-[1.25] text-[var(--warm-bone)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[1.45rem] md:leading-[1.2]"
                    >
                      {item.blogTitle}
                    </Link>
                    <div className="flex flex-wrap gap-1.5">
                      {item.subjects.map((subject, idx) => (
                        <Link
                          key={idx}
                          href={item.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-2 py-0.5 text-[8px] tracking-[0.08em] text-[var(--warm-cream-dim)] border border-[var(--warm-border)] rounded-sm transition-colors hover:text-[var(--warm-bone-bright)] hover:border-[var(--warm-border-hover)] md:text-[9px]"
                        >
                          {subject}
                        </Link>
                      ))}
                    </div>
                    {/* value badge: visible only on mobile, below the tags */}
                    <p className="text-[9px] tabular-nums text-[var(--warm-muted)] md:hidden">{item.value}</p>
                  </div>
                  {/* value column: visible only on desktop */}
                  <span className="hidden pt-1 text-right text-[11px] tabular-nums text-[var(--warm-muted)] md:block">{item.value}</span>
                </article>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
