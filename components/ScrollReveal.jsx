'use client';

import { useEffect, useRef } from 'react';

const directionClassMap = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  stagger = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const dirClass = stagger
    ? 'reveal-stagger'
    : directionClassMap[direction] || 'reveal';

  return (
    <div
      ref={ref}
      className={`${dirClass} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
