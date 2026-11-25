import React, { useEffect, useState, useCallback } from 'react';

const LINES = [
  { text: 'ESTLOPACU BIOS v1.0  —  Copyright (C) 2024', delay: 350 },
  { text: 'CPU: Caffeine-driven @ 10+ yrs experience', delay: 650 },
  { text: 'RAM: 640K creative capacity  ...  OK', delay: 950 },
  { text: '', delay: 1200 },
  { text: 'Initializing portfolio kernel...', delay: 1350 },
  { text: '> Loading /experience .................  [OK]', delay: 1700 },
  { text: '> Loading /projects ...................  [OK]', delay: 2000 },
  { text: '> Loading /contact ....................  [OK]', delay: 2300 },
  { text: '', delay: 2550 },
  { text: 'System ready.  Welcome.', delay: 2750 },
];

const COLLAPSE_AT = 3400;
const DONE_AT = 3950;

export default function BootScreen({ onDone }) {
  const [lines, setLines] = useState([]);
  const [phase, setPhase] = useState('on'); // 'on' | 'collapsing' | 'done'

  const handleDone = useCallback(() => {
    setPhase('done');
    onDone?.();
  }, [onDone]);

  useEffect(() => {
    const timers = LINES.map(({ text, delay }) =>
      setTimeout(() => setLines((prev) => [...prev, text]), delay)
    );
    const t1 = setTimeout(() => setPhase('collapsing'), COLLAPSE_AT);
    const t2 = setTimeout(handleDone, DONE_AT);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [handleDone]);

  if (phase === 'done') return null;

  return (
    <div
      className={`boot-screen${phase === 'collapsing' ? ' boot-screen--off' : ''}`}
      aria-hidden="true"
    >
      <div className="boot-scanlines" />
      <div className="boot-vignette" />
      <div className="boot-content">
        {lines.map((line, i) => (
          <p key={i} className="boot-line">
            {line}
          </p>
        ))}
        {phase === 'on' && lines.length > 0 && (
          <span className="boot-cursor" aria-hidden="true">
            █
          </span>
        )}
      </div>
    </div>
  );
}
