"use client"
import SlideUp from "./SlideUp"

const packages = [
  {
    name: "Launch",
    tag: "For new brands & projects",
    price: "₦150,000",
    period: "one-time",
    color: "border-[#0d9488]",
    btnBg: "bg-[#0d9488] hover:bg-[#0b7a70]",
    highlight: false,
    features: [
      "Brand identity & visual design",
      "Landing page or portfolio site",
      "Lead capture form + WhatsApp opt-in",
      "Basic CRM setup",
      "1 month support & handover",
    ],
    outcome: "Go from invisible to credible — a brand and digital presence that actually reflects your work.",
  },
  {
    name: "Build",
    tag: "Most Popular",
    price: "₦350,000",
    period: "one-time",
    color: "border-[#0d9488]",
    btnBg: "bg-[#0d9488] hover:bg-[#0b7a70]",
    highlight: true,
    features: [
      "Everything in Launch",
      "Full web app or platform development",
      "WhatsApp automation & chatbot",
      "5-step lead nurture sequence",
      "Content funnel strategy",
      "2 months support",
    ],
    outcome: "A fully operational digital product with automated systems that work for you around the clock.",
  },
  {
    name: "Scale",
    tag: "Full creative system",
    price: "₦700,000+",
    period: "custom quote",
    color: "border-purple-400",
    btnBg: "bg-purple-500 hover:bg-purple-600",
    highlight: false,
    features: [
      "Everything in Build",
      "AI-powered content & ad strategy",
      "Multi-channel automation",
      "Monthly analytics & reporting",
      "Video production & editing",
      "Ongoing creative retainer available",
    ],
    outcome: "A complete creative and revenue system — designed, built, and managed to scale your brand.",
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
              Packages
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight mb-4">
              Pick Your{" "}
              <span className="text-[#0d9488]">Creative Package</span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400">
              No retainers. No bloat. Just creative systems that deliver.
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

                {/* Package header */}
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${pkg.highlight ? "text-[#0d9488]" : "text-gray-400"}`}>
                    {pkg.tag}
                  </p>
                  <h3 className={`text-3xl font-black ${pkg.highlight ? "text-white" : "text-[#0a0a0a] dark:text-white"} mb-3`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-end gap-2">
                    <span className={`text-3xl font-black ${pkg.highlight ? "text-white" : "text-[#0a0a0a] dark:text-white"}`}>
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold mb-1 text-gray-400">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                {/* Outcome */}
                <div className={`rounded-2xl p-4 ${pkg.highlight ? "bg-[#0d9488]/20 border border-[#0d9488]/30" : "bg-[#0d9488]/5 border border-[#0d9488]/20"}`}>
                  <p className={`text-xs leading-relaxed ${pkg.highlight ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                    <span className="font-black text-[#0d9488]">Result: </span>
                    {pkg.outcome}
                  </p>
                </div>

                {/* Features */}
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

                {/* CTA */}
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

        {/* Custom note */}
        <SlideUp offset="-80px 0px -80px 0px">
          <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-10">
            Not sure which fits your project?{" "}
            <a
              href="#contact"
              className="text-[#0d9488] font-bold hover:underline"
            >
              Let&apos;s have a free 30-min strategy call
            </a>{" "}
            and I&apos;ll map out exactly what you need.
          </p>
        </SlideUp>
      </div>
    </section>
  )
}

export default ServicesSection
