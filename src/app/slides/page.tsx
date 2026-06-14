import Link from "next/link"

import { SlideStage } from "@/components/SlideStage"
import { slides } from "@/content/slides"

export default function SlidesIndexPage() {
  return (
    <SlideStage>
      <div className="slides-index">
        <p className="slides-index-eyebrow">Slides</p>
        <ul className="slides-index-list">
          {slides.map((s) => (
            <li key={s.slug} className="slides-index-item">
              <Link href={`/slides/${s.slug}`} className="slides-index-link">
                <span className="slides-index-name">{s.title}</span>
                <span className="slides-index-duration">{s.duration}</span>
              </Link>
              {s.description ? <p className="slides-index-desc">{s.description}</p> : null}
            </li>
          ))}
        </ul>
        <p className="slides-index-note">
          Record at 1920×1080. Reload a slide to retrigger animations.
        </p>
      </div>
    </SlideStage>
  )
}
