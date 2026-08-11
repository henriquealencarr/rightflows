import Image from "next/image";

const LOGOS = [
  { src: "/companies/2W.png", alt: "2W" },
  { src: "/companies/LAC.png", alt: "Legacy Automotive", scaleMobile: 1.4, scaleDesktop: 1.4 },
  { src: "/companies/clipper.png", alt: "Clipper", scaleMobile: 1.4, scaleDesktop: 1.4 },
  { src: "/companies/cryllex.png", alt: "Cryllex", scaleMobile: 1.4, scaleDesktop: 1.4 },
  { src: "/companies/custom_wondow.png", alt: "Custom Window" },
  { src: "/companies/logo-cerejeiras.webp", alt: "Cerejeiras", scaleMobile: 1.8, scaleDesktop: 1.3 },
  { src: "/companies/onze.png", alt: "Onze", scaleMobile: 1.6, scaleDesktop: 1.15 },
  { src: "/companies/taent_scout.png", alt: "Talent Scout", scaleMobile: 1.6, scaleDesktop: 1.6 },
  { src: "/companies/vat_consult.png", alt: "VAT Consult" },
];

export function LogoCarousel() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div className="logo-carousel relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="logo-carousel-track flex w-max gap-14 sm:gap-20 py-2">
        {track.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex items-center justify-center shrink-0 h-14 w-36 sm:h-16 sm:w-48 grayscale brightness-[3] opacity-90 hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
            style={logo.scaleMobile ? { marginLeft: 30, marginRight: 30 } : undefined}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={192}
              height={64}
              style={
                logo.scaleMobile
                  ? ({ width: "auto", height: "auto", "--logo-scale": logo.scaleMobile, "--logo-scale-sm": logo.scaleDesktop } as React.CSSProperties)
                  : { width: "auto", height: "auto" }
              }
              className={`max-h-14 sm:max-h-16 w-auto object-contain ${logo.scaleMobile ? "transform-[scale(var(--logo-scale))] sm:transform-[scale(var(--logo-scale-sm))]" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
