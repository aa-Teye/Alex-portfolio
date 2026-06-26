import { useEffect, useRef } from 'react';

export function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', onMove, { passive: true });

    const paint = () => {
      if (el) {
        el.style.background = `radial-gradient(700px circle at ${mx}px ${my}px, rgba(224,179,65,0.07), transparent 40%)`;
      }
      rafId = requestAnimationFrame(paint);
    };
    paint();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return ref;
}
