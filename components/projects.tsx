'use client'

import { ExternalLink, Send, Code2 } from 'lucide-react'
import { useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: 'SoPrep - Exam Preparation',
    description: 'Comprehensive exam prep platform with interactive lessons, practice tests, and detailed analytics. Built with modern web technologies for optimal learning experience.',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Education', 'Full-Stack'],
    image: 'bg-gradient-to-br from-neon-purple/40 to-neon-cyan/40',
    link: 'https://soprep.app/',
    color: 'neon-purple',
  },
  {
    id: 2,
    title: 'Panaceutics - Pharmaceutical Solutions',
    description: 'Professional pharmaceutical company website showcasing products, research, and industry expertise. Optimized for conversions and client engagement.',
    tags: ['Next.js', 'React', 'Healthcare', 'TypeScript', 'Marketing'],
    image: 'bg-gradient-to-br from-neon-orange/40 to-neon-pink/40',
    link: 'https://www.panaceutics.org/',
    color: 'neon-orange',
  },
  {
    id: 3,
    title: 'Phytogenix - Agriculture Solutions',
    description: 'Agricultural biotech platform featuring crop innovation, research resources, and industry-leading solutions for modern farming.',
    tags: ['Next.js', 'React', 'Agriculture', 'TailwindCSS', 'B2B'],
    image: 'bg-gradient-to-br from-neon-cyan/40 to-neon-purple/40',
    link: 'https://www.phytogenix.org/',
    color: 'neon-cyan',
  },
  {
    id: 4,
    title: 'SecAcad - Security Training',
    description: 'Interactive cybersecurity academy with certification courses, labs, and real-world training scenarios. Deployed on Vercel with streaming capabilities.',
    tags: ['Next.js', 'Vercel', 'Security', 'Education', 'Interactive'],
    image: 'bg-gradient-to-br from-neon-pink/40 to-neon-orange/40',
    link: 'https://secacad.vercel.app/',
    color: 'neon-pink',
  },
  {
    id: 5,
    title: 'TizzleShop - E-Commerce',
    description: 'Modern e-commerce platform with seamless shopping experience, secure payments, and intuitive product discovery. Full-stack implementation.',
    tags: ['Next.js', 'Stripe', 'E-Commerce', 'React', 'PostgreSQL'],
    image: 'bg-gradient-to-br from-neon-cyan/40 to-neon-pink/40',
    link: 'https://tizzleshop.vercel.app/',
    color: 'neon-cyan',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-4 mb-16 slide-up-fade">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Featured <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Projects</span>
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
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-neon-purple/50">
                {/* Project Image */}
                <div className={`${project.image} w-full h-64 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Code2 size={48} className="text-neon-cyan" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-neon-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple rounded-full text-sm font-medium hover:bg-neon-purple/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan text-background rounded-lg hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 hover:scale-105 font-semibold"
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
