import HeroSection from "@/components/sections/HeroSection";
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
