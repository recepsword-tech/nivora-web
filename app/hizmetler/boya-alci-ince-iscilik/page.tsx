import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/motion/AnimatedSection";
import BoyaFAQ from "./BoyaFAQ";

export const metadata: Metadata = {
  title: "Ankara Boya, Alçı ve İnce İşçilik | Nivora",
  description:
    "Nivora, Ankara'da boya badana, alçı, alçıpan, asma tavan ve ince işçilik hizmetlerinde temiz ve detay odaklı uygulama sunar.",
};

import { waUrl } from "@/data/contact";
const WHATSAPP_URL = waUrl("boya");

const badges = [
  "Temiz Yüzeyler",
  "Detaylı İşçilik",
  "Düzenli Çalışma",
  "Estetik Bitişler",
];

const hizmetler = [
  {
    icon: <PaintIcon />,
    title: "Boya Badana",
    desc: "Astar, ara kat ve son kat dahil sistemli boya uygulaması. Mat, ipek mat ve yarı parlak seçenekler; renk danışmanlığı dahil.",
  },
  {
    icon: <WallIcon />,
    title: "Alçı Sıva",
    desc: "İnce saten alçı ile düzgün, kaygan ve uzun ömürlü duvar yüzeyleri. Mevcut çatlak ve kabarmalar önceden giderilir.",
  },
  {
    icon: <PanelIcon />,
    title: "Alçıpan Uygulamaları",
    desc: "Bölme duvar, kutu, niş ve dekoratif panel yapımı. Doğru montaj, alçıpan bandı ve dolgu ile pürüzsüz birleşim.",
  },
  {
    icon: <CeilingIcon />,
    title: "Asma Tavan",
    desc: "Alçıpan asma tavan sistemleri, spot ızgara ve aydınlatma boşlukları. Doğru aksesuar seçimi ve sağlam taşıyıcı montajı.",
  },
  {
    icon: <MoldingIcon />,
    title: "Dekoratif Çıta ve Duvar Detayları",
    desc: "Kartonpiyer, tavan silmesi, köşe çıtası ve dekoratif bordür uygulamaları. Mekânın estetiğini tamamlayan ince dokunuşlar.",
  },
  {
    icon: <SmoothIcon />,
    title: "Yüzey Düzeltme",
    desc: "Zımpara, dolgu, sertleştirici astar ve gerektiğinde alçı dolgu ile pürüzlü, çukurlu veya hasarlı yüzeylerin ıslahı.",
  },
  {
    icon: <CornerIcon />,
    title: "Köşe ve Birleşim Detayları",
    desc: "Duvar-tavan köşeleri, kapı pervazı bitişleri ve zemin-duvar geçişlerinde temiz çizgi ve sızdırmaz birleşim.",
  },
  {
    icon: <TransitionIcon />,
    title: "Tavan, Duvar ve Zemin Geçişleri",
    desc: "Farklı malzeme ve renk alanları arasındaki geçişlerde bantlama, maske ve uygulama hassasiyeti ile temiz sınır çizgisi.",
  },
];

const surecAdimlar = [
  {
    n: "01",
    title: "Ön Görüşme",
    desc: "Kapsam, beklenti ve zaman çerçevesi genel hatlarıyla belirlenir.",
  },
  {
    n: "02",
    title: "Alan İnceleme",
    desc: "Yüzeyler, hacimleri ve mevcut durum yerinde değerlendirilir.",
  },
  {
    n: "03",
    title: "Yüzey & İhtiyaç Analizi",
    desc: "Hangi hazırlık adımlarının gerektiği, sorunlu noktalar tespit edilir.",
  },
  {
    n: "04",
    title: "Yazılı Teklif",
    desc: "İşçilik ve malzeme ayrı belirtilen şeffaf teklif sunulur. Onay olmadan başlamıyoruz.",
  },
  {
    n: "05",
    title: "Uygulama",
    desc: "Hazırlık → astar → uygulama sırasıyla ilerler; her gün alan temiz tutulur.",
  },
  {
    n: "06",
    title: "Son Kontrol & Teslim",
    desc: "Her yüzey kontrol edilir, eksikler giderilir. Alan temizlenerek teslim edilir.",
  },
];

const yaklasilar = [
  {
    icon: <PrepIcon />,
    title: "Yüzey Hazırlığı",
    desc: "Dolgu, zımpara, astar ve gerektiğinde düzeltme alçısı. Hazırlık atlanmadan uygulama yapılmaz; kalıcılık buradan başlar.",
  },
  {
    icon: <MaterialIcon />,
    title: "Malzeme Seçimi",
    desc: "Oda koşulu, nem durumu ve yüzey tipine göre doğru ürün seçilir. Birbirini destekleyen malzeme ailesi kullanılır.",
  },
  {
    icon: <FinishIcon />,
    title: "Son Kat ve Bitiş Kalitesi",
    desc: "Son kata kadar sabırlı ve titiz uygulama. Fırça izi, leke veya düzensizlik bırakmayan temiz bitiş hedeflenir.",
  },
];

