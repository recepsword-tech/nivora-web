import type { Metadata } from "next";
import ProjelerClient from "./ProjelerClient";

export const metadata: Metadata = {
  title: "Seçili Dönüşüm Örnekleri | Nivora",
  description:
    "Nivora'nın Ankara'da tadilat ve dekorasyon hizmetlerindeki banyo, mutfak, komple ev ve ticari alan dönüşüm yaklaşımını gösteren seçili konsept örnekler.",
};

export default function ProjelerPage() {
  return <ProjelerClient />;
}
