import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import awardImg from "@/assets/award-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { title: "Best Astrologer Award 2023", img: awardImg },
  { title: "Excellence in Vedic Sciences", img: awardImg },
  { title: "Top Love Specialist India", img: awardImg },
  { title: "Jyotish Ratna Award", img: awardImg },
];

const AwardsSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".award-card", {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".award-card", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Recognition</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          Awards & <span className="text-gold-gradient">Achievements</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((a, i) => (
            <div key={i} className="award-card glass-card p-6 rounded-2xl hover-lift cursor-default group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted group-hover:scale-110 transition-transform duration-300">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
              </div>
              <p className="font-heading text-sm font-semibold text-secondary">{a.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
