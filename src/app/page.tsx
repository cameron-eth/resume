import { SiteHeader, SiteFooter } from "@/components/SiteHeader"
import { TimelineList, type TimelineItem } from "@/components/TimelineList"
import { CuratedSection } from "@/components/CuratedSection"
import { Slug } from "@/components/brand/Slug"
import { projects } from "@/content/projects"

const items: TimelineItem[] = projects.map((p) => ({
  year: p.year,
  title: p.name,
  href: p.url,
  meta: p.value ?? p.status,
  external: true,
}))

const years = projects.map((p) => p.year).sort()
const span = `${years[0]}–${years[years.length - 1]}`

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto w-full max-w-5xl px-6 pt-10 md:px-10 md:pt-12">
        <SiteHeader />

        <main>
          <h1 className="sr-only">Projects</h1>

          <section>
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <Slug strong>Selected work</Slug>
              <Slug>{span}</Slug>
            </div>
            <TimelineList items={items} />
          </section>

          <CuratedSection />
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
