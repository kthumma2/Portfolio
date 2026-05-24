import { FadeIn } from './ui/FadeIn';

const SKILLS = [
  {
    number: '01',
    name: 'Frontend Engineering',
    description:
      'Building performant React applications with a focus on clean component architecture, accessibility, and pixel-level attention to user experience.',
  },
  {
    number: '02',
    name: 'Backend Development',
    description:
      'Designing and building RESTful APIs with Node.js and Java, including JWT authentication, rate limiting, and sub-100ms response targets at scale.',
  },
  {
    number: '03',
    name: 'Cloud & DevOps',
    description:
      'Architecting cloud-native solutions on AWS and GCP: containerized with Docker, deployed via CI/CD pipelines, and built to auto-scale under real load.',
  },
  {
    number: '04',
    name: 'Database Design',
    description:
      'Modeling and optimizing SQL schemas for high-throughput systems. PostgreSQL, Redis, B-tree indexing, query planning, and concurrency control.',
  },
  {
    number: '05',
    name: 'System Architecture',
    description:
      'Designing distributed systems with clear separation of concerns, thoughtful API contracts, and an eye toward maintainability and correctness at scale.',
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        background: '#FFFFFF',
        borderRadius: 'clamp(36px, 6vw, 60px) clamp(36px, 6vw, 60px) 0 0',
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
            color: '#0C0C0C',
            fontSize: 'clamp(3rem, 12vw, 140px)',
            textAlign: 'center',
            marginBottom: 'clamp(48px, 8vw, 112px)',
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(16px, 3vw, 40px)',
                padding: 'clamp(28px, 4vw, 48px) 0',
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Kanit, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 9vw, 120px)',
                  color: '#0C0C0C',
                  lineHeight: 1,
                  flexShrink: 0,
                  minWidth: 'clamp(60px, 10vw, 140px)',
                }}
              >
                {skill.number}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 'clamp(4px, 0.8vw, 12px)' }}>
                <span
                  style={{
                    fontFamily: 'Kanit, sans-serif',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    color: '#0C0C0C',
                    fontSize: 'clamp(1rem, 2.1vw, 2rem)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {skill.name}
                </span>
                <span
                  style={{
                    fontFamily: 'Kanit, sans-serif',
                    fontWeight: 300,
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)',
                    lineHeight: 1.65,
                    maxWidth: 640,
                  }}
                >
                  {skill.description}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
