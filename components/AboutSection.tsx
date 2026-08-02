"use client"
import SlideUp from "./SlideUp"

const tools = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "OpenAI API",
  "Make (Integromat)",
  "Zapier",
  "Midjourney",
  "ElevenLabs",
  "Runway ML",
  "CapCut",
  "Figma",
  "Notion",
]

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <SlideUp offset="-150px 0px -150px 0px">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  Who I Am
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] dark:text-white leading-tight">
                  Here to Solve<br />
                  <span className="text-[#0d9488]">Your Problem.</span>
                </h2>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m <span className="font-black text-[#0a0a0a] dark:text-white">LordSid</span> — a multi-disciplinary creative based in Nigeria, working with brands and businesses globally. If you need a landing page that converts, UGC content that feels real, an AI system that runs in the background, or a content strategy that actually drives leads — this is where that gets built.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                I don&apos;t just deliver files. I help you think through the right problem first — then build the solution that fits your market, your budget, and your goals. Remote or local, I adapt to how you work.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Over 10+ years I&apos;ve shipped apps, built brands, launched companies, and trained hundreds of people in tech and AI. That experience means less guesswork and faster results for you.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-colors text-sm uppercase tracking-wider"
                >
                  Work With Me
                </a>
                <a
                  href="https://wa.me/2347018643642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border-2 border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-colors text-sm uppercase tracking-wider"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Right */}
          <SlideUp offset="-150px 0px -150px 0px">
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "10+", label: "Years Experience" },
                  { num: "50+", label: "Products Shipped" },
                  { num: "500+", label: "People Trained" },
                  { num: "3", label: "Companies Founded" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6">
                    <p className="text-3xl font-black text-[#0a0a0a] dark:text-white leading-none">{s.num}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Disciplines */}
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">My Disciplines</p>
                {[
                  { label: "Landing Page Design & Build", color: "bg-[#0d9488]" },
                  { label: "UGC Video Creation (9:16)", color: "bg-pink-500" },
                  { label: "AI-Powered Content Creation", color: "bg-purple-500" },
                  { label: "Content Strategy & Funnels", color: "bg-orange-500" },
                  { label: "Brand Identity & UI/UX", color: "bg-blue-500" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${f.color} flex-shrink-0`} />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Tools I Work With</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-400 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
