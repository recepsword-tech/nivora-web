import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/motion/AnimatedSection";
import AnahtarFAQ from "./AnahtarFAQ";

export const metadata: Metadata = {
  title: "Ankara Anahtar Teslim Ev Tadilatı | Nivora",
  description:
    "Ankara'da anahtar teslim ev tadilatı için temiz çalışma, yazılı teklif, ince işçilik ve planlı süreç yaklaşımıyla Nivora'dan keşif talep edin.",
};

import { waUrl } from "@/data/contact";
const WHATSAPP_URL = waUrl("anahtar");

const badges = [
  "Tek Muhataplı Süreç",
  "Yazılı Teklif",
  "Temiz Çalışma",
  "Teslim Sonrası Destek",
];

const hizmetler = [
  {
    icon: <SearchIcon />,
    title: "Keşif ve Planlama",
    desc: "Evinizin mevcut durumu yerinde incelenir, ölçüm alınır ve tüm kapsam baştan netleştirilir. Sürpriz iş çıkmaması için bu adım kritiktir.",
  },
  {
    icon: <HammerIcon />,
    title: "Yıkım ve Söküm İşleri",
    desc: "Eski zemin, duvar kaplamaları, dolap ve bölmeler temiz ve kontrollü biçimde sökülerek ortam bir sonraki aşamaya hazırlanır.",
  },
  {
    icon: <BoltIcon />,
    title: "Elektrik Tesisatı",
    desc: "Yeni kablo döşeme, pano yenileme, aydınlatma noktaları ve priz-şalter yerleşimi. Standart ve güvenli altyapı uygulaması.",
  },
  {
    icon: <PipeIcon />,
    title: "Su Tesisatı",
    desc: "Su giriş-çıkış hatları, vana ve bağlantı noktaları yenilenir. Banyo ve mutfak için doğru altyapı kurulur.",
  },
  {
    icon: <HomeIcon />,
    title: "Banyo ve Mutfak Yenileme",
    desc: "Seramik, armatür, dolap, tezgah ve aksesuarlar yenilenir. Her iki alan için kapsamlı çözüm tek süreçte yürütülür.",
  },
  {
    icon: <BrushIcon />,
    title: "Boya, Alçı ve Asma Tavan",
    desc: "Duvar düzeltme, saten alçı, asma tavan ve son kat boya. Düzgün yüzey, temiz renk geçişi ve detaylı köşe işçiliği.",
  },
  {
    icon: <FloorIcon />,
    title: "Zemin, Parke ve Seramik",
    desc: "Laminat, parke, seramik veya vinil zemin seçimi ve uygulaması. Eşik, süpürgelik ve geçiş profillerinde ince işçilik.",
  },
  {
    icon: <CheckIcon />,
    title: "Son Kontrol ve Teslim",
    desc: "Her alan ince ince kontrol edilir, eksikler giderilir. Teslim fotoğraflanır ve 1 yıl işçilik garantisi sözleşmeye eklenir.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ön Görüşme",
    desc: "Kapsam, bütçe beklentisi ve zaman çerçevesi genel hatlarıyla değerlendirilir.",
  },
  {
    n: "02",
    title: "Yerinde Keşif",
    desc: "Eviniz ölçülür, tesisat durumu incelenir, mevcut sorunlar tespit edilir.",
  },
  {
    n: "03",
    title: "Kapsam Belirleme",
    desc: "Hangi işlerin yapılacağı, hangi alanların dahil olduğu net şekilde listelenir.",
  },
  {
    n: "04",
    title: "Yazılı Teklif",
    desc: "İşçilik ve malzeme ayrı ayrı belirtilen şeffaf teklif sunulur. Onay olmadan başlamıyoruz.",
  },
  {
    n: "05",
    title: "Malzeme & İş Planı",
    desc: "Malzeme seçimleri netleştirilir, aşamalı çalışma takvimi oluşturulur.",
  },
  {
    n: "06",
    title: "Uygulama Süreci",
    desc: "Planlı ilerleme, her gün temiz çalışma alanı. İlerleme fotoğrafla paylaşılır.",
  },
  {
    n: "07",
    title: "Son Kontrol & Teslim",
    desc: "Her detay kontrol edilir. 1 yıl işçilik garantisi sözleşmede yazılı olarak teslim edilir.",
  },
];

