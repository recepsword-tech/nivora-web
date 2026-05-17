import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Nivora | Ankara Anahtar Teslim Tadilat & Dekorasyon",
  description:
    "Nivora, Ankara'da ev, banyo, mutfak ve ticari alanlar için temiz çalışma, ince işçilik ve güvenilir süreç odaklı tadilat ve dekorasyon hizmeti sunar.",
};
import ServicesSection from "@/components/sections/ServicesSection";
import WhyNivoraSection from "@/components/sections/WhyNivoraSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/motion/AnimatedSection";

export default function HomePage() {
  return (
    <>
      {/* Hero kendi animasyonlarını yönetiyor */}
      <HeroSection />

      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyNivoraSection />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection>
        <ProcessSection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
    </>
  );
}
