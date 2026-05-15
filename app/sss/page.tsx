import type { Metadata } from "next";
import SSSClient from "./SSSClient";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Nivora — Ankara Tadilat",
  description:
    "Tadilat süreçleri, malzeme seçimi, fiyatlandırma, garanti ve çalışma bölgeleri hakkında sık sorulan sorular ve yanıtları.",
};

export default function SSSPage() {
  return <SSSClient />;
}
