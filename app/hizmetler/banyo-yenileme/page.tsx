import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/motion/AnimatedSection";
import BanyoFAQ from "./BanyoFAQ";

export const metadata: Metadata = {
  title: "Ankara Banyo Tadilatı ve Yenileme | Nivora",
  description:
    "Nivora, Ankara'da banyo yenileme ve banyo tadilatı hizmetlerinde temiz çalışma, doğru malzeme, ince işçilik ve şeffaf teklif yaklaşımı sunar.",
};

import { waUrl } from "@/data/contact";
const WHATSAPP_URL = waUrl("banyo");

const badges = [
  "Temiz Çalışma",
  "İnce İşçilik",
  "Malzeme Şeffaflığı",
  "Teslim Sonrası Destek",
];

const hizmetler = [
  {
    icon: <TileIcon />,
    title: "Seramik & Fayans Uygulaması",
    desc: "Zemin ve duvar kaplama; geniş format, mozaik veya klasik boyutlarda. Derz ve köşe birleşimlerinde ince işçilik, hizalama hatası sıfır.",
  },
  {
    icon: <PipeIcon />,
    title: "Su Tesisatı Yenileme",
    desc: "Giriş-çıkış boruları, sifon, vana ve bağlantıların komple değişimi. Zemin eğimi ve su yalıtımı standart olarak uygulanır.",
  },
  {
    icon: <ShowerIcon />,
    title: "Duş Alanı / Duşakabin",
    desc: "Ölçüye göre duşakabin, rain shower veya walk-in duş alanı tasarımı ve montajı. Cam ve profil seçimleri mekâna göre yapılır.",
  },
  {
    icon: <SinkIcon />,
    title: "Lavabo & Banyo Dolabı",
    desc: "Tezgah üstü, duvar askılı veya yer montajlı lavabo; ayna, dolap ve aksesuar seçimi ve montajı. İşlevsellik ön planda.",
  },
  {
    icon: <LightIcon />,
    title: "Aydınlatma & Elektrik",
    desc: "Su sızdırmaz IP65 armatürler, niş aydınlatma, ayna üstü led bantlar ve pratik şalter-priz yerleşimi.",
  },
  {
    icon: <CeilingIcon />,
    title: "Tavan, Yalıtım ve Detay İşçiliği",
    desc: "Nem dirençli alçı tavan, asma tavan veya kartonpiyer; zemin-duvar su yalıtımı ve saten boya ile temiz bir bitiş.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ön Görüşme",
    desc: "Projeyi genel hatlarıyla değerlendiriyoruz. Kapsam, bütçe beklentisi ve zaman çerçevesi netleşiyor.",
  },
  {
    n: "02",
    title: "Fotoğraf & Bilgi Alma",
    desc: "Mevcut banyonuzun fotoğraf ve ölçülerini alıyoruz; tercih ve beklentilerinizi dinliyoruz.",
  },
  {
    n: "03",
    title: "Yerinde Keşif",
    desc: "Tesisat durumunu, zemin eğimini ve alanı yerinde inceliyoruz. Sorunlu noktaları önceden tespit ediyoruz.",
  },
  {
    n: "04",
    title: "Yazılı Teklif",
    desc: "İşçilik ve malzeme ayrı ayrı belirtilmiş, şeffaf bir teklif sunuyoruz. Onay olmadan başlamıyoruz.",
  },
  {
    n: "05",
    title: "Malzeme Seçimi",
    desc: "Seramik, armatür, dolap ve aksesuarları birlikte belirliyoruz. İstediğinizi alırsınız ya da biz temin ederiz.",
  },
  {
    n: "06",
    title: "Uygulama",
    desc: "Planlı ilerleme, her gün temiz çalışma alanı. İlerlemeyi fotoğrafla paylaşıyoruz.",
  },
  {
    n: "07",
    title: "Son Kontrol & Teslim",
    desc: "Her detayı kontrol edip teslim ediyoruz. 1 yıl işçilik garantisi sözleşmede yazılı.",
  },
];

