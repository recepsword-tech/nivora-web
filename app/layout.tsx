import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nivora | Ankara Anahtar Teslim Tadilat & Dekorasyon",
  description:
    "Nivora, Ankara'da ev, banyo, mutfak ve ticari alanlar için temiz çalışma, ince işçilik ve güvenilir süreç odaklı tadilat ve dekorasyon hizmeti sunar.",
  icons: {
    icon: "/images/logo/nivora-mark.png",
    apple: "/images/logo/nivora-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col bg-krem text-antrasit">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
