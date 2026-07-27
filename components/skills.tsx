'use client'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Webpack'],
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
  },
  {
    category: 'Design',
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping', 'Animation', 'Branding'],
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
]

export default function Skills() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-4 mb-16 slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl">
            Comprehensive skill set spanning full-stack development, modern design, and DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="stagger-item group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-500"
            >
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold ${skillGroup.color}`}>
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-4 py-3 ${skillGroup.bgColor} border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all duration-300 cursor-default`}
                    >
                      <span className={`font-medium ${skillGroup.color}`}>{skill}</span>
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
