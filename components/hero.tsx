'use client'

import Image from 'next/image'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-0 relative overflow-hidden bg-white">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 slide-up-fade order-2 lg:order-1">
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
                Build Premium<br />
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text">
                  Digital Experiences
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Full-stack developer & designer crafting premium web solutions. I transform ideas into beautiful, 
                functional digital products that drive real results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-base rounded-xl hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 w-fit group active:scale-95"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 font-bold text-base rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 w-fit group active:scale-95"
              >
                <MessageSquare size={20} />
                Let&apos;s Talk
              </a>
            </div>

            {/* Support text */}
            <p className="text-sm text-slate-500 font-medium">
              Ready to start your next project? Let&apos;s collaborate.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Clients', value: '30+' },
                { label: 'Experience', value: '5+' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2 stagger-item">
                  <div className="text-3xl md:text-4xl font-black text-blue-600">{stat.value}</div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - 3D Spectral Element */}
          <div className="relative h-96 md:h-full min-h-96 order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-transparent rounded-3xl blur-3xl" />
              
              {/* 3D Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/hero-3d.png"
                  alt="3D Spectral Design"
                  fill
                  className="object-contain drop-shadow-2xl animate-float"
                  priority
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-300/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
