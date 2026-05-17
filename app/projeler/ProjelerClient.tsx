"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { waUrl } from "@/data/contact";

const WHATSAPP_URL = waUrl("photo");

const badges = [
  "Temiz Çalışma",
  "İnce İşçilik",
  "Estetik Dönüşüm",
  "Planlı Süreç",
];

type Project = {
  id: string;
  filterKey: string;
  categoryLabel: string;
  title: string;
  desc: string;
  hizmet: string;
  hizmetHref: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "banyo",
    filterKey: "Banyo",
    categoryLabel: "Banyo Yenileme",
    title: "Banyo Yenileme Konsept Dönüşümü",
    desc: "Eski ve yıpranmış bir banyonun modern, ferah ve kullanışlı bir alana dönüşüm yaklaşımını gösterir.",
    hizmet: "Banyo Yenileme Hizmeti",
    hizmetHref: "/hizmetler/banyo-yenileme",
    image: "/images/before-after/banyo-before-after.png",
  },
  {
    id: "mutfak",
    filterKey: "Mutfak",
    categoryLabel: "Mutfak Yenileme",
    title: "Mutfak Yenileme Konsept Dönüşümü",
    desc: "Mutfakta depolama, tezgâh kullanımı, aydınlatma ve modern görünümün birlikte ele alındığı dönüşüm yaklaşımı.",
    hizmet: "Mutfak Yenileme Hizmeti",
    hizmetHref: "/hizmetler/mutfak-yenileme",
    image: "/images/before-after/mutfak-before-after.png",
  },
  {
    id: "komple-ev",
    filterKey: "Komple Ev",
    categoryLabel: "Komple Ev Yenileme",
    title: "Komple Ev Yenileme Konsept Dönüşümü",
    desc: "Yaşam alanının zemin, duvar, ışık ve dekoratif detaylarla daha estetik ve kullanışlı hale getirilmesi.",
    hizmet: "Anahtar Teslim Tadilat Hizmeti",
    hizmetHref: "/hizmetler/anahtar-teslim-tadilat",
    image: "/images/before-after/komple-ev-before-after.png",
  },
  {
    id: "ticari",
    filterKey: "Ticari Alan",
    categoryLabel: "Ticari Alan",
    title: "Ticari Alan Konsept Uygulaması",
    desc: "Mağaza ve ticari alanlarda ilk izlenim, ışık, sergileme ve kullanım düzenine odaklanan uygulama yaklaşımı.",
    hizmet: "Mağaza & Ticari Alan Hizmeti",
    hizmetHref: "/hizmetler/magaza-ticari-alan",
    image: "/images/projects/konsept-magaza-uygulamasi.png",
  },
  {
    id: "ince-iscilik",
    filterKey: "İnce İşçilik",
    categoryLabel: "İnce İşçilik",
    title: "İnce İşçilik ve Yüzey Detayı",
    desc: "Köşe, yüzey, tavan-duvar birleşimi ve bitiş detaylarında temiz işçilik yaklaşımı.",
    hizmet: "Boya, Alçı ve İnce İşçilik",
    hizmetHref: "/hizmetler/boya-alci-ince-iscilik",
    image: "/images/services/boya-alci-ince-iscilik.png",
  },
];

const filterKeys = ["Tümü", "Banyo", "Mutfak", "Komple Ev", "Ticari Alan", "İnce İşçilik"];

const yaklasilar = [
  {
    n: "01",
    title: "Önce ihtiyacı anlarız",
    desc: "Her mekân ve her bütçe farklıdır. Yapılacak işi, kullanım amacını ve beklentiyi baştan dinleriz.",
  },
  {
    n: "02",
    title: "Kapsamı ve malzemeyi netleştiririz",
    desc: "İşçilik ve malzeme ayrı belirtilen yazılı teklif hazırlanır. Onayınız olmadan başlamayız.",
  },
  {
    n: "03",
    title: "Temiz ve planlı uygularız",
    desc: "Aşamalı takvim, düzenli çalışma alanı ve ilerlemenin fotoğrafla paylaşılması standart sürecimizdir.",
  },
  {
    n: "04",
    title: "Son kontrolle teslim ederiz",
    desc: "Her detay kontrol edilir. Alan temizlenerek, eksiksiz ve kullanıma hazır şekilde teslim edilir.",
  },
];

