import Link from "next/link"

import { MosaicMark } from "@/components/brand/Mosaic"
import { hueFor } from "@/lib/spectrum"

export type TimelineItem = {
  year: string
  title: string
  href: string
  meta?: string
  external?: boolean
}

/**
 * The specimen table.
 *
 * Each row owns one spectrum hue, derived from its title so it stays put
 * wherever that project appears. On hover the 3x3 marker ignites to that hue
 * and the type goes to full ink — color signals state without ever being
 * set in type.
 *
 * Alignment note: every cell shares the same first-line box (`leading`
 * matched to the title) and aligns to the row start, rather than using
 * `items-baseline`. The marker is a CSS grid, so its baseline is the bottom
 * of its first cell row — baseline alignment leaves its lower two rows
 * hanging below the text. Matching line boxes puts everything on line one and
 * keeps multi-line titles anchored to their first line.
 */
export function TimelineList({ items }: { items: TimelineItem[] }) {
  let lastYear: string | null = null

  return (
    <ul className="border-t border-rule">
      {items.map((item, i) => {
        const showYear = item.year !== lastYear
        lastYear = item.year

        return (
          <li key={`${item.year}-${item.title}-${i}`} className="border-b border-rule">
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group grid grid-cols-[2.75rem_11px_1fr] items-start gap-x-3 py-3.5 transition-colors hover:bg-raised sm:grid-cols-[3.5rem_11px_1fr] sm:gap-x-4 md:grid-cols-[4.5rem_11px_1fr_9rem] md:gap-x-6 md:py-4"
            >
              <span className="slug text-[10px] leading-[22px] text-ink-3 transition-colors group-hover:text-ink md:leading-[26px]">
                {showYear ? item.year : ""}
              </span>

              {/* Centred inside the title's first line box */}
              <span className="flex h-[22px] items-center md:h-[26px]">
                <MosaicMark hue={hueFor(item.title)} />
              </span>

              <span className="min-w-0 text-[16px] leading-[22px] text-ink md:text-[19px] md:leading-[26px]">
                {item.title}
              </span>

              {item.meta ? (
                <span className="slug hidden text-[10px] leading-[22px] text-ink-3 transition-colors group-hover:text-ink md:col-start-4 md:block md:text-right md:leading-[26px]">
                  {item.meta}
                </span>
              ) : null}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
