import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Hakkımızda | Nivora — Ankara Tadilat & Dekorasyon",
  description:
    "Nivora, Ankara'da planlı süreç, doğru malzeme ve ince işçilikle tadilat ve dekorasyon hizmeti sunan bir ekiptir. Güvenilir, şeffaf ve temiz çalışma anlayışı.",
};

const WHATSAPP_URL = "https://wa.me/905321234567";

const anlayis = [
  {
    title: "Güvenilir Süreç",
    desc: "Her proje başlamadan önce kapsam, süre ve ödeme planı yazılı olarak belirlenir. Sözleşme dışına çıkmayız.",
  },
  {
    title: "Temiz Çalışma",
    desc: "Çalışma alanını her gün düzenli bırakıyoruz. Evinize ve mahremiyetinize saygı gösteriyoruz.",
  },
  {
    title: "İnce İşçilik",
    desc: "Köşe birleşimlerinden donanım montajına kadar her detayı özenle tamamlıyoruz.",
  },
  {
    title: "Doğru Malzeme",
    desc: "Uzun ömürlü sonuçlar için sertifikalı ve kaliteli malzeme seçimi yapıyoruz. Ucuz malzemeyle kısa vadeli çözüm sunmuyoruz.",
  },
  {
    title: "Planlı Teslimat",
    desc: "Zaman çizelgesi başlamadan belirlenir. Günlük ilerleme güncellemesi paylaşılır, sürpriz gecikme olmaz.",
  },
  {
    title: "Teslim Sonrası Destek",
    desc: "İş bitse de desteğimiz sürer. 1 yıl işçilik garantisi kapsamında her sorunda yanınızdayız.",
  },
];

const stats = [
  { value: "6+", label: "Yıllık Deneyim" },
  { value: "Yazılı", label: "Sözleşme & Teklif" },
  { value: "1 Yıl", label: "İşçilik Garantisi" },
  { value: "%100", label: "Anahtar Teslim" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        label="Hakkımızda"
        title="Tadilatta Güven, Kalite ve Şeffaflık"
        subtitle="Ankara'da planlı süreç, doğru malzeme seçimi ve ince işçilikle mekânları yeniliyoruz."
      />

      {/* Hikaye */}
      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Biz Kimiz
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit mb-6 leading-tight">
                Nivora Nedir?
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <div className="space-y-4 text-sm text-taupe leading-relaxed font-sans">
                <p>
                  Nivora, Ankara'da tadilat ve dekorasyon alanında hizmet veren
                  bir markadır. Küçük tadilatlardan anahtar teslim daire
                  yenilemeye kadar her ölçekte projeyi planlı ve şeffaf biçimde
                  yürütüyoruz.
                </p>
                <p>
                  Tadilat süreçlerindeki en büyük sorunların belirsizlik,
                  sürpriz maliyetler ve kalitesiz işçilik olduğunu gördük.
                  Bunun yerine net teklif, yazılı sözleşme ve günlük ilerleme
                  güncellemesiyle farklı bir deneyim sunmak için Nivora&apos;yı
                  kurduk.
                </p>
                <p>
                  Her projede malzeme seçiminden son dokunuşa kadar standarttan
                  ödün vermiyoruz. Teslim sonrası 1 yıl işçilik garantisi
                  sunuyor, işimiz bittikten sonra da yanınızda olmaya devam
                  ediyoruz.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-6 border-l-2 border-gold/30"
                >
                  <p className="font-heading text-2xl lg:text-3xl font-bold text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-taupe font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Çalışma Anlayışı */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
              Çalışma Anlayışı
            </p>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
              Farkı Yaratan İlkeler
            </h2>
            <div className="w-10 h-px bg-gold mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {anlayis.map((item) => (
              <div key={item.title} className="group">
                <div className="w-2 h-2 bg-gold mb-4" />
                <h3 className="font-heading text-sm font-bold text-antrasit mb-2 leading-snug">
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

      {/* Hizmet Bölgeleri */}
      <section className="bg-krem py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
              Bölgeler
            </p>
            <h2 className="font-heading text-xl lg:text-2xl font-bold text-antrasit">
              Ankara&apos;nın Her Noktasındayız
            </h2>
            <div className="w-10 h-px bg-gold mt-4" />
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Çankaya", "Keçiören", "Mamak", "Yenimahalle", "Etimesgut",
              "Sincan", "Altındağ", "Gölbaşı", "Pursaklar", "Çubuk",
            ].map((bolge) => (
              <span
                key={bolge}
                className="px-4 py-2 bg-white border border-bej text-xs text-taupe font-sans"
              >
                {bolge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-antrasit py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
            Birlikte Çalışalım
          </h2>
          <p className="text-white/60 font-sans text-sm lg:text-base leading-relaxed mb-8">
            Projenizi anlatın, size en kısa sürede dönelim. Keşif ücretsiz ve
            bağlayıcı değildir.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-gold font-heading text-sm tracking-wide hover:bg-gold hover:text-antrasit transition-all duration-200"
          >
            <WhatsAppIcon />
            WhatsApp&apos;tan Yazın
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
