import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

// Lazy load all sections below the fold
const AboutSection = lazy(() => import("@/components/AboutSection"));
const AwardsSection = lazy(() => import("@/components/AwardsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const CertificatesSection = lazy(() => import("@/components/CertificatesSection"));
const FeaturedSection = lazy(() => import("@/components/FeaturedSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const SectionDivider = lazy(() => import("@/components/SectionDivider"));

// Loading placeholder for Suspense
const SectionLoader = () => (
  <div className="section-padding flex items-center justify-center min-h-[400px]">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
      <span className="text-gold/40 font-body text-sm">Aligning the Stars...</span>
    </div>
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    
    <Suspense fallback={<SectionLoader />}>
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <AwardsSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <CertificatesSection />
      <SectionDivider />
      <FeaturedSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </Suspense>
    
    <FloatingButtons />
  </div>
);

export default Index;
