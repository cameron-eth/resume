import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
  title: "Hi, I'm Cameron",
  description: "Cameron Norfleet — product, data, and AI.",
  openGraph: {
    title: "Cameron Norfleet",
    description: "Product, data, and AI.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Cameron Norfleet",
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
