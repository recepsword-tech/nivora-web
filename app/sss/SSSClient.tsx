"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { waUrl } from "@/data/contact";

const WHATSAPP_URL = waUrl("general");

type Kategori =
  | "Tümü"
  | "Fiyat & Teklif"
  | "Keşif & Süreç"
  | "Malzeme & İşçilik"
  | "Banyo & Mutfak"
  | "Teslimat & Destek";

const kategoriler: Kategori[] = [
  "Tümü",
  "Fiyat & Teklif",
  "Keşif & Süreç",
  "Malzeme & İşçilik",
  "Banyo & Mutfak",
  "Teslimat & Destek",
];

type FAQ = { kategori: Kategori; soru: string; cevap: string };

const faqs: FAQ[] = [
  {
    kategori: "Fiyat & Teklif",
    soru: "Tadilat fiyatı nasıl belirlenir?",
    cevap:
      "Fiyat; alanın mevcut durumu, yapılacak iş kapsamı, kullanılacak malzeme seviyesi ve teslim süresine göre belirlenir. Keşif sonrası kapsamı daha net konuşur, yazılı teklif sunarız.",
  },
  {
    kategori: "Fiyat & Teklif",
    soru: "Telefonla net fiyat verebilir misiniz?",
    cevap:
      "Fotoğraf ve ön bilgiyle yaklaşık yönlendirme yapılabilir; fakat net fiyat için işin yerinde görülmesi ve kapsamın belirlenmesi gerekir.",
  },
  {
    kategori: "Fiyat & Teklif",
    soru: "En uygun fiyatlı çözümü sunuyor musunuz?",
    cevap:
      "Nivora'nın amacı en ucuz işi yapmak değil, doğru işi doğru kapsamla teslim etmektir. Her bütçeye aynı sonucu vaat etmeyiz; her bütçeye en doğru çözümü şeffaf şekilde sunarız.",
  },
  {
    kategori: "Keşif & Süreç",
    soru: "Keşif süreci nasıl ilerliyor?",
    cevap:
      "Önce ihtiyacınızı dinleriz, mümkünse fotoğraf isteriz. Ardından yerinde keşif planlanır, yapılacak iş kapsamı ve malzeme seviyesi netleştirilir.",
  },
  {
    kategori: "Keşif & Süreç",
    soru: "Keşif ücretli mi?",
    cevap:
      "Keşif süreci işin kapsamına, bölgeye ve talebe göre planlanır. Ön görüşmede bu konuda net bilgi verilir.",
  },
  {
    kategori: "Keşif & Süreç",
    soru: "Tadilat süreci nasıl takip ediliyor?",
    cevap:
      "İşe başlamadan önce yapılacak işler ve uygulama sırası netleştirilir. Süreç boyunca müşteriyle iletişimde kalınır.",
  },
  {
    kategori: "Malzeme & İşçilik",
    soru: "Malzemeyi siz mi temin ediyorsunuz?",
    cevap:
      "Müşterinin tercihine göre malzeme temininde destek olabiliriz veya müşteri kendi malzemesini tercih edebilir. Kullanılacak malzeme seviyesi işe başlamadan önce konuşulur.",
  },
  {
    kategori: "Malzeme & İşçilik",
    soru: "Hangi kalite seviyelerinde çalışıyorsunuz?",
    cevap:
      "Ekonomik, fiyat-performans ve premium çözüm seviyeleri sunulabilir. Burada önemli olan beklenti, bütçe ve kullanım amacına göre doğru çözümü belirlemektir.",
  },
  {
    kategori: "Malzeme & İşçilik",
    soru: "İşçilik garantisi veriyor musunuz?",
    cevap:
      "İşçilik kaynaklı konularda işimizin arkasında durur, teslim sonrası müşterimizi yalnız bırakmayız. Kullanıcı hatası, malzeme hatası ve işçilik konusu ayrıca değerlendirilir.",
  },
  {
    kategori: "Banyo & Mutfak",
    soru: "Banyo tadilatı kaç gün sürer?",
    cevap:
      "Banyonun mevcut durumu, tesisat ihtiyacı, seramik uygulaması ve malzeme hazırlığına göre değişir. Keşif sonrası daha net süre verilir.",
  },
  {
    kategori: "Banyo & Mutfak",
    soru: "Mutfak tadilatı kaç gün sürer?",
    cevap:
      "Dolap, tezgâh, tesisat, elektrik ve zemin gibi kapsamlar süreyi belirler. Mevcut durum incelendikten sonra süreç planlanır.",
  },
  {
    kategori: "Banyo & Mutfak",
    soru: "Evde otururken banyo veya mutfak tadilatı yapılabilir mi?",
    cevap:
      "İşin kapsamına göre mümkündür; ancak konfor, temizlik ve kullanım düzeni açısından süreç baştan planlanmalıdır.",
  },
  {
    kategori: "Teslimat & Destek",
    soru: "İş bitiminde kontrol yapıyor musunuz?",
    cevap:
      "Teslim öncesi yapılan işler kontrol edilir. Eksik veya düzeltilmesi gereken detaylar varsa teslim sürecinde ele alınır.",
  },
  {
    kategori: "Teslimat & Destek",
    soru: "Tadilat sonrası destek veriyor musunuz?",
    cevap:
      "İşçilik kaynaklı konularda müşterimizi yalnız bırakmayız. Teslim sonrası iletişim desteği sağlarız.",
  },
  {
    kategori: "Teslimat & Destek",
    soru: "Hangi bölgelere hizmet veriyorsunuz?",
    cevap:
      "Ankara genelinde hizmet veriyoruz. Çankaya, İncek, Ümitköy, Gölbaşı, Etimesgut, Eryaman, Batıkent, Yenimahalle ve çevresi öncelikli hizmet bölgelerimiz arasındadır.",
  },
  {
    kategori: "Teslimat & Destek",
    soru: "WhatsApp'tan fotoğraf göndererek bilgi alabilir miyim?",
    cevap:
      "Evet. Tadilat yapılacak alanın fotoğraflarını WhatsApp üzerinden göndererek ön değerlendirme talep edebilirsiniz.",
  },
];

