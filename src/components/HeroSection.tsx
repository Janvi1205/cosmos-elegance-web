import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.context() for scoped animations and automatic cleanup
    const ctx = gsap.context(() => {
      const el = sectionRef.current;
      if (!el) return;

      // Subtle background zoom
      gsap.fromTo(".hero-bg-img", 
        { scale: 1.05 }, 
        { scale: 1, duration: 8, ease: "power1.out" }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      tl.fromTo(".hero-tag", { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3 })
        .fromTo(".hero-line", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15 }, "-=0.4")
        .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 }, "-=0.2")
        .fromTo(".hero-trust", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");
      
    }, sectionRef); // Scope all selectors to sectionRef

    return () => ctx.revert(); // Best practice: reverts all animations on unmount
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image container with blur-up placeholder feel */}
      <div className="absolute inset-0 bg-secondary/80" ref={containerRef}>
        <img
          src={heroBg}
          alt=""
          className="hero-bg-img w-full h-full object-cover object-[75%_center] md:object-center will-change-transform"
          loading="eager" // Hero image should load eagerly
          fetchPriority="high" // High priority for LCP image
          width={1920}
          height={1080}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/70 to-secondary/40 md:from-secondary/85 md:via-secondary/70 md:to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-2xl flex flex-col items-center text-center md:items-start md:text-left">
          <div
            className="hero-tag inline-flex items-center gap-2 border border-gold/30 bg-gold/10 backdrop-blur-sm text-gold-light font-body text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Trusted Vedic Astrologer
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
            <span className="hero-line block text-cream opacity-0">
              Unlock the Stars,
            </span>
            <span className="hero-line block text-gold-gradient opacity-0">
              Transform Your Life
            </span>
          </h1>

          <p
            className="hero-sub font-body text-cream/70 text-base md:text-lg max-w-lg mb-10 leading-relaxed opacity-0"
          >
            Personalized Vedic astrology guidance for love, marriage, career, and life's toughest challenges — with clarity, compassion, and proven remedies.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
            <a
              href="#contact"
              className="hero-btn gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)] w-full sm:w-auto opacity-0"
            >
              <Phone size={18} /> Book now
            </a>
            <a
              href="https://wa.me/919157974529?text=Hello%20Astrologer%20Dipak%20Shastriji,%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn border border-cream/25 text-cream font-body font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 hover:bg-cream/10 transition-colors backdrop-blur-sm w-full sm:w-auto mt-2 sm:mt-0 opacity-0"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="hero-trust flex items-center justify-center md:justify-start gap-6 text-cream/50 font-body text-sm opacity-0">
            <span className="flex items-center gap-2">
              <span className="w-8 h-px bg-gold/40" />
              20+ Years Experience
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-8 h-px bg-gold/40" />
              15000+ Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
