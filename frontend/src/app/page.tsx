import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Primary Landing Page Component (Home).
 *
 * Sequentially orchestrates the full-page editorial experience across 10 interconnected
 * content sections, complete with anchor scroll targets and entrance animations:
 *
 * 1. HeroSection        — Introductory greeting, 3D interactive avatar with X-ray flashlight, and quick metrics.
 * 2. AboutSection       — Background biography, philosophy, key achievements, and avatar visualization.
 * 3. ServicesSection    — Technical offerings, specialization breakdown, and tech stack pills.
 * 4. EducationSection   — Interactive 3D laptop degree showcase and timeline credentials.
 * 5. SkillsSection      — Panoramic bonsai tech tree with glowing medallion nodes and falling leaves.
 * 6. ProjectsSection    — Detailed project case studies with interactive modals and live previews.
 * 7. TestimonialsSection— Endorsements, client feedback slider, and collaboration ratings.
 * 8. BlogSection        — Categorized publication articles, reading times, and technical insights.
 * 9. CtaSection         — Project collaboration inquiry card with decorative accents.
 * 10. ContactSection    — Direct inquiry form with Nodemailer SMTP delivery and interactive world map.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
