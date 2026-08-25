// Typewriter — types a string character-by-character, then calls onDone.
// SSR-safe: renders the full string on the server, animates only on client
// when motion is allowed. Renders a blinking cursor at the tail while typing.
import React from 'react';

export default function Typewriter({
  text,
  speed = 45,           // ms per char
  startDelay = 0,       // ms before typing starts
  cursor = true,        // show blinking cursor at tail while typing
  keepCursor = false,   // keep cursor after typing done
  onDone,
  as: Tag = 'span',
  className = '',
  reduce = false,       // when true, skip animation, render full text
  ...rest
}) {
  const full = String(text ?? '');
  const [i, setI] = React.useState(reduce ? full.length : 0);
  const [started, setStarted] = React.useState(reduce);
  const onDoneRef = React.useRef(onDone);
  onDoneRef.current = onDone;

  // Kick off after startDelay.
  React.useEffect(() => {
    if (reduce) { onDoneRef.current?.(); return; }
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay, reduce]);

  // Advance one char at a time.
  React.useEffect(() => {
    if (reduce || !started) return;
    if (i >= full.length) { onDoneRef.current?.(); return; }
    const t = setTimeout(() => setI((n) => n + 1), speed);
    return () => clearTimeout(t);
  }, [i, started, speed, full.length, reduce]);

  const showCursor = cursor && (keepCursor || i < full.length) && !reduce;
  return (
    <Tag className={className} {...rest}>
      {full.slice(0, i)}
      {showCursor && <span className="pf-typer__cursor" aria-hidden="true">_</span>}
    </Tag>
  );
}
