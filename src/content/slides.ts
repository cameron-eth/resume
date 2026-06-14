export type Slide = {
  slug: string
  title: string
  duration: string
  description?: string
}

export const slides: Slide[] = [
  {
    slug: "welles-title",
    title: "welles — title card",
    duration: "3s",
    description: "Tagline reveal with letter-spacing tighten and fade-up.",
  },
  {
    slug: "welles-feature",
    title: "welles — three-step reveal",
    duration: "5s",
    description: "Record, Polish, Share — staggered slide-in from the left.",
  },
]
