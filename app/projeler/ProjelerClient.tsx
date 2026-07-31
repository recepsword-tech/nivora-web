"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { waUrl } from "@/data/contact";

const WHATSAPP_URL = waUrl("photo");
const BASE = "/images/Nivora-referans-gorseller";

const POSTERS = "/images/video-posters";

type MediaItem = {
  id: string;
  type: "video" | "image";
  src: string;
  poster?: string;
  title: string;
  filterKey: string;
  categoryLabel: string;
};

const media: MediaItem[] = [
  { id: "b1",  type: "video", src: `${BASE}/banyo-tadilati.mp4`,          poster: `${POSTERS}/banyo-tadilati.jpg`,          title: "Banyo Yenileme",      filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b2",  type: "video", src: `${BASE}/banyo-tadilati-2.mp4`,        poster: `${POSTERS}/banyo-tadilati-2.jpg`,        title: "Banyo Yenileme",      filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b3",  type: "image", src: `${BASE}/banyo-tadilati-6.jpeg`,                                                         title: "Banyo Detayı",        filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b4",  type: "video", src: `${BASE}/banyo-tadilati-7.mp4`,        poster: `${POSTERS}/banyo-tadilati-7.jpg`,        title: "Banyo Yenileme",      filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b5",  type: "video", src: `${BASE}/banyo-tadilati-8.mp4`,        poster: `${POSTERS}/banyo-tadilati-8.jpg`,        title: "Banyo Yenileme",      filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b6",  type: "video", src: `${BASE}/banyo-tadilati-9.mp4`,        poster: `${POSTERS}/banyo-tadilati-9.jpg`,        title: "Banyo Yenileme",      filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b7",  type: "video", src: `${BASE}/banyo-tadilati-11.mp4`,       poster: `${POSTERS}/banyo-tadilati-11.jpg`,       title: "Banyo Yenileme",      filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b8",  type: "video", src: `${BASE}/banyo-tadilati-12.mp4`,       poster: `${POSTERS}/banyo-tadilati-12.jpg`,       title: "Banyo Yenileme",      filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b9",  type: "video", src: `${BASE}/komple-banyo-tadilati.mp4`,   poster: `${POSTERS}/komple-banyo-tadilati.jpg`,   title: "Komple Banyo",        filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "b10", type: "video", src: `${BASE}/tuvalet-banyo-tadilati.mp4`,  poster: `${POSTERS}/tuvalet-banyo-tadilati.jpg`,  title: "Tuvalet & Banyo",     filterKey: "Banyo",   categoryLabel: "Banyo Yenileme" },
  { id: "e1",  type: "image", src: `${BASE}/ev-ic-dizayn-merdiven-3.jpeg`,                                                  title: "Merdiven Dizayn",     filterKey: "Ev",      categoryLabel: "Ev & İç Dizayn" },
  { id: "e2",  type: "video", src: `${BASE}/ev-ic-dizayn-merdiven-4.mp4`, poster: `${POSTERS}/ev-ic-dizayn-merdiven-4.jpg`, title: "Merdiven Uygulaması", filterKey: "Ev",      categoryLabel: "Ev & İç Dizayn" },
  { id: "e3",  type: "video", src: `${BASE}/ev-ic-dizayn-tas-doseme.mp4`, poster: `${POSTERS}/ev-ic-dizayn-tas-doseme.jpg`, title: "Taş Döşeme",          filterKey: "Ev",      categoryLabel: "Ev & İç Dizayn" },
  { id: "e4",  type: "video", src: `${BASE}/ev-ici-dizayn.mp4`,           poster: `${POSTERS}/ev-ici-dizayn.jpg`,           title: "İç Mekan Dizayn",     filterKey: "Ev",      categoryLabel: "Ev & İç Dizayn" },
  { id: "e5",  type: "image", src: `${BASE}/somine.jpeg`,                                                                   title: "Şömine Uygulaması",   filterKey: "Ev",      categoryLabel: "Ev & İç Dizayn" },
  { id: "v1",  type: "video", src: `${BASE}/balkon-dizayn-4.mp4`,         poster: `${POSTERS}/balkon-dizayn-4.jpg`,         title: "Balkon Dizayn",       filterKey: "Balkon",  categoryLabel: "Balkon & Veranda" },
  { id: "v2",  type: "video", src: `${BASE}/balkon-tadilati-1.mp4`,       poster: `${POSTERS}/balkon-tadilati-1.jpg`,       title: "Balkon Tadilat",      filterKey: "Balkon",  categoryLabel: "Balkon & Veranda" },
  { id: "v3",  type: "video", src: `${BASE}/veranda-tadilati.mp4`,        poster: `${POSTERS}/veranda-tadilati.jpg`,        title: "Veranda Yenileme",    filterKey: "Balkon",  categoryLabel: "Balkon & Veranda" },
  { id: "t1",  type: "video", src: `${BASE}/dukkan-ic-dizayn.mp4`,        poster: `${POSTERS}/dukkan-ic-dizayn.jpg`,        title: "Dükkan İç Dizayn",   filterKey: "Ticari",  categoryLabel: "Ticari Alan" },
  { id: "t2",  type: "video", src: `${BASE}/dukkan-tadilati.mp4`,         poster: `${POSTERS}/dukkan-tadilati.jpg`,         title: "Dükkan Tadilat",      filterKey: "Ticari",  categoryLabel: "Ticari Alan" },
  { id: "t3",  type: "image", src: `${BASE}/kafe-ici.jpeg`,                                                                 title: "Kafe İç Mekan",       filterKey: "Ticari",  categoryLabel: "Ticari Alan" },
  { id: "t4",  type: "image", src: `${BASE}/kafe-ici-3.jpeg`,                                                               title: "Kafe Uygulama",       filterKey: "Ticari",  categoryLabel: "Ticari Alan" },
  { id: "t5",  type: "image", src: `${BASE}/kafe-ici-ince-detay-1.jpeg`,                                                    title: "Kafe İnce Detay",     filterKey: "Ticari",  categoryLabel: "Ticari Alan" },
];

