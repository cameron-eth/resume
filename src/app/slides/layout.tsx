import type { Metadata } from "next"

import "./slides.css"

export const metadata: Metadata = {
  title: "Slides",
  description: "Recordable motion slides — designed at 1920×1080.",
}

export default function SlidesLayout({ children }: { children: React.ReactNode }) {
  return <div className="slides-root">{children}</div>
}
