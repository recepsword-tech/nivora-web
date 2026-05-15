"use client";

import { useState } from "react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const faqs = [
  {
    q: "Banyo tadilatı kaç gün sürer?",
    a: "Banyonun büyüklüğüne ve işin kapsamına göre değişir. Standart bir banyoda tesisat + tam kaplama + donanım için genellikle 10–18 iş günü planlıyoruz. Yalnızca kaplama değişimi gereken işler daha kısa sürebilir. Başlamadan önce size net bir takvim sunulur.",
  },
  {
    q: "Fiyat nasıl belirlenir?",
    a: "Keşif ziyaretinde banyonuzu yerinde değerlendiriyor, ölçüm alıyor ve kapsamı netleştiriyoruz. Buna göre işçilik ve malzeme ayrı ayrı belirtilen yazılı bir teklif hazırlıyoruz. Teklifiniz onaylanmadan işe başlamıyoruz.",
  },
  {
    q: "Malzemeyi siz mi temin ediyorsunuz?",
    a: "İsterseniz malzeme alımını biz üstleniriz; isterseniz siz seçip teslim edersiniz. Her iki seçenek de mümkündür ve teklifte netleştirilir. Malzeme seçiminde yönlendirme ve öneri sunabiliyoruz.",
  },
  {
    q: "Eski tesisat mutlaka yenileniyor mu?",
    a: "Her projede tesisat durumu yerinde incelenir. Eskimiş, çatlak veya standart dışı borular tespit edilirse değiştirmeyi öneririz. Kullanılabilir durumdaysa bu bilgiyi şeffaf biçimde paylaşırız. Gereksiz tesisat yenileme yapmayız.",
  },
  {
    q: "Evde otururken banyo tadilatı yapılır mı?",
    a: "Evinizde tek banyo varsa bu durum işin planlanmasını etkiler. Bazı durumlarda çalışma süresini kısaltarak konaklamaya devam edilebilir; bazı durumlarda geçici düzenlemeler öneririz. Keşif sırasında durumunuza özgü bir plan çıkarırız.",
  },
  {
    q: "İşçilik kaynaklı sorunlarda destek veriyor musunuz?",
    a: "Evet. Tamamlanan tüm banyo işlerimizde 1 yıl işçilik garantisi sunuyoruz. Teslim sonrası oluşan işçilik kaynaklı herhangi bir sorun için müdahale ediyoruz. Bu kapsam sözleşmede yazılı olarak yer alır.",
  },
];

export default function BanyoFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <AnimatedSection>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 mb-12">
            <div className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Merak Edilenler
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit leading-tight">
                Sıkça Sorulan Sorular
              </h2>
              <div className="w-10 h-px bg-gold mt-5" />
              <p className="text-xs text-taupe font-sans leading-relaxed mt-5">
                Aklınızdaki sorular burada yoksa WhatsApp üzerinden doğrudan
                sorabilirsiniz.
              </p>
            </div>

            {/* FAQ items */}
            <div className="flex-1 divide-y divide-bej">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    >
                      <span className="font-heading text-sm font-bold text-antrasit leading-snug group-hover:text-gold transition-colors duration-200">
                        {faq.q}
                      </span>
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
                      <p className="pb-5 text-sm text-taupe leading-relaxed font-sans pr-10">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
