import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim | Nivora — Ankara Tadilat & Dekorasyon",
  description:
    "Nivora ile iletişime geçin. Ankara'da ücretsiz keşif randevusu alın. WhatsApp, telefon veya e-posta ile ulaşabilirsiniz.",
};

export default function IletisimPage() {
  return <IletisimClient />;
}