const paketler = [
  {
    subtitle: "Ekonomik Çözüm",
    title: "Temel Yenileme",
    desc: "Mevcut tesisat korunarak görünüm yenilenir. Seramik, armatür ve aksesuar değişimi.",
    items: ["Seramik Değişimi", "Armatür Yenileme", "Aksesuar Montajı", "Tavan Boya"],
    accent: false,
  },
  {
    subtitle: "Fiyat-Performans Çözüm",
    title: "Kapsamlı Dönüşüm",
    desc: "Tesisat yenileme dahil. Hem altyapı hem yüzey yenileniyor; uzun ömürlü sonuç.",
    items: ["Tesisat Yenileme", "Tam Seramik Kaplama", "Duşakabin / Küvet", "Aydınlatma"],
    accent: true,
  },
  {
    subtitle: "Premium Çözüm",
    title: "Anahtar Teslim",
    desc: "Her detay en başından planlanır. Geniş format seramik, özel armatür, su yalıtımı dahil.",
    items: ["Su Yalıtımı", "Geniş Format Seramik", "Premium Armatür", "Mobilya & Dolap"],
    accent: false,
  },
];

const garantiler = [
  {
    title: "Su Yalıtımı Standart",
    desc: "Her banyo projesinde zemin ve duvar su yalıtımı uygulanır. Sonradan sızıntı riski minimuma indirilir.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "1 Yıl İşçilik Garantisi",
    desc: "Teslim sonrası 1 yıl boyunca işçilik kaynaklı her sorunda müdahale garantisi. Sözleşmede yazılı.",
    icon: <BadgeIcon />,
  },
  {
    title: "Şeffaf & Sabit Fiyat",
    desc: "Onaylanan teklif değişmez. Kapsam dışı iş eklenirse önceden bildirim ve onay alınır.",
    icon: <DocIcon />,
  },
];

