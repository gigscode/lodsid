'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="space-y-8 slide-up-fade">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Crafting Digital{' '}
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed text-balance">
              Full-stack developer & designer building premium web solutions. I transform ideas into beautiful,
              functional digital products that drive results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-background font-semibold rounded-lg hover:shadow-xl hover:shadow-neon-purple/50 transition-all duration-300 hover:scale-105 w-fit"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-neon-purple/50 text-foreground font-semibold rounded-lg hover:bg-neon-purple/10 transition-all duration-300 w-fit"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-border">
            {[
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Satisfied Clients', value: '30+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Technologies', value: '20+' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2 stagger-item">
                <div className="text-3xl font-bold text-neon-purple">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
