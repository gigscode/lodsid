'use client'

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: 'SoPrep - Exam Preparation',
    description: 'Comprehensive exam prep platform with interactive lessons, practice tests, and detailed analytics. Built with modern web technologies for optimal learning experience.',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Education', 'Full-Stack'],
    image: '/projects/soprep.png',
    link: 'https://soprep.app/',
    bgColor: 'bg-blue-50',
    tagColor: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  {
    id: 2,
    title: 'Panaceutics - Pharmaceutical Solutions',
    description: 'Professional pharmaceutical company website showcasing products, research, and industry expertise. Optimized for conversions and client engagement.',
    tags: ['Next.js', 'React', 'Healthcare', 'TypeScript', 'Marketing'],
    image: '/projects/panaceutics.png',
    link: 'https://www.panaceutics.org/',
    bgColor: 'bg-purple-50',
    tagColor: 'bg-purple-100 text-purple-700 border-purple-300',
  },
  {
    id: 3,
    title: 'Phytogenix - Agriculture Solutions',
    description: 'Agricultural biotech platform featuring crop innovation, research resources, and industry-leading solutions for modern farming.',
    tags: ['Next.js', 'React', 'Agriculture', 'TailwindCSS', 'B2B'],
    image: '/projects/phytogenix.png',
    link: 'https://www.phytogenix.org/',
    bgColor: 'bg-emerald-50',
    tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  },
  {
    id: 4,
    title: 'SecAcad - Security Training',
    description: 'Interactive cybersecurity academy with certification courses, labs, and real-world training scenarios. Deployed on Vercel with streaming capabilities.',
    tags: ['Next.js', 'Vercel', 'Security', 'Education', 'Interactive'],
    image: '/projects/secacad.png',
    link: 'https://secacad.vercel.app/',
    bgColor: 'bg-rose-50',
    tagColor: 'bg-rose-100 text-rose-700 border-rose-300',
  },
  {
    id: 5,
    title: 'TizzleShop - E-Commerce',
    description: 'Modern e-commerce platform with seamless shopping experience, secure payments, and intuitive product discovery. Full-stack implementation.',
    tags: ['Next.js', 'Stripe', 'E-Commerce', 'React', 'PostgreSQL'],
    image: '/projects/tizzleshop.png',
    link: 'https://tizzleshop.vercel.app/',
    bgColor: 'bg-amber-50',
    tagColor: 'bg-amber-100 text-amber-700 border-amber-300',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-4 mb-16 slide-up-fade">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl">
            A selection of recent projects showcasing full-stack capabilities, modern design, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="stagger-item group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-slate-300">
                {/* Project Image */}
                <div className={`${project.bgColor} w-full h-64 relative overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 border rounded-full text-sm font-medium transition-colors duration-300 ${project.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105 font-semibold"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
