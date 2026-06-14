"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

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
  "text-[var(--warm-muted)] transition-colors hover:text-[var(--warm-bone-bright)] p-1 -m-1 rounded-sm"

export function SiteHeader() {
  const pathname = usePathname()
  const [currentTime, setCurrentTime] = useState<string>("")

  const onProjects = pathname === "/"
  const onBlog = pathname === "/blog" || pathname.startsWith("/blog/")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      )
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
          href="https://cal.com/camfleety/30min?user=camfleety"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline ${navInactive}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex items-center gap-1.5 rounded-full border border-[var(--warm-border)] bg-[var(--warm-bg-elevated)] px-2.5 py-1.5 transition-colors hover:border-[var(--warm-border-hover)]"
    >
      {/* sun */}
      <svg
        viewBox="0 0 24 24"
        className={`h-3.5 w-3.5 transition-colors ${!isDark ? "text-[var(--warm-bone-bright)]" : "text-[var(--warm-muted)]"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* moon */}
      <svg
        viewBox="0 0 24 24"
        className={`h-3.5 w-3.5 transition-colors ${isDark ? "text-[var(--warm-bone-bright)]" : "text-[var(--warm-muted)]"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}

export function SocialLinks() {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 md:bottom-8 md:left-8">
        <ThemeToggle />
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 md:bottom-8 md:right-8">
      <Link
        href={X_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={iconLinkClass}
        aria-label="Cameron on X"
      >
        <XLogo className="h-4 w-4" />
      </Link>
      <Link
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={iconLinkClass}
        aria-label="GitHub profile"
      >
        <Github className="h-4 w-4" strokeWidth={1.5} />
      </Link>
      </div>
    </>
  )
}
