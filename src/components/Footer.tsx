import { Heart } from "lucide-react";

const footerLinks = ["Home", "About", "Services", "Love Solutions", "Testimonials", "Contact"];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/\s/g, "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto section-padding py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-heading text-2xl font-bold mb-3">Astro <span className="text-gold-gradient">Dipak Shastriji</span></p>
            <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">
              Trusted Vedic Astrologer helping individuals find clarity and solutions through the wisdom of the stars.
            </p>
          </div>
          <div>
            <p className="font-heading text-base font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)} className="font-body text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-base font-semibold mb-4">Contact Info</p>
            <div className="font-body text-sm text-secondary-foreground/60 space-y-2">
              <p>+91 91579 74529</p>
              <p>dkshastriji22@gmail.com</p>
              <p className="leading-relaxed">2666, Vastaghelji pole, Halimki Khidaki Road, Near Metro Station, Shahpur Ahmedabad, 380001</p>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-secondary-foreground/50 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="fill-primary text-primary" /> Astro Dipak Shastriji © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
