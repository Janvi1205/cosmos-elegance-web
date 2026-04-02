import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Subtle background zoom
    gsap.fromTo(el.querySelector(".hero-bg-img")!, { scale: 1.05 }, { scale: 1, duration: 8, ease: "power1.out" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    tl.fromTo(el.querySelector(".hero-tag")!, { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3 })
      .fromTo(el.querySelectorAll(".hero-line"), { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15 }, "-=0.4")
      .fromTo(el.querySelector(".hero-sub")!, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      .fromTo(el.querySelectorAll(".hero-btn"), { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 }, "-=0.2")
      .fromTo(el.querySelector(".hero-trust")!, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");

    return () => { tl.kill(); };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="hero-bg-img w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/70 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-2xl">
          <div
            className="hero-tag inline-flex items-center gap-2 border border-gold/30 bg-gold/10 backdrop-blur-sm text-gold-light font-body text-sm font-medium px-4 py-1.5 rounded-full mb-8"
            style={{ opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Trusted Vedic Astrologer
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
            <span className="hero-line block text-cream" style={{ opacity: 0 }}>
              Unlock the Stars,
            </span>
            <span className="hero-line block text-gold-gradient" style={{ opacity: 0 }}>
              Transform Your Life
            </span>
          </h1>

          <p
            className="hero-sub font-body text-cream/70 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
            style={{ opacity: 0 }}
          >
            Personalized Vedic astrology guidance for love, marriage, career, and life's toughest challenges — with clarity, compassion, and proven remedies.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="hero-btn gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)]"
              style={{ opacity: 0 }}
            >
              <Phone size={18} /> Book Consultation
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn border border-cream/25 text-cream font-body font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 hover:bg-cream/10 transition-colors backdrop-blur-sm"
              style={{ opacity: 0 }}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="hero-trust flex items-center gap-6 text-cream/50 font-body text-sm" style={{ opacity: 0 }}>
            <span className="flex items-center gap-2">
              <span className="w-8 h-px bg-gold/40" />
              10+ Years Experience
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-8 h-px bg-gold/40" />
              5000+ Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
