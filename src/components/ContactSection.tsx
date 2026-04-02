import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
  { icon: Mail, label: "Email", value: "astrodipak@gmail.com", href: "mailto:astrodipak@gmail.com" },
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
  { icon: Clock, label: "Available", value: "Mon – Sun, 9 AM – 9 PM" },
];

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const anim = gsap.fromTo(el.querySelector(".contact-content")!, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
    return () => { anim.kill(); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`);
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/95" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold text-gold tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream">
            Let's Start Your <span className="text-gold-gradient">Journey</span>
          </h2>
          <p className="font-body text-cream/60 mt-4 max-w-xl mx-auto">
            Ready to transform your life? Reach out for a confidential consultation and discover what the stars hold for you.
          </p>
        </div>

        <div className="contact-content grid lg:grid-cols-5 gap-10" style={{ opacity: 0 }}>
          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-cream/5 border border-cream/10 backdrop-blur-sm">
                  <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-cream/70">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-body text-cream hover:text-gold transition-colors">{c.value}</a>
                    ) : (
                      <p className="font-body text-cream">{c.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 border-green-500/40 bg-green-500/10 text-green-400 font-body font-semibold hover:bg-green-500/20 transition-colors"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl p-8 md:p-10 bg-cream/5 border border-cream/10 backdrop-blur-sm space-y-5">
            <h3 className="font-heading text-xl font-bold text-cream mb-2">Send a Message</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text" placeholder="Your Name" required
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-cream/5 border border-cream/15 rounded-xl px-5 py-3.5 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
              <input
                type="tel" placeholder="Your Phone" required
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-cream/5 border border-cream/15 rounded-xl px-5 py-3.5 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
            </div>
            <textarea
              placeholder="Describe your concern or question..." rows={5} required
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-cream/5 border border-cream/15 rounded-xl px-5 py-3.5 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
            />
            <button type="submit" className="w-full gold-gradient text-primary-foreground font-body font-semibold px-7 py-4 rounded-xl inline-flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)] text-base">
              <Send size={18} /> Send Message
            </button>
            <p className="text-center font-body text-xs text-cream/40">Your information is 100% confidential and secure.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
