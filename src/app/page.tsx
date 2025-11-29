"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { FlickeringGrid } from "@/components/FlickeringGrid"

export default function Page() {
  const [activeSection, setActiveSection] = useState("about")

  const containerClass = "max-w-6xl mx-auto px-4 md:px-12"

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans relative">
      {/* Flickering Grid Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <FlickeringGrid squareSize={3} gridGap={4} flickerChance={0.2} maxOpacity={0.15} />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-stone-800">
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
            <NavLink href="#spotify" active={activeSection === "spotify"} onClick={() => setActiveSection("spotify")}>
              Spotify
            </NavLink>
          </div>
        </div>
      </nav>

      <main className={cn(containerClass, "pt-24 md:pt-32 pb-16 relative z-10")}>
        {/* About Section */}
        <section id="about" className="pt-4 md:pt-8 pb-4 md:pb-8 scroll-mt-24">
          <div className="space-y-4 md:space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 md:gap-8">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h1 className="text-2xl md:text-4xl font-light text-zinc-50 tracking-tight">
                      <span className="font-semibold">Cameron Norfleet</span>
                    </h1>
                    <Link
                      href="https://x.com/camfleety"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-zinc-500 hover:text-zinc-300 transition-colors whitespace-nowrap"
                    >
                      @camfleety
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-zinc-400">
                    <span className="whitespace-nowrap">Followers: 1.2k</span>
                    <span className="text-zinc-600 hidden md:inline">•</span>
                    <span className="text-zinc-600 md:hidden">•</span>
                    <span className="whitespace-nowrap">Age: 26</span>
                    <span className="text-zinc-600 hidden md:inline">•</span>
                    <span className="text-zinc-600 md:hidden">•</span>
                    <span className="whitespace-nowrap">Hometown: Berkeley, CA</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-stone-800 pb-2 mt-4"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-sm text-zinc-400">
              <div className="flex flex-col md:flex-row md:gap-12 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-500 text-xs md:text-sm">Occupation</span>
                  <span className="text-zinc-300 text-sm md:text-base whitespace-nowrap">Agent Engineer, Amigo</span>
                </div>
                
                <div className="hidden md:block w-px h-4 bg-stone-800 self-center"></div>
                <div className="md:hidden border-b border-stone-800 -mx-4"></div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-500 text-xs md:text-sm">Location</span>
                  <span className="text-zinc-300 text-sm md:text-base whitespace-nowrap">Brooklyn, New York</span>
                </div>
                
                <div className="hidden md:block w-px h-4 bg-stone-800 self-center"></div>
                <div className="md:hidden border-b border-stone-800 -mx-4"></div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-500 text-xs md:text-sm">Education</span>
                  <span className="text-zinc-300 text-sm md:text-base break-words">Information System & Data Analytics, San Jose State University</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 md:py-16 scroll-mt-24">
          <ProjectsCarousel />
        </section>

        {/* Spotify Section */}
        <section id="spotify" className="py-8 md:py-16 scroll-mt-24">
          <SpotifySection />
        </section>
      </main>

      <footer className="border-t border-stone-800 py-8 md:py-12">
        <div className={containerClass}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <p className="text-xs uppercase tracking-widest text-zinc-500">© {new Date().getFullYear()} Cameron Norfleet</p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500">Email</p>
                <Link href="mailto:camfleety@gmail.com" className="text-xs text-zinc-300 hover:text-zinc-50 hover:underline transition-colors">
                  camfleety@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/cameron-n-b42885162/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-300 hover:text-zinc-50 hover:underline flex items-center gap-1 transition-colors"
                >
                  View Profile
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500">Twitter</p>
                <Link
                  href="https://x.com/camfleety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-300 hover:text-zinc-50 hover:underline flex items-center gap-1 transition-colors"
                >
                  @camfleety
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
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

// Component for Projects Carousel
function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects: Array<{
    title: string
    categories: Array<{ name: string; color: "zinc" | "stone" }>
    description: string
    details: string
    link: string
    image: string
  }> = [
    {
      title: "BETSYNC",
      categories: [
        { name: "ENGINEERING", color: "zinc" },
        { name: "PRODUCT", color: "stone" },
      ],
      description: "A sports betting platform that syncs with sportsbooks to track bets, provide analytics, and offer insights for bettors.",
      details: "$2.1k MRR SaaS",
      link: "https://betsync.us",
      image: "/betsync-preview.png",
    },
    {
      title: "HIERLOOM AI",
      categories: [
        { name: "PRODUCT", color: "stone" },
        { name: "DESIGN", color: "zinc" },
      ],
      description: "AI-driven platform for preserving and sharing family stories and memories through interactive digital experiences.",
      details: "Not Launched",
      link: "https://kzmnd86rwvzt1kwkjfas.lite.vusercontent.net/",
      image: "/hierloom-preview.png",
    },
    {
      title: "FIRST BALLOT FF",
      categories: [
        { name: "ENGINEERING", color: "zinc" },
        { name: "PRODUCT", color: "stone" },
      ],
      description: "Fantasy football platform providing advanced analytics, insights, and tools for competitive fantasy football players.",
      details: "",
      link: "https://www.firstballotff.com",
      image: "/firstballot-preview.png",
    },
    {
      title: "DRAFT THEORY",
      categories: [
        { name: "DATA", color: "zinc" },
        { name: "ANALYSIS", color: "stone" },
        { name: "MODELING", color: "zinc" },
      ],
      description: "Comprehensive EDA modeling the predictability of the NFL draft with deep analysis surrounding +EV in the NFL's talent market. Advanced analytics using 42 pre-draft features across 2,397 players (2015-2024).",
      details: "R² = 0.414 • 41.4% Variance Explained",
      link: "https://v0-draft-theory.vercel.app/",
      image: "/draft-theory-preview.png",
    },
  ]

  const projectsPerPage = 2
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(currentIndex, currentIndex + projectsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + projectsPerPage >= projects.length ? 0 : prev + projectsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - projectsPerPage < 0 ? (totalPages - 1) * projectsPerPage : prev - projectsPerPage))
  }

  return (
    <div className="space-y-12">
      <div className="border-stone-800 pb-2">
        <h2 className="uppercase font-bold tracking-widest text-sm text-zinc-50">Projects</h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-16">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${currentIndex + index}`}
              title={project.title}
              categories={project.categories}
              description={project.description}
              details={project.details}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 md:mt-8 gap-2">
            <button
              onClick={prevSlide}
              className="flex items-center gap-1 md:gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageStartIndex = index * projectsPerPage
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(pageStartIndex)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      currentIndex === pageStartIndex ? "bg-zinc-50" : "bg-stone-800 hover:bg-stone-700"
                    )}
                    aria-label={`Go to page ${index + 1}`}
                  />
                )
              })}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-1 md:gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Next projects"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Manual tracks list - Update Spotify URLs as needed
