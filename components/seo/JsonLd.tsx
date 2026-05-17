import { contact } from "@/data/contact";

const SITE_URL = "https://nivoradekorasyon.com";

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: contact.businessName,
  description:
    "Ankara'da anahtar teslim tadilat, dekorasyon, banyo yenileme, mutfak tadilatı, boya, alçı ve ticari alan yenileme hizmetleri sunan marka.",
  url: SITE_URL,
  telephone: contact.phoneDisplay,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ankara",
    addressCountry: "TR",
  },
  areaServed: [
    "Ankara",
    "Çankaya",
    "İncek",
    "Ümitköy",
    "Gölbaşı",
    "Etimesgut",
    "Eryaman",
    "Batıkent",
    "Yenimahalle",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tadilat ve Dekorasyon Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Anahtar Teslim Ev Tadilatı",
          url: `${SITE_URL}/hizmetler/anahtar-teslim-tadilat`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Banyo Yenileme",
          url: `${SITE_URL}/hizmetler/banyo-yenileme`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mutfak Yenileme",
          url: `${SITE_URL}/hizmetler/mutfak-yenileme`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boya, Alçı ve İnce İşçilik",
          url: `${SITE_URL}/hizmetler/boya-alci-ince-iscilik`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mağaza ve Ticari Alan Tadilatı",
          url: `${SITE_URL}/hizmetler/magaza-ticari-alan`,
        },
      },
    ],
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
