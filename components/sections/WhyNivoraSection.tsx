const pillars = [
  {
    Icon: CalendarIcon,
    title: "Planlı Süreç",
    description:
      "Her adımı önceden planlıyoruz. Zaman çizelgesi başlamadan belirleniyor, sürpriz olmuyor.",
  },
  {
    Icon: ShieldIcon,
    title: "Doğru Malzeme",
    description:
      "Uzun ömürlü sonuçlar için kaliteli ve sertifikalı malzeme seçimi yapıyoruz.",
  },
  {
    Icon: SparkleIcon,
    title: "Temiz & Düzenli",
    description:
      "Çalışma alanını her gün düzenli bırakıyoruz. Evinize ve mahremiyetinize saygı gösteriyoruz.",
  },
  {
    Icon: PenIcon,
    title: "İnce İşçilik",
    description:
      "Köşe birleşimlerinden donanım montajına kadar her detayı özenle tamamlıyoruz.",
  },
  {
    Icon: CheckIcon,
    title: "Şeffaf Teklif",
    description:
      "Yazılı sözleşme, net fiyat. Kapsamı, süreyi ve maliyeti baştan belirliyoruz.",
  },
];

const stats = [
  { value: "Yazılı", label: "Sözleşme & Teklif" },
  { value: "6+", label: "Yıllık Deneyim" },
  { value: "1 Yıl", label: "İşçilik Garantisi" },
  { value: "%100", label: "Anahtar Teslim" },
];

export default function WhyNivoraSection() {
  return (
    <section id="hakkimizda" className="bg-krem py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 mb-16">
          <div className="lg:w-56 flex-shrink-0">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4 font-sans">
              Neden Nivora
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit leading-tight">
              Farkı Yaratan İlkeler
            </h2>
            <div className="w-10 h-px bg-gold mt-6" />
          </div>

          {/* Pillars */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.Icon;
              return (
                <div key={pillar.title} className="group">
                  <div className="w-12 h-12 rounded-full border border-gold/30 bg-white flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                    <span className="text-gold">
                      <Icon />
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-taupe leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-bej pt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl lg:text-3xl font-bold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-taupe font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 3a2.828 2.828 0 014 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  );
}
