"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/data/projects";
import { EASE_OUT, DURATION } from "@/lib/animations";

const fallbackGradients = [
  "from-[#3A3530] to-[#262220]",
  "from-[#363330] to-[#242220]",
  "from-[#383530] to-[#242218]",
  "from-[#343030] to-[#201C1C]",
  "from-[#363230] to-[#222020]",
  "from-[#303030] to-[#1E1E1E]",
];

export default function ProjectsSection() {
  const reduced = useReducedMotion();
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projeler" className="bg-antrasit py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
            Dönüşüm Örnekleri
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            Nasıl Dönüşüyor?
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mb-4" />
          <p className="text-white/40 text-xs font-sans max-w-sm mx-auto">
            Aşağıdaki görseller konsept dönüşüm örneklerdir.
            Gerçek proje fotoğrafları yakında eklenecektir.
          </p>
        </div>

        {/* Featured card */}
        <motion.div
          whileHover={reduced ? {} : { y: -4 }}
          transition={{ duration: DURATION.fast, ease: EASE_OUT }}
          className="mb-6 border border-white/10 overflow-hidden hover:border-gold/25 transition-colors duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-600"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${fallbackGradients[0]}`}
                />
              )}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 bg-gold/80 text-antrasit text-[10px] uppercase tracking-widest font-sans font-bold">
                  Konsept Dönüşüm
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-xs tracking-wide font-sans mb-5 w-fit">
                {featured.category}
              </span>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-4 leading-snug">
                {featured.title}
              </h3>
              <div className="flex items-center gap-6 text-sm text-white/50 font-sans mb-6">
                <span>{featured.area}</span>
                <span className="w-px h-4 bg-white/20" />
                <span>{featured.duration}</span>
              </div>
              <p className="text-xs text-white/30 font-sans italic">
                * Bu görsel konsept amaçlıdır; gerçek projeye ait değildir.
              </p>
              <div className="w-8 h-px bg-gold mt-6" />
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {rest.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={reduced ? {} : { y: -4 }}
              transition={{ duration: DURATION.fast, ease: EASE_OUT }}
              className="bg-antrasit group overflow-hidden hover:bg-antrasit/90 transition-colors duration-200 relative z-0 hover:z-10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${fallbackGradients[(idx + 1) % fallbackGradients.length]}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/15 font-heading text-[10px] uppercase tracking-[0.3em]">
                        Görsel Eklenecek
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3 z-10">
                  {project.image && (
                    <span className="px-2 py-0.5 bg-gold/70 text-antrasit text-[9px] uppercase tracking-widest font-sans font-bold">
                      Konsept
                    </span>
                  )}
                </div>
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-antrasit/60 to-transparent z-10"
                />
              </div>

              {/* Info */}
              <div className="p-5 border-t border-white/10 group-hover:border-gold/20 transition-colors duration-200">
                <span className="inline-block text-gold text-[10px] uppercase tracking-widest font-sans mb-2">
                  {project.category}
                </span>
                <h3 className="font-heading text-sm font-bold text-white mb-2.5 leading-snug group-hover:text-white transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-white/40 font-sans">
                  <span>{project.area}</span>
                  <span className="w-px h-3 bg-white/15" />
                  <span>{project.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs font-sans mt-8 italic">
          Tüm görseller konsept dönüşüm örneklerini temsil eder. Gerçek proje fotoğrafları eklenecektir.
        </p>
      </div>
    </section>
  );
}
