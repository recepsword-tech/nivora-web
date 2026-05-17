"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { waUrlRaw } from "@/data/contact";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

const WHATSAPP_URL = waUrlRaw();

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-antrasit border-b transition-all duration-300 ${
        scrolled ? "border-white/10 shadow-lg shadow-black/20" : "border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
            {logoError ? (
              <span className="font-heading text-lg font-bold tracking-[0.2em] text-white">
                NIVORA
              </span>
            ) : (
              <div className="relative w-[110px] lg:w-[140px] h-8 lg:h-9">
                <Image
                  src="/images/logo/nivora-logo-light.png"
                  alt="Nivora"
                  fill
                  className="object-contain object-left"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors duration-200 pb-0.5 ${
                    active
                      ? "text-gold"
                      : "text-white/55 hover:text-white/90"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-5 py-2 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-antrasit transition-all duration-200"
          >
            <WhatsAppIcon />
            WhatsApp&apos;tan Yaz
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2 min-w-[44px] min-h-[44px] items-center"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-200 origin-center ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-antrasit">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-wide py-3.5 border-b border-white/5 transition-colors duration-200 ${
                    active ? "text-gold" : "text-white/65 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 py-3.5 border border-gold text-gold text-sm tracking-wide min-h-[44px]"
            >
              <WhatsAppIcon />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
