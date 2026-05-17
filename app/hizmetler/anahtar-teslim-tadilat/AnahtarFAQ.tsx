"use client";

import { useState } from "react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const faqs = [
  {
    q: "Anahtar teslim tadilat ne demektir?",
    a: "Anahtar teslim tadilat; keşiften planlamaya, malzeme seçiminden uygulamaya, son kontrol ve teslime kadar tüm sürecin tek bir firma tarafından koordineli biçimde yürütülmesi demektir. Müşterinin ayrı ayrı ustayla uğraşmasına gerek kalmaz; tüm sorumluluk tek muhatapla yürütülür.",
  },
  {
    q: "Komple ev tadilatı kaç gün sürer?",
    a: "Evin büyüklüğüne, kapsamına ve mevcut durumuna göre değişir. Standart bir daire için genellikle 4–8 hafta planlıyoruz. Tadilat başlamadan önce size aşamalı bir takvim sunulur. Bu takvim ilerlemeyle birlikte şeffaf biçimde paylaşılır.",
  },
  {
    q: "Fiyat nasıl belirlenir?",
    a: "Keşif ziyaretinde evinizi yerinde değerlendiriyor, ölçüm alıyor ve kapsamı netleştiriyoruz. İşçilik ve malzeme ayrı ayrı belirtilen yazılı bir teklif hazırlıyoruz. Teklifiniz onaylanmadan işe başlamıyoruz. Onaylanan teklif kapsam dışı ek iş olmadıkça değişmez.",
  },
  {
    q: "Malzemeyi siz mi temin ediyorsunuz?",
    a: "İki seçenek mümkündür. Malzeme alımını biz üstlenebiliriz; ya da siz seçip teslim edebilirsiniz. Her iki durumda da kullanılacak malzeme teklifte önceden netleştirilir. Malzeme seçiminde yönlendirme ve öneri sunabiliyoruz.",
  },
  {
    q: "Ev boş olmadan tadilat yapılabilir mi?",
    a: "Komple tadilatta evin boş olması genellikle daha verimli ve daha kısa süreç sağlar. Kısmi tadilatlarda ise evinizde yaşarken çalışmak mümkün olabilir; bu durumda aşamalı bir plan yapılır. Keşif sırasında durumunuza özgü en doğru yaklaşımı birlikte belirleriz.",
  },
  {
    q: "Elektrik ve su tesisatı dahil mi?",
    a: "Kapsam, teklif aşamasında net olarak belirlenir. Tesisat yenileme isteğe bağlı eklenebilir. Yerinde keşifte mevcut tesisat durumu incelenir; yetersiz veya riskli altyapı tespit edilirse değiştirmeyi öneririz. Gereksiz tesisat yenileme yapmayız.",
  },
  {
    q: "İş kapsamı yazılı veriliyor mu?",
    a: "Evet. Onayladığınız teklifte yapılacak tüm işler, malzeme seviyeleri ve işçilik detayları yazılı olarak yer alır. Kapsam dışında bir iş eklenecekse önceden bilgi verilir ve onayınız alınır. Sözlü mutabakat üzerine çalışmıyoruz.",
  },
  {
    q: "İşçilik kaynaklı sorunlarda destek veriyor musunuz?",
    a: "Evet. Tamamlanan tüm işlerimizde 1 yıl işçilik garantisi sunuyoruz. Teslim sonrası oluşan işçilik kaynaklı herhangi bir sorun için müdahale ediyoruz. Bu kapsam sözleşmede yazılı olarak yer alır.",
  },
];

export default function AnahtarFAQ() {
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
