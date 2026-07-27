'use client'

import { useEffect, useState } from 'react'
import { Mail, Send, Share2 } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-3xl md:text-4xl font-black text-blue-600 hover:text-blue-700 transition-all duration-300 tracking-tight hover:scale-110"
        >
          LordSid
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-foreground/70">
            <a href="#projects" className="hover:text-foreground transition-colors duration-300">
              Projects
            </a>
            <a href="#about" className="hover:text-foreground transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://x.com/LordSid07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-blue-100 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Share2 size={20} className="text-blue-600" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-purple-100 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Send size={20} className="text-purple-600" />
            </a>
            <a
              href="https://wa.me/07018643642"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
