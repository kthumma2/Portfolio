import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW1 = [...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11)];
const ROW2 = [...IMAGES.slice(11), ...IMAGES.slice(11), ...IMAGES.slice(11)];

function ImageTile({ src, index }: { src: string; index: number }) {
  return (
    <div
      style={{
        width: 'clamp(260px, 30vw, 420px)',
        height: 'clamp(165px, 19vw, 270px)',
        borderRadius: 16,
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt=""
        role="presentation"
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.offsetTop;
      const scrollOffset = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      aria-label="Work samples showcase"
      style={{
        background: '#0C0C0C',
        paddingTop: 'clamp(80px, 12vw, 160px)',
        paddingBottom: 40,
        overflow: 'hidden',
      }}
    >
      {/* Row 1 — moves right */}
      <div style={{ marginBottom: 12, overflow: 'visible' }}>
        <div
          style={{
            display: 'flex',
            gap: 12,
            willChange: 'transform',
            transform: `translateX(${offset - 200}px)`,
            transition: prefersReduced ? 'none' : undefined,
          }}
        >
          {ROW1.map((src, i) => (
            <ImageTile key={i} src={src} index={i} />
          ))}
        </div>
      </div>

      {/* Row 2 — moves left */}
      <div style={{ overflow: 'visible' }}>
        <div
          style={{
            display: 'flex',
            gap: 12,
            willChange: 'transform',
            transform: `translateX(${-(offset - 200)}px)`,
            transition: prefersReduced ? 'none' : undefined,
          }}
        >
          {ROW2.map((src, i) => (
            <ImageTile key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
