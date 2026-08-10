import Image from "next/image";

const LOGOS = [
  { src: "/companies/2W.png", alt: "2W" },
  { src: "/companies/LAC.png", alt: "Legacy Automotive", scale: 1.4 },
  { src: "/companies/clipper.png", alt: "Clipper", scale: 1.4 },
  { src: "/companies/cryllex.png", alt: "Cryllex", scale: 1.4 },
  { src: "/companies/custom_wondow.png", alt: "Custom Window" },
  { src: "/companies/logo-cerejeiras.webp", alt: "Cerejeiras", scale: 1.3 },
  { src: "/companies/onze.png", alt: "Onze", scale: 1.6 },
  { src: "/companies/taent_scout.png", alt: "Talent Scout", scale: 1.6 },
  { src: "/companies/vat_consult.png", alt: "VAT Consult" },
];

export function LogoCarousel() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div className="logo-carousel relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="logo-carousel-track flex w-max gap-20 py-2">
        {track.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex items-center justify-center shrink-0 h-16 w-48 grayscale brightness-[3] opacity-90 hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
            style={logo.scale ? { marginLeft: 50, marginRight: 50 } : undefined}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={192}
              height={64}
              style={{ width: "auto", height: "auto", transform: logo.scale ? `scale(${logo.scale})` : undefined }}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
