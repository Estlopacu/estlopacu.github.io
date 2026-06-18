import React from 'react';

/**
 * SkillBar — animated proficiency meter, modernized from the original CV's
 * skill bars. Fills on mount (or when scrolled into view).
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .els-skill{font-family:var(--font-body);margin-bottom:var(--space-4)}
  .els-skill__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.5em}
  .els-skill__name{font-family:var(--font-mono);font-size:var(--text-sm);font-weight:500;letter-spacing:.04em;color:var(--text-strong);text-transform:uppercase}
  .els-skill__pct{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--brand);font-weight:700}
  .els-skill__track{height:8px;background:var(--surface-sunken);border-radius:var(--radius-pill);overflow:hidden}
  .els-skill__fill{height:100%;width:0;border-radius:var(--radius-pill);
    background:linear-gradient(90deg,var(--blue-600),var(--blue-400));
    transition:width var(--dur-reveal) var(--ease-out);}
  .els-skill--signal .els-skill__fill{background:linear-gradient(90deg,var(--signal-600),var(--signal-400))}
  .els-skill--signal .els-skill__pct{color:var(--signal-600)}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-els', 'skillbar');
  el.textContent = css;
  document.head.appendChild(el);
}

export function SkillBar({ name, percent = 0, tone = 'brand', className = '', ...rest }) {
  injectStyles();
  const [w, setW] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') { setW(percent); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setW(percent); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(node);
    return () => io.disconnect();
  }, [percent]);
  return (
    <div ref={ref} className={`els-skill els-skill--${tone} ${className}`.trim()} {...rest}>
      <div className="els-skill__head">
        <span className="els-skill__name">{name}</span>
        <span className="els-skill__pct">{percent}%</span>
      </div>
      <div className="els-skill__track">
        <div className="els-skill__fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

export default SkillBar;
