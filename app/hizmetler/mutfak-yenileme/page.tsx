import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Mutfak Yenileme | Nivora — Ankara",
  description:
    "Ankara'da profesyonel mutfak yenileme. Mutfak dolapları, tezgah, seramik, tesisat ve aydınlatma dahil komple mutfak dönüşümü. Yazılı teklif, 1 yıl garanti.",
};

const WHATSAPP_URL = "https://wa.me/905321234567";

const yapilanIsler = [
  { title: "Mutfak Dolapları", desc: "Ölçüye göre üretilen alt ve üst dolaplar, sürme veya açılır kapılar." },
  { title: "Tezgah & Arka Panel", desc: "Granit, kuvars, kompakt laminat tezgah ve fayans/cam arka panel uygulaması." },
  { title: "Zemin & Duvar Kaplaması", desc: "Seramik, porselen veya vinil zemin; mutfağa özel duvar fayansı." },
  { title: "Tesisat Düzenlemesi", desc: "Su giriş-çıkış, evye bağlantısı, davlumbaz ve ankastre cihaz tesisatı." },
  { title: "Aydınlatma", desc: "Dolap altı LED, ada veya tavan spotları ile işlevsel ve estetik aydınlatma." },
  { title: "Ankastre Cihazlar", desc: "Fırın, ocak, bulaşık makinesi ve buzdolabı entegrasyonu ve montajı." },
];

const sure = [
  { step: "01", title: "Keşif & Ölçüm", desc: "Mevcut mutfak durumu ve tesisat değerlendirilir, ölçüm alınır." },
  { step: "02", title: "Tasarım & Seçim", desc: "Dolap modeli, renk, tezgah ve zemin birlikte seçilir." },
  { step: "03", title: "Sökme & Hazırlık", desc: "Eski mutfak sökülür, duvarlar ve zemin hazırlanır." },
  { step: "04", title: "Kaplama & Montaj", desc: "Seramik, dolap ve tezgah sırasıyla uygulanır." },
  { step: "05", title: "Tesisat & Teslim", desc: "Bağlantılar yapılır, ankastre cihazlar monte edilir, teslim." },
];

export default function MutfakYenilemePage() {
  const mutfakProjects = projects.filter((p) => p.category === "Mutfak Yenileme");

  return (
    <>
      <PageHero
        label="Hizmetler / Mutfak Yenileme"
        title="Mutfak Yenileme"
        subtitle="Mutfağınızı kullanışlı ve estetik bir alana dönüştürüyoruz. Dolaptan tezgaha, zemine kadar her detayı özenle planlıyoruz."
        image="/images/hero/mutfak-yenileme-hero.png"
        imageAlt="Mutfak yenileme Ankara"
      />

      {/* Yapılan İşler */}
      <section className="bg-krem py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
              Kapsam
            </p>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
              Neler Dahil?
            </h2>
            <div className="w-10 h-px bg-gold mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yapilanIsler.map((item) => (
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

      {/* Süreç */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
              Süreç
            </p>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
              Nasıl İlerliyoruz?
            </h2>
            <div className="w-10 h-px bg-gold mt-4" />
          </div>
          <div className="flex flex-col lg:flex-row gap-0">
            {sure.map((s, i) => (
              <div
                key={s.step}
                className="flex-1 relative pl-8 lg:pl-0 lg:pt-8 pb-8 lg:pb-0 lg:pr-6"
              >
                {i < sure.length - 1 && (
                  <>
                    <div
                      aria-hidden
                      className="absolute left-3 top-10 bottom-0 w-px border-l border-dashed border-bej lg:hidden"
                    />
                    <div
                      aria-hidden
                      className="absolute top-3 left-[calc(50%+20px)] right-0 h-px border-t border-dashed border-bej hidden lg:block"
                    />
                  </>
                )}
                <div className="flex items-center gap-3 mb-3 lg:mb-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gold text-gold font-heading text-[10px] font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-antrasit">
                    {s.title}
                  </h3>
                </div>
                <p className="text-xs text-taupe leading-relaxed font-sans lg:pr-4">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Örnek Dönüşümler */}
      {mutfakProjects.length > 0 && (
        <section className="bg-krem py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
                Referans
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-antrasit">
                Konsept Dönüşüm Örnekleri
              </h2>
              <div className="w-10 h-px bg-gold mt-4" />
              <p className="text-xs text-taupe mt-4 font-sans">
                Görseller konsept tasarım örneklerini temsil eder.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mutfakProjects.map((project) => (
                <div key={project.id} className="relative bg-white overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 bg-antrasit/80 px-3 py-1">
                      <span className="text-gold text-[10px] font-heading tracking-widest uppercase">
                        Konsept Örnek
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-heading text-sm font-bold text-antrasit mb-1">
                      {project.title}
                    </p>
                    <p className="text-xs text-taupe font-sans">
                      {project.area} · {project.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Garantiler */}
      <section className="bg-antrasit py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ölçüye Göre Üretim",
                desc: "Dolap ve tezgah mutfağınıza özgü ölçülerde üretilir, tam oturum sağlanır.",
              },
              {
                title: "1 Yıl İşçilik Garantisi",
                desc: "Teslim sonrası 1 yıl boyunca işçilik kaynaklı sorunlarda müdahale garantisi.",
              },
              {
                title: "Şeffaf Fiyat",
                desc: "Teklif kapsamı sabit kalır. Başlanmadan onaylanan fiyat değişmez.",
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
            Mutfağınız İçin Teklif Alın
          </h2>
          <p className="text-taupe font-sans text-sm lg:text-base leading-relaxed mb-8">
            Mevcut mutfağınızın fotoğraflarını gönderin, ihtiyacınızı anlatalım.
            Keşif ziyareti ücretsiz ve bağlayıcı değildir.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-heading text-sm tracking-wide hover:bg-gold/90 transition-colors duration-200"
          >
            <WhatsAppIcon />
            WhatsApp&apos;tan Ücretsiz Keşif Talep Edin
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
