import ProjectsSection from "../../components/ProjectsSection"
import MediaSection from "../../components/MediaSection"
import Link from "next/link"

export const metadata = {
  metadataBase: new URL("https://lordsid.com"),
  title: "Portfolio — LordSid",
  description:
    "A collection of web apps, AI systems, design work, and video content built by LordSid over 10+ years.",
  icons: {
    icon: "/lodsid.png",
    apple: "/lodsid.png",
  },
  openGraph: {
    title: "Portfolio — LordSid",
    description:
      "A collection of web apps, AI systems, design work, and video content built by LordSid over 10+ years.",
    url: "https://lordsid.com/portfolio",
    siteName: "LordSid",
    images: [
      {
        url: "/lodsid.png",
        width: 1200,
        height: 630,
        alt: "LordSid Portfolio",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — LordSid",
    description:
      "A collection of web apps, AI systems, design work, and video content built by LordSid over 10+ years.",
    creator: "@LordSid07",
    images: ["/lodsid.png"],
  },
}

export default function PortfolioPage() {
  return (
    <main className="pt-16 bg-[#0a0a0a] min-h-screen">
      {/* Page header */}
      <section className="bg-[#0a0a0a] pt-16 pb-0 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d948808_1px,transparent_1px),linear-gradient(to_bottom,#0d948808_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d9488]/40 to-transparent" />

        <div className="relative max-w-6xl mx-auto py-16 sm:py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#0d9488] transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
              Portfolio
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0d9488]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
                10+ Years of Work
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Designed. Built.{" "}
              <span className="text-[#0d9488]">Shipped.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              From full-stack web apps and landing pages to brand design, UGC video content, and graphic catalogues — a selection of 50+ products shipped across 10+ years of building.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { num: "50+", label: "Products Shipped" },
                { num: "81+", label: "Web Apps Built" },
                { num: "44+", label: "Video Projects" },
                { num: "45", label: "Design Catalogues" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white leading-none">{s.num}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <ProjectsSection />

      {/* Media: videos + catalogues */}
      <MediaSection />

      {/* Bottom CTA */}
      <section className="bg-[#0a0a0a] border-t border-white/10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Want to build something{" "}
            <span className="text-[#0d9488]">that actually works?</span>
          </h2>
          <p className="text-gray-400 text-base">
            The portfolio shows what I can create. Let&apos;s talk about what I can create for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-7 py-4 border-2 border-white/20 text-white font-bold rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-all text-sm uppercase tracking-wider"
            >
              ← Back to Main Site
            </Link>
            <Link
              href="/#contact"
              className="px-7 py-4 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-all text-sm uppercase tracking-wider shadow-lg shadow-[#0d9488]/30"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
