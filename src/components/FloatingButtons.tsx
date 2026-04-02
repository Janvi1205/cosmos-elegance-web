import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:+919999999999"
      className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-[var(--shadow-elevated)] hover:scale-110 transition-transform"
      aria-label="Call now"
    >
      <Phone size={22} />
    </a>
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full gold-gradient text-primary-foreground flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  </div>
);

export default FloatingButtons;