const guvenKartlari = [
  {
    baslik: "Net Kapsam",
    desc: "Yapılacak işler başlamadan önce yazılı olarak netleştirilir, kapsam dışı sürpriz olmaz.",
  },
  {
    baslik: "Şeffaf Teklif",
    desc: "İşçilik ve malzeme ayrı ayrı belirtilir. Ne için ne kadar ödediğinizi bilirsiniz.",
  },
  {
    baslik: "Temiz Uygulama",
    desc: "Doğru hazırlık, doğru malzeme ve disiplinli uygulama — görünen sonucun arkasında bunlar var.",
  },
  {
    baslik: "Teslim Sonrası Destek",
    desc: "İşçilik kaynaklı konularda müşterimizi yalnız bırakmayız. Teslim sonrası iletişim desteği sağlarız.",
  },
];

export default function SSSClient() {
  const [aktifKategori, setAktifKategori] = useState<Kategori>("Tümü");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtrelenmis =
    aktifKategori === "Tümü"
      ? faqs
      : faqs.filter((f) => f.kategori === aktifKategori);

  const handleKategori = (k: Kategori) => {
    setAktifKategori(k);
    setOpenIndex(null);
  };

  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="bg-antrasit pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-sans">
              SSS
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Sıkça Sorulan
              <br />
              Sorular
            </h1>
            <p className="text-sm text-white/60 font-sans leading-relaxed mb-10 max-w-lg">
              Tadilat sürecine başlamadan önce aklınızdaki fiyat, süre,
              malzeme, keşif ve teslimat sorularını netleştirin.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Şeffaf Teklif", "Planlı Süreç", "Malzeme Açıklığı", "Teslim Sonrası Destek"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 border border-white/20 text-white/70 text-xs font-sans tracking-wide"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Kategori Filtreleri + Accordion ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Filtreler */}
            <div className="flex flex-wrap gap-2 mb-12">
              {kategoriler.map((k) => (
                <button
                  key={k}
                  onClick={() => handleKategori(k)}
                  className={`px-4 py-2 text-xs font-heading font-bold tracking-wide transition-colors duration-200 ${
                    aktifKategori === k
                      ? "bg-antrasit text-white"
                      : "bg-white border border-bej text-taupe hover:border-gold/50 hover:text-antrasit"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="max-w-3xl">
              {filtrelenmis.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={`${faq.kategori}-${i}`} className="border-b border-bej">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span className="flex-shrink-0 mt-0.5 px-2 py-0.5 bg-white border border-bej text-[10px] text-taupe font-sans tracking-wide hidden sm:inline-block">
                          {faq.kategori}
                        </span>
                        <span className="font-heading text-sm font-bold text-antrasit leading-snug group-hover:text-gold transition-colors duration-200">
                          {faq.soru}
                        </span>
                      </div>
                      <span
                        className={`flex-shrink-0 w-6 h-6 rounded-full border border-bej flex items-center justify-center text-taupe transition-all duration-200 ${
                          isOpen
                            ? "rotate-45 border-gold text-gold bg-gold/5"
                            : "group-hover:border-gold/50"
                        }`}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <line x1="5" y1="1" x2="5" y2="9" />
                          <line x1="1" y1="5" x2="9" y2="5" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-5 text-sm text-taupe leading-relaxed font-sans pr-10 sm:pl-[calc(theme(spacing.2)+theme(spacing.2)+80px)]">
                        {faq.cevap}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 3. Güven Açıklaması ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Yaklaşımımız
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit leading-tight mb-6">
                  Tadilatta Belirsizliği Azaltmak İçin Süreci Baştan Netleştiriyoruz
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-taupe font-sans leading-relaxed">
                  Tadilat sürecinde müşterinin en büyük endişesi belirsizliktir.
                  Bu yüzden Nivora&apos;da amaç; yapılacak işi, kullanılacak
                  malzemeyi, uygulama sürecini ve teslim beklentisini mümkün
                  olduğunca açık şekilde konuşmaktır.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guvenKartlari.map((kart) => (
                  <div key={kart.baslik} className="bg-krem p-6">
                    <div className="w-8 h-px bg-gold mb-4" />
                    <p className="font-heading text-sm font-bold text-antrasit mb-2">
                      {kart.baslik}
                    </p>
                    <p className="text-xs text-taupe font-sans leading-relaxed">
                      {kart.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 4. Final CTA ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Sorunuz mu Var?
                </p>
                <h2 className="font-heading text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  Aklınızdaki Soruyu
                  <br />
                  Bize Yazın
                </h2>
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  Tadilat sürecinizle ilgili netleştirmek istediğiniz bir konu
                  varsa WhatsApp üzerinden bize ulaşın. Fotoğraf göndererek ön
                  değerlendirme de talep edebilirsiniz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  WhatsApp&apos;tan Yaz
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 font-heading text-sm tracking-wide hover:border-white/50 hover:text-white transition-colors duration-200"
                >
                  Ücretsiz Keşif Talep Et
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
