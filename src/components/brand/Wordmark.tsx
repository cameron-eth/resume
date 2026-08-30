import { MosaicText } from "./Mosaic"

type Props = {
  /** Font size of the solid half, in px. The mosaic is scaled to match. */
  size?: number
  animate?: boolean
  className?: string
}

/**
 * The wordmark: `norfleet.` set solid, `tech` built from the grid module.
 *
 * The split is the whole identity in miniature — type stays black, color
 * lives in the pixels.
 */
export function Wordmark({ size = 34, animate = false, className }: Props) {
  // Cap height is ~72% of em; the bitmap is 7 rows tall.
  const cell = Math.max(2, Math.round((size * 0.72) / 7))

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "flex-end", gap: `${Math.round(size * 0.06)}px` }}
    >
      <span
        className="display"
        style={{ fontSize: `${size}px`, lineHeight: 0.84 }}
      >
        norfleet.
      </span>
      <MosaicText word="tech" cell={cell} animate={animate} title="tech" />
    </span>
  )
}
