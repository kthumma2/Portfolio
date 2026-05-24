interface LiveProjectButtonProps {
  href?: string;
  label?: string;
}

export function LiveProjectButton({ href = '#', label = 'View on GitHub' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        borderRadius: '9999px',
        border: '2px solid #D7E2EA',
        color: '#D7E2EA',
        fontFamily: 'Kanit, sans-serif',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        textDecoration: 'none',
        padding: 'clamp(8px, 1vw, 14px) clamp(24px, 3vw, 40px)',
        fontSize: 'clamp(0.7rem, 0.9vw, 0.9rem)',
        transition: 'background 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(215, 226, 234, 0.1)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
      }}
    >
      {label}
    </a>
  );
}
