import React, { useEffect, useState, useCallback } from 'react';

const LINES = [
  { text: 'ESTLOPACU BIOS v1.0', delay: 300 },
  { text: 'Initializing portfolio...', delay: 700 },
  { text: '> /experience  /projects  /contact  [OK]', delay: 1100 },
  { text: 'System ready.', delay: 1500 },
];

const COLLAPSE_AT = 2100;
const DONE_AT = 2650;

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
