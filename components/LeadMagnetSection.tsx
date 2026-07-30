"use client"
import { useState } from "react"
import SlideUp from "./SlideUp"

const projectTypes = [
  "Web App / Platform",
  "Brand Identity & Design",
  "AI / Automation System",
  "Content Strategy & Funnel",
  "Video Production",
  "Customer Acquisition System",
  "Full Creative Package",
  "Other / Not Sure Yet",
]

const LeadMagnetSection = () => {
  const [form, setForm] = useState({ name: "", project: "", whatsapp: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.project || !form.whatsapp) return
    setLoading(true)
    const msg = encodeURIComponent(
      `Hi LordSid! I'd like to kick off a project with you.\n\nName: ${form.name}\nProject Type: ${form.project}\nWhatsApp: ${form.whatsapp}`
    )
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.open(`https://wa.me/2347018643642?text=${msg}`, "_blank")
    }, 800)
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Value proposition */}
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full">
                Free Strategy Call
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Let&apos;s Talk About{" "}
                <span className="text-[#0d9488]">Your Project</span>
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                In 30 minutes, I&apos;ll understand exactly what you&apos;re trying to build or fix, and tell you straight — what the right approach is, what it will cost, and how fast we can move. No pitch. No pressure.
              </p>

              {/* What you get */}
              <div className="space-y-4 pt-2">
                {[
                  { icon: "🔍", title: "Creative Audit", desc: "I'll review your current brand, product, or funnel" },
                  { icon: "⚙️", title: "Strategy Blueprint", desc: "A clear roadmap of what to build and in what order" },
                  { icon: "📈", title: "Quick Wins", desc: "2–3 things you can act on this week, for free" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>

          {/* Right: Form */}
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="text-5xl">✅</div>
                  <h3 className="text-2xl font-black text-white">You&apos;re In!</h3>
                  <p className="text-gray-400 text-sm">
                    A WhatsApp message has been opened for you. Send it and I&apos;ll confirm your call slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#0d9488] text-sm font-bold hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-white mb-1">Start a Conversation</h3>
                    <p className="text-xs text-gray-500">Takes 30 seconds. Zero spam.</p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Chukwuemeka Obi"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0d9488] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#0d9488] transition-colors appearance-none"
                    >
                      <option value="" disabled>What do you need built?</option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 08031234567"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0d9488] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-[#0d9488] hover:bg-[#0b7a70] disabled:opacity-60 text-white font-black text-sm uppercase tracking-wider rounded-2xl transition-colors"
                  >
                    {loading ? "Connecting..." : "Let's Talk →"}
                  </button>

                  <p className="text-[11px] text-center text-gray-600">
                    You&apos;ll be redirected to WhatsApp. No emails. No spam.
                  </p>
                </form>
              )}
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}

export default LeadMagnetSection
