import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "@/assets/hero-astrologer.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-tag", { y: 30, opacity: 0, duration: 0.6, delay: 0.3 })
        .from(".hero-heading span", { y: 80, opacity: 0, duration: 0.8, stagger: 0.15 }, "-=0.3")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".hero-img", { scale: 0.9, opacity: 0, duration: 1 }, "-=1");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center section-padding pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="hero-tag inline-block bg-gold/10 text-gold-dark font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ Trusted Vedic Astrologer
          </div>
          <h1 className="hero-heading font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            <span className="block">Unlock the Stars,</span>
            <span className="block text-gold-gradient">Transform Your Life</span>
          </h1>
          <p className="hero-sub font-body text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            Get personalized astrological guidance for love, marriage, career, and life challenges from a renowned Vedic astrologer with 10+ years of experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="hero-btn gold-gradient text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)]"
            >
              <Phone size={18} /> Book Consultation
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn bg-secondary text-secondary-foreground font-body font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-img relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold/30 shadow-[var(--shadow-elevated)]">
            <img src={heroImg} alt="Astro Guruji - Vedic Astrologer" className="w-full h-full object-cover" width={800} height={1000} />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card glass-card px-5 py-3 rounded-2xl">
            <p className="font-heading text-2xl font-bold text-primary">10+</p>
            <p className="font-body text-xs text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
