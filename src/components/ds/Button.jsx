import React from 'react';

/**
 * Button — primary action control for the Estlopacu portfolio system.
 * Variants: primary (brand blue), secondary (outline), ghost (text),
 * terminal (signal-green on dark). Sizes: sm | md | lg.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .els-btn{
    --_bg:var(--brand);--_fg:var(--text-on-brand);--_bd:transparent;
    font-family:var(--font-display);font-weight:600;letter-spacing:.01em;
    display:inline-flex;align-items:center;justify-content:center;gap:.55em;
    border:var(--border-thin) solid var(--_bd);border-radius:var(--radius-sm);
    background:var(--_bg);color:var(--_fg);cursor:pointer;text-decoration:none;
    white-space:nowrap;transition:transform var(--dur-fast) var(--ease-out),
      box-shadow var(--dur-base) var(--ease-out),background var(--dur-base) var(--ease-out),
      border-color var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out);
  }
  .els-btn:hover{transform:translateY(-1px)}
  .els-btn:active{transform:translateY(0) scale(.985)}
  .els-btn:focus-visible{outline:none;box-shadow:var(--shadow-glow)}
  .els-btn[disabled]{opacity:.45;pointer-events:none}
  .els-btn--sm{font-size:var(--text-sm);padding:.45em .9em}
  .els-btn--md{font-size:var(--text-base);padding:.6em 1.25em}
  .els-btn--lg{font-size:var(--text-md);padding:.75em 1.6em}
  .els-btn--primary{--_bg:var(--brand);--_fg:var(--text-on-brand)}
  .els-btn--primary:hover{--_bg:var(--blue-700);box-shadow:var(--shadow-md)}
  .els-btn--secondary{--_bg:transparent;--_fg:var(--brand);--_bd:var(--border-strong)}
  .els-btn--secondary:hover{--_bd:var(--brand);--_bg:var(--blue-50)}
  .els-btn--ghost{--_bg:transparent;--_fg:var(--text-body);--_bd:transparent}
  .els-btn--ghost:hover{--_bg:var(--surface-sunken);--_fg:var(--text-strong)}
  .els-btn--terminal{--_bg:var(--signal-400);--_fg:var(--slate-900);font-family:var(--font-mono);font-weight:700}
  .els-btn--terminal:hover{box-shadow:var(--shadow-signal)}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-els', 'button');
  el.textContent = css;
  document.head.appendChild(el);
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft,
  iconRight,
  disabled = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const Tag = as;
  const cls = `els-btn els-btn--${variant} els-btn--${size} ${className}`.trim();
  return (
    <Tag className={cls} disabled={Tag === 'button' ? disabled : undefined} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}

export default Button;
