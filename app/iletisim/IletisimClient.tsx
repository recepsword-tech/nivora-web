"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { contact, waUrl, waMessages } from "@/data/contact";

const WHATSAPP_NUMBER = contact.whatsappNumber;
const WHATSAPP_URL = waUrl("photo");
const WHATSAPP_QUICK_MESSAGE = waMessages.photo;
const PHONE = contact.phoneDisplay;
const EMAIL = contact.email;

const hizmetSecenekleri = [
  "Banyo Yenileme",
  "Mutfak Yenileme",
  "Anahtar Teslim Tadilat",
  "Boya & Alçı / İnce İşçilik",
  "Mağaza & Ticari Alan",
  "Diğer / Henüz Karar Vermedim",
];

const bolgeler = [
  "Çankaya",
  "İncek",
  "Ümitköy",
  "Gölbaşı",
  "Etimesgut",
  "Eryaman",
  "Batıkent",
  "Yenimahalle",
  "Keçiören",
  "Mamak",
  "Sincan",
  "Ankara Geneli",
];

const iletisimKartlari = [
  {
    icon: <WhatsAppIcon />,
    baslik: "WhatsApp",
    deger: PHONE,
    aciklama: "Fotoğraf gönderin, hızlı ön değerlendirme alın",
    href: `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_QUICK_MESSAGE)}`,
    hrefLabel: "WhatsApp'ta Yaz",
    external: true,
  },
  {
    icon: <PhoneIcon />,
    baslik: "Telefon",
    deger: PHONE,
    aciklama: "Hafta içi 09:00–19:00 arasında arayabilirsiniz",
    href: contact.phoneHref,
    hrefLabel: "Ara",
    external: false,
  },
  {
    icon: <MailIcon />,
    baslik: "E-Posta",
    deger: EMAIL,
    aciklama: "Detaylı sorularınız için e-posta tercih edebilirsiniz",
    href: contact.emailHref,
    hrefLabel: "E-Posta Gönder",
    external: false,
  },
  {
    icon: <MapPinIcon />,
    baslik: "Hizmet Bölgeleri",
    deger: "Ankara Geneli",
    aciklama: "Çankaya, Gölbaşı, Etimesgut, Eryaman ve çevre ilçeler",
    href: null,
    hrefLabel: null,
    external: false,
  },
];

