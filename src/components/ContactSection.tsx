import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const content = el.querySelector(".contact-content");
    const anim = gsap.fromTo(content, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: content, start: "top 80%" },
    });
    return () => anim.kill();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`);
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
            Contact <span className="text-gold-gradient">Me</span>
          </h2>
        </div>
        <div className="contact-content grid md:grid-cols-2 gap-12" style={{ opacity: 0 }}>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-secondary">Phone</p>
                <a href="tel:+919999999999" className="font-body text-muted-foreground hover:text-primary transition-colors">+91 99999 99999</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-secondary">Email</p>
                <p className="font-body text-muted-foreground">astroguruji@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-secondary">Location</p>
                <p className="font-body text-muted-foreground">Mumbai, India</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <input
              type="text" placeholder="Your Name" required
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <input
              type="tel" placeholder="Your Phone" required
              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <textarea
              placeholder="Your Message" rows={4} required
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button type="submit" className="w-full gold-gradient text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)]">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
