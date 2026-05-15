import Image from "next/image";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative bg-antrasit pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 min-h-[420px] lg:min-h-[480px]">
          {/* Text */}
          <div className="flex flex-col justify-center py-16 lg:py-20 lg:pr-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 font-sans">
              {label}
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/60 font-sans text-base lg:text-lg leading-relaxed max-w-lg">
                {subtitle}
              </p>
            )}
            <div className="w-10 h-px bg-gold mt-8" />
          </div>

          {/* Image */}
          {image && (
            <div className="relative hidden lg:block">
              <div className="absolute inset-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover opacity-60"
                  sizes="44vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-antrasit via-antrasit/20 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
