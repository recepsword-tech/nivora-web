import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hizmetler | Nivora — Ankara Tadilat & Dekorasyon",
  description:
    "Ankara'da anahtar teslim ev tadilatı, banyo yenileme, mutfak yenileme, boya & alçı ve ticari alan uygulamaları. Yazılı teklif, kaliteli işçilik, teslim sonrası destek.",
};

const WHATSAPP_URL = "https://wa.me/905321234567";

const badges = [
  "Temiz Çalışma",
  "İnce İşçilik",
  "Yazılı Teklif",
  "Teslim Sonrası Destek",
];

const hizmetler = [
  {
    id: "komple-tadilat",
    href: "/hizmetler/anahtar-teslim-tadilat",
    title: "Anahtar Teslim Ev Tadilatı",
    description:
      "Dairenizin tüm odalarını baştan sona yeniliyoruz. Elektrik, tesisat, alçı, boya ve zemin dahil eksiksiz bir dönüşüm.",
    image: "/images/services/anahtar-teslim-ev-tadilati.png",
    icon: <KeyIcon />,
    tags: ["Elektrik", "Tesisat", "Alçı & Boya", "Zemin"],
  },
  {
    id: "banyo-tadilat",
    href: "/hizmetler/banyo-yenileme",
    title: "Banyo Yenileme",
    description:
      "Modern ve işlevsel banyolar tasarlıyor; seramik, armatür ve aydınlatmayı eksiksiz uyguluyoruz.",
    image: "/images/services/banyo-yenileme.png",
    icon: <ShowerIcon />,
    tags: ["Tesisat", "Seramik", "Armatür", "Aydınlatma"],
  },
  {
    id: "mutfak-tadilat",
    href: "/hizmetler/mutfak-yenileme",
    title: "Mutfak Yenileme",
    description:
      "Dolap, tezgah, zemin ve tesisat dahil mutfağınızı estetik ve kullanışlı hale getiriyoruz.",
    image: "/images/services/mutfak-yenileme.png",
    icon: <KitchenIcon />,
    tags: ["Dolaplar", "Tezgah", "Zemin", "Ankastre"],
  },
  {
    id: "boyama-kaplama",
    href: "/hizmetler/boya-alci-ince-iscilik",
    title: "Boya, Alçı ve İnce İşçilik",
    description:
      "Alçı, saten, duvar kağıdı ve özel boya uygulamalarıyla mekânlarınıza karakter katıyoruz.",
    image: "/images/services/boya-alci-ince-iscilik.png",
    icon: <BrushIcon />,
    tags: ["Alçı", "Saten Boya", "Kartonpiyer", "Duvar Kağıdı"],
  },
  {
    id: "magaza-ticari",
    href: "/hizmetler/magaza-ticari-alan",
    title: "Mağaza & Ticari Alan",
    description:
      "Ticari alanlar için özel tasarım ve uygulama. İşletmenize özgü, işlevsel ve etkileyici mekân dönüşümleri.",
    image: "/images/services/magaza-ticari-alan.png",
    icon: <StoreIcon />,
    tags: ["Showroom", "Ofis", "Mağaza", "Cafe & Restoran"],
  },
];

const paketler = [
  {
    title: "Temel Yenileme",
    subtitle: "Ekonomik Çözüm",
    desc: "Mevcut yapıyı koruyarak görünümü ve işlevselliği iyileştiriyoruz. Boya, zemin ve küçük donanım değişimleri.",
    items: ["Boya & Saten", "Zemin Yenileme", "Donanım Değişimi", "Armatür Yenileme"],
    accent: false,
  },
  {
    title: "Kapsamlı Dönüşüm",
    subtitle: "Fiyat-Performans Çözüm",
    desc: "Hem görünüm hem de altyapı yenileniyor. Tesisat, kaplama ve dekorasyon tek seferde.",
    items: ["Tesisat Yenileme", "Seramik & Parke", "Alçı & Boya", "Komple Donanım"],
    accent: true,
  },
  {
    title: "Anahtar Teslim",
    subtitle: "Premium Çözüm",
    desc: "Her detay en başından planlanır. Sertifikalı malzeme, ince işçilik, eksiksiz teslim.",
    items: ["Komple Elektrik", "Komple Tesisat", "Premium Malzeme", "Tasarım Danışmanlığı"],
    accent: false,
  },
];

const avantajlar = [
  {
    icon: <CleanIcon />,
    title: "Temiz Çalışma Düzeni",
    desc: "Çalışma alanı her gün düzenli bırakılır. Evinize ve mahremiyetinize saygı gösterilir.",
  },
  {
    icon: <DocIcon />,
    title: "Yazılı ve Şeffaf Teklif",
    desc: "Kapsam, süre ve maliyet baştan belirlenir. Sözleşme dışı talep ya da sürpriz maliyet olmaz.",
  },
  {
    icon: <DiamondIcon />,
    title: "Kaliteli Malzeme",
    desc: "Uzun ömürlü sonuçlar için sertifikalı ve garantili malzeme seçimi yapılır.",
  },
  {
    icon: <CalendarIcon />,
    title: "Zamanında Teslim",
    desc: "Zaman çizelgesi başlamadan belirlenir, günlük ilerleme güncellemesi paylaşılır.",
  },
  {
    icon: <SupportIcon />,
    title: "Teslim Sonrası Destek",
    desc: "İşimiz bitse de desteğimiz sürer. 1 yıl işçilik garantisi kapsamında yanınızdayız.",
  },
];

