"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";

const WHATSAPP_URL = "https://wa.me/905321234567";

const faqs = [
  {
    question: "Keşif ücretsiz mi?",
    answer:
      "Evet, ilk keşif ziyareti tamamen ücretsizdir. Mekânı yerinde inceleyip ölçüm yapıyor, size detaylı ve şeffaf bir teklif sunuyoruz.",
  },
  {
    question: "Tadilat süreci ne kadar sürer?",
    answer:
      "Süre projenin kapsamına göre değişir. Banyo yenileme için ortalama 7–15 gün, mutfak yenileme için 10–20 gün, 2+1 bir dairenin komple tadilatı için 30–45 gün planlamaktayız. Başlamadan önce size net bir zaman çizelgesi sunulur.",
  },
  {
    question: "Malzemeleri siz mi temin ediyorsunuz?",
    answer:
      "İsterseniz malzeme tedarikini biz üstleniyoruz, isterseniz siz seçip bize teslim edebilirsiniz. Her iki seçenek için de net fiyatlandırma yapıyoruz. Malzeme tercihlerinizi keşif sırasında konuşabiliriz.",
  },
  {
    question: "Sözleşme yapılıyor mu?",
    answer:
      "Evet, tüm projelerimizde kapsamı, süreyi ve ödeme planını net biçimde belirten yazılı bir sözleşme imzalıyoruz. Sözleşme dışı talep ya da sürpriz maliyet olmaz.",
  },
  {
    question: "Tadilat sonrası garanti var mı?",
    answer:
      "Tamamlanan işçilik için 1 yıl garanti veriyoruz. Herhangi bir işçilik kaynaklı sorun oluşması durumunda en kısa sürede müdahale edilir.",
  },
  {
    question: "Çalışma saatleri nelerdir?",
    answer:
      "Hafta içi 08:00–18:00 saatleri arasında çalışıyoruz. Proje kapsamına ve aciliyete göre cumartesi çalışma planlanabilir.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Ankara genelinde hizmet veriyoruz: Çankaya, Keçiören, Mamak, Yenimahalle, Etimesgut, Sincan, Altındağ, Gölbaşı, Pursaklar ve Çubuk başta olmak üzere tüm ilçelere ulaşıyoruz.",
  },
  {
    question: "Tadilat sürecinde evde oturabilir miyim?",
    answer:
      "Komple tadilatlarda çalışma alanının büyüklüğüne bağlıdır. Tek oda veya banyo/mutfak gibi kısmi tadilatlar çoğunlukla evde konaklamayla yürütülebilir. Projenize özel bir plan hazırlayabilmek için keşif sırasında konuşalım.",
  },
  {
    question: "Ödeme nasıl yapılıyor?",
    answer:
      "Ödeme planı sözleşmede net olarak belirlenir. Genellikle başlangıç, ara ve teslim olmak üzere üç aşamada ödeme yapılır. Farklı planlama seçenekleri için görüşebiliriz.",
  },
];

export default function SSSClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <>
      <PageHero
        label="SSS"
        title="Sık Sorulan Sorular"
        subtitle="Tadilat süreciyle ilgili merak ettiğiniz her şey burada. Yanıtını bulamazsanız WhatsApp üzerinden ulaşabilirsiniz."
      />

      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-0">
            {[left, right].map((col, colIdx) => (
              <div key={colIdx}>
                {col.map((faq, localIdx) => {
                  const globalIndex = colIdx === 0 ? localIdx : half + localIdx;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div
                      key={faq.question}
                      className="border-b border-bej last:border-b-0"
                    >
                      <button
                        onClick={() => toggle(globalIndex)}
                        aria-expanded={isOpen}
                        className="w-full flex items-start justify-between gap-4 py-5 text-left"
                      >
                        <span className="font-heading text-sm font-bold text-antrasit leading-snug">
                          {faq.question}
                        </span>
                        <span
                          className={`flex-shrink-0 w-5 h-5 rounded-full border border-bej flex items-center justify-center text-taupe transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
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
                        <p className="pb-5 text-sm text-taupe leading-relaxed font-sans pr-8">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
            Daha Fazla Soru?
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit mb-4">
            Aklınızdaki Her Şeyi Sorun
          </h2>
          <p className="text-taupe font-sans text-sm lg:text-base leading-relaxed mb-8">
            Projenize özel sorular için WhatsApp üzerinden ulaşabilir ya da
            ücretsiz keşif randevusu alabilirsiniz.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
          >
            <WhatsAppIcon />
            WhatsApp&apos;tan Sorun
          </a>
        </div>
      </section>
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
