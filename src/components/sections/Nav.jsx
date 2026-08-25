// Top navigation — fixed bar with active-section indicator driven by IO.
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { SPRING } from '../../lib/motion-tokens.ts';

// Order must match DOM order — Skills lives inside About, before Experience.
const LINKS = ['about', 'skills', 'experience', 'projects', 'contact'];

// Section IDs that back each nav link. `skills` lives inside the About section.
const LINK_TO_SECTION = {
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  skills: 'skills',
  contact: 'contact',
};

function useActiveSection() {
  const [active, setActive] = React.useState('about');

  React.useEffect(() => {
    const ids = Array.from(new Set(Object.values(LINK_TO_SECTION)));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (els.length === 0) return;

    const visibility = new Map(ids.map((id) => [id, 0]));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visibility.set(e.target.id, e.intersectionRatio));
        let best = null;
        let bestRatio = 0;
        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) { best = id; bestRatio = ratio; }
        });
        if (best && bestRatio > 0.1) setActive(best);
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return active;
}

function Nav({ theme, onToggleTheme }) {
  const activeSection = useActiveSection();
  const reduce = useReducedMotion();
  const mobileScrollerRef = React.useRef(null);

  // On mobile, keep the active pill in view as the user scrolls the page.
  React.useEffect(() => {
    const el = mobileScrollerRef.current;
    if (!el) return;
    const active = el.querySelector('.pf-nav__mlink.is-active');
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeSection]);

  return (
    <>
      <header className="pf-nav">
        <a href="#top" className="pf-nav__brand">
          <span className="pf-nav__mono">EL</span>
          <span className="pf-nav__wm">estlopacu<span className="pf-nav__cursor">_</span></span>
        </a>
        <nav className="pf-nav__links">
          {LINKS.map((l) => {
            const isActive = LINK_TO_SECTION[l] === activeSection;
            return (
              <a key={l} href={'#' + l} className={'pf-nav__link' + (isActive ? ' is-active' : '')}>
                {l}
                {isActive && (
                  <motion.span
                    className="pf-nav__underline"
                    layoutId="nav-active"
                    transition={reduce ? { duration: 0 } : SPRING.snappy}
                  />
                )}
              </a>
            );
          })}
        </nav>
        <div className="pf-nav__right">
          <button className="pf-nav__theme" onClick={onToggleTheme} aria-label="Toggle theme" title="Toggle theme">
            {theme === 'terminal' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="pf-nav__cta" href="#contact">Hire me</a>
        </div>
      </header>
      {/* Mobile-only sticky section bar — shell-path styling. */}
      <nav className="pf-nav__mobile" ref={mobileScrollerRef} aria-label="Sections">
        <span className="pf-nav__mprompt" aria-hidden="true">$ cd</span>
        {LINKS.map((l) => {
          const isActive = LINK_TO_SECTION[l] === activeSection;
          return (
            <a key={l} href={'#' + l} className={'pf-nav__mlink' + (isActive ? ' is-active' : '')}>
              ./{l}
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default Nav;
