import { Phone } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:+919157974529"
      className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-[var(--shadow-elevated)] hover:scale-110 transition-transform"
      aria-label="Call now"
    >
      <Phone size={22} />
    </a>
    <a
      href="https://wa.me/919157974529?text=Hello%20Astro%20Dipak%20Shastriji,%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.464-2.003A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.769-1.853l-.485-.287-5.024 1.188 1.226-4.893-.317-.502A13.269 13.269 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.161-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.261 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.361-2.214-2.759-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.323s1.427 3.854 1.626 4.12c.199.266 2.808 4.288 6.804 6.014.951.411 1.693.656 2.272.839.954.303 1.823.26 2.51.158.766-.114 2.354-.962 2.687-1.891.333-.929.333-1.726.233-1.891-.1-.166-.365-.266-.763-.465z"/>
      </svg>
    </a>
  </div>
);

export default FloatingButtons;
