"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Github } from "lucide-react"

import { Wordmark } from "@/components/brand/Wordmark"
import { Slug } from "@/components/brand/Slug"

const GITHUB_URL = "https://github.com/cameron-eth"
const X_URL = "https://x.com/camfleety"
const CAL_URL = "https://cal.com/camfleety/30min?user=camfleety"

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

/**
 * Nav items are metadata, not display type. Active state is a rule under the
 * label — never a color, since the spectrum stays decorative.
 */
function NavLink({
  href,
  active,
  external,
  children,
}: {
  href: string
  active?: boolean
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`slug pb-1 text-[10px] transition-colors ${
        active
          ? "border-b border-ink text-ink"
          : "border-b border-transparent text-ink-3 hover:text-ink"
      }`}
    >
      {children}
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [stamp, setStamp] = useState<string>("")

  const onProjects = pathname === "/"
  const onBlog = pathname === "/blog" || pathname.startsWith("/blog/")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const date = now
        .toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })
        .replace(/\//g, ".")
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      setStamp(`${date} ${time}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="mb-12 md:mb-16">
      {/* Specimen slug — the running head */}
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-rule pb-2">
        <Slug strong>Norfleet.tech</Slug>
        <Slug>
          {/* Reserve the width so the ticking clock never reflows the rule */}
          <span className="inline-block min-w-[9.5rem] text-right tabular-nums">
            {stamp || " "}
          </span>
        </Slug>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
        <Link href="/" aria-label="norfleet.tech — home" className="group block">
          <Wordmark size={48} animate />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-1">
          <NavLink href="/" active={onProjects}>
            Projects
          </NavLink>
          <NavLink href="/blog" active={onBlog}>
            Blog
          </NavLink>
          <NavLink href={CAL_URL} external>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) {
    // Reserve the slot so the footer doesn't jump on hydration.
    return <span className="block h-[18px] w-[5.5rem]" aria-hidden="true" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to paper" : "Switch to black paper"}
      className="slug text-[10px] text-ink-3 transition-colors hover:text-ink"
    >
      {isDark ? "Black paper" : "Paper"}
    </button>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule pt-5 pb-10 md:mt-28">
      <div className="flex items-center justify-between gap-6">
        <ThemeToggle />

        <div className="flex items-center gap-4">
          <Link
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-3 transition-colors hover:text-ink"
            aria-label="Cameron on X"
          >
            <XLogo className="h-4 w-4" />
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-3 transition-colors hover:text-ink"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
