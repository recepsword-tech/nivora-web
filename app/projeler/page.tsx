import type { Metadata } from "next";
import ProjelerClient from "./ProjelerClient";

export const metadata: Metadata = {
  title: "Tamamlanan İşlerimizden | Nivora",
  description:
    "Nivora'nın Ankara'da tamamladığı banyo yenileme, ev iç dizayn, balkon, veranda ve ticari alan tadilat projelerinden gerçek görseller ve videolar.",
};

export default function ProjelerPage() {
  return <ProjelerClient />;
}
