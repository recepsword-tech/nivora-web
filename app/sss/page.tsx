import type { Metadata } from "next";
import SSSClient from "./SSSClient";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Nivora",
  description:
    "Nivora tadilat ve dekorasyon hizmetleri hakkında fiyat, keşif, malzeme, süre, işçilik ve teslimatla ilgili sıkça sorulan soruların cevapları.",
};

export default function SSSPage() {
  return <SSSClient />;
}
