import React from 'react';

/**
 * Tag — compact technology / topic chip (React, Node, TypeScript…).
 * tone: brand (default) | neutral | signal. solid prop fills the chip.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .els-tag{
    display:inline-flex;align-items:center;gap:.4em;
    font-family:var(--font-mono);font-size:var(--text-xs);font-weight:500;
    letter-spacing:.04em;line-height:1;border-radius:var(--radius-xs);
    padding:.45em .7em;border:1px solid transparent;white-space:nowrap;
    transition:background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out);
  }
  .els-tag--brand{background:var(--blue-50);color:var(--brand)}
  .els-tag--neutral{background:var(--surface-sunken);color:var(--text-body)}
  .els-tag--signal{background:rgba(61,220,132,.14);color:var(--signal-600)}
  .els-tag--solid.els-tag--brand{background:var(--brand);color:#fff}
  .els-tag--solid.els-tag--neutral{background:var(--slate-700);color:#fff}
  .els-tag--solid.els-tag--signal{background:var(--signal-400);color:var(--slate-900)}
  .els-tag__dot{width:.5em;height:.5em;border-radius:50%;background:currentColor}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-els', 'tag');
  el.textContent = css;
  document.head.appendChild(el);
}

export function Tag({ children, tone = 'brand', solid = false, dot = false, className = '', ...rest }) {
  injectStyles();
  const cls = `els-tag els-tag--${tone}${solid ? ' els-tag--solid' : ''} ${className}`.trim();
  return (
    <span className={cls} {...rest}>
      {dot && <span className="els-tag__dot" />}
      {children}
    </span>
  );
}

export default Tag;
