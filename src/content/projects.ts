export type ProjectBlogItem = {
  year: string
  projectName: string
  projectUrl: string
  blogTitle: string
  blogUrl: string
  value: string
  subjects: string[]
}

/** Projects landing + blog index — shared list, newest first */
export const projectBlogItems: ProjectBlogItem[] = [
  {
    year: "2026",
    projectName: "draft theory",
    projectUrl: "https://v0-draft-theory.vercel.app/",
    blogTitle:
      "nfl draft theory: a data-driven exploration of the nfl's parity machine (combine, surplus value, and trading back)",
    blogUrl: "/blog/draft-theory",
    value: "r² 0.414",
    subjects: ["data modeling", "nfl draft"],
  },
  {
    year: "2025",
    projectName: "foundry",
    projectUrl: "https://foundry-coral-six.vercel.app/",
    blogTitle: "foundry: giving ai agents the ability to build their own tools at runtime",
    blogUrl: "/blog/foundry",
    value: "live",
    subjects: ["ai agents", "tool generation", "infra", "developer tooling"],
  },
  {
    year: "2025",
    projectName: "amigo",
    projectUrl: "https://amigo.ai",
    blogTitle:
      "seven months, one promotion, a million learnings: moving across the country to build ai agents",
    blogUrl: "/blog/amigo",
    value: "current",
    subjects: ["ai agents", "engineering", "product"],
  },
  {
    year: "2024",
    projectName: "betsync",
    projectUrl: "https://www.betsync.us/",
    blogTitle:
      "building betsync: a 2 year long adventure into statistical modeling, exploring expected value in sports betting, and learning market theory",
    blogUrl: "/blog/betsync",
    value: "$2.1k mrr",
    subjects: ["sports betting", "expected value", "data modeling", "market theory"],
  },
  {
    year: "2024",
    projectName: "first ballot ff",
    projectUrl: "https://www.firstballotff.com/",
    blogTitle:
      "fantasy football, a hobby that took over all of my freetime. a labor of love, data, predictions, and mostly luck",
    blogUrl: "/blog/first-ballot-ff",
    value: "public launch",
    subjects: ["fantasy football", "data modeling"],
  },
]
