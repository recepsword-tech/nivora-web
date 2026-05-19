import { contact, waUrl } from "@/data/contact";

const WHATSAPP_URL = waUrl("general");
const PHONE = contact.phoneDisplay;

export default function CTASection() {
  return (
    <section id="iletisim" className="bg-antrasit overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-24 lg:py-32">
          {/* Left: Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-sans">
              Hemen Başlayalım
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Evinizi Yenilemek İçin İlk Adımı Atın
            </h2>
            <div className="w-10 h-px bg-gold mb-7" />
            <p className="text-white/50 text-base leading-relaxed font-sans max-w-md">
              Ücretsiz keşif ile ihtiyaçlarınızı değerlendirelim, sizin için
              en doğru çözümü birlikte planlayalım. Hiçbir yükümlülük yok.
            </p>

            {/* Contact info */}
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={contact.phoneHref}
                data-gtm-event="click_phone"
                data-gtm-location="cta_section"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm font-sans"
              >
                <PhoneIcon />
                {PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm-event="click_whatsapp"
                data-gtm-location="cta_section"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm font-sans"
              >
                <WhatsAppIcon />
                WhatsApp&apos;tan yazın
              </a>
              <div className="flex items-center gap-3 text-white/40 text-sm font-sans">
                <MapPinIcon />
                Çankaya · İncek · Ümitköy · Gölbaşı · Ankara Geneli
              </div>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-4 max-w-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm-event="click_whatsapp"
                data-gtm-location="cta_section"
                data-gtm-label="kesif_talep"
                className="flex items-center justify-between gap-4 px-7 py-5 bg-gold text-antrasit font-sans hover:bg-white transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <CalendarIcon />
                  <div>
                    <p className="text-sm font-bold tracking-wide leading-none mb-1">
                      Ücretsiz Keşif Talep Et
                    </p>
                    <p className="text-xs text-antrasit/60 leading-none">
                      Hızlı dönüş, net çözüm
                    </p>
                  </div>
                </div>
                <ArrowIcon />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm-event="click_whatsapp"
                data-gtm-location="cta_section"
                data-gtm-label="whatsapp_yaz"
                className="flex items-center justify-between gap-4 px-7 py-5 border border-white/20 text-white font-sans hover:border-white transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <WhatsAppIcon />
                  <div>
                    <p className="text-sm font-bold tracking-wide leading-none mb-1">
                      WhatsApp&apos;tan Yaz
                    </p>
                    <p className="text-xs text-white/40 leading-none">
                      Fotoğraf gönderebilirsiniz
                    </p>
                  </div>
                </div>
                <ArrowIcon />
              </a>
            </div>

            {/* Decorative element */}
            <div className="mt-12 flex items-center gap-4 text-white/20">
              <div className="w-8 h-px bg-white/20" />
              <span className="font-heading text-xs tracking-widest uppercase text-white/20">
                Nivora
              </span>
              <div className="w-8 h-px bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
