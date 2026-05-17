"use client";

import { useState } from "react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const faqs = [
  {
    q: "Mağaza tadilatı kaç gün sürer?",
    a: "Alanın büyüklüğüne ve kapsama göre değişir. Küçük bir butik veya güzellik salonu için 5–10 iş günü, daha kapsamlı bir showroom veya kafe dönüşümü 2–4 hafta sürebilir. Başlamadan önce size aşamalı bir takvim sunulur.",
  },
  {
    q: "İşletme açıkken tadilat yapılabilir mi?",
    a: "Duruma göre mümkündür. Bazı alanlarda akşam veya hafta sonu çalışma planı yapılabilir; bazı kapsamlı işlerde ise alanın geçici olarak kapatılması gerekebilir. Keşifte işletmenizin koşullarına göre en az aksaklık yaratacak planı birlikte oluştururuz.",
  },
  {
    q: "Kafe ve güzellik salonu gibi alanlarda çalışıyor musunuz?",
    a: "Evet. Kafe, güzellik salonu, butik mağaza, showroom, ofis karşılama alanı ve küçük ticari alanlar kapsamımız içindedir. Her alanın ihtiyacı farklıdır; bunu keşif sırasında birlikte değerlendiriyoruz.",
  },
  {
    q: "Raf, banko ve dekoratif alanlar dahil mi?",
    a: "İstenirse evet. Raf sistemi, satış bankosu ve sergileme alanı düzenlemesi kapsamdaysa teklife dahil edilir. Montaj ve ölçüye göre imalat gerektiren işlerde tedarik ve uygulama birlikte yürütülür.",
  },
  {
    q: "Aydınlatma ve elektrik işleri yapılır mı?",
    a: "Evet. Mağaza ve ticari alanlarda aydınlatma planlaması, spot ve ray sistemleri, vitrin ve sergileme ışıkları ile gerekli elektrik altyapısı düzenlemeleri kapsamımız içindedir.",
  },
  {
    q: "Fiyat nasıl belirlenir?",
    a: "Keşif ziyaretinde alanı yerinde değerlendiriyor, ölçüm alıyor ve kapsamı netleştiriyoruz. İşçilik ve malzeme ayrı ayrı belirtilen yazılı bir teklif hazırlıyoruz. Teklifiniz onaylanmadan işe başlamıyoruz.",
  },
  {
    q: "Malzemeyi siz mi temin ediyorsunuz?",
    a: "İki seçenek mümkündür. Malzeme alımını biz üstlenebiliriz ya da siz seçip teslim edebilirsiniz. Her iki durumda da kullanılacak malzeme teklifte önceden netleştirilir. Malzeme seçiminde yönlendirme sunabiliyoruz.",
  },
  {
    q: "İş tesliminden sonra destek veriyor musunuz?",
    a: "Evet. Tamamlanan ticari alan işlerimizde işçilik kaynaklı sorunlar için teslim sonrası destek sağlıyoruz. Bu kapsam sözleşmede yazılı olarak yer alır.",
  },
];

export default function MagazaFAQ() {
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