export default function ProjelerClient() {
  const [active, setActive] = useState("Tümü");

  const filtered = active === "Tümü" ? projects : projects.filter((p) => p.filterKey === active);

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="bg-antrasit pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
              Dönüşüm Örnekleri
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Seçili Dönüşüm Örnekleri
            </h1>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-white/60 font-sans text-base leading-relaxed mb-10">
              Nivora&apos;nın anahtar teslim tadilat, banyo yenileme, mutfak
              yenileme ve ticari alan uygulamalarındaki yaklaşımını gösteren
              konsept dönüşüm örneklerini inceleyin.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/25 text-[11px] text-gold/75 font-heading tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/50 inline-block" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ── 2 & 3. FİLTRE + KARTLAR ── */}
      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-14">
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 py-2 text-xs font-heading font-bold tracking-wide border transition-colors duration-200 ${
                  active === key
                    ? "bg-antrasit text-white border-antrasit"
                    : "bg-white text-taupe border-bej hover:border-antrasit/40 hover:text-antrasit"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group bg-white overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-antrasit/85 px-3 py-1 border border-gold/20">
                    <span className="text-gold text-[10px] font-heading tracking-widest uppercase">
                      Konsept Örnek
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] text-gold font-heading font-bold tracking-[0.25em] uppercase mb-2">
                    {project.categoryLabel}
                  </p>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-taupe font-sans leading-relaxed mb-5 flex-1">
                    {project.desc}
                  </p>

                  {/* Hizmet tag + CTA */}
                  <div className="border-t border-bej pt-4 flex items-center justify-between gap-3">
                    <span className="text-[10px] text-taupe/70 font-sans">
                      {project.hizmet}
                    </span>
                    <Link
                      href={project.hizmetHref}
                      className="text-[10px] font-heading font-bold text-gold tracking-wide hover:text-gold/70 transition-colors duration-200 whitespace-nowrap"
                    >
                      Hizmet Detayı →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-taupe/60 font-sans mt-10 text-center leading-relaxed">
            Tüm görseller konsept dönüşüm örnekleridir; gerçek tamamlanan
            projeleri temsil etmemektedir.
          </p>
        </div>
      </section>

      {/* ── 4. GERÇEK PROJE NOTU ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="border border-bej p-10 lg:p-14 max-w-3xl mx-auto text-center">
              <div className="w-8 h-px bg-gold mx-auto mb-8" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                Portföy Güncellemesi
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit mb-5 leading-tight">
                Gerçek Proje Fotoğraflarıyla
                <br />
                Güncellenecek
              </h2>
              <p className="text-sm text-taupe font-sans leading-relaxed max-w-xl mx-auto">
                Bu alan, Nivora&apos;nın tamamlanan işlerinden gelecek gerçek
                fotoğraflar ve müşteri yorumlarıyla düzenli olarak
                güncellenecektir. Gerçek proje görselleri eklendikçe her
                dönüşüm; lokasyon, yapılan işler, süreç ve teslim detaylarıyla
                birlikte paylaşılacaktır.
              </p>
              <div className="w-8 h-px bg-gold mx-auto mt-8" />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 5. PROJE YAKLAŞIMI ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Anlayış
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Nivora&apos;nın Proje Yaklaşımı
              </h2>
              <div className="w-10 h-px bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {yaklasilar.map((y) => (
                <div key={y.n} className="bg-white p-7 border border-bej">
                  <span className="font-heading text-2xl font-bold text-gold/30 block mb-4">
                    {y.n}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-3 leading-snug">
                    {y.title}
                  </h3>
                  <p className="text-xs text-taupe leading-relaxed font-sans">
                    {y.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 6. FINAL CTA ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Hazır Olduğunuzda
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  Benzer Bir Dönüşüm İçin
                  <br />
                  <span className="text-gold">İlk Adımı Atın</span>
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-white/55 font-sans text-sm leading-relaxed max-w-md">
                  Banyo, mutfak, komple ev veya ticari alanınız için
                  düşündüğünüz yenilemeyi bize iletin. Fotoğraf gönderin,
                  ihtiyacınızı birlikte netleştirelim.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  WhatsApp&apos;tan Fotoğraf Gönder
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-8 py-4 border border-gold/50 text-gold font-heading text-sm tracking-wide hover:border-gold hover:bg-gold/5 transition-all duration-200"
                >
                  Ücretsiz Keşif Talep Et
                </a>
                <p className="text-center text-white/30 text-xs font-sans pt-2">
                  Yazılı teklif · Net süre · 1 yıl garanti
                </p>
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
