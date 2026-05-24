import { useRef, useEffect, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 100,
  strength = 4,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isActive = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const el = wrapperRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const inZone =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding;

      if (inZone) {
        if (!isActive.current) {
          isActive.current = true;
          el.style.transition = activeTransition;
        }
        el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      } else if (isActive.current) {
        isActive.current = false;
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ willChange: 'transform', display: 'inline-block' }}
    >
      {children}
    </div>
  );
}
