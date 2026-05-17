export const contact = {
  businessName: "Nivora",
  tagline: "Ankara Anahtar Teslim Tadilat & Dekorasyon",

  phoneDisplay: "+90 553 786 93 08",
  phoneHref: "tel:+905537869308",
  whatsappNumber: "905537869308",

  email: "nivoradekorasyon@gmail.com",
  emailHref: "mailto:nivoradekorasyon@gmail.com",

  serviceArea: [
    "Çankaya",
    "İncek",
    "Ümitköy",
    "Gölbaşı",
    "Etimesgut",
    "Eryaman",
    "Batıkent",
    "Yenimahalle",
    "Keçiören",
    "Mamak",
    "Sincan",
    "Ankara Geneli",
  ],
} as const;

export const waMessages = {
  general:
    "Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Tadilat/dekorasyon hizmeti hakkında bilgi almak istiyorum.",
  photo:
    "Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Tadilat yapılacak alanın fotoğraflarını paylaşarak ön değerlendirme almak istiyorum.",
  banyo:
    "Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Banyo yenileme hizmetiniz hakkında bilgi almak istiyorum. Fotoğraf paylaşarak ön değerlendirme alabilir miyim?",
  mutfak:
    "Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Mutfak yenileme hizmetiniz hakkında bilgi almak istiyorum. Fotoğraf paylaşarak ön değerlendirme alabilir miyim?",
  anahtar:
    "Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Anahtar teslim ev tadilatı hakkında bilgi ve keşif talep etmek istiyorum.",
  boya:
    "Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Boya, alçı ve ince işçilik hizmetiniz hakkında bilgi almak istiyorum. Fotoğraf paylaşarak ön değerlendirme alabilir miyim?",
  magaza:
    "Merhaba, Nivora web sitesi üzerinden ulaşıyorum. Mağaza/ticari alan tadilatı hakkında bilgi almak istiyorum. Fotoğraf paylaşarak ön değerlendirme alabilir miyim?",
} as const;

export function waUrl(message: keyof typeof waMessages): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(waMessages[message])}`;
}

export function waUrlRaw(): string {
  return `https://wa.me/${contact.whatsappNumber}`;
}
