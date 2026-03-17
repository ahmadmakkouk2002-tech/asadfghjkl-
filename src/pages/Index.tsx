import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OwnersSection from "@/components/OwnersSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import AboutCards from "@/components/AboutCards";
import ServicesSection from "@/components/ServicesSection";
import LogoCarousel from "@/components/LogoCarousel";
import IndustriesSection from "@/components/IndustriesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OwnersSection />
      <AnnouncementsSection />
      <AboutCards />
      <ServicesSection />
      <LogoCarousel />
      <IndustriesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
