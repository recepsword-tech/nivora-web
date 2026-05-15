"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { projects } from "@/data/projects";

const WHATSAPP_URL = "https://wa.me/905321234567";

const categories = [
  "Tümü",
  "Komple Tadilat",
  "Banyo Yenileme",
  "Mutfak Yenileme",
  "Ticari Alan",
];

export default function ProjelerClient() {
  const [active, setActive] = useState("Tümü");

  const filtered =
    active === "Tümü" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        label="Projeler"
        title="Seçili Dönüşüm Örnekleri"
        subtitle="Farklı kapsam ve mekânlarda gerçekleştirdiğimiz konsept dönüşüm örnekleri. Her proje planlı süreç, doğru malzeme ve ince işçilikle tamamlandı."
      />

      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs font-heading font-bold tracking-wide border transition-colors duration-200 ${
                  active === cat
                    ? "bg-antrasit text-white border-antrasit"
                    : "bg-white text-taupe border-bej hover:border-antrasit hover:text-antrasit"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group bg-white overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-antrasit/80 px-3 py-1">
                    <span className="text-gold text-[10px] font-heading tracking-widest uppercase">
                      Konsept Örnek
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[10px] text-gold font-heading font-bold tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-xs text-taupe font-sans">
                    <span>{project.area}</span>
                    <span>·</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-taupe/70 font-sans mt-10 text-center">
            Tüm görseller konsept dönüşüm örneklerini temsil eder. Gerçek proje
            fotoğrafları için WhatsApp üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-antrasit py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
            Projenizi Planlayalım
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
            Benzer Bir Dönüşüm İstiyorsunuz?
          </h2>
          <p className="text-white/60 font-sans text-sm lg:text-base leading-relaxed mb-8">
            Projenizi değerlendirmek için keşif randevusu alın. Ücretsiz ve
            bağlayıcı değildir.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-gold font-heading text-sm tracking-wide hover:bg-gold hover:text-antrasit transition-all duration-200"
          >
            <WhatsAppIcon />
            WhatsApp&apos;tan Teklif Alın
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
