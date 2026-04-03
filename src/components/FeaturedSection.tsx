import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import loveProblemImg from "@/assets/huswife.png";
import loveMarriageImg from "@/assets/lovesol.png";
import familyImg from "@/assets/service-family.jpg";
import husbandWifeImg from "@/assets/service-love.jpg";
import vashikaranImg from "@/assets/service-vashikaran.jpg";
import fightimg from "@/assets/fight.png";

gsap.registerPlugin(ScrollTrigger);

const featured = [
  { title: "Love Problem Solution in Ahmedabad", img: loveProblemImg },
  { title: "Love Marriage Specialist in Ahmedabad", img: loveMarriageImg },
  { title: "Marriage Problem Solution in Ahmedabad", img: husbandWifeImg },
  { title: "Husband Wife Problem Solution in Ahmedabad", img: fightimg },
  { title: "Family Problem Solution in Ahmedabad", img: familyImg },
  { title: "Vashikaran Specialist in Ahmedabad", img: vashikaranImg },
];

const FeaturedSection = () => {
  const ref = useRef<HTMLElement>(null);

  // Separate autoplay instance inside component scope
  const autoplayPlugin = useMemo(() => 
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, duration: 45 },
    [autoplayPlugin]
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplayPlugin.reset(); // Reset on arrow click
  }, [emblaApi, autoplayPlugin]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplayPlugin.reset(); // Reset on arrow click
  }, [emblaApi, autoplayPlugin]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current;
      if (!el) return;
      gsap.fromTo(".featured-inner", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="love-solutions" ref={ref} className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Featured</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          Explore Our Range of <span className="text-gold-gradient">Services</span>
        </h2>
        <div className="featured-inner relative opacity-0 group">
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card text-secondary flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card text-secondary flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-6">
              {featured.map((f, i) => (
                <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                  <div className="relative rounded-3xl overflow-hidden group/card cursor-pointer h-80 sm:h-[30rem] shadow-soft">
                    <img 
                      src={f.img} 
                      alt={f.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-1000" 
                      loading="lazy" 
                      width={600} 
                      height={800} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover/card:translate-y-0 transition-transform">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-cream leading-tight">{f.title}</h3>
                      <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
