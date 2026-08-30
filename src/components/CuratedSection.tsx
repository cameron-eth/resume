"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Slug } from "@/components/brand/Slug"
import { MosaicMark } from "@/components/brand/Mosaic"
import { hueFor } from "@/lib/spectrum"
import { curated, type CuratedItem } from "@/content/curated"

/** Matches the gap-3 (12px) between cards; the ticker maths needs it in px. */
const GAP = 12

function youtubeThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
}

function youtubeUrl(id: string, start?: number) {
  return `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ""}`
}

/**
 * A poster card.
 *
 * Square corners, hairline rule, the wordmark parked bottom-left the way it
 * sits on the reference posters. Category is metadata, so it is mono — never
 * colored.
 */
function Card({ item }: { item: CuratedItem }) {
  const imageSrc = item.image ?? (item.youtubeId ? youtubeThumbnail(item.youtubeId) : null)
  const href =
    item.url ?? (item.youtubeId ? youtubeUrl(item.youtubeId, item.youtubeStart) : undefined)

  const inner = (
    <article className="group flex w-full min-w-0 flex-col border border-rule bg-paper transition-colors hover:border-rule-strong">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-raised">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={item.title}
            fill
            className={
              item.category === "product"
                ? "object-contain p-5"
                : // Album art is square and the box is 4:3 — cropping would cut
                  // the sleeve's own typography off, so contain it instead.
                  item.category === "music"
                  ? "object-contain"
                  : "object-cover grayscale-[0.15] transition-[filter] duration-500 group-hover:grayscale-0"
            }
            sizes="(max-width: 640px) 85vw, (max-width: 900px) 45vw, 33vw"
          />
        ) : null}

        {/* Every music card gets the play affordance, not just YouTube-backed
            ones — the Spotify-linked entries are just as playable. */}
        {item.category === "music" ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-9 w-9 items-center justify-center bg-paper text-ink">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 translate-x-px" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        ) : null}

        {item.tag ? (
          <span className="slug absolute bottom-2 left-2 bg-paper px-1.5 py-1 text-[9px] text-ink">
            {item.tag}
          </span>
        ) : null}
      </div>

      <div className="flex items-end justify-between gap-3 border-t border-rule px-3 py-3">
        <div className="min-w-0">
          {/* Always rendered so cards with and without a subtitle stay the
              same height — otherwise the row jitters as the ticker moves. */}
          <p className="slug mb-1 truncate text-[9px] text-ink-3">
            {item.subtitle ?? " "}
          </p>
          <p className="truncate text-[14px] text-ink">{item.title}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <MosaicMark hue={hueFor(item.id)} />
          <Slug className="text-[9px]">{item.category}</Slug>
        </div>
      </div>
    </article>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="flex w-full">
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

  /** Index of the leftmost visible card. Advances by exactly one per click. */
  const [start, setStart] = useState(0)
  /** Dropped for one frame when wrapping, so the reset never animates. */
  const [animated, setAnimated] = useState(true)

  const viewportRef = useRef<HTMLDivElement>(null)
  const [metrics, setMetrics] = useState({ card: 0, step: 0, perView: 3 })

  const filtered = curated.filter((item) => matchesFilter(item, filter))
  const total = filtered.length
  const canTick = total > metrics.perView

  // Measure the viewport so the slide distance is exact at any width.
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const measure = () => {
      const w = el.clientWidth
      const perView = w < 640 ? 1 : w < 900 ? 2 : 3
      const card = (w - (perView - 1) * GAP) / perView
      setMetrics({ card, step: card + GAP, perView })
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Re-arm the transition on the frame after a wrap reset.
  useEffect(() => {
    if (animated) return
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)))
    return () => cancelAnimationFrame(id)
  }, [animated])

  const step = useCallback(
    (delta: number) => {
      if (!canTick) return
      setStart((s) => s + delta)
    },
    [canTick]
  )

  // Once the track has slid a full lap in either direction, snap silently back
  // to the middle copy. transitionend bubbles, so ignore the cards' own
  // border/filter transitions.
  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget || e.propertyName !== "transform") return
      if (start >= total) {
        setAnimated(false)
        setStart((s) => s - total)
      } else if (start <= -total) {
        setAnimated(false)
        setStart((s) => s + total)
      }
    },
    [start, total]
  )

  const handleFilter = (f: Filter) => {
    if (f === filter) return
    setAnimated(false)
    setStart(0)
    setFilter(f)
  }

  // Three copies, windowed onto the middle one, so the track has somewhere to
  // slide into going forwards *and* backwards.
  const track = canTick ? [...filtered, ...filtered, ...filtered] : filtered
  const origin = canTick ? total : 0
  const first = start + origin
  const position = total > 0 ? (((start % total) + total) % total) + 1 : 0

  return (
    <section className="mt-20 md:mt-28">
      <div className="mb-3 flex flex-wrap items-baseline gap-y-2 border-b border-rule pb-2">
        <div className="flex flex-1 flex-wrap items-baseline gap-x-4 gap-y-2">
          <Slug strong>Curated</Slug>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilter(f.value)}
                aria-pressed={filter === f.value}
                className={`slug pb-0.5 text-[10px] transition-colors ${
                  filter === f.value
                    ? "border-b border-ink text-ink"
                    : "border-b border-transparent text-ink-3 hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {canTick ? (
          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={() => step(-1)}
              aria-label="Show previous item"
              className="group p-1 text-ink-3 transition-colors hover:text-ink"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="square" />
              </svg>
            </button>

            <span className="slug text-[10px] text-ink-3" aria-live="polite">
              {position} / {total}
            </span>

            <button
              onClick={() => step(1)}
              aria-label="Show next item"
              className="group p-1 text-ink-3 transition-colors hover:text-ink"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>

      <div ref={viewportRef} className="overflow-hidden">
        <div
          className="flex items-start"
          style={{
            gap: `${GAP}px`,
            transform: `translate3d(-${first * metrics.step}px, 0, 0)`,
            transition: animated ? "transform 560ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((item, i) => {
            const offscreen = i < first || i >= first + metrics.perView
            return (
              <div
                key={`${item.id}-${i}`}
                // min-w-0 is load-bearing: flex items default to
                // min-width:auto, so a long title's min-content width would
                // override flex-basis, widening that one card and knocking
                // every card after it out of alignment with the track.
                className="flex min-w-0 shrink-0 grow-0"
                style={{
                  flexBasis: metrics.card
                    ? `${metrics.card}px`
                    : `calc((100% - ${GAP * 2}px) / 3)`,
                }}
                // Cards slid out of view must not stay tab stops — focusing one
                // would scroll the clipped viewport and strand the user.
                inert={offscreen}
              >
                <Card item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