const MANUAL_TRACKS = [
  {
    name: "Gravity",
    artists: [{ name: "John Mayer" }],
    external_urls: { spotify: "https://open.spotify.com/track/4sh2j5lDom6m0nGqgVprwO" },
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }] },
  },
  {
    name: "Bowie Box",
    artists: [{ name: "Dominic Fike" }],
    external_urls: { spotify: "https://open.spotify.com/search/Bowie%20Box%20Dominic%20Fike" },
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }] },
  },
  {
    name: "Something to Rap About",
    artists: [{ name: "Freddie Gibbs" }, { name: "Tyler, The Creator" }],
    external_urls: { spotify: "https://open.spotify.com/track/5uD0Z2of3Im42RG1KykJvY" },
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }] },
  },
  {
    name: "How Does It Feel",
    artists: [{ name: "D'Angelo" }],
    external_urls: { spotify: "https://open.spotify.com/track/0ixyLzNaPr7G2Fu5ETgssB" },
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }] },
  },
  {
    name: "News or Something",
    artists: [{ name: "Isaiah Rashad" }],
    external_urls: { spotify: "https://open.spotify.com/search/News%20or%20Something%20Isaiah%20Rashad" },
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }] },
  },
  {
    name: "Purple Rain",
    artists: [{ name: "Prince" }],
    external_urls: { spotify: "https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz" },
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }] },
  },
  {
    name: "Voyage to Atlantis",
    artists: [{ name: "The Isley Brothers" }],
    external_urls: { spotify: "https://open.spotify.com/track/5BW1UgmBKaq9kf5t7gX5wp" },
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }] },
  },
]

