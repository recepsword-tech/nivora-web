"use client";

import { useState } from "react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const faqs = [
  {
    q: "Mutfak tadilatı kaç gün sürer?",
    a: "Kapsamına göre değişir. Yalnızca kaplama ve aksesuar değişimi gereken işler 5–8 iş günü sürebilirken, dolap + tezgah + tesisat dahil komple bir mutfak yenileme genellikle 15–25 iş günü alır. Başlamadan önce size net bir takvim sunulur.",
  },
  {
    q: "Fiyat nasıl belirlenir?",
    a: "Keşif ziyaretinde mutfağınızı yerinde değerlendiriyor, ölçüm alıyor ve kapsamı netleştiriyoruz. Buna göre işçilik ve malzeme ayrı ayrı belirtilen yazılı bir teklif hazırlıyoruz. Teklifiniz onaylanmadan işe başlamıyoruz.",
  },
  {
    q: "Mutfak dolapları dahil mi?",
    a: "İstenirse evet. Dolap işi kapsamdaysa ölçüye göre üretim yapılır; alan, yükseklik ve kapı tipi birlikte belirlenir. Mevcut dolaplar korunacaksa bu da teklife ayrıca yansıtılır. Her iki seçenek de mümkündür.",
  },
  {
    q: "Tezgah ve evye seçimini kim yapıyor?",
    a: "Seçim tamamen size aittir. Granit, kuvars veya kompakt laminat arasında bütçenize ve kullanım alışkanlıklarınıza göre yönlendirme yaparız. Temin etmemizi isterseniz biz üstleniriz; kendiniz seçip teslim etmek isterseniz de çalışırız.",
  },
  {
    q: "Elektrik ve su tesisatı yenileniyor mu?",
    a: "Keşif sırasında mevcut tesisat durumu incelenir. Yetersiz ya da standart dışı bir altyapı tespit edilirse değiştirmeyi öneririz. Kullanılabilir durumdaysa bu bilgiyi şeffaf biçimde paylaşırız. Gereksiz tesisat yenileme yapmayız.",
  },
  {
    q: "Evde otururken mutfak tadilatı yapılabilir mi?",
    a: "Mutfak evin en yoğun kullanılan alanı olduğundan bu durum planlamayı doğrudan etkiler. Bazı aşamalarda kullanım kısıtlanabilir. Keşif sırasında durumunuza özgü bir çalışma planı çıkarırız.",
  },
  {
    q: "İşçilik kaynaklı sorunlarda destek veriyor musunuz?",
    a: "Evet. Tamamlanan tüm mutfak işlerimizde 1 yıl işçilik garantisi sunuyoruz. Teslim sonrası oluşan işçilik kaynaklı herhangi bir sorun için müdahale ediyoruz. Bu kapsam sözleşmede yazılı olarak yer alır.",
  },
];

export default function MutfakFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <AnimatedSection>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
