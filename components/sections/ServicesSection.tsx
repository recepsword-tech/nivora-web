"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { services } from "@/data/services";
import { EASE_OUT, DURATION } from "@/lib/animations";

const serviceGradients = [
  "from-[#D4C9B8] to-[#B5A48F]",
  "from-[#C8D4D8] to-[#A0B4BA]",
  "from-[#D4CCB8] to-[#B5A88A]",
  "from-[#CCCCC8] to-[#A8A49C]",
  "from-[#D0CDBA] to-[#B0A88C]",
  "from-[#CCBCB0] to-[#A89078]",
];

const serviceIcons = [
  HomeIcon,
  DropIcon,
  KitchenIcon,
  BrushIcon,
  FloorIcon,
  DecoIcon,
];

export default function ServicesSection() {
  const reduced = useReducedMotion();

  return (
    <section id="hizmetler" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
            Hizmetlerimiz
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
            Evinizin Her Köşesini Yeniliyoruz
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mb-5" />
          <p className="text-taupe text-sm max-w-md mx-auto font-sans leading-relaxed">
            İhtiyacınıza göre tek bir alanı ya da evinizin tamamını
            yeniliyoruz. Her projede aynı özen, aynı kalite.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.div
                key={service.id}
                whileHover={reduced ? {} : { y: -6 }}
                transition={{ duration: DURATION.fast, ease: EASE_OUT }}
                className="group bg-krem border border-bej/60 overflow-hidden hover:shadow-lg hover:shadow-antrasit/5 hover:border-gold/20 transition-shadow transition-colors duration-300 cursor-default"
              >
                {/* Image area */}
                <div className="relative h-48 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${serviceGradients[index % serviceGradients.length]}`}
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "linear-gradient(45deg, rgba(31,35,40,0.08) 25%, transparent 25%), linear-gradient(-45deg, rgba(31,35,40,0.08) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(31,35,40,0.08) 75%), linear-gradient(-45deg, transparent 75%, rgba(31,35,40,0.08) 75%)",
                          backgroundSize: "20px 20px",
                          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
                        }}
                      />
                    </div>
                  )}
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-white/70 font-heading font-bold text-xs tracking-widest bg-black/20 px-1.5 py-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/15 to-transparent z-10"
                  />
                </div>

                {/* Card body */}
                <div className="relative px-6 pt-8 pb-6">
                  <div className="absolute -top-5 left-6 w-10 h-10 bg-white border border-bej flex items-center justify-center group-hover:border-gold/40 transition-colors duration-300">
                    <span className="text-gold">
                      <Icon />
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-antrasit mb-3 mt-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed font-sans mb-5">
                    {service.description}
                  </p>
                  <Link
                    href="#iletisim"
                    className="inline-flex items-center gap-1.5 text-gold text-xs tracking-wide font-sans group-hover:gap-3 transition-all duration-200"
                  >
                    Detayları İncele
                    <ArrowRight />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3h18v18H3zM3 9h18M9 9v12M15 3v6" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18.37 2.63L14 7l-1.59-1.59 4.37-4.37 1.59 1.59zM14 7l-3 3-1.5-1.5 3-3L14 7zM7.5 13.5l-3 3c-1.5 1.5-1.5 3.5 0 5 1.5 1.5 3.5 1.5 5 0l3-3-5-5z" />
    </svg>
  );
}

function FloorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="9" height="9" />
      <rect x="13" y="2" width="9" height="9" />
      <rect x="2" y="13" width="9" height="9" />
      <rect x="13" y="13" width="9" height="9" />
    </svg>
  );
}

function DecoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
