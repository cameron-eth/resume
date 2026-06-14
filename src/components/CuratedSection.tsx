"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { curated, type CuratedItem } from "@/content/curated"

function youtubeThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
}

function youtubeUrl(id: string, start?: number) {
  return `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ""}`
}

const categoryColors: Record<string, string> = {
  photo: "text-[var(--warm-muted)]",
  music: "text-[var(--warm-bone-bright)]",
  product: "text-[var(--warm-bone-bright)]",
  video: "text-[var(--warm-bone-bright)]",
}

function Card({ item }: { item: CuratedItem }) {
  const imageSrc = item.image ?? (item.youtubeId ? youtubeThumbnail(item.youtubeId) : null)
  const href = item.url ?? (item.youtubeId ? youtubeUrl(item.youtubeId, item.youtubeStart) : undefined)

  const inner = (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-[var(--warm-card-02)] transition-colors hover:bg-[var(--warm-card-03)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--warm-card-03)]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={item.title}
            fill
            className={`transition-transform duration-500 group-hover:scale-[1.02] ${item.category === "product" ? "object-contain p-4" : "object-cover"}`}
            sizes="(max-width: 768px) 80vw, 33vw"
          />
        ) : null}

        {item.youtubeId ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all group-hover:bg-[var(--warm-bone-bright)]">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 translate-x-0.5" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ) : null}

        {item.tag && item.category === "photo" ? (
          <span className="absolute bottom-2 left-2 rounded-md border border-white/20 bg-black/30 px-1.5 py-0.5 text-[9px] tracking-wide text-white/80 backdrop-blur-sm">
            {item.tag}
          </span>
        ) : null}

        {item.tag && item.category === "product" ? (
          <span className="absolute bottom-2 left-2 rounded-md bg-[var(--warm-bone-bright)] px-1.5 py-0.5 text-[9px] tracking-wide text-white">
            {item.tag}
          </span>
        ) : null}
      </div>

      <div className="flex items-end justify-between px-3 py-2.5">
        <div className="min-w-0">
          {item.subtitle && (
            <p className="truncate text-[10px] text-[var(--warm-muted)]">{item.subtitle}</p>
          )}
          <p className="truncate text-[13px] text-[var(--warm-bone)]">{item.title}</p>
        </div>
        <span className={`ml-3 shrink-0 text-[9px] uppercase tracking-[0.12em] ${categoryColors[item.category]}`}>
          {item.category}
        </span>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </Link>
    )
  }
  return inner
}

type Filter = "all" | "product" | "music" | "content"

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Product", value: "product" },
  { label: "Music", value: "music" },
  { label: "Content", value: "content" },
]

function matchesFilter(item: CuratedItem, filter: Filter) {
  if (filter === "all") return true
  if (filter === "content") return item.category === "photo" || item.category === "video"
  return item.category === filter
}

export function CuratedSection() {
  const [filter, setFilter] = useState<Filter>("all")
  const [page, setPage] = useState(0)
  const [fading, setFading] = useState(false)

  const filtered = curated.filter((item) => matchesFilter(item, filter))
  const pageSize = 3
  const totalPages = Math.ceil(filtered.length / pageSize)
  const visible = filtered.slice(page * pageSize, page * pageSize + pageSize)

  const next = () => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setPage((p) => (p + 1) % totalPages)
      setFading(false)
    }, 180)
  }

  const handleFilter = (f: Filter) => {
    if (f === filter) return
    setFading(true)
    setTimeout(() => {
      setFilter(f)
      setPage(0)
      setFading(false)
    }, 180)
  }

  return (
    <section className="mt-16 md:mt-20">
      {/* Header: filters left, pagination right — wraps on mobile */}
      <div className="mb-5 flex flex-wrap items-center gap-y-2">
        <div className="flex flex-1 flex-wrap items-center gap-1">
          <h2 className="mr-2 text-[9px] tracking-[0.14em] text-[var(--warm-muted)] md:text-[10px]">
            Curated
          </h2>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilter(f.value)}
              className={`rounded-full px-2.5 py-1 text-[9px] tracking-[0.1em] transition-colors md:text-[10px] ${
                filter === f.value
                  ? "bg-[var(--warm-bone-bright)] text-white"
                  : "text-[var(--warm-muted)] hover:text-[var(--warm-bone)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {totalPages > 1 && (
          <button
            onClick={next}
            className="flex shrink-0 items-center gap-1.5 text-[9px] tracking-[0.12em] text-[var(--warm-muted)] transition-colors hover:text-[var(--warm-bone-bright)] md:text-[10px]"
          >
            <span>{page + 1} / {totalPages}</span>
            <svg
              viewBox="0 0 16 16"
              className={`h-3 w-3 transition-transform duration-180 ${fading ? "translate-x-1" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Cards: horizontal scroll on mobile, 3-col grid on desktop */}
      <div
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(6px)" : "translateY(0px)",
          transition: "opacity 180ms ease, transform 180ms ease",
        }}
      >
        {visible.map((item) => (
          <div key={item.id} className="w-[75vw] shrink-0 snap-start md:w-auto md:shrink md:snap-none">
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
