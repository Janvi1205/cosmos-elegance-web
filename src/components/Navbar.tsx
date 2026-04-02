import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Services", "Love Solutions", "Testimonials", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const textColor = scrolled ? "text-foreground/70 hover:text-primary" : "text-cream/70 hover:text-cream";
  const logoColor = scrolled ? "text-secondary" : "text-cream";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("home")} className={`font-heading text-2xl font-bold ${logoColor} transition-colors`}>
          Astro <span className="text-gold-gradient">Dipak Shastriji</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`font-body text-sm font-medium ${textColor} transition-colors duration-200`}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="gold-gradient text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book Now
            </button>
          </li>
        </ul>

        <button className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"} transition-colors`} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left font-body text-base text-foreground/80 hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="gold-gradient text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full w-full"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
