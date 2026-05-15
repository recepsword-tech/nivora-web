import Link from "next/link";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/905321234567";
const PHONE = "0532 123 45 67";
const PHONE_SECONDARY = "0312 123 45 67";

const footerServices = [
  { label: "Anahtar Teslim Ev Tadilatı", href: "/hizmetler/anahtar-teslim-tadilat" },
  { label: "Banyo Yenileme", href: "/hizmetler/banyo-yenileme" },
  { label: "Mutfak Yenileme", href: "/hizmetler/mutfak-yenileme" },
  { label: "Boya, Alçı ve İnce İşçilik", href: "/hizmetler/boya-alci-ince-iscilik" },
  { label: "Mağaza & Ticari Alan", href: "/hizmetler/magaza-ticari-alan" },
];

const regions = ["Çankaya", "Gölbaşı", "Keçiören", "Mamak", "Etimesgut", "Ankara Geneli"];

export default function Footer() {
  return (
    <footer className="bg-antrasit text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex mb-5 hover:opacity-70 transition-opacity duration-200">
              <div className="relative w-[130px] h-10">
                <Image
                  src="/images/logo/nivora-logo-light.png"
                  alt="Nivora"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white/45 mb-6 max-w-[220px]">
              Ankara&apos;da anahtar teslim tadilat ve dekorasyon çözümleri sunuyoruz.
              Temiz çalışma, ince işçilik, planlı süreç.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", icon: InstagramIcon },
                { label: "Facebook", icon: FacebookIcon },
                { label: "Pinterest", icon: PinterestIcon },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-5 font-sans">
              Hizmetler
            </p>
            <ul className="space-y-3 text-sm">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-5 font-sans">
              Bölgeler
            </p>
            <ul className="space-y-3 text-sm">
              {regions.map((region) => (
                <li key={region} className="text-white/45">
                  {region}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-5 font-sans">
              İletişim
            </p>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 hover:text-gold transition-colors"
                >
                  <PhoneIcon />
                  {PHONE_SECONDARY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-gold transition-colors"
                >
                  <WhatsAppIcon />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nivora.com.tr"
                  className="flex items-center gap-2.5 hover:text-gold transition-colors"
                >
                  <MailIcon />
                  info@nivora.com.tr
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/40">
                <MapPinIcon />
                <span>Çankaya / Ankara</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Nivora. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <Link href="#" className="hover:text-white/50 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="hover:text-white/50 transition-colors">
              KVKK
            </Link>
            <Link href="#" className="hover:text-white/50 transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.32 1.26-5.32s-.32-.64-.32-1.59c0-1.49.87-2.61 1.94-2.61.92 0 1.36.69 1.36 1.52 0 .93-.59 2.31-.9 3.6-.26 1.07.53 1.95 1.58 1.95 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.46-4.35-3.04 0-4.82 2.28-4.82 4.63 0 .92.35 1.9.8 2.43" />
    </svg>
  );
}
