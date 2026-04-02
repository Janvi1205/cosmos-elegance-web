import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/aboutsection.jpeg";
import ProgressiveImage from "./common/ProgressiveImage";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "20+", label: "Years Experience", num: 20, suffix: "+" },
  { value: "15000+", label: "Happy Clients", num: 15000, suffix: "+" },
  { value: "100%", label: "Satisfaction", num: 100, suffix: "%" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgEl = ".about-img";
      const textEl = ".about-text";
      const statEls = ".about-stat";
      const counterEls = ".stat-counter";

      gsap.fromTo(imgEl, 
        { x: -60, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: imgEl, start: "top 80%" } }
      );
      
      gsap.fromTo(textEl, 
        { x: 60, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: textEl, start: "top 80%" } }
      );
      
      gsap.fromTo(statEls, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: statEls, start: "top 85%" } }
      );

      // Counter animations
      gsap.utils.toArray<HTMLElement>(counterEls).forEach((el, i) => {
        const target = stats[i].num;
        const suffix = stats[i].suffix;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = (target >= 1000
              ? Math.floor(obj.val).toLocaleString()
              : Math.floor(obj.val)) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="about-img opacity-0 flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] max-w-md w-full">
            <ProgressiveImage
              src={aboutImg}
              alt="About Astro Dipak Shastriji"
              width={800}
              height={900}
              className="max-h-[500px]"
            />
          </div>
        </div>
        <div className="about-text opacity-0">
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
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="about-stat glass-card p-4 text-center rounded-2xl opacity-0">
                <p className="stat-counter font-heading text-2xl font-bold text-primary">0{s.suffix}</p>
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
