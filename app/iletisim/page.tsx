import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim ve Keşif Talebi | Nivora",
  description:
    "Nivora ile Ankara'da tadilat ve dekorasyon hizmetleri için iletişime geçin. WhatsApp üzerinden fotoğraf göndererek keşif ve ön değerlendirme talep edin.",
};

export default function IletisimPage() {
  return <IletisimClient />;
}
