import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { LiveProjectButton } from './ui/LiveProjectButton';

const PROJECTS = [
  {
    number: '01',
    category: 'Academic',
    name: 'Advanced Database Systems',
    href: 'https://github.com/kthumma2/Advanced-database',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    category: 'Engineering',
    name: 'Cloud-Native API Platform',
    href: 'https://github.com/kthumma2',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    category: 'Research',
    name: 'DSP Signal Processing',
    href: 'https://github.com/kthumma2/DSP-Project',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

const TOTAL = PROJECTS.length;
const BR = 'clamp(28px, 5vw, 60px)';

function ProjectCard({
  project,
  index,
  scrollProgress,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollProgress, [index / TOTAL, 1], [1, targetScale]);

  return (
    <div style={{ height: '85vh', display: 'flex', alignItems: 'flex-start', paddingTop: `${index * 28}px` }}>
      <motion.article
        aria-label={`Project ${project.number}: ${project.name}`}
        style={{
          position: 'sticky',
          top: 'clamp(80px, 10vw, 128px)',
          width: '100%',
          borderRadius: BR,
          border: '2px solid #D7E2EA',
          background: '#0C0C0C',
          padding: 'clamp(16px, 3vw, 32px)',
          scale,
          transformOrigin: 'top center',
        }}
      >
        {/* Card top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'clamp(16px, 2.5vw, 28px)',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(12px, 2vw, 24px)' }}>
            <span
              style={{
                fontFamily: 'Kanit, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 7vw, 100px)',
                color: '#D7E2EA',
                lineHeight: 1,
              }}
            >
              {project.number}
            </span>
            <span
              style={{
                fontFamily: 'Kanit, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(0.75rem, 1.3vw, 1.1rem)',
                color: '#D7E2EA',
                opacity: 0.5,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {project.category}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2.2vw, 2rem)',
              color: '#D7E2EA',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              textAlign: 'center',
              flex: 1,
              padding: '0 clamp(8px, 1.5vw, 20px)',
            }}
          >
            {project.name}
          </h3>

          <LiveProjectButton href={project.href} label="View on GitHub" />
        </div>

        {/* Card image grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: 'clamp(8px, 1.2vw, 16px)' }}>
          {/* Left column: 2 stacked images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.2vw, 16px)' }}>
            <div style={{ borderRadius: BR, overflow: 'hidden', height: 'clamp(110px, 15vw, 210px)', flexShrink: 0 }}>
              <img
                src={project.images.col1Top}
                alt=""
                role="presentation"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: BR, overflow: 'hidden', height: 'clamp(140px, 20vw, 310px)', flexShrink: 0 }}>
              <img
                src={project.images.col1Bottom}
                alt=""
                role="presentation"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Right column: 1 tall image */}
          <div style={{ borderRadius: BR, overflow: 'hidden' }}>
            <img
              src={project.images.col2}
              alt=""
              role="presentation"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      style={{
        background: '#0C0C0C',
        borderRadius: 'clamp(36px, 6vw, 60px) clamp(36px, 6vw, 60px) 0 0',
        marginTop: 'clamp(-36px, -6vw, -56px)',
        zIndex: 10,
        position: 'relative',
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 40px)',
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontFamily: 'Kanit, sans-serif',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: '#D7E2EA',
            fontSize: 'clamp(3rem, 12vw, 140px)',
            textAlign: 'center',
            marginBottom: 'clamp(48px, 8vw, 80px)',
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} style={{ maxWidth: 1000, margin: '0 auto' }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} scrollProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
