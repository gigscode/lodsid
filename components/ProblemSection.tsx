"use client"
import SlideUp from "./SlideUp"

const gaps = [
  {
    icon: "🎯",
    title: "No Clear Digital Presence",
    desc: "You're doing great work but the world doesn't know it. Your online presence doesn't reflect the quality you deliver.",
  },
  {
    icon: "📄",
    title: "Landing Page That Doesn't Convert",
    desc: "People visit your site, read a bit, then leave. No clear offer, no hook, no reason to take the next step.",
  },
  {
    icon: "🎥",
    title: "No Video Content That Feels Real",
    desc: "Polished ads get scrolled past. Brands that win use authentic UGC-style content — raw, relatable, and built to convert.",
  },
  {
    icon: "🎨",
    title: "Brand Doesn't Match Your Value",
    desc: "Your visuals, messaging, and positioning don't communicate what you're really worth — so you attract the wrong clients.",
  },
  {
    icon: "📉",
    title: "Content Gets Likes, Not Clients",
    desc: "You post online but it doesn't lead anywhere. No CTA, no funnel, no strategy — just noise that converts no one.",
  },
  {
    icon: "🔇",
    title: "No Strategy Behind the Work",
    desc: "Execution without direction wastes time and budget. Without a content strategy, every piece of work is a guess.",
  },
]

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest rounded-full mb-4">
              The Gap
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Great Work Alone{" "}
            <span className="text-red-400">Isn&apos;t Enough</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mb-16">
            Talent without a system is just potential. The creatives and businesses that win are the ones who pair their craft with infrastructure — a brand that speaks, a pipeline that flows, and automation that works while they sleep.
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gaps.map((p, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-red-500/40 hover:bg-red-500/5 transition-all duration-300 group">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-base font-black text-white mb-2 group-hover:text-red-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Bridge to solution */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mt-14 bg-gradient-to-r from-[#0d9488]/20 to-[#0d9488]/5 border border-[#0d9488]/30 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#0d9488] mb-2">The fix</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Every gap has a creative solution that&apos;s already been built.
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                I&apos;ve built landing pages, created UGC content, and designed strategies for brands and businesses across Nigeria. Let me show you what&apos;s possible.
              </p>
            </div>
            <a
              href="#services"
              className="flex-shrink-0 px-7 py-4 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-colors text-sm uppercase tracking-wider whitespace-nowrap"
            >
              See What I Do →
            </a>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default ProblemSection