const filters = [
  { key: "Tümü",   label: "Tümü" },
  { key: "Banyo",  label: "Banyo" },
  { key: "Ev",     label: "Ev & İç Dizayn" },
  { key: "Balkon", label: "Balkon & Veranda" },
  { key: "Ticari", label: "Ticari Alan" },
];

const yaklasilar = [
  { n: "01", title: "Önce ihtiyacı anlarız",          desc: "Her mekân ve her bütçe farklıdır. Yapılacak işi, kullanım amacını ve beklentiyi baştan dinleriz." },
  { n: "02", title: "Kapsamı ve malzemeyi netleştiririz", desc: "İşçilik ve malzeme ayrı belirtilen yazılı teklif hazırlanır. Onayınız olmadan başlamayız." },
  { n: "03", title: "Temiz ve planlı uygularız",      desc: "Aşamalı takvim, düzenli çalışma alanı ve ilerlemenin fotoğrafla paylaşılması standart sürecimizdir." },
  { n: "04", title: "Son kontrolle teslim ederiz",    desc: "Her detay kontrol edilir. Alan temizlenerek, eksiksiz ve kullanıma hazır şekilde teslim edilir." },
];

export default function ProjelerClient() {
  const [active, setActive] = useState("Tümü");
  const filtered = active === "Tümü" ? media : media.filter((m) => m.filterKey === active);

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="bg-antrasit pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
              Referans İşler
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Tamamlanan İşlerimizden
            </h1>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Banyo yenileme, iç mekan dizayn, balkon &amp; veranda ve ticari alan tadilat
              çalışmalarımızdan gerçek görseller ve videolar.
            </p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ── 2. FİLTRE + GALERİ ── */}
      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => {
              const count = f.key === "Tümü" ? media.length : media.filter((m) => m.filterKey === f.key).length;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`px-4 py-2 text-xs font-heading font-bold tracking-wide border transition-colors duration-200 ${
                    active === f.key
                      ? "bg-antrasit text-white border-antrasit"
                      : "bg-white text-taupe border-bej hover:border-antrasit/40 hover:text-antrasit"
                  }`}
                >
                  {f.label}
                  <span className={`ml-1.5 text-[10px] font-sans font-normal ${active === f.key ? "text-gold" : "text-taupe/50"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div key={item.id} className="group overflow-hidden bg-white">
                <div className="relative h-56 overflow-hidden bg-antrasit/10">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="px-4 py-3 flex items-center justify-between border-t border-bej">
                  <span className="text-[10px] text-gold font-heading font-bold tracking-widest uppercase">
                    {item.categoryLabel}
                  </span>
                  {item.type === "video" && (
                    <span className="flex items-center gap-1 text-[10px] text-taupe/60 font-sans">
                      <PlayIcon />
                      Video
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PROJE YAKLAŞIMI ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
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
                <div key={y.n} className="bg-krem p-7 border border-bej">
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

      {/* ── 4. FINAL CTA ── */}
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

function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
