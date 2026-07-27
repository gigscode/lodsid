'use client'

import { Mail, Send, Share2, Link2, MessageSquare, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-12">
          <div className="space-y-4 text-center slide-up-fade">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
              Let&apos;s Create Something <span className="text-blue-600">Amazing</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help.
              Let&apos;s build something incredible together.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <a
              href="mailto:hello@lodsid.com"
              className="stagger-item group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900">Email</h3>
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    hello@lodsid.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://x.com/LordSid07"
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-item group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <Share2 size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900">Twitter</h3>
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    @LordSid07
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-item group p-8 rounded-2xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-lg transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                  <Send size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900">GitHub</h3>
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    github.com/lodsid
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/07018643642"
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-item group p-8 rounded-2xl border border-slate-200 bg-white hover:border-green-300 hover:shadow-lg transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                  <Phone size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900">WhatsApp</h3>
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    +234 701 864 3642
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="https://wa.me/07018643642"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              Chat on WhatsApp
            </a>
            <a
              href="https://x.com/LordSid07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              <Share2 size={20} />
              Follow on Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
