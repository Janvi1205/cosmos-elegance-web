import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 91579 74529", href: "tel:+919157974529" },
  { icon: Mail, label: "Email", value: "dkshastriji22@gmail.com", href: "mailto:dkshastriji22@gmail.com" },
  { icon: MapPin, label: "Location", value: "2666, Vastaghelji pole, Halimki Khidaki Road, Shahpur Ahmedabad, 380001" },
];

const services = [
  "Love Problem Solution",
  "Career & Business",
  "Marriage Solution",
  "Family Issues",
  "Vashikaran Specialist",
  "Health & Wellness",
  "Other Consultation"
];

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", service: "", message: "" });

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
    const msg = encodeURIComponent(`Hello Astrologer Dipak Shastriji, I would like to book a consultation.\n\nName: ${form.name}\nService: ${form.service}\nMessage: ${form.message}`);
    window.open(`https://wa.me/919157974529?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden bg-secondary">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold text-gold tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream">
            Let's Start Your <span className="text-gold-gradient">Journey</span>
          </h2>
          <p className="font-body text-cream/60 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Book Your Appointment And Get Consultation from Most promising and proficient Jyotish, Astrologer in Ahmedabad, Gujarat, India.
          </p>
        </div>

        <div className="contact-content grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start" style={{ opacity: 0 }}>
          {/* Booking Form (Primary CTA on Mobile) */}
          <form 
            onSubmit={handleSubmit} 
            className="lg:col-span-3 order-1 lg:order-2 rounded-3xl p-6 md:p-10 bg-cream/5 border border-cream/10 backdrop-blur-md space-y-6 w-full"
          >
            <h3 className="font-heading text-2xl font-bold text-cream mb-2">Book now</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text" placeholder="Your Name" required
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-cream/10 border border-cream/15 rounded-xl px-4 py-3.5 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
              <div className="relative">
                <select
                  required
                  value={form.service} 
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-cream/10 border border-cream/15 rounded-xl px-4 py-3.5 font-body text-sm text-cream appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                >
                  <option value="" disabled className="bg-secondary text-cream/40">Select Service</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-secondary text-cream">{s}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cream/40">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>
            <textarea
              placeholder="Describe your concern or question..." rows={4} required
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-cream/10 border border-cream/15 rounded-xl px-4 py-3.5 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none min-h-[120px]"
            />
            <button 
              type="submit" 
              className="w-full gold-gradient text-secondary font-body font-bold py-4 rounded-full inline-flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-gold active:scale-[0.98] transition-all shadow-lg text-lg group"
            >
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Book now
            </button>
            <p className="text-center font-body text-xs text-cream/40">Your information is 100% confidential and secure.</p>
          </form>

          {/* Contact Cards (Responsive Overflow Fix) */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-5 w-full">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur-sm overflow-hidden">
                  <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-[10px] font-bold text-gold tracking-[0.15em] mb-1 uppercase opacity-70 leading-none">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-body text-cream text-[13px] sm:text-base md:text-lg font-medium hover:text-gold transition-colors truncate block">
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-body text-cream text-[13px] sm:text-sm leading-snug break-words">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <a
                href="https://wa.me/919157974529?text=Hello%20Astrologer%20Dipak%20Shastriji,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-secondary font-body font-bold hover:bg-[#20bd5c] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] group"
              >
                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
