import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/motion/AnimatedSection";
import MagazaFAQ from "./MagazaFAQ";

export const metadata: Metadata = {
  title: "Ankara Mağaza ve Ticari Alan Tadilatı | Nivora",
  description:
    "Nivora, Ankara'da mağaza, butik, kafe, showroom ve ticari alan tadilatlarında estetik, kullanışlılık ve planlı uygulama yaklaşımıyla hizmet verir.",
};

import { waUrl } from "@/data/contact";
const WHATSAPP_URL = waUrl("magaza");

const badges = [
  "Planlı Uygulama",
  "Estetik Mekân Kurgusu",
  "Temiz Teslimat",
  "İşletmeye Uygun Çözüm",
];

const alanlar = [
  {
    icon: <StoreIcon />,
    title: "Mağaza ve Butik",
    desc: "Ürün sergilemesini ve marka kimliğini ön plana çıkaran, müşteri dolaşımına göre kurgulanmış mağaza ve butik dönüşümleri.",
  },
  {
    icon: <SalonIcon />,
    title: "Güzellik Salonu",
    desc: "Hijyenik, ferah ve işlevsel güzellik salonu alanları. Aydınlatma, zemin ve mobilya düzeni müşteri konforuna göre planlanır.",
  },
  {
    icon: <CafeIcon />,
    title: "Kafe ve Küçük İşletmeler",
    desc: "Atmosferi güçlü, servis akışına uygun ve müşteriyi içeri çeken kafe ve küçük işletme mekânları.",
  },
  {
    icon: <ShowroomIcon />,
    title: "Showroom Alanları",
    desc: "Ürünlerin en iyi biçimde sergilendiği, ziyaretçiye doğru mesajı veren temiz ve profesyonel showroom kurgular.",
  },
  {
    icon: <OfficeIcon />,
    title: "Ofis ve Karşılama Alanları",
    desc: "İlk izlenim yaratmak için tasarlanmış resepsiyon, bekleme ve karşılama alanları. Sade, güven veren ve marka uyumlu.",
  },
  {
    icon: <DisplayIcon />,
    title: "Satış ve Sergileme Alanları",
    desc: "Ürünün değerini artıran sergileme bankoları, vitrin düzenlemeleri ve satış alanı optimizasyonu.",
  },
];

const yapilanlar = [
  {
    icon: <FloorIcon />,
    title: "Zemin ve Duvar Yenileme",
    desc: "Seramik, vinil, laminat zemin; boya, duvar kaplaması ve dekoratif yüzey uygulamaları.",
  },
  {
    icon: <LightPlanIcon />,
    title: "Aydınlatma Planlaması",
    desc: "Ray spot, sıva altı armatür, vitrin ve sergi aydınlatması. Mekânın atmosferini kuran ışık tasarımı.",
  },
  {
    icon: <ShelfIcon />,
    title: "Raf, Banko ve Sergileme Alanları",
    desc: "Ürün düzenine ve kullanım akışına göre kurgulanmış raf sistemleri, satış bankoları ve sergi mobilyaları.",
  },
  {
    icon: <BrushIcon />,
    title: "Boya, Alçı ve Dekoratif Detaylar",
    desc: "Marka rengine uygun boyama, saten alçı, kartonpiyer ve dekoratif detaylarla kimlik veren bitiş.",
  },
  {
    icon: <BoltIcon />,
    title: "Elektrik Altyapısı",
    desc: "Aydınlatma, kasa bölgesi, şarj noktaları ve ek priz hatları için güvenli elektrik altyapı düzenlemesi.",
  },
  {
    icon: <CeilingIcon />,
    title: "Tavan ve Işık Uygulamaları",
    desc: "Alçıpan asma tavan, ışık kanalları ve nişler. Mekânın yüksekliğini ve oranlarını dengeleyen tavan kurgusu.",
  },
  {
    icon: <EntranceIcon />,
    title: "Mağaza Giriş ve Karşılama Alanı",
    desc: "İlk saniyede doğru izlenimi veren giriş bölgesi. Logo duvarı, karşılama bankosu ve görsel odak noktaları.",
  },
  {
    icon: <CheckIcon />,
    title: "Son Kontrol ve Teslim",
    desc: "Her detay titizlikle kontrol edilir. Alan temizlenerek, eksiksiz ve kullanıma hazır biçimde teslim edilir.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ön Görüşme",
    desc: "İşletmenizin ihtiyacı, bütçesi ve zaman kısıtları genel hatlarıyla değerlendirilir.",
  },
  {
    n: "02",
    title: "Mekân İhtiyacını Anlama",
    desc: "Alanın kullanım amacı, müşteri akışı ve marka beklentisi dinlenir; öncelikler netleşir.",
  },
  {
    n: "03",
    title: "Yerinde Keşif",
    desc: "Alan ölçülür, mevcut durum ve altyapı değerlendirilir. Sorunlu noktalar önceden tespit edilir.",
  },
  {
    n: "04",
    title: "Kapsam ve İş Planı",
    desc: "Hangi işlerin yapılacağı, hangi alanların dahil olduğu ve çalışma takvimi netleştirilir.",
  },
  {
    n: "05",
    title: "Yazılı Teklif",
    desc: "İşçilik ve malzeme ayrı belirtilmiş, şeffaf teklif sunulur. Onay olmadan başlamıyoruz.",
  },
  {
    n: "06",
    title: "Uygulama",
    desc: "Planlı ve aşamalı ilerleme. İşletmenizin koşullarına göre çalışma saatleri ayarlanabilir.",
  },
  {
    n: "07",
    title: "Son Kontrol & Teslim",
    desc: "Tüm detaylar kontrol edilir. Alan temizlenerek, kullanıma hazır şekilde teslim edilir.",
  },
];

