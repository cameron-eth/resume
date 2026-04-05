"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

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

const navInactive =
  "text-[9px] tracking-[0.12em] text-[var(--warm-muted)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[10px]"

const navActive =
  "text-[9px] tracking-[0.12em] text-[var(--warm-cream)] transition-colors md:text-[10px]"

const iconLinkClass =
  "text-[var(--warm-cream)] transition-colors hover:text-[var(--warm-bone-bright)] p-1 -m-1 rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--warm-bone)]"

export function SiteHeader() {
  const pathname = usePathname()
  const [currentTime, setCurrentTime] = useState<string>("")

  const onProjects = pathname === "/"
  const onBlog = pathname === "/blog" || pathname.startsWith("/blog/")

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
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="mb-8 flex items-start justify-between md:mb-10">
      <div>
        <Link
          href="/"
          className="block text-xl font-semibold tracking-tight transition-colors hover:text-[var(--warm-bone-bright)] md:text-2xl"
        >
          Cameron Norfleet
        </Link>
        {currentTime && (
          <p className="mt-1 text-[9px] tracking-[0.12em] text-[var(--warm-muted)] md:text-[10px]">
            {currentTime}
          </p>
        )}
      </div>

      <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 pt-1 md:gap-x-5">
        <Link href="/" className={onProjects ? navActive : navInactive}>
          Projects
        </Link>
        <Link href="/blog" className={onBlog ? navActive : navInactive}>
          Blog
        </Link>
        <Link
          href="http://cal.com/camfleety/30min?user=camfleety&month=2026-03"
          target="_blank"
          rel="noopener noreferrer"
          className={navInactive}
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
  )
}
