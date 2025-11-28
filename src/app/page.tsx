"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Page() {
  const [activeSection, setActiveSection] = useState("about")

  const containerClass = "max-w-6xl mx-auto px-6 md:px-12"

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-stone-800">
        <div className={cn(containerClass, "py-6 flex justify-between items-center")}>
          <Link href="/" className="text-zinc-50 uppercase tracking-widest text-sm font-medium hover:text-zinc-300 transition-colors">
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

      <main className={cn(containerClass, "pt-32 pb-16")}>
        {/* About Section */}
        <section id="about" className="pt-8 pb-16 scroll-mt-24">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-light text-zinc-50 tracking-tight">
              <span className="font-semibold">Cameron Norfleet</span>
            </h1>
            <div className="border-b border-stone-800 pb-2"></div>
            
            <div className="space-y-6 text-sm text-zinc-400">
              <p className="leading-relaxed">
                Building AI agents at Amigo, driving the future of automation in healthcare.{" "}
                <span className="text-zinc-300">After hours, I build my own ideas.</span>
              </p>
              
              <div className="flex flex-col md:flex-row md:gap-12 gap-4">
                <div>
                  <span className="text-zinc-500">Occupation</span>
                  <span className="mx-2">·</span>
                  <span className="text-zinc-300">Agent Engineer, Amigo</span>
                </div>
                
                <div className="hidden md:block w-px h-4 bg-stone-800 self-center"></div>
                <div className="md:hidden border-b border-stone-800"></div>
                
                <div>
                  <span className="text-zinc-500">Location</span>
                  <span className="mx-2">·</span>
                  <span className="text-zinc-300">Brooklyn, New York</span>
                </div>
                
                <div className="hidden md:block w-px h-4 bg-stone-800 self-center"></div>
                <div className="md:hidden border-b border-stone-800"></div>
                
                <div>
                  <span className="text-zinc-500">Education</span>
                  <span className="mx-2">·</span>
                  <span className="text-zinc-300">Information System & Data Analytics, San Jose State University</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-24">
          <div className="space-y-12">
            <div className="border-stone-800 pb-2">
              <h2 className="uppercase font-bold tracking-widest text-sm text-zinc-50">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <ProjectCard
                title="BETSYNC"
                categories={[
                  { name: "ENGINEERING", color: "zinc" },
                  { name: "PRODUCT", color: "stone" },
                ]}
                description="A sports betting platform that syncs with sportsbooks to track bets, provide analytics, and offer insights for bettors."
                details="$2.1k MRR SaaS"
                link="https://betsync.us"
                image="/betsync-preview.png"
              />

              <ProjectCard
                title="FIRST BALLOT FF"
                categories={[
                  { name: "ENGINEERING", color: "zinc" },
                  { name: "PRODUCT", color: "stone" },
                ]}
                description="Fantasy football platform providing advanced analytics, insights, and tools for competitive fantasy football players."
                details=""
                link="https://www.firstballotff.com"
                image="/firstballot-preview.png"
              />

              <ProjectCard
                title="HIERLOOM AI"
                categories={[
                  { name: "PRODUCT", color: "stone" },
                  { name: "DESIGN", color: "zinc" },
                ]}
                description="AI-driven platform for preserving and sharing family stories and memories through interactive digital experiences."
                details="Not Launched"
                link="https://kzmnd86rwvzt1kwkjfas.lite.vusercontent.net/"
                image="/hierloom-preview.png"
              />

              <ProjectCard
                title="DRAFT THEORY"
                categories={[
                  { name: "DATA", color: "zinc" },
                  { name: "ANALYSIS", color: "stone" },
                  { name: "MODELING", color: "zinc" },
                ]}
                description="Comprehensive EDA modeling the predictability of the NFL draft with deep analysis surrounding +EV in the NFL's talent market. Advanced analytics using 42 pre-draft features across 2,397 players (2015-2024)."
                details="R² = 0.414 • 41.4% Variance Explained"
                link="https://v0-draft-theory.vercel.app/"
                image="/draft-theory-preview.png"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-24">
          <div className="max-w-3xl space-y-12">
            <div className="border-b border-stone-800 pb-2">
              <h2 className="uppercase tracking-widest font-bold text-sm text-zinc-50">Contact</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <p className="text-xs uppercase tracking-widest text-zinc-500">Email</p>
                <Link href="mailto:camfleety@gmail.com" className="text-sm text-zinc-300 hover:text-zinc-50 hover:underline transition-colors">
                  camfleety@gmail.com
                </Link>
              </div>

              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <p className="text-xs uppercase tracking-widest text-zinc-500">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/cameron-norfleet-b42885162/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-zinc-50 hover:underline flex items-center gap-2 transition-colors"
                >
                  View Profile
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <p className="text-xs uppercase tracking-widest text-zinc-500">Twitter</p>
                <Link
                  href="https://x.com/camfleety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-zinc-50 hover:underline flex items-center gap-2 transition-colors"
                >
                  @camfleety
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 py-8">
        <div className={containerClass}>
          <p className="text-xs uppercase tracking-widest text-zinc-500">© {new Date().getFullYear()} Cameron Norfleet</p>
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
      className={`${active ? "text-zinc-50" : "text-zinc-500"} hover:text-zinc-300 transition-colors`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

// Component for category tags
function CategoryTag({ name, color }: { name: string; color: "zinc" | "stone" }) {
  const colorMap = {
    zinc: "bg-zinc-800 text-zinc-100 border border-zinc-700",
    stone: "bg-stone-800 text-stone-100 border border-stone-700",
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
  image,
}: {
  title: string
  categories: Array<{ name: string; color: "zinc" | "stone" }>
  description: string
  details: string
  link: string
  image?: string
}) {
  return (
    <div className="group border-t border-stone-800 pt-4">
      <div className="flex flex-col">
        {/* Product Preview Image */}
        {image && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-stone-800 bg-zinc-900 group-hover:border-stone-700 transition-colors">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Hide image if it doesn't exist
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        )}

        <div className="flex justify-between items-start">
          <h3 className="text-sm uppercase tracking-widest text-zinc-50">{title}</h3>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-300 hover:underline flex items-center gap-2 transition-colors"
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

        <p className="text-xs mt-4 leading-relaxed text-zinc-400">{description}</p>
        <p className="text-xs mt-4 font-medium text-zinc-300">{details}</p>
      </div>
    </div>
  )
}
