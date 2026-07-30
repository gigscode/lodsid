"use client"

import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const featured = [
  {
    tag: "Web App",
    tagColor: "bg-[#0d9488]/20 text-[#0d9488] border-[#0d9488]/30",
    name: "Phytogenix",
    description: "Digital herbal clinical research platform built for Afe Babalola University and the Nigerian Institute of Medical Research.",
    image: "/phyto.png",
    link: "https://phytogenix.org",
  },
  {
    tag: "Landing Page",
    tagColor: "bg-pink-500/20 text-pink-400 border-pink-400/30",
    name: "Panaceutics",
    description: "Biotech wellness company — science-backed, plant-based formulations. Brand identity and web presence built from scratch.",
    image: "/panaceutics1.png",
    link: "https://panaceutics.org",
  },
  {
    tag: "Web App",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-400/30",
    name: "Tizzle Shop",
    description: "Modern e-commerce platform for premium products in Nigeria, with an integrated talent marketplace.",
    image: "/tizzle.png",
    link: "https://tizzleshop.vercel.app/",
  },
]

const FeaturedProjectsSection = () => {
  return (
    <section id="featured-work" className="bg-white dark:bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
                Featured Work
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight">
                Built &amp; Shipped.{" "}
                <span className="text-[#0d9488]">50+ Times.</span>
              </h2>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
                A handful of what I&apos;ve built across platforms, brands, and industries over 10+ years.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-black text-xs uppercase tracking-wider rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-all"
            >
              View All Work ↗
            </Link>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, idx) => (
            <SlideUp key={idx} offset="-80px 0px -80px 0px">
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden group hover:border-[#0d9488]/50 transition-all duration-300 hover:-translate-y-1">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="overflow-hidden h-52 relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Role tag overlay */}
                    <span className={`absolute top-3 left-3 px-3 py-1 border text-[10px] font-black uppercase tracking-wider rounded-lg backdrop-blur-sm ${project.tagColor}`}>
                      {project.tag}
                    </span>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-black text-[#0a0a0a] dark:text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0d9488] hover:gap-3 transition-all"
                  >
                    View Project <BsArrowUpRightSquare size={16} />
                  </Link>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Bottom nudge */}
        <SlideUp offset="-80px 0px -80px 0px">
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 dark:text-gray-500 hover:text-[#0d9488] transition-colors"
            >
              See all 50+ projects, UGC videos &amp; design work ↗
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