export default function BanyoYenilemePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative bg-antrasit pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 min-h-[540px]">
            {/* Left */}
            <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                Hizmetler / Banyo Yenileme
              </p>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ankara Banyo Tadilatı ve Yenileme
              </h1>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-md mb-8">
                Nivora, banyonuzu temiz çalışma, doğru malzeme ve ince
                işçilikle modern, kullanışlı ve uzun ömürlü bir alana
                dönüştürür.
              </p>

              {/* CTA Buttons */}
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

              {/* Trust badges */}
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

            {/* Right — image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0">
                <Image
                  src="/images/hero/banyo-yenileme-hero.png"
                  alt="Ankara banyo tadilatı ve yenileme"
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

      {/* ── 2. NE YAPIYORUZ ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Kapsam
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight">
                  Banyo Yenilemede
                  <br />
                  Neler Yapıyoruz?
                </h2>
                <div className="w-10 h-px bg-gold mt-5" />
              </div>
              <p className="text-sm text-taupe font-sans max-w-xs leading-relaxed lg:text-right">
                Kısmı veya komple — her ihtiyaca özel çözüm üretiyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ── 3. SÜREÇ ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Süreç
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Nasıl İlerliyoruz?
              </h2>
              <div className="w-10 h-px bg-gold mx-auto mb-5" />
              <p className="text-sm text-taupe font-sans max-w-sm mx-auto leading-relaxed">
                Her adım başlamadan bilinir. Sürpriz yok, belirsizlik yok.
              </p>
            </div>

            {/* Desktop: 7-col grid with connector track */}
            <div className="hidden lg:block relative">
              <div
                aria-hidden
                className="absolute border-t border-dashed border-bej"
                style={{
                  top: "24px",
                  left: "calc(100% / 14)",
                  right: "calc(100% / 14)",
                }}
              />
              <div className="grid grid-cols-7 gap-3">
                {steps.map((s) => (
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

            {/* Mobile: vertical timeline */}
            <div className="lg:hidden space-y-0">
              {steps.map((s, i) => (
                <div key={s.n} className="relative flex gap-5 pb-8">
                  {i < steps.length - 1 && (
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

      {/* ── 4. MALZEME & KALİTE ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Yaklaşım
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Banyoda Kalite Detayda Belli Olur
              </h2>
              <div className="w-10 h-px bg-gold mx-auto" />
            </div>

            {/* Paragraf */}
            <p className="text-sm text-taupe font-sans leading-relaxed max-w-2xl mx-auto text-center mt-8 mb-14">
              Banyo tadilatında yalnızca görünen yüzey değil; tesisat, zemin
              eğimi, yalıtım, seramik birleşimleri ve kullanım dayanıklılığı
              da önemlidir. Bu yüzden malzeme ve işçilik seviyesini işe
              başlamadan önce netleştiririz.
            </p>

            {/* Paketler */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {paketler.map((p) => (
                <div
                  key={p.title}
                  className={`relative p-8 ${
                    p.accent
                      ? "bg-antrasit"
                      : "bg-white border border-bej"
                  }`}
                >
                  {p.accent && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
                  )}
                  <p
                    className={`text-[10px] uppercase tracking-[0.3em] font-sans mb-3 ${
                      p.accent ? "text-gold" : "text-taupe"
                    }`}
                  >
                    {p.subtitle}
                  </p>
                  <h3
                    className={`font-heading text-xl font-bold mb-4 ${
                      p.accent ? "text-white" : "text-antrasit"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-sans mb-6 ${
                      p.accent ? "text-white/60" : "text-taupe"
                    }`}
                  >
                    {p.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span
                          className={`w-1 h-1 rounded-full flex-shrink-0 ${
                            p.accent ? "bg-gold" : "bg-gold/60"
                          }`}
                        />
                        <span
                          className={`text-xs font-sans ${
                            p.accent ? "text-white/80" : "text-taupe"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-antrasit font-heading font-bold">
              Her bütçeye aynı sonucu vaat etmeyiz;{" "}
              <span className="text-gold">
                her bütçeye en doğru çözümü şeffaf şekilde sunarız.
              </span>
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 5. ÖRNEK DÖNÜŞÜM ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="relative h-72 lg:h-96">
                  <Image
                    src="/images/before-after/banyo-before-after.png"
                    alt="Banyo yenileme konsept dönüşüm örneği"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-antrasit/90 px-3 py-1.5 border border-gold/30">
                    <span className="text-gold text-[10px] font-heading tracking-widest uppercase">
                      Konsept Örnek
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Dönüşüm Örneği
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  Banyo Yenileme Konsept Dönüşümü
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-white/55 font-sans leading-relaxed mb-6">
                  Gerçek proje fotoğrafları geldikçe bu alan Nivora&apos;nın
                  tamamlanan işleriyle güncellenecektir.
                </p>
                <p className="text-xs text-white/30 font-sans italic border-l-2 border-gold/20 pl-4">
                  Bu görsel konsept tasarım amacıyla hazırlanmıştır; gerçek
                  bir tamamlanan projeyi temsil etmemektedir.
                </p>

                {/* Mini stats */}
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { v: "10–18", l: "Ortalama İş Günü" },
                    { v: "1 Yıl", l: "İşçilik Garantisi" },
                    { v: "Yazılı", l: "Sözleşme & Teklif" },
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

      {/* ── 6. GARANTİLER ── */}
      <AnimatedSection>
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {garantiler.map((g) => (
                <div key={g.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                    <span className="text-gold">{g.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-antrasit mb-2">
                      {g.title}
                    </h3>
                    <p className="text-xs text-taupe leading-relaxed font-sans">
                      {g.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 7. FAQ ── */}
      <BanyoFAQ />

      {/* ── 8. FINAL CTA ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Hazır Olduğunuzda
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  Banyonuzu Yenilemeyi
                  <br />
                  Düşünüyorsanız, Önce
                  <br />
                  <span className="text-gold">Doğru Planla Başlayalım</span>
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-white/55 font-sans text-sm leading-relaxed max-w-md">
                  Banyonuzun mevcut durumunu bize WhatsApp üzerinden gönderin.
                  İhtiyacınızı birlikte netleştirelim. Keşif ziyareti
                  ücretsiz ve bağlayıcı değildir.
                </p>
              </div>

              {/* Right: buttons */}
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

                {/* Trust line */}
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

/* ── Icons ── */
function TileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="9" height="9" rx="1" />
      <rect x="13" y="2" width="9" height="9" rx="1" />
      <rect x="2" y="13" width="9" height="9" rx="1" />
      <rect x="13" y="13" width="9" height="9" rx="1" />
    </svg>
  );
}
function PipeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
    </svg>
  );
}
function ShowerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12h16M4 12a8 8 0 018-8" />
      <line x1="8" y1="16" x2="8" y2="19" />
      <line x1="12" y1="16" x2="12" y2="19" />
      <line x1="16" y1="16" x2="16" y2="19" />
    </svg>
  );
}
function SinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12h20M5 12v5a7 7 0 0014 0v-5" />
      <path d="M12 2v4M10 4h4" />
    </svg>
  );
}
function LightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function CeilingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="4" rx="1" />
      <line x1="6" y1="7" x2="6" y2="21" />
      <line x1="12" y1="7" x2="12" y2="21" />
      <line x1="18" y1="7" x2="18" y2="21" />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
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
