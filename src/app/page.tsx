import { SiteHeader, SocialLinks } from "@/components/SiteHeader"
import { TimelineList, type TimelineItem } from "@/components/TimelineList"
import { CuratedSection } from "@/components/CuratedSection"
import { projects } from "@/content/projects"

const items: TimelineItem[] = projects.map((p) => ({
  year: p.year,
  title: p.name,
  href: p.url,
  meta: p.value ?? p.status,
  external: true,
}))

export default function HomePage() {
  return (
    <div className="min-h-screen h-full bg-[var(--warm-bg)] text-[var(--warm-cream)]">
      <div className="mx-auto w-full max-w-5xl px-6 pb-10 pt-10 md:px-10 md:pt-12">
        <SiteHeader />

        <SocialLinks />
        <main>
          <h1 className="sr-only">Projects</h1>
          <TimelineList items={items} />
          <CuratedSection />
        </main>
      </div>
    </div>
  )
}
