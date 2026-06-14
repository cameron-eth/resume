import Link from "next/link"

export type TimelineItem = {
  year: string
  title: string
  href: string
  meta?: string
  external?: boolean
}

export function TimelineList({ items }: { items: TimelineItem[] }) {
  let lastYear: string | null = null

  return (
    <ul className="-mx-3">
      {items.map((item, i) => {
        const showYear = item.year !== lastYear
        lastYear = item.year

        return (
          <li key={`${item.year}-${item.title}-${i}`}>
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group grid grid-cols-[2.75rem_1fr] items-baseline gap-x-3 px-3 py-2.5 md:grid-cols-[4rem_1fr_7rem] md:gap-x-6 md:py-3"
            >
              <span className="text-[12px] tabular-nums text-[var(--warm-muted)] md:text-[13px]">
                {showYear ? item.year : ""}
              </span>
              <span className="min-w-0 text-[15px] leading-snug md:text-[18px]">
                <span className="box-decoration-clone -mx-2 rounded-md px-2 py-1 text-[var(--warm-cream)] transition-colors group-hover:bg-[var(--warm-pill)] group-hover:text-[var(--warm-bone-bright)]">
                  {item.title}
                </span>
              </span>
              {item.meta ? (
                <span className="hidden md:col-start-3 md:block md:text-right md:text-[13px] md:tabular-nums md:text-[var(--warm-muted)]">
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
