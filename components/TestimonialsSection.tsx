"use client"
import SlideUp from "./SlideUp"

const testimonials = [
  {
    quote: "Working with LordSid completely changed how we attract clients. Our landing page went live and we started getting WhatsApp inquiries the same week. [Replace with your real client quote]",
    name: "Client Name",
    role: "Founder, Company Name",
    initials: "CN",
    color: "bg-[#0d9488]",
    service: "Landing Page Build",
  },
  {
    quote: "The UGC videos he created for our brand felt so authentic — our ad costs dropped and engagement went through the roof. [Replace with your real client quote]",
    name: "Client Name",
    role: "Marketing Manager, Brand Name",
    initials: "CM",
    color: "bg-pink-500",
    service: "UGC Video Creation",
  },
  {
    quote: "LordSid didn't just build the system — he helped us understand our audience first. The content strategy he mapped out gave us a clear direction. [Replace with your real client quote]",
    name: "Client Name",
    role: "CEO, Business Name",
    initials: "CB",
    color: "bg-purple-500",
    service: "Content Strategy",
  },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16">
            <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
              Client Words
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight mb-4">
              What Clients{" "}
              <span className="text-[#0d9488]">Actually Say.</span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl">
              Real feedback from people who&apos;ve hired me for landing pages, UGC content, and growth systems.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8 flex flex-col gap-5 h-full hover:border-[#0d9488]/30 transition-colors">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Service tag */}
                <span className="inline-block self-start px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/20 text-[#0d9488] text-[10px] font-black uppercase tracking-widest rounded-full">
                  {t.service}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-gray-100 dark:border-white/10 pt-5">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-black flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#0a0a0a] dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Placeholder notice — remove when real testimonials are added */}
        <SlideUp offset="-80px 0px -80px 0px">
          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-8 italic">
            * Placeholder quotes — replace with real client testimonials in <code className="text-[#0d9488]">components/TestimonialsSection.tsx</code>
          </p>
        </SlideUp>
      </div>
    </section>
  )
}

export default TestimonialsSection
