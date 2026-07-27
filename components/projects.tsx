'use client'

import { ExternalLink, Send, Code2 } from 'lucide-react'
import { useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics platform with AI insights, built with Next.js, React, and TypeScript. Features interactive charts, predictive analytics, and custom dashboards.',
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'AI/ML'],
    image: 'bg-gradient-to-br from-neon-purple/40 to-neon-cyan/40',
    link: '#',
    github: '#',
    color: 'neon-purple',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with Node.js, React, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'GraphQL'],
    image: 'bg-gradient-to-br from-neon-orange/40 to-neon-pink/40',
    link: '#',
    github: '#',
    color: 'neon-orange',
  },
  {
    id: 3,
    title: 'SaaS Platform',
    description: 'Multi-tenant SaaS application with authentication, billing, and collaboration features. Deployed on Vercel with real-time capabilities.',
    tags: ['Next.js', 'Supabase', 'TailwindCSS', 'Real-time', 'Auth'],
    image: 'bg-gradient-to-br from-neon-cyan/40 to-neon-purple/40',
    link: '#',
    github: '#',
    color: 'neon-cyan',
  },
  {
    id: 4,
    title: 'Design System & UI Components',
    description: 'Comprehensive design system with 50+ reusable UI components, documentation, and Figma integration for seamless design-to-code workflow.',
    tags: ['React', 'Storybook', 'TailwindCSS', 'TypeScript', 'Design'],
    image: 'bg-gradient-to-br from-neon-pink/40 to-neon-orange/40',
    link: '#',
    github: '#',
    color: 'neon-pink',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-4 mb-16 slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-neon-cyan">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl">
            A selection of recent projects showcasing full-stack capabilities, modern design, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neon-purple/20 border border-neon-purple/50 text-neon-purple rounded-lg hover:bg-neon-purple/30 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan rounded-lg hover:bg-neon-cyan/30 transition-all duration-300"
                    >
                      <Send size={16} />
                      Code
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
