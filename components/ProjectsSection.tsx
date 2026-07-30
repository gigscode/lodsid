"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"
import { FiShare2 } from "react-icons/fi"

const projects = [
  { id: "phytogenix", name: "Phytogenix", description: "PhytoGenix is a digital herbal clinical research platform. inspired by the collaborative work between Afe Babalola University and the Nigerian Institute of Medical Research.", image: "/phyto.png", link: "https://phytogenix.org" },
  { id: "secacad", name: "Secacad", description: "Secacad is a cybersecurity skills assessment platform for individuals and organizations in Nigeria.", image: "/secacad.png?v=1", link: "https://secacad.vercel.app" },
  { id: "panaceutics", name: "Panaceutics", description: "A biotech-driven company advancing wellness through science-backed, plant-based formulations.", image: "/panaceutics1.png", link: "https://panaceutics.org" },
  { id: "tizzle-shop", name: "Tizzle Shop", description: "Modern e-commerce for quality UK-used and premium products in Nigeria, with an integrated talent marketplace.", image: "/tizzle.png", link: "https://tizzleshop.vercel.app/" },
 
]

const ProjectsSection = () => {
  const shareProject = (project: typeof projects[0]) => {
    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/#project-${project.id}`
    const shareText = `Check out ${project.name}: ${project.description}`

    if (navigator.share) {
      navigator.share({
        title: project.name,
        text: shareText,
        url: shareUrl,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0d9488] mb-3">My Work</p>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <SlideUp key={idx} offset="-80px 0px -80px 0px">
              <div id={`project-${project.id}`} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-[#0d9488]/50 transition-colors">
                <Link href={project.link} target="_blank">
                  <div className="overflow-hidden h-48">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      unoptimized={project.image.includes('?')}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-black text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center gap-3">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={22}
                        className="text-gray-500 hover:text-[#0d9488] transition-colors cursor-pointer"
                      />
                    </Link>
                    <button
                      onClick={() => shareProject(project)}
                      className="text-gray-500 hover:text-[#0d9488] transition-colors cursor-pointer"
                      title="Share project"
                    >
                      <FiShare2 size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
