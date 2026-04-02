import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import loveImg from "@/assets/service-love.jpg";
import marriageImg from "@/assets/service-marriage.jpg";
import { Heart, Sparkles, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const featured = [
  { title: "Love Astrologer", desc: "Expert guidance for all matters of the heart using ancient Vedic knowledge.", img: loveImg, icon: Heart },
  { title: "Get Your Ex Back", desc: "Proven astrological solutions to reconnect with your lost love.", img: loveImg, icon: Sparkles },
  { title: "Marriage Problem Solution", desc: "Restore peace and harmony in your married life with tailored remedies.", img: marriageImg, icon: Users },
];

const FeaturedSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".featured-card", {
        y: 60, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".featured-card", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="love-solutions" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Featured</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          Premium <span className="text-gold-gradient">Love Solutions</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="featured-card relative rounded-3xl overflow-hidden group cursor-default h-96">
                <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={600} height={700} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mb-3">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-cream mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-cream/80 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
