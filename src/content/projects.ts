export type ProjectStatus = "building" | "open source" | "sold" | "live"

export type Project = {
  year: string
  name: string
  url: string
  blogSlug?: string
  value?: string
  subjects: string[]
  status: ProjectStatus
}

export type Post = {
  year: string
  title: string
  href: string
  projectName: string
  projectUrl: string
  value: string
  subjects: string[]
}

/** Home page — projects list, newest first */
export const projects: Project[] = [
  {
    year: "2026",
    name: "walles",
    url: "https://reel-landing-ten.vercel.app/",
    subjects: ["ai", "screen recording"],
    status: "building",
  },
  {
    year: "2026",
    name: "draft theory",
    url: "https://v0-draft-theory.vercel.app/",
    blogSlug: "/blog/draft-theory",
    value: "r² 0.414",
    subjects: ["data modeling", "nfl draft"],
    status: "open source",
  },
  {
    year: "2025",
    name: "foundry",
    url: "https://github.com/cameron-eth/foundry",
    blogSlug: "/blog/foundry",
    subjects: ["ai agents", "tool generation", "infra", "developer tooling"],
    status: "open source",
  },
  {
    year: "2024",
    name: "betsync",
    url: "https://www.betsync.us/",
    blogSlug: "/blog/betsync",
    value: "$2.1k mrr",
    subjects: ["sports betting", "expected value", "data modeling", "market theory"],
    status: "sold",
  },
  {
    year: "2024",
    name: "first ballot ff",
    url: "https://www.firstballotff.com/",
    blogSlug: "/blog/first-ballot-ff",
    value: "public launch",
    subjects: ["fantasy football", "data modeling"],
    status: "live",
  },
]

/** Blog index — write-ups, newest first */
export const posts: Post[] = [
  {
    year: "2026",
    title:
      "nfl draft theory: a data-driven exploration of the nfl's parity machine (combine, surplus value, and trading back)",
    href: "/blog/draft-theory",
    projectName: "draft theory",
    projectUrl: "https://v0-draft-theory.vercel.app/",
    value: "r² 0.414",
    subjects: ["data modeling", "nfl draft"],
  },
  {
    year: "2025",
    title: "foundry: giving ai agents the ability to build their own tools at runtime",
    href: "/blog/foundry",
    projectName: "foundry",
    projectUrl: "https://github.com/cameron-eth/foundry",
    value: "live",
    subjects: ["ai agents", "tool generation", "infra", "developer tooling"],
  },
  {
    year: "2025",
    title:
      "seven months, one promotion, a million learnings: moving across the country to build ai agents",
    href: "/blog/amigo",
    projectName: "amigo",
    projectUrl: "https://amigo.ai",
    value: "current",
    subjects: ["ai agents", "engineering", "product"],
  },
  {
    year: "2024",
    title:
      "building betsync: a 2 year long adventure into statistical modeling, exploring expected value in sports betting, and learning market theory",
    href: "/blog/betsync",
    projectName: "betsync",
    projectUrl: "https://www.betsync.us/",
    value: "$2.1k mrr",
    subjects: ["sports betting", "expected value", "data modeling", "market theory"],
  },
  {
    year: "2024",
    title:
      "fantasy football, a hobby that took over all of my freetime. a labor of love, data, predictions, and mostly luck",
    href: "/blog/first-ballot-ff",
    projectName: "first ballot ff",
    projectUrl: "https://www.firstballotff.com/",
    value: "public launch",
    subjects: ["fantasy football", "data modeling"],
  },
]
