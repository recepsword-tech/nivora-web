import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Boya, Alçı ve İnce İşçilik | Nivora — Ankara",
  description:
    "Ankara'da alçı, saten boya, özel efekt boya, kartonpiyer ve duvar kağıdı uygulamaları. Titiz hazırlık, kaliteli malzeme, temiz çalışma.",
};

const WHATSAPP_URL = "https://wa.me/905321234567";

const uygulamalar = [
  {
    title: "Alçı & Saten",
    desc: "Duvar düzeltme, pürüzlü yüzeylerin saten alçıyla kaplanması. Boya öncesi mükemmel düzlük.",
  },
  {
    title: "Kartonpiyer & Asma Tavan",
    desc: "Dekoratif kartonpiyer profilleri, alçı asma tavan ve niş aydınlatma uygulamaları.",
  },
  {
    title: "Saten Boya",
    desc: "Astar ve çift kat saten boya. Renk danışmanlığı, temiz kenar ve köşe bitiş.",
  },
  {
    title: "Özel Efekt Boya",
    desc: "Dekoratif boyalar, beton efekti, kireç bazlı kaplama ve mat-kadife görünüm seçenekleri.",
  },
  {
    title: "Duvar Kağıdı",
    desc: "Seçim danışmanlığı, yüzey hazırlığı ve özenli uygulama. Desen hizalama dahil.",
  },
  {
    title: "Tavan Boyası & Yenileme",
    desc: "Tavan yüzeyinin tamiri, astar ve son kat boyası. Leke ve çatlak giderme.",
  },
];

const avantajlar = [
  "Boya öncesi titiz yüzey hazırlığı — saten alçı ve astar zorunlu",
  "Mobilyalar ve zemin koruma altına alınır, temiz çalışma garantisi",
  "Marka tercihinize göre veya öneri boyalarla çalışılır",
  "Renk seçiminde ücretsiz danışmanlık",
  "Köşe, kasa ve tavan birleşimlerinde keskin, düzgün bitiş",
];

export default function BoyaAlciPage() {
  return (
    <>
      <PageHero
        label="Hizmetler / Boya, Alçı ve İnce İşçilik"
        title="Boya, Alçı ve İnce İşçilik"
        subtitle="Duvarlarınıza karakter katıyoruz. Alçı hazırlığından özel efekt boyaya, kartonpiyerden duvar kağıdına kadar her uygulamada titiz işçilik."
        image="/images/services/boya-alci-ince-iscilik.png"
        imageAlt="Boya alçı ince işçilik Ankara"
      />

      {/* Uygulamalar */}
      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
              Kapsam
            </p>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
              Uygulama Alanları
            </h2>
            <div className="w-10 h-px bg-gold mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uygulamalar.map((item) => (
              <div key={item.title} className="bg-white p-6">
                <h3 className="font-heading text-sm font-bold text-antrasit mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-taupe leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Görsel + Avantajlar */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-80 lg:h-[420px] overflow-hidden bg-bej/30">
              <Image
                src="/images/services/boya-alci-ince-iscilik.png"
                alt="Boya ve alçı uygulaması"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Çalışma Anlayışı
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit mb-4">
                Hazırlık Kadar Sonuç da Önemli
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="text-sm text-taupe font-sans leading-relaxed mb-8">
                İyi bir boya işi doğru hazırlıkla başlar. Yüzeyi saten alçıyla
                düzeltiyor, astar uygulayarak boya tutunmasını garantiliyoruz.
                Sonuç uzun ömürlü, temiz ve tutarlı olur.
              </p>
              <ul className="space-y-3">
                {avantajlar.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-gold mt-2" />
                    <span className="text-xs text-taupe font-sans leading-relaxed">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Garantiler */}
      <section className="bg-antrasit py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kaliteli Malzeme",
                desc: "Uzun ömürlü sonuç için sertifikalı boyalar ve malzemeler kullanılır.",
              },
              {
                title: "1 Yıl İşçilik Garantisi",
                desc: "Teslim sonrası 1 yıl boyunca işçilik kaynaklı sorunlarda müdahale garantisi.",
              },
              {
                title: "Temiz Teslim",
                desc: "Çalışma sonrası alan temizlenir, boyaya bulaşmış yüzeyler temizlenerek teslim edilir.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-gold/30 pl-6">
                <h3 className="font-heading text-sm font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/55 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit mb-4">
            Teklif Almak İçin Yazın
          </h2>
          <p className="text-taupe font-sans text-sm lg:text-base leading-relaxed mb-8">
            Alan ölçülerinizi veya birkaç fotoğraf gönderin, fiyat aralığını
            hemen paylaşalım. Büyük projeler için keşif ziyareti ücretsizdir.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
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
