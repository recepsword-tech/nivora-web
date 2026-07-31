type NivoraLogoProps = {
  className?: string;
  compact?: boolean;
};

export function NivoraMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <rect width="48" height="48" fill="#B08D57" />
      <path
        d="M13 35V13h5.5L30 27.2V13H35v22h-5.5L18 20.8V35H13Z"
        fill="#1F2328"
      />
    </svg>
  );
}

export default function NivoraLogo({
  className = "",
  compact = false,
}: NivoraLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <NivoraMark className={compact ? "h-8 w-8 shrink-0" : "h-10 w-10 shrink-0"} />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[17px] font-bold tracking-[0.18em] text-white">
          NIVORA
        </span>
        <span className="mt-1 text-[7px] font-medium tracking-[0.19em] text-gold">
          TADİLAT &amp; DEKORASYON
        </span>
      </span>
    </span>
  );
}
