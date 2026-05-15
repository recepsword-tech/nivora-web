"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section id="sss" className="bg-bej py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-sans">
            Sıkça Sorulan Sorular
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-antrasit mb-4">
            Merak Ettikleriniz
          </h2>
          <div className="w-10 h-px bg-gold mx-auto" />
        </div>

        {/* 2-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          {[leftFaqs, rightFaqs].map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-0">
              {group.map((faq) => {
                const globalIndex = groupIdx === 0
                  ? faqs.indexOf(faq)
                  : faqs.indexOf(faq);
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={globalIndex}
                    className="border-t border-antrasit/10 last:border-b"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : globalIndex)
                      }
                      className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                    >
                      <span className="font-heading text-sm font-bold text-antrasit group-hover:text-gold transition-colors duration-200 leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border border-antrasit/15 text-taupe transition-transform duration-200 ${
                          isOpen ? "rotate-45 border-gold text-gold" : ""
                        }`}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <line x1="5" y1="1" x2="5" y2="9" />
                          <line x1="1" y1="5" x2="9" y2="5" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 pr-8">
                        <p className="text-sm text-taupe leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