export default function IletisimClient() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    ilce: "",
    hizmet: "",
    aciklama: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Tadilat/dekorasyon hizmeti hakkında bilgi almak istiyorum. Fotoğraf paylaşarak ön değerlendirme alabilir miyim?\n\nAd Soyad: ${form.name}\nTelefon: ${form.phone}\nİlçe: ${form.ilce}\nHizmet Türü: ${form.hizmet}\nAçıklama: ${form.aciklama}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="bg-antrasit pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-sans">
              İletişim & Keşif
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Projenizi Birlikte
              <br />
              Değerlendirelim
            </h1>
            <p className="text-sm text-white/60 font-sans leading-relaxed mb-10 max-w-lg">
              WhatsApp üzerinden fotoğraf paylaşarak başlayabilirsiniz. Keşif
              ziyaretinde alanı birlikte değerlendiriyor, yazılı ve şeffaf bir
              teklif sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Hızlı Ön Görüşme",
                "WhatsApp ile Fotoğraf Gönderimi",
                "Keşif Planlama",
                "Şeffaf Teklif Süreci",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 border border-white/20 text-white/70 text-xs font-sans tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. İletişim Kartları ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Bize Ulaşın
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
                Hangi Kanalı Tercih Ederseniz
              </h2>
              <div className="w-10 h-px bg-gold mt-5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {iletisimKartlari.map((kart) => (
                <div
                  key={kart.baslik}
                  className="bg-white p-6 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 bg-krem flex items-center justify-center flex-shrink-0">
                    {kart.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-heading text-xs font-bold text-antrasit tracking-wide mb-1">
                      {kart.baslik}
                    </p>
                    <p className="text-sm text-antrasit font-sans font-medium mb-2">
                      {kart.deger}
                    </p>
                    <p className="text-xs text-taupe font-sans leading-relaxed">
                      {kart.aciklama}
                    </p>
                  </div>
                  {kart.href && kart.hrefLabel && (
                    <a
                      href={kart.href}
                      target={kart.external ? "_blank" : undefined}
                      rel={kart.external ? "noopener noreferrer" : undefined}
                      className="text-xs font-heading font-bold text-gold hover:text-antrasit transition-colors tracking-wide"
                    >
                      {kart.hrefLabel} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 3. Keşif Formu ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Sol: Açıklama */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Keşif Talebi
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit leading-tight mb-6">
                  Formu Doldurun,
                  <br />
                  WhatsApp'tan Devam Edelim
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-taupe font-sans leading-relaxed mb-8">
                  Formu doldurduğunuzda bilgileriniz otomatik olarak WhatsApp
                  mesajına dönüştürülür. Onayladığınızda mesajınız iletilir —
                  herhangi bir kişisel veri sunucuya gönderilmez.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      num: "01",
                      baslik: "Formu doldurun",
                      desc: "Ad, telefon, ilçe ve hizmet türünü belirtin",
                    },
                    {
                      num: "02",
                      baslik: "WhatsApp açılır",
                      desc: "Mesajınız hazır hâlde karşınıza gelir, onaylayın",
                    },
                    {
                      num: "03",
                      baslik: "Fotoğraf ekleyin",
                      desc: "Alanın fotoğraflarını aynı sohbette paylaşabilirsiniz",
                    },
                    {
                      num: "04",
                      baslik: "Keşif planlanır",
                      desc: "Size uygun bir zaman belirlenir, keşif ücretsizdir",
                    },
                  ].map((adim) => (
                    <div key={adim.num} className="flex gap-4 items-start">
                      <span className="font-heading text-xs font-bold text-gold flex-shrink-0 mt-0.5">
                        {adim.num}
                      </span>
                      <div>
                        <p className="font-heading text-sm font-bold text-antrasit mb-0.5">
                          {adim.baslik}
                        </p>
                        <p className="text-xs text-taupe font-sans leading-relaxed">
                          {adim.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ: Form */}
              <div className="bg-krem p-8 lg:p-10">
                {sent ? (
                  <div className="py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#B08D57"
                        strokeWidth="2"
                      >
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </div>
                    <p className="font-heading text-base font-bold text-antrasit mb-3">
                      WhatsApp açıldı
                    </p>
                    <p className="text-sm text-taupe font-sans leading-relaxed mb-6">
                      Mesajınız hazırlandı. Göndermek için WhatsApp&apos;ta
                      onaylayın. Fotoğraflarınızı aynı sohbette
                      paylaşabilirsiniz.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs font-heading font-bold text-gold hover:text-antrasit transition-colors tracking-wide"
                    >
                      Yeni Mesaj Gönder
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                        Ad Soyad <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Adınız Soyadınız"
                        className="w-full px-4 py-3 border border-bej bg-white text-sm text-antrasit font-sans placeholder:text-taupe/40 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                        Telefon <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="05xx xxx xx xx"
                        className="w-full px-4 py-3 border border-bej bg-white text-sm text-antrasit font-sans placeholder:text-taupe/40 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                        İlçe / Semt
                      </label>
                      <input
                        type="text"
                        name="ilce"
                        value={form.ilce}
                        onChange={handleChange}
                        placeholder="Örn. Çankaya, Gölbaşı, Etimesgut…"
                        className="w-full px-4 py-3 border border-bej bg-white text-sm text-antrasit font-sans placeholder:text-taupe/40 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                        Hizmet Türü <span className="text-gold">*</span>
                      </label>
                      <select
                        name="hizmet"
                        required
                        value={form.hizmet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-bej bg-white text-sm text-antrasit font-sans focus:outline-none focus:border-gold transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Hizmet türünü seçin
                        </option>
                        {hizmetSecenekleri.map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-antrasit mb-2 tracking-wide">
                        Kısa Açıklama
                      </label>
                      <textarea
                        name="aciklama"
                        rows={3}
                        value={form.aciklama}
                        onChange={handleChange}
                        placeholder="Proje hakkında kısa bilgi verin…"
                        className="w-full px-4 py-3 border border-bej bg-white text-sm text-antrasit font-sans placeholder:text-taupe/40 focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                    >
                      <WhatsAppIcon />
                      WhatsApp&apos;tan Gönder
                    </button>

                    <p className="text-xs text-taupe/60 font-sans text-center leading-relaxed">
                      Verileriniz sunucuya gönderilmez. Mesaj doğrudan
                      WhatsApp&apos;a iletilir.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 4. WhatsApp Hızlı Mesaj ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Hızlı Başlangıç
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
                  Form doldurmak istemiyorsanız,
                  <br />
                  doğrudan yazın
                </h2>
                <p className="text-sm text-white/60 font-sans leading-relaxed mb-8">
                  WhatsApp&apos;ta aşağıdaki mesajı göndererek başlayabilirsiniz.
                  Fotoğraf ekleyin, alanı birlikte değerlendirelim.
                </p>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_QUICK_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  WhatsApp&apos;ta Yaz
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-sans">
                  Hazır Mesaj
                </p>
                <p className="text-sm text-white/80 font-sans leading-relaxed italic">
                  &ldquo;{WHATSAPP_QUICK_MESSAGE}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 font-sans">
                    Bu mesajı kopyalayabilir veya yukarıdaki butona tıklayarak
                    otomatik gönderebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 5. Hizmet Bölgeleri ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
              <div className="lg:w-64 flex-shrink-0 mb-10 lg:mb-0">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Hizmet Alanı
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit leading-tight">
                  Ankara Genelinde
                  Hizmet Veriyoruz
                </h2>
                <div className="w-10 h-px bg-gold mt-5 mb-6" />
                <p className="text-xs text-taupe font-sans leading-relaxed">
                  Aşağıda listelenen ilçe ve semtlerde keşif gerçekleştiriyoruz.
                  Bölgenizi listede göremiyorsanız WhatsApp&apos;tan sorun.
                </p>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-3">
                  {bolgeler.map((b) => (
                    <span
                      key={b}
                      className="px-4 py-2 bg-white border border-bej text-sm text-antrasit font-sans tracking-wide"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 6. Çalışma Saatleri & Konum ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Çalışma Saatleri */}
              <div className="bg-krem p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <ClockIcon />
                  </div>
                  <p className="font-heading text-xs font-bold text-antrasit tracking-wide">
                    Çalışma Saatleri
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { gun: "Pazartesi – Cuma", saat: "09:00 – 19:00" },
                    { gun: "Cumartesi", saat: "09:00 – 17:00" },
                    { gun: "Pazar", saat: "Kapalı" },
                  ].map((row) => (
                    <div
                      key={row.gun}
                      className="flex justify-between items-center py-3 border-b border-bej last:border-0"
                    >
                      <span className="text-sm text-taupe font-sans">
                        {row.gun}
                      </span>
                      <span
                        className={`font-heading text-sm font-bold ${row.saat === "Kapalı" ? "text-taupe/50" : "text-antrasit"}`}
                      >
                        {row.saat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-bej">
                  <p className="text-xs text-taupe font-sans leading-relaxed">
                    Mesai saatleri dışında WhatsApp&apos;tan mesaj
                    bırakabilirsiniz. İlk fırsatta dönüş yapıyoruz.
                  </p>
                </div>
              </div>

              {/* Konum Placeholder */}
              <div className="bg-krem p-8 lg:p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <MapPinIcon />
                  </div>
                  <p className="font-heading text-xs font-bold text-antrasit tracking-wide">
                    Konum
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-heading text-lg font-bold text-antrasit mb-2">
                      Ankara, Türkiye
                    </p>
                    <p className="text-sm text-taupe font-sans leading-relaxed mb-6">
                      Merkezi ofisimiz Çankaya&apos;dadır. Keşif ziyaretleri
                      için alanınıza geliyoruz — konum paylaşımı keşif
                      randevusunda yapılır.
                    </p>
                  </div>

                  <div className="h-40 bg-white border border-bej flex items-center justify-center">
                    <div className="text-center">
                      <MapPinIcon />
                      <p className="text-xs text-taupe font-sans mt-3">
                        Ankara, Türkiye
                      </p>
                      <p className="text-xs text-taupe/50 font-sans mt-1">
                        Keşif randevusunda konum paylaşılır
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 7. Süreç Özeti ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Nasıl İlerliyor?
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
                İletişimden Teslimata
              </h2>
              <div className="w-10 h-px bg-gold mx-auto mt-5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  baslik: "İletişim",
                  desc: "WhatsApp veya form üzerinden ulaşın, fotoğraf paylaşın",
                },
                {
                  num: "02",
                  baslik: "Keşif Ziyareti",
                  desc: "Alanı yerinde değerlendiriyor, ölçüm alıyoruz. Keşif ücretsizdir.",
                },
                {
                  num: "03",
                  baslik: "Yazılı Teklif",
                  desc: "İşçilik ve malzeme ayrı ayrı belirtilen şeffaf teklif sunuyoruz",
                },
                {
                  num: "04",
                  baslik: "Uygulama & Teslim",
                  desc: "Onaylanan planda çalışıyor, teslimatta son kontrolü birlikte yapıyoruz",
                },
              ].map((adim) => (
                <div key={adim.num} className="bg-white p-6">
                  <span className="font-heading text-2xl font-bold text-gold/30 mb-4 block">
                    {adim.num}
                  </span>
                  <p className="font-heading text-sm font-bold text-antrasit mb-2">
                    {adim.baslik}
                  </p>
                  <p className="text-xs text-taupe font-sans leading-relaxed">
                    {adim.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 8. Final CTA ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Başlamak İçin
                </p>
                <h2 className="font-heading text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  İlk adımı atın —
                  <br />
                  gerisini birlikte planlayalım.
                </h2>
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  Keşif ücretsiz, teklif yazılı ve şeffaf. Onaylamadan
                  başlamıyoruz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_QUICK_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  WhatsApp&apos;ta Yaz
                </a>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 font-heading text-sm tracking-wide hover:border-white/50 hover:text-white transition-colors duration-200"
                >
                  Hizmetleri İncele
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
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
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B08D57"
      strokeWidth="1.8"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B08D57"
      strokeWidth="1.8"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B08D57"
      strokeWidth="1.8"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B08D57"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