export default function BoyaAlciPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative bg-antrasit pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 min-h-[540px]">
            <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                Hizmetler / Boya, Alçı ve İnce İşçilik
              </p>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ankara Boya, Alçı ve İnce İşçilik Hizmetleri
              </h1>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-md mb-8">
                Nivora, duvar, tavan, yüzey ve dekoratif uygulamalarda temiz
                çalışma, düzgün yüzey hazırlığı ve detay odaklı işçilik
                anlayışıyla hizmet verir.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  WhatsApp&apos;tan Fotoğraf Gönder
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gold/50 text-gold font-heading text-sm tracking-wide hover:border-gold hover:bg-gold/5 transition-all duration-200"
                >
                  Ücretsiz Keşif Talep Et
                </a>
              </div>

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

              <div className="w-10 h-px bg-gold mt-10" />
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0">
                <Image
                  src="/images/services/boya-alci-ince-iscilik.png"
                  alt="Ankara boya alçı ve ince işçilik hizmetleri"
                  fill
                  priority
                  className="object-cover opacity-60"
                  sizes="44vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-antrasit via-antrasit/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ── 2. NELER YAPIYORUZ ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Kapsam
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight">
                  Bu Hizmette
                  <br />
                  Neler Yapıyoruz?
                </h2>
                <div className="w-10 h-px bg-gold mt-5" />
              </div>
              <p className="text-sm text-taupe font-sans max-w-xs leading-relaxed lg:text-right">
                Yüzey hazırlığından son kata; her adım özenle yürütülür.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {hizmetler.map((h) => (
                <div
                  key={h.title}
                  className="group bg-white p-7 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                    <span className="text-gold">{h.icon}</span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-2.5 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-xs text-taupe leading-relaxed font-sans">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 3. İNCE İŞÇİLİK NEDEN ÖNEMLİ ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Anlayış
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  İyi İşçilik, Detaylarda Kendini Belli Eder
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  Boya ve alçı işlerinde kalite yalnızca renk seçiminden ibaret
                  değildir. Yüzey hazırlığı, köşe geçişleri, tavan-duvar
                  birleşimleri, zımpara, astar ve son kat uygulama kalitesi
                  işin gerçek sonucunu belirler. Nivora&apos;da amaç; göze
                  temiz gelen, uzun süre düzgün duran ve mekânın estetiğini
                  tamamlayan sonuçlar üretmektir.
                </p>
              </div>

              {/* Visual accent */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Yüzey Hazırlığı", sub: "Kalıcılığın temeli" },
                  { label: "Köşe İşçiliği", sub: "Detayda fark" },
                  { label: "Doğru Astar", sub: "Tutunma ve renk" },
                  { label: "Temiz Bitiş", sub: "Göz zevkine hitap" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-white/10 p-5 hover:border-gold/30 transition-colors duration-200"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mb-3" />
                    <p className="font-heading text-sm font-bold text-white mb-1">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-white/40 font-sans">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 4. SÜREÇ ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Süreç
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Nivora Çalışma Süreci
              </h2>
              <div className="w-10 h-px bg-gold mx-auto mb-5" />
              <p className="text-sm text-taupe font-sans max-w-sm mx-auto leading-relaxed">
                Her adım başlamadan bilinir. Sürpriz yok, belirsizlik yok.
              </p>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block relative">
              <div
                aria-hidden
                className="absolute border-t border-dashed border-bej"
                style={{
                  top: "24px",
                  left: "calc(100% / 12)",
                  right: "calc(100% / 12)",
                }}
              />
              <div className="grid grid-cols-6 gap-4">
                {surecAdimlar.map((s) => (
                  <div key={s.n} className="relative text-center group">
                    <div className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full border-2 border-bej bg-white group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200 flex items-center justify-center">
                      <span className="font-heading text-xs font-bold text-gold/70 group-hover:text-gold transition-colors duration-200">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="font-heading text-xs font-bold text-antrasit mb-2 leading-tight px-1">
                      {s.title}
                    </h3>
                    <p className="text-[10px] text-taupe leading-relaxed font-sans px-1">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden space-y-0">
              {surecAdimlar.map((s, i) => (
                <div key={s.n} className="relative flex gap-5 pb-8">
                  {i < surecAdimlar.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute left-5 top-12 bottom-0 w-px border-l border-dashed border-bej"
                    />
                  )}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-bej bg-white flex items-center justify-center">
                    <span className="font-heading text-[10px] font-bold text-gold">
                      {s.n}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-sm font-bold text-antrasit mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-sm text-taupe leading-relaxed font-sans">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 5. MALZEME & YAKLAŞIM ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Yaklaşım
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Doğru Sonuç, Doğru Hazırlıkla Başlar
              </h2>
              <div className="w-10 h-px bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14 mb-10">
              {yaklasilar.map((y) => (
                <div key={y.title} className="bg-white p-8 border border-bej">
                  <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center mb-6">
                    <span className="text-gold">{y.icon}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-antrasit mb-3">
                    {y.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed font-sans">
                    {y.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-antrasit font-heading font-bold">
              Temiz görünen işin arkasında{" "}
              <span className="text-gold">
                doğru hazırlık, doğru malzeme ve sabırlı uygulama vardır.
              </span>
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 6. DETAY GÖRSELİ ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative overflow-hidden">
                <div className="relative h-72 lg:h-96">
                  <Image
                    src="/images/services/boya-alci-ince-iscilik.png"
                    alt="İnce işçilik ve yüzey detayı"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-antrasit/90 px-3 py-1.5 border border-gold/30">
                    <span className="text-gold text-[10px] font-heading tracking-widest uppercase">
                      Detay Uygulama
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Uygulama Anlayışı
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  İnce İşçilik ve Yüzey Detayı
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-white/55 font-sans leading-relaxed mb-6">
                  Her yüzey, her köşe ve her geçiş noktası özenle tamamlanır.
                  Görsel, Nivora&apos;nın detay odaklı uygulama yaklaşımını
                  yansıtmaktadır.
                </p>
                <p className="text-xs text-white/30 font-sans italic border-l-2 border-gold/20 pl-4">
                  Bu görsel uygulama anlayışını temsil etmek amacıyla
                  kullanılmıştır; belirli bir tamamlanan projeyi göstermemektedir.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { v: "1–8", l: "Gün Aralığı" },
                    { v: "Yazılı", l: "Teklif & Kapsam" },
                    { v: "Temiz", l: "Teslim Garantisi" },
                  ].map((s) => (
                    <div key={s.l} className="border-l border-gold/25 pl-4">
                      <p className="font-heading text-lg font-bold text-gold mb-0.5">
                        {s.v}
                      </p>
                      <p className="text-[10px] text-white/45 font-sans leading-tight">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 7. FAQ ── */}
      <BoyaFAQ />

      {/* ── 8. FINAL CTA ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Hazır Olduğunuzda
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  Temiz ve Düzgün Bir İşçilik
                  <br />
                  İstiyorsanız, Önce
                  <br />
                  <span className="text-gold">Detayları Konuşalım</span>
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-white/55 font-sans text-sm leading-relaxed max-w-md">
                  Boya, alçı veya dekoratif uygulama ihtiyacınızı bize iletin.
                  Alanın mevcut durumuna göre en doğru çözümü birlikte
                  netleştirelim.
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
                  Yazılı teklif · Temiz çalışma · İşçilik garantisi
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}

/* ── Icons ── */
function PaintIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M19 3H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
      <path d="M12 11v4M8 11v2M16 11v2" />
      <path d="M10 19h4l1 2H9l1-2z" />
    </svg>
  );
}
function WallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="15" x2="22" y2="15" />
      <line x1="8" y1="9" x2="8" y2="15" />
      <line x1="16" y1="9" x2="16" y2="15" />
    </svg>
  );
}
function PanelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="9" height="20" rx="1" />
      <rect x="13" y="2" width="9" height="20" rx="1" />
    </svg>
  );
}
function CeilingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="4" rx="1" />
      <line x1="6" y1="7" x2="6" y2="14" />
      <line x1="12" y1="7" x2="12" y2="14" />
      <line x1="18" y1="7" x2="18" y2="14" />
      <rect x="4" y="14" width="16" height="3" rx="0.5" />
    </svg>
  );
}
function MoldingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 6h20" />
      <path d="M2 10 Q6 6 12 10 Q18 14 22 10" />
      <path d="M2 18h20" />
    </svg>
  );
}
function SmoothIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12h18M3 6h18M3 18h18" />
      <circle cx="19" cy="6" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function CornerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3h18v18H3z" />
      <path d="M3 3l5 5M21 3l-5 5M3 21l5-5M21 21l-5-5" />
    </svg>
  );
}
function TransitionIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M2 6h8v12H2z" />
      <path d="M14 6h8v12h-8z" />
    </svg>
  );
}
function PrepIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  );
}
function MaterialIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}
function FinishIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
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
