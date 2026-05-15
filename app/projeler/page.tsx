import type { Metadata } from "next";
import ProjelerClient from "./ProjelerClient";

export const metadata: Metadata = {
  title: "Dönüşüm Örnekleri | Nivora — Ankara Tadilat",
  description:
    "Nivora tarafından hazırlanan konsept dönüşüm örnekleri. Komple tadilat, banyo yenileme, mutfak yenileme ve ticari alan uygulamaları.",
};

export default function ProjelerPage() {
  return <ProjelerClient />;
}
