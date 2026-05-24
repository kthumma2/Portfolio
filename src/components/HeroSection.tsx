import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { Magnet } from './ui/Magnet';
import { ContactButton } from './ui/ContactButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function NavBar() {
  return (
    <FadeIn delay={0} y={-20}>
      <nav
        aria-label="Primary navigation"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 'clamp(20px, 3vw, 32px) clamp(20px, 4vw, 40px)',
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              color: '#D7E2EA',
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: 'clamp(0.8rem, 1.2vw, 1.3rem)',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.5')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            {label}
          </a>
        ))}
      </nav>
    </FadeIn>
  );
}

function ProfilePortrait() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 0,
        zIndex: 10,
        width: 'clamp(240px, 35vw, 500px)',
      }}
    >
      {/* Ambient cinematic glow behind the image */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-20%',
          background:
            'radial-gradient(ellipse 60% 70% at 45% 35%, rgba(200, 168, 140, 0.09) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
        <motion.div
          animate={prefersReduced ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.02, rotate: 0 }}
          style={{ rotate: -1.5 }}
        >
          {/* Corner accent marks — premium framing */}
          <div aria-hidden style={{ position: 'absolute', top: -8, left: -8, width: 20, height: 20, borderTop: '1.5px solid rgba(215,226,234,0.35)', borderLeft: '1.5px solid rgba(215,226,234,0.35)', zIndex: 2 }} />
          <div aria-hidden style={{ position: 'absolute', top: -8, right: -8, width: 20, height: 20, borderTop: '1.5px solid rgba(215,226,234,0.35)', borderRight: '1.5px solid rgba(215,226,234,0.35)', zIndex: 2 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: -8, left: -8, width: 20, height: 20, borderBottom: '1.5px solid rgba(215,226,234,0.35)', borderLeft: '1.5px solid rgba(215,226,234,0.35)', zIndex: 2 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: -8, right: -8, width: 20, height: 20, borderBottom: '1.5px solid rgba(215,226,234,0.35)', borderRight: '1.5px solid rgba(215,226,234,0.35)', zIndex: 2 }} />

          {/* Image frame with depth */}
          <div
            style={{
              borderRadius: 14,
              overflow: 'hidden',
              border: '1px solid rgba(215, 226, 234, 0.07)',
              boxShadow: [
                '0 0 0 1px rgba(255,255,255,0.04)',
                '0 4px 8px rgba(0,0,0,0.55)',
                '0 16px 48px rgba(0,0,0,0.7)',
                '0 48px 96px rgba(0,0,0,0.65)',
              ].join(', '),
              position: 'relative',
            }}
          >
            <img
              src="/assets/profile.png"
              alt="Kaushik Thumma — Software Engineer"
              loading="eager"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                filter: 'brightness(1.06) contrast(1.07) saturate(1.1)',
              }}
            />
            {/* Cinematic vignette */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 45%, rgba(12,12,12,0.45) 100%)',
                pointerEvents: 'none',
              }}
            />
            {/* Subtle bottom fade so portrait bleeds into page */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(to bottom, transparent, rgba(12,12,12,0.6))',
                pointerEvents: 'none',
              }}
            />
          </div>
        </motion.div>
      </Magnet>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#0C0C0C',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <NavBar />

      {/* Hero heading */}
      <div style={{ overflow: 'hidden', padding: '0 clamp(20px, 4vw, 40px)' }}>
        <FadeIn delay={0.15} y={40}>
          <h1
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              width: '100%',
              fontSize: 'clamp(12vw, 17.5vw, 17.5vw)',
              color: '#D7E2EA',
              marginTop: 'clamp(-20px, -2vw, -4px)',
            }}
          >
            Hi, I&apos;m Kaushik
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — centered, sits above the bottom bar */}
      <div style={{ position: 'relative', flex: 1 }}>
        <FadeIn delay={0.6} y={30}>
          <ProfilePortrait />
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: 'clamp(20px, 3vw, 40px) clamp(20px, 4vw, 40px)',
          paddingBottom: 'clamp(28px, 3.5vw, 40px)',
          position: 'relative',
          zIndex: 20,
        }}
      >
        <FadeIn delay={0.35} y={20}>
          <p
            style={{
              color: '#D7E2EA',
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              lineHeight: 1.35,
              fontSize: 'clamp(0.7rem, 1.3vw, 1.35rem)',
              maxWidth: 'clamp(150px, 22vw, 260px)',
            }}
          >
            Software engineer building scalable systems and memorable products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
