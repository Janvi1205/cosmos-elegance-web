import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cert1 from "@/assets/certificate-1.jpeg";
import cert2 from "@/assets/certificate-2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  { title: "Crown Icon Award Certificate", img: cert1 },
  { title: "Love Expert Certificate", img: cert2 },
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
    return () => { anim.kill(); };
  }, []);

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Credentials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          Certificates & <span className="text-gold-gradient">Qualifications</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-12 justify-center">
          {certificates.map((c, i) => (
            <div key={i} className="cert-card glass-card rounded-2xl overflow-hidden hover-lift flex flex-col h-full" style={{ opacity: 0 }}>
              <div className="flex-grow bg-white/50 flex items-center justify-center p-2">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-auto max-h-[600px] object-contain" 
                  loading="lazy" 
                />
              </div>
              <div className="p-6 bg-cream/20 border-t border-cream/10">
                <p className="font-heading text-lg font-bold text-secondary">{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
