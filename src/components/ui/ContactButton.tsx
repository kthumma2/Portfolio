interface ContactButtonProps {
  href?: string;
  label?: string;
}

export function ContactButton({ href = '#contact', label = 'Contact Me' }: ContactButtonProps) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
        borderRadius: '9999px',
        color: 'white',
        fontFamily: 'Kanit, sans-serif',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        textDecoration: 'none',
        padding: 'clamp(10px, 1.2vw, 16px) clamp(28px, 3.5vw, 48px)',
        fontSize: 'clamp(0.7rem, 1vw, 0.95rem)',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
      }}
    >
      {label}
    </a>
  );
}
