import Link from "next/link";
import Image from "next/image";

import { waUrl } from "@/data/contact";

const WHATSAPP_URL = waUrl("photo");

const badges = [
  { label: "Temiz Çalışma", icon: SparkleIcon },
  { label: "İnce İşçilik", icon: PenIcon },
  { label: "Yazılı Teklif", icon: DocIcon },
  { label: "Teslim Sonrası Destek", icon: ShieldIcon },
];

export default function HeroSection() {
  return (
    <section className="relative bg-krem min-h-screen flex flex-col lg:flex-row pt-16 overflow-hidden">
      {/* Left: Content */}
      <div className="flex-1 flex items-center py-20 lg:py-0">
        <div className="w-full px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-10">
          <p className="text-xs uppercase tracking-[0.25em] text-antrasit/65 mb-8 font-sans">
            Ankara — Anahtar Teslim Tadilat & Dekorasyon
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-bold text-antrasit leading-[1.1] mb-6">
            Ankara&apos;da Güvenilir Anahtar Teslim Tadilat &amp; Dekorasyon
          </h1>

          <div className="w-12 h-px bg-gold my-7" />

          <p className="text-base lg:text-lg text-antrasit/65 leading-relaxed mb-10 max-w-lg font-sans">
            Nivora, evinizi temiz çalışma, ince işçilik ve planlı süreçle
            yenileyen modern tadilat-dekorasyon markasıdır.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-antrasit text-white text-sm tracking-wide font-sans hover:bg-gold transition-colors duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <CalendarIcon />
              Ücretsiz Keşif Talep Et
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-antrasit/25 text-antrasit text-sm tracking-wide font-sans hover:bg-antrasit hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon />
              WhatsApp&apos;tan Fotoğraf Gönder
            </a>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center gap-x-0 gap-y-3">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className={`flex items-center gap-2 text-xs text-antrasit/70 font-sans pr-5 ${
                    i < badges.length - 1 ? "mr-5 border-r border-bej" : ""
                  }`}
                >
                  <span className="text-gold">
                    <Icon />
                  </span>
                  {badge.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Hero image */}
      <div className="relative lg:w-[44%] h-72 sm:h-96 lg:h-auto lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/home-hero.png"
            alt="Nivora — modern iç mekan tadilat ve dekorasyon örneği"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 44vw"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-krem/30 to-transparent hidden lg:block"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent"
          />
        </div>
        {/* Gold corner accents */}
        <div
          aria-hidden
          className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold/50 z-10"
        />
        <div
          aria-hidden
          className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-gold/50 z-10"
        />
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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

function SparkleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3a2.828 2.828 0 014 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
