import Link from "next/link";
import NivoraLogo from "@/components/brand/NivoraLogo";

export default function FooterLogo() {
  return (
    <Link
      href="/"
      aria-label="Nivora ana sayfa"
      className="inline-flex mb-5 hover:opacity-70 transition-opacity duration-200"
    >
      <NivoraLogo />
    </Link>
  );
}
