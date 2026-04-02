import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import certImg from "@/assets/certificate-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  { title: "Vedic Astrology Certification", img: certImg },
  { title: "Jyotish Pravakar Diploma", img: certImg },
  { title: "International Astrology Award", img: certImg },
];

const CertificatesSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".cert-card");
    const anim = gsap.fromTo(cards, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: cards[0], start: "top 85%" },
    });
    return () => anim.kill();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Credentials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          Certificates & <span className="text-gold-gradient">Qualifications</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <div key={i} className="cert-card glass-card rounded-2xl overflow-hidden hover-lift" style={{ opacity: 0 }}>
              <img src={c.img} alt={c.title} className="w-full h-52 object-cover" loading="lazy" width={600} height={512} />
              <div className="p-5">
                <p className="font-heading text-base font-semibold text-secondary">{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
