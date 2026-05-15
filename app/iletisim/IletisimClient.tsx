"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";

const WHATSAPP_URL = "https://wa.me/905321234567";
const PHONE = "0532 123 45 67";
const EMAIL = "info@nivora.com.tr";

const bolgeler = [
  "Çankaya", "Keçiören", "Mamak", "Yenimahalle",
  "Etimesgut", "Sincan", "Altındağ", "Gölbaşı",
  "Pursaklar", "Çubuk",
];

export default function IletisimClient() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Merhaba, ben ${form.name}.\n\nTelefon: ${form.phone}\n\nMesajım: ${form.message}`
    );
    window.open(`https://wa.me/905321234567?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHero
        label="İletişim"
        title="Bize Ulaşın"
        subtitle="Ücretsiz keşif randevusu almak veya projeniz hakkında bilgi almak için iletişime geçin."
      />

      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8 font-sans">
                İletişim Bilgileri
              </p>

              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border border-bej flex items-center justify-center">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-antrasit mb-1 tracking-wide">
                      WhatsApp
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-taupe font-sans hover:text-gold transition-colors"
                    >
                      {PHONE}
                    </a>
                    <p className="text-xs text-taupe/70 font-sans mt-1">
                      En hızlı yanıt için WhatsApp tercih edin
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border border-bej flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-antrasit mb-1 tracking-wide">
                      Telefon
                    </p>
                    <a
                      href={`tel:+90${PHONE.replace(/\s/g, "")}`}
                      className="text-sm text-taupe font-sans hover:text-gold transition-colors"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border border-bej flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-antrasit mb-1 tracking-wide">
                      E-Posta
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm text-taupe font-sans hover:text-gold transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border border-bej flex items-center justify-center">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-antrasit mb-1 tracking-wide">
                      Çalışma Saatleri
                    </p>
                    <p className="text-sm text-taupe font-sans">
                      Hafta içi 08:00 – 18:00
                    </p>
                    <p className="text-xs text-taupe/70 font-sans mt-1">
                      Cumartesi randevuyla
                    </p>
                  </div>
                </div>
              </div>

              {/* Hizmet Bölgeleri */}
              <div className="mt-12">
                <p className="font-heading text-xs font-bold text-antrasit mb-4 tracking-wide">
                  Hizmet Bölgeleri
                </p>
                <div className="flex flex-wrap gap-2">
                  {bolgeler.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 bg-white border border-bej text-xs text-taupe font-sans"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10">
              <h2 className="font-heading text-lg font-bold text-antrasit mb-2">
                Mesaj Gönderin
              </h2>
              <p className="text-xs text-taupe font-sans mb-8">
                Formu doldurun, WhatsApp üzerinden devam edelim.
              </p>

              {sent ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D57"
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <p className="font-heading text-sm font-bold text-antrasit mb-2">
                    WhatsApp açıldı
                  </p>
                  <p className="text-xs text-taupe font-sans">
                    Mesajınız hazırlandı. Göndermek için WhatsApp&apos;ta onaylayın.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-3 border border-bej bg-krem text-sm text-antrasit font-sans placeholder:text-taupe/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="05xx xxx xx xx"
                      className="w-full px-4 py-3 border border-bej bg-krem text-sm text-antrasit font-sans placeholder:text-taupe/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Proje hakkında kısa bilgi verin..."
                      className="w-full px-4 py-3 border border-bej bg-krem text-sm text-antrasit font-sans placeholder:text-taupe/50 focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                  >
                    <WhatsAppIcon />
                    WhatsApp&apos;tan Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-0">
          <div className="h-64 bg-bej/30 flex items-center justify-center border border-bej">
            <div className="text-center">
              <p className="text-taupe font-sans text-xs mb-1">Ankara, Türkiye</p>
              <p className="text-taupe/60 font-sans text-xs">
                Harita için keşif randevusunda konum paylaşılır
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#B08D57">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="1.8">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
