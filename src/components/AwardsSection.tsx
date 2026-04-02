import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import awardImg from "@/assets/award-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { title: "Best Astrologer Award 2023", img: awardImg },
  { title: "Excellence in Vedic Sciences", img: awardImg },
  { title: "Top Love Specialist India", img: awardImg },
  { title: "Jyotish Ratna Award", img: awardImg },
  { title: "International Astrology Recognition", img: awardImg },
  { title: "Spiritual Excellence Award", img: awardImg },
];

const AwardsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const anim = gsap.fromTo(el.querySelector(".awards-inner")!, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
    return () => { anim.kill(); };
  }, []);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Recognition</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          Awards & <span className="text-gold-gradient">Achievements</span>
        </h2>
        <div className="awards-inner relative" style={{ opacity: 0 }}>
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary/80 text-cream flex items-center justify-center hover:bg-secondary transition-colors -ml-2 md:-ml-5"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary/80 text-cream flex items-center justify-center hover:bg-secondary transition-colors -mr-2 md:-mr-5"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          <div ref={emblaRef} className="overflow-hidden mx-8">
            <div className="flex">
              {awards.map((a, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="glass-card rounded-2xl overflow-hidden max-w-lg mx-auto">
                    <img src={a.img} alt={a.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" width={600} height={400} />
                    <div className="p-5">
                      <p className="font-heading text-lg font-semibold text-secondary">{a.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {awards.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
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
