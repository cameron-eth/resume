"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"

import { SPECTRUM, hueVar, hueForCell, type Hue } from "@/lib/spectrum"

/**
 * The grid module.
 *
 * A 7-row bitmap set covering the characters the wordmark needs. Glyphs are
 * variable width — each is an array of rows, "#" is an inked cell. Characters
 * outside the set render as a space rather than throwing, so callers can pass
 * arbitrary strings safely.
 */
const GLYPHS: Record<string, string[]> = {
  n: [".....", ".....", "####.", "#...#", "#...#", "#...#", "#...#"],
  o: [".....", ".....", ".###.", "#...#", "#...#", "#...#", ".###."],
  r: [".....", ".....", "#.##.", "##..#", "#....", "#....", "#...."],
  f: ["..##.", ".#...", "####.", ".#...", ".#...", ".#...", ".#..."],
  l: [".##..", "..#..", "..#..", "..#..", "..#..", "..#..", ".###."],
  e: [".....", ".....", ".###.", "#...#", "#####", "#....", ".###."],
  t: [".#...", ".#...", "####.", ".#...", ".#...", ".#...", ".###."],
  c: [".....", ".....", ".###.", "#...#", "#....", "#...#", ".###."],
  h: ["#....", "#....", "#.##.", "##..#", "#...#", "#...#", "#...#"],
  ".": ["..", "..", "..", "..", "..", "..", "##"],
}

const ROWS = 7
const LETTER_GAP = 1

/**
 * Grid gaps are what make the mosaic read as pixels rather than a blurry
 * glyph — but below ~6px per cell they eat enough of each stroke that the
 * word reads lighter than the solid half of the wordmark. So the gap only
 * appears once there are enough pixels to carry it.
 */
function gapFor(cell: number): number {
  return cell >= 6 ? 1 : 0
}

type Cell = { x: number; y: number; hue: Hue }

function layout(word: string): { cells: Cell[]; cols: number } {
  const cells: Cell[] = []
  let x = 0

  for (let i = 0; i < word.length; i++) {
    const glyph = GLYPHS[word[i]]

    if (!glyph) {
      x += 3 + LETTER_GAP
      continue
    }

    const width = glyph[0].length

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < width; col++) {
        if (glyph[row][col] === "#") {
          cells.push({ x: x + col, y: row, hue: hueForCell(row, x + col, i) })
        }
      }
    }

    x += width
    if (i < word.length - 1) x += LETTER_GAP
  }

  return { cells, cols: x }
}

type MosaicTextProps = {
  word: string
  /** Edge length of one cell, in px. */
  cell?: number
  /**
   * Slowly drift a few cells through the spectrum after mount — the revived
   * FlickeringGrid behaviour, dialled down. Disabled under reduced-motion.
   */
  animate?: boolean
  className?: string
  title?: string
}

export function MosaicText({
  word,
  cell = 10,
  animate = false,
  className,
  title,
}: MosaicTextProps) {
  const { cells, cols } = layout(word)
  const [drift, setDrift] = useState<Record<number, Hue>>({})
  const tick = useRef(0)

  useEffect(() => {
    if (!animate || cells.length === 0) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const id = window.setInterval(() => {
      tick.current += 1
      const t = tick.current
      setDrift((prev) => {
        const next = { ...prev }
        for (let n = 0; n < 3; n++) {
          const idx = (t * 7 + n * 29) % cells.length
          next[idx] = SPECTRUM[(t * 3 + n * 5) % SPECTRUM.length]
        }
        return next
      })
    }, 1400)

    return () => window.clearInterval(id)
  }, [animate, cells.length])

  return (
    <span
      role="img"
      aria-label={title ?? word}
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
        gridTemplateRows: `repeat(${ROWS}, ${cell}px)`,
        gap: `${gapFor(cell)}px`,
        lineHeight: 0,
      }}
    >
      {cells.map((c, i) => (
        <span
          key={`${c.x}-${c.y}`}
          style={{
            gridColumn: c.x + 1,
            gridRow: c.y + 1,
            background: hueVar(drift[i] ?? c.hue),
            transition: "background 900ms linear",
          }}
        />
      ))}
    </span>
  )
}

type MosaicMarkProps = {
  /** The hue this marker ignites to. */
  hue: Hue
  /** Edge length of one cell, in px. */
  size?: number
  className?: string
}

/**
 * The 3x3 row marker. Each project owns one hue; the marker is how that hue
 * reaches the page without any color touching type.
 *
 * Renders inert (ink-3) until an ancestor with `.group` is hovered or focused,
 * then fills with the hue. Pure CSS — no state, no JS.
 */
export function MosaicMark({ hue, size = 3, className }: MosaicMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={
        {
          display: "grid",
          gridTemplateColumns: `repeat(3, ${size}px)`,
          gridTemplateRows: `repeat(3, ${size}px)`,
          gap: "1px",
          lineHeight: 0,
          // Read by the .mosaic-mark-cell group-hover rule in globals.css.
          "--mark-hue": hueVar(hue),
        } as CSSProperties
      }
    >
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} className="mosaic-mark-cell" />
      ))}
    </span>
  )
}
