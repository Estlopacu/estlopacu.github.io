import React from 'react';
import { Github, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

/**
 * SocialLink — circular icon link (GitHub, LinkedIn, email…). Keeps the
 * heritage "swing" hover. Pass a Lucide icon name via `icon`.
 */
const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  link: LinkIcon,
};

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .els-social{display:inline-flex;align-items:center;justify-content:center;
    width:46px;height:46px;border-radius:50%;color:var(--brand);
    border:var(--border-thin) solid var(--border-strong);background:var(--surface-card);
    text-decoration:none;transition:transform var(--dur-base) var(--ease-spring),
      color var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out),
      background var(--dur-base) var(--ease-out);transform-origin:top center;}
  .els-social svg{width:20px;height:20px}
  .els-social:hover{color:#fff;background:var(--brand);border-color:var(--brand);animation:els-swing .9s var(--ease-in-out)}
  .els-social--ghost{border-color:var(--border-inverse);background:transparent;color:var(--slate-200)}
  .els-social--ghost:hover{color:var(--slate-900);background:var(--signal-400);border-color:var(--signal-400)}
  @keyframes els-swing{20%{transform:rotate(13deg)}40%{transform:rotate(-9deg)}60%{transform:rotate(6deg)}80%{transform:rotate(-4deg)}100%{transform:rotate(0)}}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-els', 'social');
  el.textContent = css;
  document.head.appendChild(el);
}

export function SocialLink({ icon = 'link', label, ghost = false, className = '', ...rest }) {
  injectStyles();
  const Icon = ICONS[icon] || LinkIcon;
  return (
    <a className={`els-social${ghost ? ' els-social--ghost' : ''} ${className}`.trim()}
       aria-label={label} title={label} {...rest}>
      <Icon size={20} />
    </a>
  );
}

export default SocialLink;
