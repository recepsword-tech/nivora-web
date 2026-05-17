"use client";

import { useState } from "react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const faqs = [
  {
    q: "Boya badana kaç gün sürer?",
    a: "Alanın büyüklüğüne ve kapsamına göre değişir. Tek oda boya işi 1–2 gün, standart bir daire ortalama 5–8 iş günü sürer. Alçı veya yüzey hazırlığı dahilse bu süre uzayabilir. Başlamadan önce size net bir takvim sunulur.",
  },
  {
    q: "Alçı ve boya öncesi yüzey hazırlığı yapıyor musunuz?",
    a: "Evet, yüzey hazırlığı işin en kritik adımıdır. Çatlak dolgusu, zımpara, astar ve gerekirse düzeltme alçısı uygulaması yapılır. Hazırlığı atlatarak doğrudan boya sürmeyiz; bu sonucun kalıcılığını doğrudan etkiler.",
  },
  {
    q: "Hangi boya markaları kullanılıyor?",
    a: "Genellikle Filli Boya, Marshall veya Dyo gibi yerleşik markaların ürünleri tercih edilir. Malzeme seçimi teklif aşamasında netleştirilir. Farklı bir marka ya da ürün tercih ederseniz buna göre de çalışabiliriz.",
  },
  {
    q: "Evde eşya varken boya yapılabilir mi?",
    a: "Mümkündür, ancak alanın örtülmesi ve mobilyaların taşınması gerekir. Mobilya koruma malzemeleri kullanıyoruz. Büyük eşyaların hareket ettirilemediği durumlarda çevresine özen göstererek çalışırız. Keşifte durumu birlikte değerlendiririz.",
  },
  {
    q: "Asma tavan ve dekoratif çıta uygulaması yapıyor musunuz?",
    a: "Evet. Alçıpan asma tavan, kartonpiyer çıta, tavan silmesi ve niş aydınlatma boşlukları kapsamımız içindedir. Bu işler genellikle boya öncesi tamamlanır ve entegre biçimde yürütülür.",
  },
  {
    q: "Fiyat nasıl belirlenir?",
    a: "Alan metrekaresi, mevcut yüzey durumu ve kapsama göre fiyat belirlenir. Keşif ziyaretinde alanı yerinde değerlendiriyor, yazılı teklif hazırlıyoruz. İşçilik ve malzeme ayrı ayrı belirtilir; onayınız alınmadan başlamıyoruz.",
  },
  {
    q: "İş bitiminde temizlik yapılıyor mu?",
    a: "Evet. Çalışma alanı her gün düzenli tutulur, iş bitiminde ise boya örtüleri, malzeme artıkları ve toz temizlenir. Teslimde alan kullanıma hazır bırakılır.",
  },
  {
    q: "İşçilik kaynaklı sorunlarda destek veriyor musunuz?",
    a: "Evet. Teslim sonrası oluşan işçilik kaynaklı sorunlarda (kabarmalar, çatlaklar, düşen astar gibi) müdahale ediyoruz. Bu kapsam teklif ve sözleşmede yazılı olarak yer alır.",
  },
];

export default function BoyaFAQ() {
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
