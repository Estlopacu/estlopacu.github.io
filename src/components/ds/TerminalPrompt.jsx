import React from 'react';

/**
 * TerminalPrompt — the signature heritage motif. Renders a shell line
 * `user@host:~$ command` with an optional blinking cursor and typed output.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .els-term{font-family:var(--font-terminal);background:var(--blue-950);
    border:1px solid var(--border-inverse);border-radius:var(--radius-md);
    padding:var(--space-4) var(--space-5);color:var(--text-terminal);
    font-size:clamp(20px,2.4vw,28px);line-height:1.35;}
  .els-term__bar{display:flex;gap:7px;margin-bottom:.5em}
  .els-term__bar i{width:11px;height:11px;border-radius:50%;display:block}
  .els-term__line{white-space:pre-wrap}
  .els-term__prompt{color:var(--azure)}
  .els-term__cmd{color:var(--slate-100)}
  .els-term__out{color:var(--signal-400)}
  .els-term__cursor{display:inline-block;width:.55em;height:1em;background:var(--signal-400);
    transform:translateY(.12em);margin-left:.08em;animation:els-blink 1.05s steps(1) infinite}
  @keyframes els-blink{50%{opacity:0}}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-els', 'terminal');
  el.textContent = css;
  document.head.appendChild(el);
}

export function TerminalPrompt({
  user = 'esteban',
  host = 'portfolio',
  command = 'whoami',
  output,
  chrome = true,
  cursor = true,
  className = '',
  ...rest
}) {
  injectStyles();
  return (
    <div className={`els-term ${className}`.trim()} {...rest}>
      {chrome && (
        <div className="els-term__bar">
          <i style={{ background: 'var(--danger)' }} />
          <i style={{ background: 'var(--warning)' }} />
          <i style={{ background: 'var(--signal-400)' }} />
        </div>
      )}
      <div className="els-term__line">
        <span className="els-term__prompt">{user}@{host}:~$ </span>
        <span className="els-term__cmd">{command}</span>
        {!output && cursor && <span className="els-term__cursor" />}
      </div>
      {output && (
        <div className="els-term__line">
          <span className="els-term__out">&gt; {output}</span>
          {cursor && <span className="els-term__cursor" />}
        </div>
      )}
    </div>
  );
}

export default TerminalPrompt;
