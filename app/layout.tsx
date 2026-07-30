import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ThemeWrapper from "../components/ThemeWrapper"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
})

export const metadata = {
  metadataBase: new URL("https://lordsid.com"),
  title: "LordSid — Creative Builder, Designer & AI Systems Architect",
  description:
    "LordSid crafts digital experiences — web apps, AI systems, design, and content — built to move people and drive results.",
  icons: {
    icon: [
      { url: "/lodsid.png", type: "image/png" },
    ],
    apple: "/lodsid.png",
    shortcut: "/lodsid.png",
  },
  openGraph: {
    title: "LordSid — Creative Builder, Designer & AI Systems Architect",
    description:
      "LordSid crafts digital experiences — web apps, AI systems, design, and content — built to move people and drive results.",
    url: "https://lordsid.com",
    siteName: "LordSid",
    images: [
      {
        url: "/lodsid.png",
        width: 1200,
        height: 630,
        alt: "LordSid — Creative Builder",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LordSid — Creative Builder, Designer & AI Systems Architect",
    description:
      "LordSid crafts digital experiences — web apps, AI systems, design, and content — built to move people and drive results.",
    creator: "@LordSid07",
    images: ["/lodsid.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  )
}
