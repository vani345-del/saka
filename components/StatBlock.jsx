'use client';

import { useEffect, useRef, useState } from 'react';

function parseStatNumber(str) {
  const match = str.match(/^([\d,.]+)(.*)/);
  if (!match) return { numericValue: 0, suffix: str };

  const raw = match[1].replace(/,/g, '');
  return {
    numericValue: parseFloat(raw) || 0,
    suffix: match[2] || '',
  };
}

export default function StatBlock({ number, label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          const { numericValue, suffix } = parseStatNumber(number);

          if (numericValue === 0) {
            setDisplay(number);
            return;
          }

          const duration = 2000;
          const startTime = performance.now();
          const isInteger = Number.isInteger(numericValue);

          function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            /* easeOutQuart for a smooth deceleration */
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * numericValue;

            setDisplay(
              `${isInteger ? Math.round(current) : current.toFixed(1)}${suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(`${isInteger ? numericValue : numericValue.toFixed(1)}${suffix}`);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [number]);

  return (
    <div className="stat-block" ref={ref}>
      <span className="stat-number">{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