const avantajlar = [
  {
    icon: <UserIcon />,
    title: "Tek Muhatap",
    desc: "Tüm süreci tek kişiyle takip edersiniz. Farklı ustalar arasında koordinasyon yükü olmaz.",
  },
  {
    icon: <CalendarIcon />,
    title: "Daha Düzenli Süreç",
    desc: "Aşamalı takvim baştan belirlenir. Ne zaman ne yapılacağı önceden bilinir.",
  },
  {
    icon: <LayersIcon />,
    title: "Malzeme & İşçilik Uyumu",
    desc: "Aynı ekip tüm aşamalarda çalışır. Malzeme ve işçilik birbiriyle uyumlu seçilir.",
  },
  {
    icon: <ShieldIcon />,
    title: "Daha Kontrollü Teslimat",
    desc: "Son kontrol sistematik yapılır. Eksik iş bırakmadan teslim edilir.",
  },
];

const paketler = [
  {
    subtitle: "Ekonomik Çözüm",
    title: "Temel Yenileme",
    desc: "Altyapı korunarak görünüm yenilenir. Boya, zemin ve seçili alan güncellemesi.",
    items: ["Boya & Saten", "Zemin Kaplaması", "Banyo / Mutfak Güncelleme", "Aksesuar Yenileme"],
    accent: false,
  },
  {
    subtitle: "Fiyat-Performans Çözüm",
    title: "Kapsamlı Dönüşüm",
    desc: "Tesisat dahil sistematik yenileme. Hem altyapı hem yüzey yenileniyor.",
    items: ["Tesisat Yenileme", "Tam Kaplama & Boya", "Banyo & Mutfak", "Aydınlatma"],
    accent: true,
  },
  {
    subtitle: "Premium Çözüm",
    title: "Anahtar Teslim",
    desc: "Her detay en başından planlanır. Komple yenileme, premium malzeme, tam garanti.",
    items: ["Komple Tesisat", "Premium Zemin & Kaplama", "Dolap & Mobilya", "Tam Proje Yönetimi"],
    accent: false,
  },
];

