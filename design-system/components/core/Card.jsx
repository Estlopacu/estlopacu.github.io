import React from 'react';

/**
 * Card — elevated content surface. Hover lift is opt-in via `interactive`.
 * Variants: default (white) | sunken | terminal (dark, signal-accented).
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .els-card{
    background:var(--surface-card);border:1px solid var(--border-subtle);
    border-radius:var(--radius-lg);padding:var(--space-5);box-shadow:var(--shadow-sm);
    transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out);
  }
  .els-card--sunken{background:var(--surface-sunken);box-shadow:none}
  .els-card--terminal{background:var(--blue-950);border-color:var(--border-inverse);color:var(--slate-200);box-shadow:var(--shadow-lg)}
  .els-card--interactive{cursor:pointer}
  .els-card--interactive:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:var(--blue-200)}
  .els-card--terminal.els-card--interactive:hover{border-color:var(--signal-400);box-shadow:var(--shadow-signal)}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-els', 'card');
  el.textContent = css;
  document.head.appendChild(el);
}

export function Card({ children, variant = 'default', interactive = false, className = '', ...rest }) {
  injectStyles();
  const v = variant === 'default' ? '' : ` els-card--${variant}`;
  const cls = `els-card${v}${interactive ? ' els-card--interactive' : ''} ${className}`.trim();
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}

export default Card;
