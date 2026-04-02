import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import loveProblemImg from "@/assets/service-love-problem.jpg";
import loveMarriageImg from "@/assets/service-love-marriage.jpg";
import familyImg from "@/assets/service-family.jpg";
import husbandWifeImg from "@/assets/service-husband-wife.jpg";
import careerImg from "@/assets/service-career-business.jpg";
import vashikaranImg from "@/assets/service-vashikaran.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Love Problem Solution", desc: "Overcome heartbreak, misunderstandings, and relationship obstacles with powerful Vedic remedies.", img: loveProblemImg },
  { title: "Love Marriage Specialist", desc: "Get expert guidance and astrological support for inter-caste and love marriages.", img: loveMarriageImg },
  { title: "Family Problem Solution", desc: "Resolve family disputes, bring peace, and restore harmony in your household.", img: familyImg },
  { title: "Husband Wife Problem", desc: "Resolve disputes, rebuild trust, and bring harmony back to your marriage.", img: husbandWifeImg },
  { title: "Career & Business", desc: "Unlock professional growth, financial stability, and success aligned with your stars.", img: careerImg },
  { title: "Vashikaran Specialist", desc: "Ancient Vedic vashikaran solutions for love, attraction, and relationship challenges.", img: vashikaranImg },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".service-card");
    const anim = gsap.fromTo(cards, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: cards[0], start: "top 85%" },
    });
    return () => { anim.kill(); };
  }, []);

  return (
    <section id="services" ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">What I Offer</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          My <span className="text-gold-gradient">Services</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="service-card glass-card rounded-2xl overflow-hidden hover-lift group text-left" style={{ opacity: 0 }}>
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={900} />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-secondary mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <a href="#contact" className="font-body text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
