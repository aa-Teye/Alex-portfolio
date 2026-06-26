import { useEffect, useState } from 'react';

export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const { rootMargin = '-40% 0px -55% 0px' } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
