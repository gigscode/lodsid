'use client'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3'],
    color: 'from-neon-cyan to-neon-purple',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    color: 'from-neon-purple to-neon-pink',
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Webpack'],
    color: 'from-neon-pink to-neon-orange',
  },
  {
    category: 'Design',
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping', 'Animation', 'Branding'],
    color: 'from-neon-orange to-neon-cyan',
  },
]

export default function Skills() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-4 mb-16 slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-neon-pink">Expertise</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl">
            Comprehensive skill set spanning full-stack development, modern design, and DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="stagger-item group p-8 rounded-2xl border border-border bg-card hover:border-neon-purple/50 transition-all duration-500"
            >
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-3 bg-gradient-to-r from-foreground/5 to-transparent border border-border rounded-lg hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 cursor-default"
                    >
                      <span className="font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
