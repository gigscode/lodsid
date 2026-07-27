'use client'

import { Mail, Send, Share2, Link2, MessageSquare } from 'lucide-react'

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
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s Create Something <span className="text-neon-cyan">Amazing</span>
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
              className="stagger-item group p-8 rounded-2xl border border-border bg-card hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-cyan/20 rounded-lg group-hover:bg-neon-cyan/30 transition-colors duration-300">
                  <Mail size={24} className="text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                    hello@lodsid.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-item group p-8 rounded-2xl border border-border bg-card hover:border-neon-purple/50 hover:bg-neon-purple/5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-purple/20 rounded-lg group-hover:bg-neon-purple/30 transition-colors duration-300">
                  <Share2 size={24} className="text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Twitter</h3>
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                    @lodsid
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-item group p-8 rounded-2xl border border-border bg-card hover:border-neon-pink/50 hover:bg-neon-pink/5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-pink/20 rounded-lg group-hover:bg-neon-pink/30 transition-colors duration-300">
                  <Send size={24} className="text-neon-pink" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">GitHub</h3>
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                    github.com/lodsid
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-item group p-8 rounded-2xl border border-border bg-card hover:border-neon-orange/50 hover:bg-neon-orange/5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-orange/20 rounded-lg group-hover:bg-neon-orange/30 transition-colors duration-300">
                  <Link2 size={24} className="text-neon-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">LinkedIn</h3>
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                    /in/lodsid
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="mailto:hello@lodsid.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-background font-semibold rounded-lg hover:shadow-xl hover:shadow-neon-purple/50 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare size={20} />
              Start a Conversation
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neon-cyan/50 text-foreground font-semibold rounded-lg hover:bg-neon-cyan/10 transition-all duration-300"
            >
              Follow on Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
