"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterLogo() {
  const [error, setError] = useState(true);

  return (
    <Link
      href="/"
      className="inline-flex mb-5 hover:opacity-70 transition-opacity duration-200"
    >
      {error ? (
        <span className="font-heading text-base font-bold tracking-[0.2em] text-white">
          NIVORA
        </span>
      ) : (
        <div className="relative w-[130px] h-10">
          <Image
            src="/images/logo/nivora-logo-light.png"
            alt="Nivora"
            fill
            className="object-contain object-left"
            onError={() => setError(true)}
          />
        </div>
      )}
    </Link>
  );
}
