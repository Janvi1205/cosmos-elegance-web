import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import ServicesSection from "@/components/ServicesSection";
import CertificatesSection from "@/components/CertificatesSection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <AwardsSection />
    <ServicesSection />
    <CertificatesSection />
    <FeaturedSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
