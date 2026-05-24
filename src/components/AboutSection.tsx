import { AnimatedText } from './ui/AnimatedText';
import { ContactButton } from './ui/ContactButton';
import { FadeIn } from './ui/FadeIn';

/* ── Decorative corner elements (CSS-only, no third-party images) ── */

function RingDecoration({ size }: { size: number }) {
  return (
    <div aria-hidden style={{ position: 'relative', width: size, height: size }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(215,226,234,0.1)' }} />
      <div style={{ position: 'absolute', inset: '22%', borderRadius: '50%', border: '1px solid rgba(215,226,234,0.07)' }} />
      <div style={{ position: 'absolute', inset: '44%', borderRadius: '50%', background: 'rgba(215,226,234,0.04)' }} />
    </div>
  );
}

function DiamondDecoration({ size }: { size: number }) {
  return (
    <div aria-hidden style={{ position: 'relative', width: size, height: size }}>
      <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(215,226,234,0.1)', transform: 'rotate(45deg)' }} />
      <div style={{ position: 'absolute', inset: '28%', border: '1px solid rgba(215,226,234,0.06)', transform: 'rotate(45deg)' }} />
    </div>
  );
}

function DotsDecoration({ cols = 5, rows = 5 }: { cols?: number; rows?: number }) {
  return (
    <div
      aria-hidden
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 'clamp(6px, 1vw, 10px)',
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 'clamp(3px, 0.4vw, 5px)',
            height: 'clamp(3px, 0.4vw, 5px)',
            borderRadius: '50%',
            background: `rgba(215,226,234,${0.06 + (i % cols) * 0.02})`,
          }}
        />
      ))}
    </div>
  );
}

function BracketDecoration() {
  return (
    <div
      aria-hidden
      style={{
        fontFamily: 'Kanit, sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(80px, 12vw, 160px)',
        color: 'rgba(215,226,234,0.05)',
        lineHeight: 1,
        letterSpacing: '-0.08em',
        userSelect: 'none',
      }}
    >
      {'{ }'}
    </div>
  );
}

const ABOUT_TEXT =
  'With hands-on experience building full-stack applications, I focus on writing clean, scalable code that solves real problems. From React frontends to cloud-native backends on AWS, I engineer things that ship and hold up under pressure. I believe great software is engineering AND craft. Let’s build something meaningful together.';

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        background: '#0C0C0C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 40px)',
        overflow: 'hidden',
      }}
    >
      {/* Top-left: ring */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <div style={{ position: 'absolute', top: '4%', left: 'clamp(12px, 4vw, 60px)' }}>
          <RingDecoration size={160} />
        </div>
      </FadeIn>

      {/* Bottom-left: diamond */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <div style={{ position: 'absolute', bottom: '8%', left: 'clamp(24px, 10vw, 120px)' }}>
          <DiamondDecoration size={120} />
        </div>
      </FadeIn>

      {/* Top-right: dots */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <div style={{ position: 'absolute', top: '4%', right: 'clamp(12px, 4vw, 60px)' }}>
          <DotsDecoration cols={5} rows={5} />
        </div>
      </FadeIn>

      {/* Bottom-right: bracket */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <div style={{ position: 'absolute', bottom: '4%', right: 'clamp(12px, 6vw, 80px)' }}>
          <BracketDecoration />
        </div>
      </FadeIn>

      {/* Center content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'clamp(32px, 5vw, 64px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <FadeIn delay={0} y={40}>
          <h2
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: '#D7E2EA',
              fontSize: 'clamp(3rem, 12vw, 140px)',
            }}
          >
            About Me
          </h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(48px, 8vw, 96px)' }}>
          <AnimatedText
            text={ABOUT_TEXT}
            style={{
              color: '#D7E2EA',
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 500,
              lineHeight: 1.7,
              maxWidth: 560,
              fontSize: 'clamp(1rem, 1.9vw, 1.32rem)',
            }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
