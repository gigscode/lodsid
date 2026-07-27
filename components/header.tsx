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
          className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          LodSid
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
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neon-purple/20 rounded-lg transition-all duration-300 hover-glow"
            >
              <Share2 size={20} className="text-neon-cyan" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neon-purple/20 rounded-lg transition-all duration-300 hover-glow"
            >
              <Send size={20} className="text-neon-purple" />
            </a>
            <a
              href="mailto:contact@lodsid.com"
              className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-cyan text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
