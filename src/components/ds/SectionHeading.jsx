import React from 'react';

/**
 * SectionHeading — a monospace "comment" eyebrow over a display title,
 * the recurring section header pattern across the portfolio.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .els-sh{display:flex;flex-direction:column;gap:.5em}
  .els-sh--center{align-items:center;text-align:center}
  .els-sh__eyebrow{font-family:var(--font-mono);font-size:var(--text-xs);font-weight:500;
    letter-spacing:var(--tracking-mono);text-transform:uppercase;color:var(--brand);
    display:inline-flex;align-items:center;gap:.5em}
  .els-sh__eyebrow::before{content:"//";color:var(--accent);font-weight:700}
  .els-sh__title{font-family:var(--font-display);font-weight:700;letter-spacing:var(--tracking-tight);
    line-height:var(--leading-snug);color:var(--text-strong);margin:0;font-size:var(--text-2xl)}
  .els-sh__sub{font-family:var(--font-body);color:var(--text-muted);font-size:var(--text-md);
    line-height:var(--leading-normal);max-width:52ch;margin:0}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-els', 'sectionheading');
  el.textContent = css;
  document.head.appendChild(el);
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '', ...rest }) {
  injectStyles();
  const cls = `els-sh${align === 'center' ? ' els-sh--center' : ''} ${className}`.trim();
  return (
    <div className={cls} {...rest}>
      {eyebrow && <span className="els-sh__eyebrow">{eyebrow}</span>}
      {title && <h2 className="els-sh__title">{title}</h2>}
      {subtitle && <p className="els-sh__sub">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
