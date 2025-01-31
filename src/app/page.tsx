"use client"

import Link from "next/link"
import { Linkedin, Twitter, ExternalLink } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 font-mono p-8 md:p-16">
      <main className="max-w-2xl mx-auto mt-16 space-y-16">
        <h1 className="text-white text-2xl">Cameron Norfleet</h1>

        <div className="space-y-4">
          <h2 className="text-lg text-white">Data Analyst</h2>
          <p className="text-sm">BARSTOOL SPORTS | NEW YORK, NY</p>

          <div className="space-y-6 mt-8">
            <p className="leading-relaxed">
              Currently helping define the future of sports media at Barstool Sports, where I turn data into actionable
              strategies that fuel audience & revenue growth.
            </p>

            <p className="leading-relaxed">Education: Data Analytics, San Jose State University</p>

            <div className="flex flex-wrap gap-2">
              {["Data Analysis", "Software Engineering", "Data Modeling", "Sports Analytics"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full hover:bg-zinc-500 cursor-default transition duration-300 bg-zinc-900 text-emerald-400 border border-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg text-white">Projects</h2>
          <Link
            href="https://www.kaggle.com/code/cameroneth/nfl-qb-draft-data-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            NFL QB Draft Data Analysis
          </Link>
          <Link
            href="https://www.kaggle.com/code/cameronnorfleet/data-science-combine-analysis-eda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Historical Analysis of NFL Draft Trends          
             </Link>
        </div>

      
      </main>
    </div>
  )
}

