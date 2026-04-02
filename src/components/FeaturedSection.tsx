import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import loveProblemImg from "@/assets/service-love-problem.jpg";
import loveMarriageImg from "@/assets/service-love-marriage.jpg";
import familyImg from "@/assets/service-family.jpg";
import husbandWifeImg from "@/assets/service-husband-wife.jpg";
import careerImg from "@/assets/service-career-business.jpg";
import vashikaranImg from "@/assets/service-vashikaran.jpg";

gsap.registerPlugin(ScrollTrigger);

const featured = [
  { title: "Love Problem Solution", img: loveProblemImg },
  { title: "Love Marriage Specialist", img: loveMarriageImg },
  { title: "Marriage Problem Solution", img: husbandWifeImg },
  { title: "Husband Wife Problem Solution", img: familyImg },
  { title: "Family Problem Solution", img: familyImg },
  { title: "Vashikaran Specialist", img: vashikaranImg },
];

const FeaturedSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 3 },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const anim = gsap.fromTo(el.querySelector(".featured-inner")!, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
    return () => { anim.kill(); };
  }, []);

  return (
    <section id="love-solutions" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Featured</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          Explore Our Range of <span className="text-gold-gradient">Services</span>
        </h2>
        <div className="featured-inner relative" style={{ opacity: 0 }}>
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary/80 text-cream flex items-center justify-center hover:bg-secondary transition-colors -ml-2 md:-ml-5"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary/80 text-cream flex items-center justify-center hover:bg-secondary transition-colors -mr-2 md:-mr-5"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div ref={emblaRef} className="overflow-hidden mx-8">
            <div className="flex -ml-6">
              {featured.map((f, i) => (
                <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                  <div className="relative rounded-2xl overflow-hidden group cursor-default h-72 sm:h-80">
                    <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={900} />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-lg font-bold text-cream">{f.title}</h3>
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
