import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: "Priya Sharma", text: "Astrologer Dipak Shastriji's predictions were incredibly accurate. He helped me reunite with my partner when all hope seemed lost. Forever grateful!", rating: 5 },
  { name: "Rahul Verma", text: "I was facing severe career issues. After following Astrologer Dipak Shastriji's remedies, I got promoted within 3 months. Truly life-changing guidance.", rating: 5 },
  { name: "Anita Patel", text: "My marriage was on the verge of collapse. Astrologer Dipak Shastriji's advice and remedies brought peace and love back into our home.", rating: 5 },
  { name: "Vikash Kumar", text: "Best astrologer I have ever consulted. Very patient, understanding, and the remedies actually work. Highly recommended!", rating: 5 },
  { name: "Sunita Devi", text: "Astrologer Dipak Shastriji helped resolve my love marriage issues with family. Today we are happily married. Thank you so much!", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const container = el.querySelector(".testi-container");
    const anim = gsap.fromTo(container, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: container, start: "top 80%" },
    });
    return () => { anim.kill(); };
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <section id="testimonials" ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          What Clients <span className="text-gold-gradient">Say</span>
        </h2>
        <div className="testi-container glass-card rounded-3xl p-8 md:p-12 relative" style={{ opacity: 0 }}>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8 italic min-h-[80px]">"{review.text}"</p>
          <p className="font-heading text-lg font-bold text-secondary">{review.name}</p>
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
