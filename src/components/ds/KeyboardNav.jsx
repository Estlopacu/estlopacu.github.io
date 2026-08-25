// KeyboardNav — vim/less-style shortcuts for moving through the site.
//   j / ArrowDown  → next section
//   k / ArrowUp    → prev section
//   g              → top (Hero)
//   G              → bottom (Contact)
//   1..5           → jump to section by index
//   ?              → toggle help overlay
//   Esc            → close help / blur focused row
// Sections opt in via `data-nav-target` on their <section> element.
// Interactive rows opt in via `data-nav-row` (Enter/Space activate).
import React from 'react';

const HELP_KEYS = [
  ['j / ↓',      'next section'],
  ['k / ↑',      'prev section'],
  ['g',          'top'],
  ['G',          'bottom'],
  ['1 – 5',      'jump to section'],
  ['?',          'toggle this help'],
  ['Esc',        'close help'],
];

function scrollToEl(el) {
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function KeyboardNav() {
  const [help, setHelp] = React.useState(false);

  React.useEffect(() => {
    function isTypingTarget(t) {
      if (!t) return false;
      const tag = t.tagName;
      return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || t.isContentEditable;
    }
    function currentIndex(sections) {
      const y = window.scrollY + 100; // account for fixed nav
      let idx = 0;
      sections.forEach((s, i) => { if (s.offsetTop <= y) idx = i; });
      return idx;
    }
    function onKey(e) {
      if (isTypingTarget(e.target)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const sections = Array.from(document.querySelectorAll('[data-nav-target]'));
      if (sections.length === 0) return;

      switch (e.key) {
        case 'j':
        case 'ArrowDown': {
          const i = currentIndex(sections);
          const next = sections[Math.min(i + 1, sections.length - 1)];
          if (next) { e.preventDefault(); scrollToEl(next); }
          break;
        }
        case 'k':
        case 'ArrowUp': {
          const i = currentIndex(sections);
          const prev = sections[Math.max(i - 1, 0)];
          if (prev) { e.preventDefault(); scrollToEl(prev); }
          break;
        }
        case 'g': {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }
        case 'G': {
          e.preventDefault();
          scrollToEl(sections[sections.length - 1]);
          break;
        }
        case '?': {
          e.preventDefault();
          setHelp((h) => !h);
          break;
        }
        case 'Escape': {
          setHelp(false);
          if (document.activeElement && document.activeElement !== document.body) {
            document.activeElement.blur();
          }
          break;
        }
        default: {
          if (/^[1-9]$/.test(e.key)) {
            const idx = parseInt(e.key, 10) - 1;
            if (sections[idx]) { e.preventDefault(); scrollToEl(sections[idx]); }
          }
        }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!help) return null;
  return (
    <div className="pf-kbd" role="dialog" aria-label="Keyboard shortcuts" onClick={() => setHelp(false)}>
      <div className="pf-kbd__panel" onClick={(e) => e.stopPropagation()}>
        <p className="pf-kbd__title">// keyboard shortcuts</p>
        <table className="pf-kbd__table">
          <tbody>
            {HELP_KEYS.map(([k, d]) => (
              <tr key={k}>
                <td><kbd>{k}</kbd></td>
                <td>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="pf-kbd__hint">press <kbd>?</kbd> or <kbd>Esc</kbd> to close</p>
      </div>
    </div>
  );
}
