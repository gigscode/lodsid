'use client'

import { Send, Share2, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 md:mt-32 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              LodSid
            </a>
            <p className="text-foreground/60">
              Crafting premium digital experiences through full-stack development and modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/60 hover:text-foreground/80 transition-colors duration-300 flex items-center gap-2 group"
                >
                  {link.label}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
              >
                <Share2 size={20} className="text-neon-cyan" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-300"
              >
                <Send size={20} className="text-neon-purple" />
              </a>
              <a
                href="mailto:hello@lodsid.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-neon-pink/50 hover:bg-neon-pink/10 transition-all duration-300"
              >
                <Mail size={20} className="text-neon-pink" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-sm">
            © 2024 LodSid. All rights reserved. Crafted with precision.
          </p>
          <p className="text-foreground/50 text-sm">
            Available for freelance projects & collaborations
          </p>
        </div>
      </div>
    </footer>
  )
}