// Component for Spotify section
function SpotifySection() {
  const [topArtists, setTopArtists] = useState<Array<{ name: string; external_urls: { spotify: string }; images: Array<{ url: string }> }>>([])
  const [topTracks, setTopTracks] = useState<Array<{ name: string; artists: Array<{ name: string }>; external_urls: { spotify: string }; album: { images: Array<{ url: string }> } }>>([])
  const [audiobooks, setAudiobooks] = useState<Array<{ name: string; authors: Array<{ name: string }>; external_urls: { spotify: string }; images: Array<{ url: string }> }>>([
    {
      name: "On the Edge: The Art of Risking Everything",
      authors: [{ name: "Nate Silver" }],
      external_urls: { spotify: "https://open.spotify.com/show/2H57oQFCKiykdfGg97iGDg" },
      images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" }],
    },
  ])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"artists" | "tracks" | "audiobooks">("tracks")

  useEffect(() => {
    async function fetchSpotifyData() {
      try {
        // First search for the audiobook, then fetch it by ID
        const [artistsRes, tracksRes, audiobookSearchRes] = await Promise.all([
          fetch("/api/spotify?type=artists&limit=10&time_range=medium_term"),
          fetch("/api/spotify?type=tracks&limit=5&time_range=medium_term"),
          fetch("/api/spotify?endpoint=search&q=On%20the%20Edge%20Nate%20Silver&search_type=audiobook&limit=5"),
        ])

        const artistsData = await artistsRes.json()
        const tracksData = await tracksRes.json()
        const audiobookSearchData = await audiobookSearchRes.json()

        if (artistsData.items) {
          setTopArtists(artistsData.items)
        }
        if (tracksData.items) {
          setTopTracks(tracksData.items)
        }
        
        // Try to find and fetch the audiobook
        if (audiobookSearchData.audiobooks && audiobookSearchData.audiobooks.items && audiobookSearchData.audiobooks.items.length > 0) {
          const foundAudiobook = audiobookSearchData.audiobooks.items[0]
          setAudiobooks([{
            name: foundAudiobook.name,
            authors: foundAudiobook.authors || [{ name: "Nate Silver" }],
            external_urls: foundAudiobook.external_urls || { spotify: "https://open.spotify.com/show/2H57oQFCKiykdfGg97iGDg" },
            images: foundAudiobook.images || [],
          }])
        } else {
          // Fallback: try fetching by show ID if audiobook search doesn't work
          try {
            const showRes = await fetch("/api/spotify?show_id=2H57oQFCKiykdfGg97iGDg")
            const showData = await showRes.json()
            if (showData && showData.images && showData.images.length > 0) {
              setAudiobooks([{
                name: showData.name || "On the Edge: The Art of Risking Everything",
                authors: [{ name: "Nate Silver" }],
                external_urls: showData.external_urls || { spotify: "https://open.spotify.com/show/2H57oQFCKiykdfGg97iGDg" },
                images: showData.images,
              }])
            }
          } catch (showError) {
            console.error("Failed to fetch show data:", showError)
          }
        }
      } catch (error) {
        console.error("Failed to fetch Spotify data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSpotifyData()
  }, [])

  return (
    <div className="space-y-12">
      <div className="border-b border-stone-800 pb-2">
        <h2 className="uppercase font-bold tracking-widest text-sm text-zinc-50">Spotify</h2>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("artists")}
          className={cn(
            "text-xs uppercase tracking-widest transition-colors",
            activeTab === "artists" ? "text-zinc-50" : "text-zinc-500 hover:text-zinc-300"
          )}
        >
          Top Artists
        </button>
        <div className="w-px h-4 bg-stone-800 self-center"></div>
        <button
          onClick={() => setActiveTab("tracks")}
          className={cn(
            "text-xs uppercase tracking-widest transition-colors",
            activeTab === "tracks" ? "text-zinc-50" : "text-zinc-500 hover:text-zinc-300"
          )}
        >
          Top Tracks
        </button>
        <div className="w-px h-4 bg-stone-800 self-center"></div>
        <button
          onClick={() => setActiveTab("audiobooks")}
          className={cn(
            "text-xs uppercase tracking-widest transition-colors",
            activeTab === "audiobooks" ? "text-zinc-50" : "text-zinc-500 hover:text-zinc-300"
          )}
        >
          Audiobooks
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-400">Loading...</p>
      ) : (
        <div className="space-y-4">
          {activeTab === "artists" ? (
            topArtists.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {topArtists.map((artist, index) => (
                  <Link
                    key={index}
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center space-y-2 hover:opacity-80 transition-opacity"
                  >
                    {artist.images && artist.images[0] && (
                      <div className="relative w-full aspect-square rounded-full overflow-hidden border border-stone-800 group-hover:border-stone-700 transition-colors">
                        <Image
                          src={artist.images[0].url}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <p className="text-xs text-zinc-300 group-hover:text-zinc-50 transition-colors">{artist.name}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-400">No artist data available. Make sure SPOTIFY_ACCESS_TOKEN or SPOTIFY_REFRESH_TOKEN is set in your .env.local file.</p>
            )
          ) : activeTab === "tracks" ? (
            topTracks.length > 0 ? (
              <div className="space-y-2">
                {topTracks.map((track, index) => (
                  <Link
                    key={index}
                    href={track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border-b border-stone-800 pb-4 hover:border-stone-700 group transition-colors"
                  >
                    <span className="text-xs text-zinc-500 w-6">{index + 1}</span>
                    {track.album?.images && track.album.images[0] && (
                      <div className="relative w-12 h-12 rounded overflow-hidden border border-stone-800 group-hover:border-stone-700 transition-colors">
                        <Image
                          src={track.album.images[0].url}
                          alt={track.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-300 group-hover:text-zinc-50 transition-colors truncate">{track.name}</p>
                      <p className="text-xs text-zinc-500 truncate">
                        {track.artists.map((a) => a.name).join(", ")}
                      </p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-400">No track data available. Make sure SPOTIFY_ACCESS_TOKEN or SPOTIFY_REFRESH_TOKEN is set in your .env.local file.</p>
            )
          ) : (
            audiobooks.length > 0 ? (
              <div className="space-y-2">
                {audiobooks.map((book, index) => (
                  <Link
                    key={index}
                    href={book.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border-b border-stone-800 pb-4 hover:border-stone-700 group transition-colors"
                  >
                    <span className="text-xs text-zinc-500 w-6">{index + 1}</span>
                    {book.images && book.images[0] && (
                      <div className="relative w-12 h-12 rounded overflow-hidden border border-stone-800 group-hover:border-stone-700 transition-colors">
                        <Image
                          src={book.images[0].url}
                          alt={book.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-300 group-hover:text-zinc-50 transition-colors truncate">{book.name}</p>
                      <p className="text-xs text-zinc-500 truncate">
                        {book.authors.map((a) => a.name).join(", ")}
                      </p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-400">No audiobook data available.</p>
            )
          )}
        </div>
      )}
    </div>
  )
}
