import { useEffect, useState } from 'react';

export default function Typewriter({ texts, speed = 75, pause = 2200 }) {
  const [display, setDisplay] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = texts[textIdx];
    let timer;

    if (phase === 'typing') {
      if (charIdx < current.length) {
        timer = setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, speed);
      } else {
        timer = setTimeout(() => setPhase('deleting'), pause);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, speed / 2);
      } else {
        setTextIdx((i) => (i + 1) % texts.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, phase, textIdx, texts, speed, pause]);

  return (
    <span>
      {display}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          background: 'var(--accent)',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          animation: 'cursorBlink 1s step-end infinite',
        }}
      />
    </span>
  );
}
