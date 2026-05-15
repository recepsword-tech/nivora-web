import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    "Nivora, Ankara'da temiz çalışma, ince işçilik ve planlı süreçle evinizi yenileyen modern tadilat-dekorasyon markasıdır. Çankaya, İncek, Ümitköy, Gölbaşı ve Ankara genelinde hizmet.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
