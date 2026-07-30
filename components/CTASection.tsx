"use client"

const CTASection = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0d948820_0%,_transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <span className="inline-block px-4 py-1.5 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full">
          Let&apos;s Create Together
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          You Have the Vision.{" "}
          <span className="text-gray-500">I Have the Craft.</span>
          <br />
          Let&apos;s Build{" "}
          <span className="text-[#0d9488]">Something Real.</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Whether it&apos;s a landing page that converts, UGC content for your brand, or a full content strategy that drives leads — I&apos;m here to make it happen with precision, creativity, and real results.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="px-8 py-5 bg-[#0d9488] text-white font-black text-base uppercase tracking-wider rounded-2xl hover:bg-[#0b7a70] transition-all shadow-2xl shadow-[#0d9488]/30"
          >
            Start a Project
          </a>
          <a
            href="https://wa.me/2347018643642"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 border-2 border-white/20 text-white font-bold text-base rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-all"
          >
            WhatsApp Me Directly
          </a>
        </div>

        {/* Trust footnote */}
        <p className="text-xs text-gray-600 pt-2">
          Free strategy call · No obligation · Based in Nigeria, working globally
        </p>
      </div>
    </section>
  )
}

export default CTASection
