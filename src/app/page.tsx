"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Page() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-[#f5f2ea] text-[#4a4540] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ea] border-b border-[#e6e1d6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link href="/" className="text-[#4a4540] uppercase tracking-widest text-sm font-medium">
            Cameron
          </Link>

          <div className="hidden md:flex items-center gap-8 uppercase text-xs tracking-widest">
            <NavLink href="#about" active={activeSection === "about"} onClick={() => setActiveSection("about")}>
              About
            </NavLink>
            <NavLink
              href="#projects"
              active={activeSection === "projects"}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </NavLink>
            <NavLink href="#contact" active={activeSection === "contact"} onClick={() => setActiveSection("contact")}>
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-16">
        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-24">
          <div className="max-w-3xl space-y-12">
            <div className="border-b border-[#e6e1d6] pb-2">
              <h1 className="text-4xl uppercase tracking-widest font-light">Cameron Norfleet</h1>
              <p className="uppercase tracking-widest text-sm mt-2">Data, Engineering, GTM</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 md:border-r md:pr-8 border-[#e6e1d6]">
                <p className="text-sm leading-relaxed">
                  Currently helping define the future of sports media at Barstool Sports, where I turn data into
                  actionable strategies that fuel audience & revenue growth.{" "}
                  <span className="font-bold">After work I also build my own ideas.</span>
                </p>
              </div>

              <div className="md:pl-4 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2">Location</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest mb-2">Education</p>
                  <p className="text-sm">Information System & Data Analytics, San Jose State University</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-24">
          <div className="space-y-12">
            <div className="border-[#e6e1d6] pb-2">
              <h2 className="uppercase font-bold tracking-widest text-sm">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <ProjectCard
                title="BETSYNC"
                categories={[
                  { name: "ENGINEERING", color: "brown" },
                  { name: "PRODUCT", color: "grey" },
                ]}
                description="A sports betting platform that syncs with sportsbooks to track bets, provide analytics, and offer insights for bettors."
                details="$1.2k MRR SaaS"
                link="https://betsync.us"
              />

              <ProjectCard
                title="BANTERBOT"
                categories={[
                  { name: "ENGINEERING", color: "brown" },
                  { name: "PRODUCT", color: "grey" },
                ]}
                description="AI-powered chat platform for sports fans that provides real-time insights, stats, and conversation about games and players."
                details="$596 MRR SaaS"
                link="https://banterbot.chat"
              />

              <ProjectCard
                title="HIERLOOM AI"
                categories={[
                  { name: "PRODUCT", color: "grey" },
                  { name: "DESIGN", color: "maroon" },
                ]}
                description="AI-driven platform for preserving and sharing family stories and memories through interactive digital experiences."
                details="Not Launched"
                link="https://kzmnd86rwvzt1kwkjfas.lite.vusercontent.net/"
              />

              <ProjectCard
                title="NFL DRAFT QB SUCCESS MODEL"
                categories={[
                  { name: "DATA", color: "brown" },
                  { name: "ANALYSIS", color: "grey" },
                ]}
                description="Statistical model that predicts NFL quarterback success based on college performance, combine metrics, and historical draft data."
                details="Kaggle Project"
                link="https://www.kaggle.com/code/cameroneth/nfl-qb-draft-data-analysis"
              />

              <ProjectCard
                title="NFL DRAFT TRENDS EDA"
                categories={[
                  { name: "DATA", color: "brown" },
                  { name: "ANALYSIS", color: "grey" },
                ]}
                description="Exploratory data analysis of NFL draft patterns over time, examining positional value, team strategies, and success rates."
                details="Kaggle Project"
                link="https://www.kaggle.com/code/cameronnorfleet/data-science-combine-analysis-eda"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-24">
          <div className="max-w-3xl space-y-12">
            <div className="border-b border-[#e6e1d6] pb-2">
              <h2 className="uppercase tracking-widest font-bold text-sm">Contact</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center justify-between border-b border-[#e6e1d6] pb-4">
                <p className="text-xs uppercase tracking-widest">Email</p>
                <Link href="mailto:camfleety@gmail.com" className="text-sm hover:underline">
                  camfleety@gmail.com
                </Link>
              </div>

              <div className="flex items-center justify-between border-b border-[#e6e1d6] pb-4">
                <p className="text-xs uppercase tracking-widest">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/cameron-norfleet-b42885162/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline flex items-center gap-2"
                >
                  View Profile
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="flex items-center justify-between border-b border-[#e6e1d6] pb-4">
                <p className="text-xs uppercase tracking-widest">Twitter</p>
                <Link
                  href="https://x.com/camfleety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline flex items-center gap-2"
                >
                  @camfleety
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e6e1d6] py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest">© {new Date().getFullYear()} Cameron Norfleet</p>
        </div>
      </footer>
    </div>
  )
}

// Component for navigation links
function NavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`${active ? "text-[#3a3631]" : "text-[#8c8680]"} hover:text-[#3a3631] transition-colors`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

// Component for category tags
function CategoryTag({ name, color }: { name: string; color: "brown" | "grey" | "maroon" }) {
  const colorMap = {
    brown: "bg-[#8a7a6d] text-white",
    grey: "bg-[#8c8680] text-white",
    maroon: "bg-[#7d4f4f] text-white",
  }

  return (
    <span className={cn("px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium", colorMap[color])}>{name}</span>
  )
}

// Component for project cards
function ProjectCard({
  title,
  categories,
  description,
  details,
  link,
}: {
  title: string
  categories: Array<{ name: string; color: "brown" | "grey" | "maroon" }>
  description: string
  details: string
  link: string
}) {
  return (
    <div className="group border-t border-[#e6e1d6] pt-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-sm uppercase tracking-widest">{title}</h3>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest hover:underline flex items-center gap-2"
          >
            View
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex gap-2 mt-2">
          {categories.map((category, index) => (
            <CategoryTag key={index} name={category.name} color={category.color} />
          ))}
        </div>

        <p className="text-xs mt-4 leading-relaxed">{description}</p>
        <p className="text-xs mt-4 font-medium">{details}</p>
      </div>
    </div>
  )
}
