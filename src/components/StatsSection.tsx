import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Users, Award, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const counters = [
  { icon: Calendar, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Awards Won" },
];

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".stat-item");
    const anim = gsap.fromTo(items, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
      scrollTrigger: { trigger: items[0], start: "top 85%" },
    });
    return () => anim.kill();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="stat-item text-center" style={{ opacity: 0 }}>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <p className="font-heading text-4xl font-bold text-secondary-foreground">{c.value}</p>
                <p className="font-body text-sm text-secondary-foreground/70 mt-1">{c.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
