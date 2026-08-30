import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  /** Full-ink instead of the default metadata grey. */
  strong?: boolean
  className?: string
}

/**
 * The metadata register — mono, uppercase, wide-tracked.
 *
 * Specimen-sheet chrome: section labels, years, categories, running heads.
 * Everything that is data about the page rather than the page itself.
 */
export function Slug({ children, strong = false, className }: Props) {
  return (
    <span
      className={cn(
        "slug text-[10px] leading-none",
        strong ? "text-ink" : "text-ink-3",
        className
      )}
    >
      {children}
    </span>
  )
}
