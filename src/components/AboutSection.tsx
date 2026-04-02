import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about-astrologer.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
  { value: "15+", label: "Awards" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const imgEl = el.querySelector(".about-img");
    const textEl = el.querySelector(".about-text");
    const statEls = el.querySelectorAll(".about-stat");

    const anims = [
      gsap.fromTo(imgEl, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: imgEl, start: "top 80%" } }),
      gsap.fromTo(textEl, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: textEl, start: "top 80%" } }),
      gsap.fromTo(statEls, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: statEls[0], start: "top 85%" } }),
    ];
    return () => anims.forEach(a => a.kill());
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="about-img relative" style={{ opacity: 0 }}>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <img src={aboutImg} alt="About Astro Guruji" className="w-full h-auto object-cover" loading="lazy" width={800} height={900} />
          </div>
          <div className="absolute -bottom-6 -right-6 gold-gradient text-primary-foreground rounded-2xl px-6 py-4 shadow-[var(--shadow-gold)]">
            <p className="font-heading text-3xl font-bold">5000+</p>
            <p className="font-body text-sm opacity-90">Lives Transformed</p>
          </div>
        </div>
        <div className="about-text" style={{ opacity: 0 }}>
          <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
            Guiding Lives Through <span className="text-gold-gradient">Ancient Wisdom</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            With over a decade of experience in Vedic astrology, I have helped thousands of individuals find clarity in love, marriage, career, and life challenges. My approach combines traditional wisdom with modern understanding.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Every consultation is personalized to your unique birth chart, ensuring accurate predictions and effective remedies that bring real transformation to your life.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="about-stat glass-card p-4 text-center rounded-2xl" style={{ opacity: 0 }}>
                <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
