import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Slimene Seif Eddine – Full Stack Web & MobileDeveloper",
  description:
    "Full Stack Web & Mobile Developer specializing in React, Node.js, React Native. Building fast, scalable apps and solving real-world challenges.",
  keywords:
    "Slimene Seif Eddine, software engineer, full stack developer, React, Node.js, React Native, web development, mobile development",
  authors: [{ name: "Slimene Seif Eddine" }],
  openGraph: {
    title: "Slimene Seif Eddine – Full Stack Web & MobileDeveloper",
    description:
      "Portfolio of Slimene Seif Eddine, full stack developer. Passionate about building robust web apps and mobile apps.",
    type: "website",
    locale: "en_US",
    url: "https://seifeddineslimene.com", // replace with your actual domain
  },
  icons: {
    icon: "/favicon.png", // ✅ or .ico if you renamed to favicon.ico
  },
  twitter: {
    card: "summary_large_image",
    title: "Slimene Seif Eddine – Full Stack Web & Mobile Developer",
    description:
      "Full Stack Web & Mobile Developer. Explore my projects and journey.",
  },
  robots: "index, follow",
  generator: "Next.js"
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
