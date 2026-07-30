"use client"
import SlideUp from "./SlideUp"

const pillars = [
  {
    step: "01",
    title: "High-Converting Landing Pages",
    desc: "Focused, fast-loading landing pages engineered to convert — for product launches, lead gen, events, and service offers. Every element earns its place.",
    color: "text-[#0d9488]",
    border: "border-[#0d9488]",
    bg: "bg-[#0d9488]/10",
  },
  {
    step: "02",
    title: "UGC Video Creation",
    desc: "Authentic 9:16 short-form video content for brands — testimonials, product demos, ads, and social content that feels real because it is. Built for TikTok, Reels & YouTube Shorts.",
    color: "text-pink-400",
    border: "border-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    step: "03",
    title: "AI & Automation Systems",
    desc: "Custom AI workflows, content generation pipelines, and automation sequences that remove repetitive creative work and scale your output without hiring more people.",
    color: "text-purple-400",
    border: "border-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    step: "04",
    title: "Brand Identity & Design",
    desc: "Visual identity, UI/UX design, and graphic assets that make your brand impossible to ignore — crafted to match your value and attract your ideal audience.",
    color: "text-blue-400",
    border: "border-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    step: "05",
    title: "Content Strategy & Funnels",
    desc: "Audience research, content planning, funnel mapping, and distribution systems that drive attention from social media or search directly into paying customers.",
    color: "text-orange-400",
    border: "border-orange-400",
    bg: "bg-orange-400/10",
  },
]

const SolutionSection = () => {
  return (
    <section id="solution" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
              What I Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight mb-4">
              Creative Work.{" "}
              <span className="text-[#0d9488]">Engineered Results.</span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              I sit at the intersection of design, engineering, and strategy. Every project is approached as a creative problem first — then solved with the right tools, systems, and execution.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className={`${p.bg} border ${p.border} border-opacity-30 rounded-3xl p-8 h-full`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className={`text-4xl font-black ${p.color} opacity-30 leading-none`}>
                    {p.step}
                  </span>
                  <h3 className={`text-xl font-black ${p.color} leading-snug pt-1`}>
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* How it all connects */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mt-12 bg-[#0a0a0a] dark:bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-widest text-[#0d9488] mb-4">The Creative-to-Revenue Flow</p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-gray-300">
              {[
                "Content Strategy",
                "→",
                "Landing Page",
                "→",
                "UGC Video",
                "→",
                "Organic / Paid Traffic",
                "→",
                "Lead Captured",
                "→",
                "Paying Customer",
              ].map((step, i) => (
                <span
                  key={i}
                  className={
                    step === "→"
                      ? "text-[#0d9488] text-lg"
                      : "px-3 py-1.5 bg-white/10 rounded-xl text-xs"
                  }
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default SolutionSection
