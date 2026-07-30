"use client"

import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"

const ugcVideos = [
  {
    id: "ugc-sample-1",
    title: "UGC Sample — Product Demo",
    description: "Authentic short-form product demo for a consumer brand. Shot in 9:16 for TikTok & Reels.",
    youtubeId: "YOUR_UGC_1",
    thumbnail: "/pers1.jpg",
    platform: "TikTok / Reels",
  },
  {
    id: "ugc-sample-2",
    title: "UGC Sample — Testimonial Style",
    description: "Raw, trust-building testimonial format designed to lower ad costs and increase CTR.",
    youtubeId: "YOUR_UGC_2",
    thumbnail: "/pers2.jpg",
    platform: "YouTube Shorts",
  },
  {
    id: "ugc-sample-3",
    title: "UGC Sample — Brand Story",
    description: "Narrative-driven UGC for a service brand — hooks in 2 seconds, holds till the CTA.",
    youtubeId: "YOUR_UGC_3",
    thumbnail: "/pers3.jpg",
    platform: "TikTok / Reels",
  },
]

const UGCPreviewSection = () => {
  return (
    <section id="ugc" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <SlideUp offset="-100px 0px -100px 0px">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block px-3 py-1 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                UGC Video Creation
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Content That{" "}
                <span className="text-pink-400">Stops the Scroll.</span>
              </h2>
              <p className="text-base text-gray-400 mt-3 max-w-xl">
                Authentic 9:16 short-form content for brands — built for TikTok, Reels &amp; YouTube Shorts. Real feel. High conversion.
              </p>
            </div>
            <Link
              href="/portfolio#ugc"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-gray-300 font-black text-xs uppercase tracking-wider rounded-2xl hover:border-pink-400 hover:text-pink-400 transition-all"
            >
              See All Videos ↗
            </Link>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ugcVideos.map((v, i) => {
            const isPlaceholder = v.youtubeId.startsWith("YOUR_")
            const youtubeUrl = `https://www.youtube.com/watch?v=${v.youtubeId}`
            return (
              <SlideUp key={i} offset="-80px 0px -80px 0px">
                <div className="group border border-white/10 rounded-3xl overflow-hidden hover:border-pink-400/50 transition-all duration-300 bg-white/5">
                  {/* 9:16 portrait */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", maxHeight: "340px" }}>
                    <Image
                      src={v.thumbnail}
                      alt={v.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      {isPlaceholder ? (
                        <div className="text-center px-4">
                          <div className="w-14 h-14 rounded-full bg-pink-500/80 flex items-center justify-center mx-auto mb-2">
                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <p className="text-white text-xs font-black uppercase tracking-wider">Sample Coming Soon</p>
                        </div>
                      ) : (
                        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                          <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </a>
                      )}
                    </div>
                    <span className="absolute top-3 left-3 bg-pink-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg">
                      {v.platform}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg">
                      9:16
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-black text-white mb-1">{v.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{v.description}</p>
                    <a
                      href="#contact"
                      className="inline-block px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-colors"
                    >
                      Get UGC Videos →
                    </a>
                  </div>
                </div>
              </SlideUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UGCPreviewSection
