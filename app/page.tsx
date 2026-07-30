import HeroSection from "../components/HeroSection"
import ProblemSection from "../components/ProblemSection"
import SolutionSection from "../components/SolutionSection"
import CaseStudiesSection from "../components/CaseStudiesSection"
import UGCPreviewSection from "../components/UGCPreviewSection"
import FeaturedProjectsSection from "../components/FeaturedProjectsSection"
import TestimonialsSection from "../components/TestimonialsSection"
import ServicesSection from "../components/ServicesSection"
import LeadMagnetSection from "../components/LeadMagnetSection"

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CaseStudiesSection />
      <UGCPreviewSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <ServicesSection />
      <LeadMagnetSection />
    </main>
  )
}
