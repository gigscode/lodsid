'use client'

import { Send, Share2, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 md:mt-32 py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-blue-600">
              LodSid
            </a>
            <p className="text-slate-600">
              Crafting premium digital experiences through full-stack development and modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-slate-900">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-300 flex items-center gap-2 group"
                >
                  {link.label}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-slate-900">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://x.com/LordSid07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-200 transition-all duration-300"
              >
                <Share2 size={20} className="text-blue-600" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-100 border border-slate-200 rounded-lg hover:border-purple-300 hover:bg-purple-200 transition-all duration-300"
              >
                <Send size={20} className="text-purple-600" />
              </a>
              <a
                href="https://wa.me/07018643642"
                className="p-3 bg-green-100 border border-slate-200 rounded-lg hover:border-green-300 hover:bg-green-200 transition-all duration-300"
              >
                <Mail size={20} className="text-green-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 LordSid. All rights reserved. Crafted with precision.
          </p>
          <p className="text-slate-500 text-sm">
            Available for freelance projects & collaborations
          </p>
        </div>
      </div>
    </footer>
  )
}