const avantajlar = [
  {
    icon: <EyeIcon />,
    title: "Daha Güçlü İlk İzlenim",
    desc: "Müşterinin kapıdan girdiği ilk anda yaşadığı deneyim, işletmenizin algısını şekillendirir.",
  },
  {
    icon: <GridIcon />,
    title: "Kullanışlı Alan Planı",
    desc: "Dolaşım alanları, sergileme bölgeleri ve çalışma noktaları verimli bir düzende kurgulanır.",
  },
  {
    icon: <UserCheckIcon />,
    title: "Müşteri Deneyimine Uygun Düzen",
    desc: "Işık, yüzey ve düzen; müşterinin mekânda daha uzun kalmasını ve daha rahat karar vermesini destekler.",
  },
  {
    icon: <ClockIcon />,
    title: "Planlı ve Kontrollü Teslimat",
    desc: "Aşamalı takvim sayesinde işletmenizin ne zaman açılacağı önceden bilinir. Sürpriz gecikme olmaz.",
  },
];

export default function MagazaTicariAlanPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative bg-antrasit pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 min-h-[540px]">
            <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                Hizmetler / Mağaza & Ticari Alan
              </p>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ankara Mağaza ve Ticari Alan Tadilatı
              </h1>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-md mb-8">
                Nivora, mağaza ve ticari alanlarınızı estetik, kullanışlı ve
                müşteri deneyimini güçlendiren bir yapıya dönüştürmek için
                temiz çalışma ve planlı uygulama süreciyle hizmet verir.
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
                  src="/images/services/magaza-ticari-alan.png"
                  alt="Ankara mağaza ve ticari alan tadilatı"
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

      {/* ── 2. HANGİ ALANLARDA ÇALIŞIYORUZ ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Alan Tipleri
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight">
                  Hangi Ticari Alanlarda
                  <br />
                  Çalışıyoruz?
                </h2>
                <div className="w-10 h-px bg-gold mt-5" />
              </div>
              <p className="text-sm text-taupe font-sans max-w-xs leading-relaxed lg:text-right">
                Her işletme tipinin ihtiyacı farklıdır; bunu keşifte birlikte belirliyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {alanlar.map((a) => (
                <div
                  key={a.title}
                  className="group bg-white p-7 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                    <span className="text-gold">{a.icon}</span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-2.5 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-xs text-taupe leading-relaxed font-sans">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 3. NELER YAPIYORUZ ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Kapsam
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight">
                  Ticari Alan Tadilatında
                  <br />
                  Neler Yapıyoruz?
                </h2>
                <div className="w-10 h-px bg-gold mt-5" />
              </div>
              <p className="text-sm text-taupe font-sans max-w-xs leading-relaxed lg:text-right">
                Zemin, duvar, tavan, ışık ve sergilemeden teslime kadar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {yapilanlar.map((y) => (
                <div
                  key={y.title}
                  className="group bg-krem p-7 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                    <span className="text-gold">{y.icon}</span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-2.5 leading-snug">
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

      {/* ── 4. NEDEN PLANLI TADİLAT ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Anlayış
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  İşletme Alanı Sadece Güzel Değil,
                  <br />
                  İşlevsel de Olmalı
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  Ticari alanlarda tadilat yalnızca dekorasyon değildir. Müşterinin
                  mekâna girdiğinde hissettiği ilk izlenim, ürünlerin sergilenme
                  düzeni, ışık kullanımı, dolaşım alanları ve işletmenin marka
                  algısı birlikte düşünülmelidir. Nivora, ticari alanlarda
                  estetik görünümle kullanım kolaylığını birlikte ele alır.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "İlk İzlenim", sub: "Kapıdan itibaren etkili" },
                  { label: "Sergileme Düzeni", sub: "Ürün değerini artırır" },
                  { label: "Işık Kullanımı", sub: "Atmosfer ve odak" },
                  { label: "Marka Uyumu", sub: "Kimlikle örtüşen mekân" },
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

      {/* ── 5. SÜREÇ ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Süreç
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                Nivora Ticari Alan Süreci
              </h2>
              <div className="w-10 h-px bg-gold mx-auto mb-5" />
              <p className="text-sm text-taupe font-sans max-w-sm mx-auto leading-relaxed">
                İşletmeniz ne zaman açılacak? Bu sorunun yanıtı baştan bellidir.
                Her adım planlanır, her aşama bildirilir.
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
                    <div className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full border-2 border-bej bg-krem group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200 flex items-center justify-center">
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
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-bej bg-krem flex items-center justify-center">
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

      {/* ── 6. AVANTAJLAR ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Avantaj
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
                İşletmeler İçin Avantajlar
              </h2>
              <div className="w-10 h-px bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {avantajlar.map((a) => (
                <div key={a.title} className="flex flex-col gap-4 p-6 border border-bej">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold">{a.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-antrasit mb-2">
                      {a.title}
                    </h3>
                    <p className="text-xs text-taupe leading-relaxed font-sans">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 7. ÖRNEK GÖRSEL ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative overflow-hidden">
                <div className="relative h-72 lg:h-96">
                  <Image
                    src="/images/services/magaza-ticari-alan.png"
                    alt="Ticari alan konsept uygulaması"
                    fill
                    className="object-cover opacity-80"
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
                  Uygulama Örneği
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  Ticari Alan Konsept Uygulaması
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-white/55 font-sans leading-relaxed mb-6">
                  Gerçek proje fotoğrafları geldikçe bu alan Nivora&apos;nın
                  tamamlanan işleriyle güncellenecektir.
                </p>
                <p className="text-xs text-white/30 font-sans italic border-l-2 border-gold/20 pl-4">
                  Bu görsel konsept tasarım amacıyla kullanılmıştır; belirli bir
                  tamamlanan projeyi temsil etmemektedir.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { v: "Planlı", l: "Aşamalı Süreç" },
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

      {/* ── 8. FAQ ── */}
      <MagazaFAQ />

      {/* ── 9. FINAL CTA ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
                  Hazır Olduğunuzda
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  İşletmenizin Mekânını
                  <br />
                  Yenilemeyi Düşünüyorsanız,
                  <br />
                  <span className="text-gold">Önce İhtiyacı Netleştirelim</span>
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-white/55 font-sans text-sm leading-relaxed max-w-md">
                  Mağaza, butik, kafe veya ticari alanınızın mevcut durumunu
                  bize WhatsApp üzerinden gönderin. Mekânın ihtiyacını,
                  kullanım amacını ve doğru çözüm seviyesini birlikte
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
                  Yazılı teklif · Planlı süreç · Temiz teslimat
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
function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}
function SalonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0112 0v2" />
      <path d="M3 20h18" />
    </svg>
  );
}
function CafeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 8h1a4 4 0 010 8h-1" />
      <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}
function ShowroomIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function OfficeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}
function DisplayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="8" y1="3" x2="8" y2="9" />
    </svg>
  );
}
function FloorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="14" width="20" height="7" rx="1" />
      <line x1="6" y1="14" x2="6" y2="21" />
      <line x1="12" y1="14" x2="12" y2="21" />
      <line x1="18" y1="14" x2="18" y2="21" />
      <line x1="2" y1="17.5" x2="22" y2="17.5" />
    </svg>
  );
}
function LightPlanIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="10" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
      <line x1="2" y1="10" x2="4" y2="10" />
      <line x1="20" y1="10" x2="22" y2="10" />
    </svg>
  );
}
function ShelfIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="2" y1="6" x2="22" y2="6" />
      <line x1="2" y1="13" x2="22" y2="13" />
      <line x1="2" y1="20" x2="22" y2="20" />
      <line x1="4" y1="6" x2="4" y2="20" />
      <line x1="20" y1="6" x2="20" y2="20" />
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
function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
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
function EntranceIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 4h7v16h-7" />
      <path d="M9 8l-4 4 4 4" />
      <line x1="5" y1="12" x2="15" y2="12" />
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
function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
function UserCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16,11 18,13 22,9" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
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
