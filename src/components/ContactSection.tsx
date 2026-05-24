import { FormEvent, useRef, useState } from 'react';
import { FadeIn } from './ui/FadeIn';

const LINKS = [
  { label: 'Email', href: 'mailto:kaushik.thumma6@gmail.com', display: 'kaushik.thumma6@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/kthumma2', display: 'github.com/kthumma2' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kaushikthumma', display: 'linkedin.com/in/kaushikthumma' },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const INPUT_STYLE: React.CSSProperties = {
    width: '100%',
    background: 'rgba(215,226,234,0.04)',
    border: '1px solid rgba(215,226,234,0.15)',
    borderRadius: 10,
    padding: '14px 18px',
    color: '#D7E2EA',
    fontFamily: 'Kanit, sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const LABEL_STYLE: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Kanit, sans-serif',
    fontWeight: 500,
    fontSize: '0.72rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(215,226,234,0.45)',
    marginBottom: 8,
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const data = new FormData(e.currentTarget);

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID after signing up at formspree.io
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('sent');
        setMessage('Message received. I\'ll get back to you soon.');
        formRef.current?.reset();
      } else {
        setStatus('error');
        setMessage('Something went wrong. Email me directly at kaushik.thumma6@gmail.com');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Email me directly at kaushik.thumma6@gmail.com');
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
      noValidate
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label htmlFor="ct-name" style={LABEL_STYLE}>Name</label>
          <input
            id="ct-name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            required
            style={INPUT_STYLE}
            onFocus={e => ((e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(215,226,234,0.45)')}
            onBlur={e => ((e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(215,226,234,0.15)')}
          />
        </div>
        <div>
          <label htmlFor="ct-email" style={LABEL_STYLE}>Email</label>
          <input
            id="ct-email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            required
            style={INPUT_STYLE}
            onFocus={e => ((e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(215,226,234,0.45)')}
            onBlur={e => ((e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(215,226,234,0.15)')}
          />
        </div>
      </div>
      <div>
        <label htmlFor="ct-subject" style={LABEL_STYLE}>Subject</label>
        <input
          id="ct-subject"
          name="subject"
          type="text"
          placeholder="Job Opportunity / Project Inquiry"
          style={INPUT_STYLE}
          onFocus={e => ((e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(215,226,234,0.45)')}
          onBlur={e => ((e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(215,226,234,0.15)')}
        />
      </div>
      <div>
        <label htmlFor="ct-message" style={LABEL_STYLE}>Message</label>
        <textarea
          id="ct-message"
          name="message"
          rows={5}
          placeholder="Tell me about the opportunity..."
          required
          style={{ ...INPUT_STYLE, resize: 'vertical' }}
          onFocus={e => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(215,226,234,0.45)')}
          onBlur={e => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(215,226,234,0.15)')}
        />
      </div>

      {message && (
        <p
          role="status"
          aria-live="polite"
          style={{
            fontFamily: 'Kanit, sans-serif',
            fontSize: '0.9rem',
            color: status === 'sent' ? '#6ee7b7' : '#fca5a5',
            fontWeight: 400,
          }}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        style={{
          background: status === 'sent'
            ? 'rgba(110, 231, 183, 0.12)'
            : 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: status === 'sent' ? 'none' : '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
          outline: status === 'sent' ? '1px solid rgba(110,231,183,0.3)' : '2px solid white',
          outlineOffset: '-3px',
          border: 'none',
          borderRadius: 9999,
          color: status === 'sent' ? '#6ee7b7' : 'white',
          fontFamily: 'Kanit, sans-serif',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
          padding: '14px 36px',
          cursor: status === 'sending' || status === 'sent' ? 'default' : 'pointer',
          opacity: status === 'sending' ? 0.7 : 1,
          transition: 'opacity 0.2s ease',
          alignSelf: 'flex-start',
        }}
      >
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent' : 'Send Message'}
      </button>
    </form>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: '#0C0C0C',
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 40px)',
        borderTop: '1px solid rgba(215,226,234,0.08)',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <FadeIn>
          <h2
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: '#D7E2EA',
              fontSize: 'clamp(3rem, 10vw, 120px)',
              marginBottom: 'clamp(48px, 7vw, 80px)',
            }}
          >
            Let&apos;s Talk
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Left: contact links + availability */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {LINKS.map(link => (
                  <div key={link.label}>
                    <p
                      style={{
                        fontFamily: 'Kanit, sans-serif',
                        fontWeight: 500,
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'rgba(215,226,234,0.4)',
                        marginBottom: 6,
                      }}
                    >
                      {link.label}
                    </p>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontFamily: 'Kanit, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)',
                        color: '#D7E2EA',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s ease',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.6')}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                    >
                      {link.display}
                    </a>
                  </div>
                ))}
              </div>

              {/* Availability indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  background: 'rgba(110,231,183,0.05)',
                  border: '1px solid rgba(110,231,183,0.15)',
                  borderRadius: 8,
                  width: 'fit-content',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#6ee7b7',
                    flexShrink: 0,
                    animation: 'pulse 2s infinite',
                  }}
                />
                <style>{`@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(110,231,183,0.4)} 50%{box-shadow:0 0 0 5px rgba(110,231,183,0)} }`}</style>
                <span
                  style={{
                    fontFamily: 'Kanit, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.85rem',
                    color: '#6ee7b7',
                  }}
                >
                  Available for full-time roles
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>

        {/* Footer line */}
        <div
          style={{
            marginTop: 'clamp(60px, 8vw, 100px)',
            paddingTop: 'clamp(24px, 3vw, 32px)',
            borderTop: '1px solid rgba(215,226,234,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              color: '#D7E2EA',
              letterSpacing: '-0.02em',
            }}
          >
            KT<span style={{ color: 'rgba(215,226,234,0.4)' }}>.</span>
          </span>
          <p
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 300,
              fontSize: '0.8rem',
              color: 'rgba(215,226,234,0.3)',
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} Kaushik Thumma. Designed and built from scratch.
          </p>
          <a
            href="#home"
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 500,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(215,226,234,0.4)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#D7E2EA')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(215,226,234,0.4)')}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