export default function AnahtarTeslimPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative bg-antrasit pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 min-h-[540px]">
            {/* Left */}
            <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                Hizmetler / Anahtar Teslim Tadilat
              </p>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ankara Anahtar Teslim Ev Tadilatı
              </h1>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-md mb-8">
                Nivora, evinizi keşiften teslimata kadar planlı, temiz ve
                güvenilir bir süreçle yenileyen modern tadilat ve dekorasyon
                markasıdır.
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

            {/* Right — image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0">
                <Image
                  src="/images/services/anahtar-teslim-ev-tadilati.png"
                  alt="Ankara anahtar teslim ev tadilatı"
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
                  Anahtar Teslim Tadilatta
                  <br />
                  Neler Yapıyoruz?
                </h2>
                <div className="w-10 h-px bg-gold mt-5" />
              </div>
              <p className="text-sm text-taupe font-sans max-w-xs leading-relaxed lg:text-right">
                Keşiften teslimata her aşama tek süreçte yönetilir.
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

      {/* ── 3. SÜREÇ ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Süreç
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Anahtar Teslim Süreç Nasıl İlerler?
              </h2>
              <div className="w-10 h-px bg-gold mx-auto mb-5" />
              <p className="text-sm text-taupe font-sans max-w-md mx-auto leading-relaxed">
                Tadilatta en büyük sorun belirsizliktir. Nivora süreci baştan
                netleştirir; her adım başlamadan bilinir.
              </p>
            </div>

            {/* Desktop */}
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

            {/* Mobile */}
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

      {/* ── 4. NEDEN ANAHTAR TESLİM ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Avantaj
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight mb-6">
                  Tüm Süreci Tek Elden Yönetmek,
                  <br />
                  Tadilatta En Büyük Rahatlıktır
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-taupe font-sans leading-relaxed">
                  Komple ev tadilatında farklı ustalar, farklı malzemeler ve
                  dağınık iş takibi müşteriyi yorar. Nivora&apos;da amaç;
                  keşiften teslimata kadar süreci tek muhatapla, planlı ve
                  anlaşılır şekilde yürütmektir.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {avantajlar.map((a) => (
                  <div
                    key={a.title}
                    className="bg-white p-6 border border-bej"
                  >
                    <div className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center mb-4">
                      <span className="text-gold">{a.icon}</span>
                    </div>
                    <h3 className="font-heading text-sm font-bold text-antrasit mb-2">
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
      </AnimatedSection>

      {/* ── 5. KALİTE & MALZEME ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Yaklaşım
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Kaliteli Sonuç, Doğru Plan ve Doğru Malzemeyle Başlar
              </h2>
              <div className="w-10 h-px bg-gold mx-auto" />
            </div>

            <p className="text-sm text-taupe font-sans leading-relaxed max-w-2xl mx-auto text-center mt-8 mb-14">
              Anahtar teslim tadilatta sadece görünen yüzey değil; altyapı,
              tesisat, zemin, boya, seramik birleşimleri ve kullanım
              dayanıklılığı da önemlidir. Bu yüzden kapsamı, malzeme seviyesini
              ve işçilik detaylarını işe başlamadan önce netleştiririz.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {paketler.map((p) => (
                <div
                  key={p.title}
                  className={`relative p-8 ${
                    p.accent ? "bg-antrasit" : "bg-krem border border-bej"
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

      {/* ── 6. ÖRNEK DÖNÜŞÜM ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative overflow-hidden">
                <div className="relative h-72 lg:h-96">
                  <Image
                    src="/images/before-after/komple-ev-before-after.png"
                    alt="Komple ev yenileme konsept dönüşüm örneği"
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

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Dönüşüm Örneği
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  Komple Ev Yenileme Konsept Dönüşümü
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-white/55 font-sans leading-relaxed mb-6">
                  Gerçek proje fotoğrafları geldikçe bu alan Nivora&apos;nın
                  tamamlanan işleriyle güncellenecektir.
                </p>
                <p className="text-xs text-white/30 font-sans italic border-l-2 border-gold/20 pl-4">
                  Bu görsel konsept tasarım amacıyla hazırlanmıştır; gerçek bir
                  tamamlanan projeyi temsil etmemektedir.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { v: "4–8", l: "Ortalama Hafta" },
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

      {/* ── 7. FAQ ── */}
      <AnahtarFAQ />

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
                  Evinizi Baştan Yenilemeyi
                  <br />
                  Düşünüyorsanız, Önce
                  <br />
                  <span className="text-gold">Süreci Netleştirelim</span>
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-white/55 font-sans text-sm leading-relaxed max-w-md">
                  Evinizin mevcut durumunu bize WhatsApp üzerinden gönderin.
                  Yapılacak işleri, kapsamı ve doğru çözüm seviyesini birlikte
                  belirleyelim.
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

/* ── Icons ── */
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function HammerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15 4l5 5-10 10H5v-5L15 4z" />
      <line x1="12" y1="7" x2="17" y2="12" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  );
}
function PipeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9h18M3 15h18" />
      <path d="M9 3v18M15 3v18" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
function BrushIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 00-3-3z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
    </svg>
  );
}
function FloorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="14" width="20" height="8" rx="1" />
      <line x1="6" y1="14" x2="6" y2="22" />
      <line x1="12" y1="14" x2="12" y2="22" />
      <line x1="18" y1="14" x2="18" y2="22" />
      <line x1="2" y1="18" x2="22" y2="18" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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
function LayersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="12,2 2,7 12,12 22,7 12,2" />
      <polyline points="2,17 12,22 22,17" />
      <polyline points="2,12 12,17 22,12" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
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
