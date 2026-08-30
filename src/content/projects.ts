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

const projectList: Project[] = [
  {
    year: "2026",
    name: "welles",
    url: "https://welles.studio/",
    subjects: ["ai editor", "screen recording", "demos"],
    status: "open source",
  },
  {
    year: "2026",
    name: "sleeper sdk",
    url: "https://github.com/cameron-eth/sleeper-sdk",
    subjects: ["fantasy football", "python sdk", "cli", "data modeling"],
    status: "open source",
  },
  {
    year: "2024",
    name: "draft theory",
    url: "https://github.com/cameron-eth/draft-theory",
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
    subjects: ["fantasy football", "data modeling"],
    status: "open source",
  },
]

const postList: Post[] = [
  {
    year: "2026",
    title:
      "nfl draft theory: a data-driven exploration of the nfl's parity machine (combine, surplus value, and trading back)",
    href: "/blog/draft-theory",
    projectName: "draft theory",
    projectUrl: "https://github.com/cameron-eth/draft-theory",
    value: "r² 0.414",
    subjects: ["data modeling", "nfl draft"],
  },
  {
    year: "2025",
    title:
      "seven months, a million learnings: moving across the country to build ai agents",
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
]

/**
 * Newest first. Sorted here rather than by hand so the list cannot drift out
 * of order as entries are added — it previously ran 2026, 2026, 2024, 2025,
 * 2024, which made the year column print 2024 twice with 2025 between.
 *
 * Sort is stable, so projects sharing a year keep their authored order.
 */
export const projects: Project[] = [...projectList].sort(
  (a, b) => Number(b.year) - Number(a.year)
)

/** Newest first, same rule as above. */
export const posts: Post[] = [...postList].sort(
  (a, b) => Number(b.year) - Number(a.year)
)
