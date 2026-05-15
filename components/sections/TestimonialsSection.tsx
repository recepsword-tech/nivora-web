import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-krem py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
            Müşteri Yorumları
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="w-10 h-px bg-gold mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border border-bej/60 p-8 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-gold/30 mb-5">
                <svg width="36" height="28" viewBox="0 0 36 28" fill="currentColor">
                  <path d="M0 28V16.8C0 7.6 5.6 2.4 16.8 0l2.4 3.6C13.6 5.2 10.4 8.4 9.6 13.2H16V28H0zm20 0V16.8C20 7.6 25.6 2.4 36.8 0l2.4 3.6C33.6 5.2 30.4 8.4 29.6 13.2H36V28H20z" />
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-sm text-taupe leading-relaxed font-sans flex-1 mb-6 italic">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-5" />

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading text-sm font-bold text-antrasit">
                    {t.author}
                  </p>
                  <p className="text-xs text-taupe/70 font-sans mt-0.5">
                    {t.location}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#B08D57"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
