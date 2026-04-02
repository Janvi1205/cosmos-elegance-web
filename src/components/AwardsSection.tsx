import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import awardImg from "@/assets/aboutsection.jpeg";
import award2 from "@/assets/award2.jpeg";
import award3 from "@/assets/award3.jpeg";
import award4 from "@/assets/award4.jpeg";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { title: "Best Astrologer Award 2026", img: award2 },
  { title: "Top Tier Award 2026", img: awardImg },
  { title: "Best Astrologer Award 2026", img: award3 },
  { title: "Best Astrologer Award 2026", img: award4 },
];

const AwardsSection = () => {
  const ref = useRef<HTMLElement>(null);
  
  // Memoize the plugin instance to prevent sharing across components
  const autoplayPlugin = useMemo(() => 
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }), 
  []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", duration: 50 },
    [autoplayPlugin]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplayPlugin.reset(); // Explicitly reset timer on manual click
  }, [emblaApi, autoplayPlugin]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplayPlugin.reset(); // Explicitly reset timer on manual click
  }, [emblaApi, autoplayPlugin]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current;
      if (!el) return;
      gsap.fromTo(".awards-inner", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section ref={ref} id="awards" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Recognition</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12">
          Awards & <span className="text-gold-gradient">Achievements</span>
        </h2>
        <div className="awards-inner relative opacity-0">
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-[-10px] md:left-[-32px] top-1/2 -translate-y-1/2 z-10 w-10 md:w-12 h-10 md:h-12 rounded-full glass-card text-secondary flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-[-10px] md:right-[-32px] top-1/2 -translate-y-1/2 z-10 w-10 md:w-12 h-10 md:h-12 rounded-full glass-card text-secondary flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {awards.map((a, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-1 md:px-4">
                  <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden max-w-full md:max-w-2xl mx-auto border-none shadow-xl">
                    <img 
                      src={a.img} 
                      alt={a.title} 
                      className="w-full h-[22rem] md:h-[38rem] object-cover" 
                      loading="lazy" 
                      width={800} 
                      height={600} 
                    />
                    <div className="p-4 md:p-8 bg-white/50 backdrop-blur-sm">
                      <p className="font-heading text-lg md:text-2xl font-bold text-secondary">{a.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-10">
            {awards.map((_, i) => (
              <button
                key={i}
                onClick={() => { 
                  emblaApi?.scrollTo(i); 
                  autoplayPlugin.reset(); // Reset on dot click
                }}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                  i === selectedIndex ? "bg-primary w-6 md:w-8 shadow-[var(--shadow-gold)]" : "bg-muted-foreground/20 w-1.5 md:w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