export default function HizmetlerPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative bg-antrasit pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            {/* Left */}
            <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                Hizmetler
              </p>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Hizmetlerimiz
              </h1>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-md mb-10">
                Nivora, Ankara&apos;da evinizi güvenilir, estetik ve uzun ömürlü
                çözümlerle yenilemek için anahtar teslim tadilat ve dekorasyon
                hizmetleri sunar.
              </p>
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-[11px] text-gold/80 font-heading tracking-wide"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/60 inline-block" />
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
                  src="/images/hero/home-hero.png"
                  alt="Nivora hizmetler — iç mekân tadilat"
                  fill
                  priority
                  className="object-cover opacity-55"
                  sizes="44vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-antrasit via-antrasit/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ── 2. HİZMET KARTLARI ── */}
      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Çözümler
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight">
                Ne Yapıyoruz?
              </h2>
              <div className="w-10 h-px bg-gold mt-5" />
            </div>
            <p className="text-sm text-taupe font-sans max-w-sm leading-relaxed lg:text-right">
              Her hizmet, baştan sona planlı ve şeffaf bir süreçle yürütülür.
            </p>
          </div>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {hizmetler.slice(0, 3).map((h) => (
              <ServiceCard key={h.id} {...h} />
            ))}
          </div>
          {/* Bottom row: 2 cards centred */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
            {hizmetler.slice(3).map((h) => (
              <ServiceCard key={h.id} {...h} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ÇÖZÜM PAKETLERİ ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
              Yaklaşım
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
              İhtiyacınıza Uygun Çözüm Paketleri
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mb-6" />
            <p className="text-sm text-taupe font-sans max-w-xl mx-auto leading-relaxed">
              Her bütçeye aynı sonucu vaat etmeyiz; her bütçeye en doğru
              çözümü şeffaf şekilde sunarız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {paketler.map((p) => (
              <div
                key={p.title}
                className={`relative p-8 ${
                  p.accent
                    ? "bg-antrasit text-white"
                    : "bg-krem border border-bej"
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

          <p className="text-center text-xs text-taupe/60 font-sans mt-8">
            Hangi paketin size uygun olduğundan emin değilseniz keşif
            ziyaretinde birlikte değerlendirelim.
          </p>
        </div>
      </section>

      {/* ── 4. AVANTAJLAR ── */}
      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
            {/* Left label */}
            <div className="lg:w-64 flex-shrink-0">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Neden Nivora
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight">
                Nivora ile Çalışmanın Avantajları
              </h2>
              <div className="w-10 h-px bg-gold mt-6" />
            </div>

            {/* Right: 5 items in 2+3 grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {avantajlar.map((a) => (
                <div key={a.title} className="group">
                  <div className="w-10 h-10 rounded-full border border-gold/30 bg-white flex items-center justify-center mb-4 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                    <span className="text-gold">{a.icon}</span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-2 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-xs text-taupe leading-relaxed font-sans">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CTA ── */}
      <section className="bg-antrasit py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                Başlayalım
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                Ücretsiz Keşif Alın,
                <br />
                Evinizi Birlikte Planlayalım
              </h2>
              <p className="text-white/55 font-sans text-sm leading-relaxed max-w-md">
                Keşif ziyareti ücretsiz ve bağlayıcı değildir. Mekânı yerinde
                değerlendirip şeffaf bir teklif sunuyoruz.
              </p>
              <div className="w-10 h-px bg-gold mt-8" />
            </div>

            {/* Right: buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
              >
                <WhatsAppIcon />
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 px-8 py-4 border border-gold/50 text-gold font-heading text-sm tracking-wide hover:border-gold hover:bg-gold/5 transition-all duration-200"
              >
                Ücretsiz Keşif Talep Et
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Service Card ── */
interface ServiceCardProps {
  id: string;
  href: string | null;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tags: string[];
}

function ServiceCard({ href, title, description, image, icon, tags }: ServiceCardProps) {
  const inner = (
    <div className="group bg-white overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-bej/30">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Icon pill */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-antrasit/70 to-transparent" />
        <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-sm">
          <span className="text-antrasit">{icon}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-base font-bold text-antrasit mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-taupe leading-relaxed font-sans mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 border border-bej text-[10px] text-taupe font-sans"
            >
              {tag}
            </span>
          ))}
        </div>

        {href ? (
          <span className="flex items-center gap-1.5 text-xs text-gold font-heading font-bold tracking-wide group-hover:gap-2.5 transition-all duration-200">
            Detayları İncele
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="2" y1="6" x2="10" y2="6" />
              <polyline points="7,3 10,6 7,9" />
            </svg>
          </span>
        ) : (
          <span className="text-xs text-taupe/50 font-sans">
            Teklif için WhatsApp&apos;tan yazın →
          </span>
        )}
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  ) : (
    <div className="block h-full">{inner}</div>
  );
}

/* ── Icons ── */
function KeyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function ShowerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12h16M4 12a8 8 0 018-8M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
      <line x1="8" y1="17" x2="8" y2="20" />
      <line x1="12" y1="17" x2="12" y2="20" />
      <line x1="16" y1="17" x2="16" y2="20" />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="12" y1="7" x2="12" y2="21" />
      <line x1="2" y1="3" x2="22" y2="3" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 00-3-3z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7" />
      <path d="M14.5 17.5L4.5 15" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function CleanIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 6h18M3 12h18M3 18h18" />
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

function DiamondIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M2 9h20M12 3l4 6M12 3L8 9" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12 19.79 19.79 0 011.18 3.4 2 2 0 013.17 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
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
