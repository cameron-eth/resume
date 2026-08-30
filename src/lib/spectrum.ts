/**
 * The decorative spectrum.
 *
 * These eight hues are the only color in the identity, and they are strictly
 * decorative: they fill mosaic cells and poster panels, and they never sit
 * under type. Because nothing readable is ever set in them, none of them has
 * to clear a contrast threshold.
 */

export const SPECTRUM = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "violet",
  "magenta",
] as const

export type Hue = (typeof SPECTRUM)[number]

/** CSS custom-property reference for a hue. Resolves per theme. */
export function hueVar(hue: Hue): string {
  return `var(--s-${hue})`
}

/**
 * Assign a stable hue to a key (a project name, a post slug, a category).
 *
 * Deterministic so the server and client agree, and so a project keeps the
 * same hue everywhere it appears — row marker, article header, poster card.
 */
export function hueFor(key: string): Hue {
  let h = 0
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0
  }
  return SPECTRUM[h % SPECTRUM.length]
}

/** Deterministic hue for a mosaic cell, from its position in the grid. */
export function hueForCell(row: number, col: number, seed = 0): Hue {
  const h = (row * 7 + col * 3 + seed * 5) >>> 0
  return SPECTRUM[h % SPECTRUM.length]
}
