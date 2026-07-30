"use client"
import SlideUp from "./SlideUp"

const packages = [
  {
    name: "Starter",
    tag: "For quick wins & single deliverables",
    priceNGN: "₦150,000",
    priceUSD: "~$90",
    period: "per project",
    color: "border-[#0d9488]",
    btnBg: "bg-[#0d9488] hover:bg-[#0b7a70]",
    highlight: false,
    features: [
      "1 high-converting landing page",
      "OR 3× UGC short-form videos (9:16)",
      "OR brand identity & visual kit",
      "Lead capture form + CTA setup",
      "1 revision round included",
      "7-day turnaround",
    ],
    outcome: "One focused deliverable, done right — ready to publish, run ads on, or hand to clients.",
  },
  {
    name: "Growth",
    tag: "Most Popular",
    priceNGN: "₦380,000",
    priceUSD: "~$230",
    period: "per project",
    color: "border-[#0d9488]",
    btnBg: "bg-[#0d9488] hover:bg-[#0b7a70]",
    highlight: true,
    features: [
      "Landing page + content strategy",
      "5× UGC videos for paid ads or organic",
      "AI-assisted content calendar (30 days)",
      "Brand identity refresh or visual kit",
      "2 rounds of revisions",
      "2 months support",
    ],
    outcome: "A complete growth system — content that attracts, a page that converts, and a strategy that keeps working.",
  },
  {
    name: "Scale",
    tag: "Full creative retainer",
    priceNGN: "₦750,000+",
    priceUSD: "~$450+",
    period: "monthly",
    color: "border-purple-400",
    btnBg: "bg-purple-500 hover:bg-purple-600",
    highlight: false,
    features: [
      "Everything in Growth",
      "Ongoing landing page builds & A/B tests",
      "Monthly UGC content batch (8–12 videos)",
      "Full content strategy & funnel management",
      "AI-powered ad creative & copy",
      "Monthly analytics & performance report",
    ],
    outcome: "A fully managed creative system that keeps producing content, pages, and results month after month.",
  },
]

const perDeliverable = [
  { label: "Landing Page", ngn: "₦80,000", usd: "~$50", note: "Single-page, conversion-focused" },
  { label: "UGC Video (9:16)", ngn: "₦35,000", usd: "~$22", note: "Per video, raw + edited" },
  { label: "Content Strategy", ngn: "₦120,000", usd: "~$72", note: "30-day plan + funnel map" },
  { label: "Brand Identity Kit", ngn: "₦150,000", usd: "~$90", note: "Logo, colors, type, assets" },
]

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight mb-4">
              Pick Your{" "}
              <span className="text-[#0d9488]">Engagement</span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Remote-friendly pricing. Naira or USD — your call.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div
                className={`relative rounded-3xl border-2 ${pkg.color} ${
                  pkg.highlight
                    ? "bg-[#0a0a0a] dark:bg-white/10 shadow-2xl shadow-[#0d9488]/20 scale-105"
                    : "bg-gray-50 dark:bg-white/5"
                } p-8 flex flex-col gap-5`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-[#0d9488] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${pkg.highlight ? "text-[#0d9488]" : "text-gray-400"}`}>
                    {pkg.tag}
                  </p>
                  <h3 className={`text-3xl font-black ${pkg.highlight ? "text-white" : "text-[#0a0a0a] dark:text-white"} mb-3`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-end gap-2 flex-wrap">
                    <span className={`text-2xl font-black ${pkg.highlight ? "text-white" : "text-[#0a0a0a] dark:text-white"}`}>
                      {pkg.priceNGN}
                    </span>
                    <span className="text-sm font-bold text-[#0d9488]">{pkg.priceUSD}</span>
                    <span className="text-xs font-bold mb-0.5 text-gray-400">{pkg.period}</span>
                  </div>
                </div>

                <div className={`rounded-2xl p-4 ${pkg.highlight ? "bg-[#0d9488]/20 border border-[#0d9488]/30" : "bg-[#0d9488]/5 border border-[#0d9488]/20"}`}>
                  <p className={`text-xs leading-relaxed ${pkg.highlight ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                    <span className="font-black text-[#0d9488]">Result: </span>
                    {pkg.outcome}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#0d9488]/20 border border-[#0d9488]/40 flex items-center justify-center text-[#0d9488] text-xs">
                        ✓
                      </span>
                      <span className={`text-sm ${pkg.highlight ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full text-center px-6 py-4 ${pkg.btnBg} text-white text-sm font-black uppercase tracking-wider rounded-2xl transition-colors block`}
                >
                  Start with {pkg.name}
                </a>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Per-deliverable pricing */}
        <SlideUp offset="-80px 0px -80px 0px">
          <div className="mt-14 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8">
            <p className="text-xs font-black uppercase tracking-widest text-[#0d9488] mb-2">Need just one thing?</p>
            <h3 className="text-xl font-black text-[#0a0a0a] dark:text-white mb-6">Per-Deliverable Rates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {perDeliverable.map((item) => (
                <div key={item.label} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5">
                  <p className="text-sm font-black text-[#0a0a0a] dark:text-white mb-1">{item.label}</p>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-black text-[#0a0a0a] dark:text-white">{item.ngn}</span>
                    <span className="text-xs font-bold text-[#0d9488]">{item.usd}</span>
                  </div>
                  <p className="text-[11px] text-gray-400">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>

        <SlideUp offset="-80px 0px -80px 0px">
          <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-10">
            Not sure what you need?{" "}
            <a href="#contact" className="text-[#0d9488] font-bold hover:underline">
              Book a free 30-min strategy call
            </a>{" "}
            and I&apos;ll map it out for you.
          </p>
        </SlideUp>
      </div>
    </section>
  )
}

export default ServicesSection
