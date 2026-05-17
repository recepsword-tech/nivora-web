import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/motion/AnimatedSection";

export const metadata: Metadata = {
  title: "Nivora Hakkında | Ankara Tadilat & Dekorasyon",
  description:
    "Nivora, Ankara'da temiz çalışma, ince işçilik ve güvenilir süreç anlayışıyla tadilat ve dekorasyon hizmetleri sunan modern bir yaşam alanı yenileme markasıdır.",
};

import { waUrl } from "@/data/contact";
const WHATSAPP_URL = waUrl("general");

const degerler = [
  {
    baslik: "Güven",
    desc: "Tadilat sürecinde müşterinin neye ödeme yaptığını, hangi işlerin yapılacağını ve sürecin nasıl ilerleyeceğini bilmesi gerekir.",
  },
  {
    baslik: "Temiz Çalışma",
    desc: "Uygulama sürecinde alan düzenine, korumaya, moloz/dağınıklık kontrolüne ve teslim öncesi kontrole önem veririz.",
  },
  {
    baslik: "İnce İşçilik",
    desc: "Fayans birleşiminden boya bitişine, zemin geçişinden köşe detaylarına kadar işin görünen ve hissedilen detaylarına odaklanırız.",
  },
  {
    baslik: "Şeffaf Teklif",
    desc: "Malzeme, kapsam ve fiyat beklentisini mümkün olduğunca baştan netleştirir, müşteriye anlaşılır bir süreç sunarız.",
  },
  {
    baslik: "Teslim Sonrası Destek",
    desc: "İşçilik kaynaklı konularda müşterimizi yalnız bırakmamaya ve işimizin arkasında durmaya önem veririz.",
  },
];

const asamalar = [
  {
    num: "01",
    baslik: "Önce İhtiyacı Anlarız",
    desc: "Müşterinin alanını, beklentisini, kullanım ihtiyacını ve bütçe seviyesini anlamaya çalışırız.",
  },
  {
    num: "02",
    baslik: "Sonra Kapsamı Netleştiririz",
    desc: "Yapılacak işleri, malzeme seviyesini ve uygulama sürecini netleştiririz.",
  },
  {
    num: "03",
    baslik: "Sonra Temiz ve Planlı Uygularız",
    desc: "Uygulama sürecinde düzen, iletişim ve son kontrol anlayışıyla ilerleriz.",
  },
];

const kaliteKartlari = [
  {
    baslik: "Doğru Malzeme",
    desc: "Kullanılan malzeme; dayanıklılığı, yüzey kalitesi ve uzun vadeli kullanım performansını belirler.",
  },
  {
    baslik: "Temiz Uygulama",
    desc: "Doğru hazırlık ve disiplinli uygulama olmadan en iyi malzeme bile bekleneni vermez.",
  },
  {
    baslik: "Uzun Ömürlü Sonuç",
    desc: "Görsel sonuç kadar, o sonucun yıllarca korunması da işin parçasıdır.",
  },
];

const hizmetler = [
  {
    baslik: "Anahtar Teslim Ev Tadilatı",
    href: "/hizmetler/anahtar-teslim-tadilat",
  },
  { baslik: "Banyo Yenileme", href: "/hizmetler/banyo-yenileme" },
  { baslik: "Mutfak Yenileme", href: "/hizmetler/mutfak-yenileme" },
  {
    baslik: "Boya, Alçı ve İnce İşçilik",
    href: "/hizmetler/boya-alci-ince-iscilik",
  },
  {
    baslik: "Mağaza / Ticari Alan Uygulamaları",
    href: "/hizmetler/magaza-ticari-alan",
  },
];

