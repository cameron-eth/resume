import type { Metadata } from "next"

// Self-hosted metadata face. Imported from the package rather than fetched at
// build time, so builds never depend on reaching Google Fonts.
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/500.css"

import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
  title: "norfleet.tech",
  description: "Cameron Norfleet — product, data, and AI.",
  openGraph: {
    title: "norfleet.tech",
    description: "Product, data, and AI.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "norfleet.tech",
    description: "Product, data, and AI.",
    images: [],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
