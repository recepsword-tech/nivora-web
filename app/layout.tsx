import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
        <Analytics />
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4DWDWFK');`,
          }}
        />
      </body>
    </html>
  );
}
