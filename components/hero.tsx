'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white">
      {/* 3D Spectral background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-3d.png"
          alt="3D Spectral Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="space-y-8 slide-up-fade">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-balance leading-tight tracking-tighter text-slate-900">
              Crafting Digital{' '}
              <span className="text-blue-600">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed text-balance font-medium">
              Full-stack developer & designer building premium web solutions. I transform ideas into beautiful,
              functional digital products that drive real results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-black text-lg rounded-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-110 w-fit group"
            >
              View My Work
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-black text-lg rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110 w-fit"
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
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
