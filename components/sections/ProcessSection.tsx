const steps = [
  {
    number: "01",
    Icon: PhoneIcon,
    title: "Ön Görüşme",
    description: "İhtiyaçlarınızı dinleyerek projeyi genel hatlarıyla değerlendiriyoruz.",
  },
  {
    number: "02",
    Icon: PhotoIcon,
    title: "Fotoğraf / Bilgi Alma",
    description: "Mekânın mevcut durumuyla ilgili bilgi ve fotoğrafları topluyoruz.",
  },
  {
    number: "03",
    Icon: MapPinIcon,
    title: "Yerinde Keşif",
    description: "Mekânı yerinde değerlendiriyor, ölçüm ve tespit yapıyoruz.",
  },
  {
    number: "04",
    Icon: DocIcon,
    title: "Yazılı Teklif",
    description: "Detaylı ve şeffaf teklif sunuyoruz. Sürpriz maliyet yok.",
  },
  {
    number: "05",
    Icon: PlanIcon,
    title: "Planlama",
    description: "Tasarım ve uygulama planını oluşturuyoruz, malzeme seçimi yapılıyor.",
  },
  {
    number: "06",
    Icon: ToolIcon,
    title: "Uygulama",
    description: "Planlı biçimde uygulamaya geçiyoruz. Günlük güncelleme yapılıyor.",
  },
  {
    number: "07",
    Icon: KeyIcon,
    title: "Son Kontrol & Teslim",
    description: "Kontrol edip teslim ediyoruz. İşimiz bitse de desteğimiz devam eder.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
            Süreç
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
            Süreç Nasıl İlerliyor?
          </h2>
          <div className="w-10 h-px bg-gold mx-auto" />
        </div>

        {/* Steps — 7-column grid on desktop */}
        <div className="hidden lg:block relative">
          {/* Single connector track behind all icons */}
          <div
            aria-hidden
            className="absolute border-t border-dashed border-bej"
            style={{ top: "24px", left: "calc(100% / 14)", right: "calc(100% / 14)" }}
          />
          <div className="grid grid-cols-7 gap-4">
            {steps.map((step) => {
              const Icon = step.Icon;
              return (
                <div key={step.number} className="relative text-center group">
                  {/* Icon circle */}
                  <div className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full border-2 border-bej bg-white group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200 flex items-center justify-center">
                    <span className="text-taupe group-hover:text-gold transition-colors duration-200">
                      <Icon />
                    </span>
                  </div>

                  {/* Number */}
                  <p className="font-heading text-gold/40 text-xs font-bold tracking-widest mb-2">
                    {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="font-heading text-xs font-bold text-antrasit mb-2 leading-tight px-1">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-taupe leading-relaxed font-sans px-1">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            return (
              <div key={step.number} className="relative flex gap-5 pb-8">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-5 top-12 bottom-0 w-px border-l border-dashed border-bej"
                  />
                )}

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-bej bg-white flex items-center justify-center">
                  <span className="text-taupe">
                    <Icon size={16} />
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <p className="text-gold/50 text-[10px] font-heading font-bold tracking-widest mb-1">
                    {step.number}
                  </p>
                  <h3 className="font-heading text-sm font-bold text-antrasit mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function PhotoIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21,15 16,10 5,21" />
    </svg>
  );
}

function MapPinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function DocIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function PlanIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function ToolIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function KeyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}