const bolgeler = [
  "Çankaya",
  "İncek",
  "Ümitköy",
  "Gölbaşı",
  "Etimesgut",
  "Eryaman",
  "Batıkent",
  "Yenimahalle",
  "Keçiören",
  "Mamak",
  "Sincan",
  "Ankara Geneli",
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="bg-antrasit pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-sans">
              Hakkımızda
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Nivora Hakkında
            </h1>
            <p className="text-sm text-white/60 font-sans leading-relaxed mb-10 max-w-lg">
              Nivora, Ankara&apos;da ev ve ticari alanları temiz çalışma, ince
              işçilik ve güvenilir süreç anlayışıyla yenileyen modern bir
              tadilat ve dekorasyon markasıdır.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Güvenilir Süreç",
                "Temiz Çalışma",
                "İnce İşçilik",
                "Şeffaf Teklif",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 border border-white/20 text-white/70 text-xs font-sans tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Marka Konumlandırma ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Biz Kimiz
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit leading-tight mb-6">
                  Sadece Tadilat Değil, Güven Veren Bir Yenileme Süreci
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <div className="space-y-5 text-sm text-taupe font-sans leading-relaxed">
                  <p>
                    Nivora&apos;da amaç yalnızca bir alanı yenilemek değil;
                    müşterinin tadilat sürecinde yaşadığı belirsizliği azaltmak,
                    yapılacak işi baştan netleştirmek ve temiz, planlı, estetik
                    bir uygulama süreci sunmaktır.
                  </p>
                  <p>
                    Tadilatta müşterinin asıl ihtiyacı güvenilir muhatap
                    bulmaktır. İşi yapacak kişinin ne söylediğini, ne yapacağını
                    ve teslimatta ne bekleyeceğini bilmek; süreç boyunca
                    iletişimin kopmaması ve bir sorun çıktığında yanında biri
                    olması — bunlar teknik detaylardan önce gelir.
                  </p>
                  <p>
                    Nivora bu anlayışı merkeze alır. İşin kapsamı, malzeme
                    seviyesi ve beklenti baştan konuşulur; teklif anlaşılır ve
                    yazılıdır; süreç düzenli ilerler.
                  </p>
                </div>
              </div>

              <div className="bg-antrasit p-8 lg:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-sans">
                  Temel Anlayış
                </p>
                <div className="space-y-6">
                  {[
                    {
                      baslik: "Güvenilir muhatap",
                      desc: "Tadilatta müşterinin asıl ihtiyacı, işi yapacak kişiye güvenebilmektir.",
                    },
                    {
                      baslik: "Anlaşılır süreç",
                      desc: "Nivora süreci anlaşılır hale getirir — kapsam, malzeme ve beklenti baştan netleştirilir.",
                    },
                    {
                      baslik: "Baştan konuşulan kapsam",
                      desc: "İşin kapsamı, malzeme seviyesi ve beklenti sözlü değil yazılı olarak belirlenir.",
                    },
                  ].map((item) => (
                    <div
                      key={item.baslik}
                      className="flex gap-4 items-start border-b border-white/10 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="w-1 h-full bg-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-heading text-sm font-bold text-white mb-1">
                          {item.baslik}
                        </p>
                        <p className="text-xs text-white/60 font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 3. Değerlerimiz ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Değerlerimiz
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
                Çalışma Anlayışımızın Temeli
              </h2>
              <div className="w-10 h-px bg-gold mt-5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {degerler.map((d) => (
                <div key={d.baslik} className="bg-krem p-6">
                  <div className="w-8 h-px bg-gold mb-5" />
                  <p className="font-heading text-sm font-bold text-antrasit mb-3">
                    {d.baslik}
                  </p>
                  <p className="text-xs text-taupe font-sans leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 4. Çalışma Anlayışı ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Süreç
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
                Nivora&apos;da Süreç Nasıl Düşünülür?
              </h2>
              <div className="w-10 h-px bg-gold mt-5" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {asamalar.map((a) => (
                <div key={a.num} className="bg-white p-8">
                  <span className="font-heading text-3xl font-bold text-gold/25 mb-6 block">
                    {a.num}
                  </span>
                  <p className="font-heading text-base font-bold text-antrasit mb-3">
                    {a.baslik}
                  </p>
                  <p className="text-sm text-taupe font-sans leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 5. Kalite Yaklaşımı ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Kalite Anlayışı
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
                  Kalite, Sadece Son Görünüm Değildir
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  İyi bir tadilat; yalnızca fotoğrafta güzel görünen sonuçtan
                  ibaret değildir. Kullanılan malzeme, altyapı, yüzey hazırlığı,
                  işçilik detayları ve teslim sonrası kullanım dayanıklılığı
                  birlikte düşünülmelidir. Nivora&apos;nın kalite anlayışı bu
                  bütünlüğe dayanır.
                </p>
              </div>
              <div className="flex items-end lg:justify-end">
                <blockquote className="border-l-2 border-gold pl-6">
                  <p className="font-heading text-base lg:text-lg font-bold text-white/90 leading-snug italic">
                    &ldquo;Her bütçeye aynı sonucu vaat etmeyiz; her bütçeye en
                    doğru çözümü şeffaf şekilde sunarız.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {kaliteKartlari.map((k) => (
                <div
                  key={k.baslik}
                  className="border border-white/10 p-6 hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="w-8 h-px bg-gold mb-5" />
                  <p className="font-heading text-sm font-bold text-white mb-2">
                    {k.baslik}
                  </p>
                  <p className="text-xs text-white/50 font-sans leading-relaxed">
                    {k.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 6. Hizmet Alanları ── */}
      <AnimatedSection>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
              <div className="lg:w-64 flex-shrink-0 mb-10 lg:mb-0">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Hizmetler
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit leading-tight">
                  Hizmet Verdiğimiz Alanlar
                </h2>
                <div className="w-10 h-px bg-gold mt-5 mb-6" />
                <p className="text-xs text-taupe font-sans leading-relaxed">
                  Her hizmet için ayrıntılı bilgi ve süreç açıklaması ilgili
                  sayfada yer almaktadır.
                </p>
              </div>

              <div className="flex-1 divide-y divide-bej">
                {hizmetler.map((h) => (
                  <Link
                    key={h.href}
                    href={h.href}
                    className="flex items-center justify-between gap-4 py-5 group"
                  >
                    <span className="font-heading text-sm font-bold text-antrasit group-hover:text-gold transition-colors duration-200">
                      {h.baslik}
                    </span>
                    <span className="flex-shrink-0 text-taupe group-hover:text-gold transition-colors duration-200 text-lg leading-none">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 7. Hizmet Bölgeleri ── */}
      <AnimatedSection>
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
              <div className="lg:w-64 flex-shrink-0 mb-10 lg:mb-0">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  Hizmet Alanı
                </p>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit leading-tight">
                  Ankara&apos;da Hizmet Verdiğimiz Bölgeler
                </h2>
                <div className="w-10 h-px bg-gold mt-5 mb-6" />
                <p className="text-xs text-taupe font-sans leading-relaxed">
                  Nivora, Ankara genelinde hizmet verir. Çankaya, İncek,
                  Ümitköy, Gölbaşı, Etimesgut, Eryaman, Batıkent ve Yenimahalle
                  öncelikli hizmet bölgeleri arasındadır.
                </p>
              </div>
              <div className="flex-1 flex flex-wrap gap-3 content-start">
                {bolgeler.map((b) => (
                  <span
                    key={b}
                    className="px-4 py-2 bg-white border border-bej text-sm text-antrasit font-sans tracking-wide"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 8. Final CTA ── */}
      <AnimatedSection>
        <section className="bg-antrasit py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                  İletişim
                </p>
                <h2 className="font-heading text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  Tadilat Sürecine Güvenle Başlamak İstiyorsanız, Tanışalım
                </h2>
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  Eviniz, banyonuz, mutfağınız veya ticari alanınız için
                  düşündüğünüz yenilemeyi bize iletin. İhtiyacınızı birlikte
                  netleştirelim.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  WhatsApp&apos;tan Yaz
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 font-heading text-sm tracking-wide hover:border-white/50 hover:text-white transition-colors duration-200"
                >
                  Ücretsiz Keşif Talep Et
                </Link>
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
