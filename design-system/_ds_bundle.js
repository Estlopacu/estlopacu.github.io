/* @ds-bundle: {"format":3,"namespace":"EstlopacuPortfolioDesignSystem_604ed3","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"SectionHeading","sourcePath":"components/portfolio/SectionHeading.jsx"},{"name":"SkillBar","sourcePath":"components/portfolio/SkillBar.jsx"},{"name":"SocialLink","sourcePath":"components/portfolio/SocialLink.jsx"},{"name":"TerminalPrompt","sourcePath":"components/portfolio/TerminalPrompt.jsx"}],"sourceHashes":{"components/core/Button.jsx":"27b2b068fcce","components/core/Card.jsx":"336d71b8f621","components/core/Tag.jsx":"891e43227378","components/portfolio/SectionHeading.jsx":"7cc296a205d1","components/portfolio/SkillBar.jsx":"78ab594b78ec","components/portfolio/SocialLink.jsx":"b802090fa879","components/portfolio/TerminalPrompt.jsx":"46906277a370","ui_kits/portfolio/About.jsx":"19819e8f8e86","ui_kits/portfolio/Contact.jsx":"126874a13ed8","ui_kits/portfolio/Experience.jsx":"fa39653b84ea","ui_kits/portfolio/Hero.jsx":"ae72030a68b6","ui_kits/portfolio/Nav.jsx":"fba7f6a89ccb","ui_kits/portfolio/Projects.jsx":"5049a3b54684"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EstlopacuPortfolioDesignSystem_604ed3 = window.EstlopacuPortfolioDesignSystem_604ed3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  variant = 'default',
  interactive = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const v = variant === 'default' ? '' : ` els-card--${variant}`;
  const cls = `els-card${v}${interactive ? ' els-card--interactive' : ''} ${className}`.trim();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tag({
  children,
  tone = 'brand',
  solid = false,
  dot = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = `els-tag els-tag--${tone}${solid ? ' els-tag--solid' : ''} ${className}`.trim();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "els-tag__dot"
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = `els-sh${align === 'center' ? ' els-sh--center' : ''} ${className}`.trim();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "els-sh__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "els-sh__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "els-sh__sub"
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SkillBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SkillBar({
  name,
  percent = 0,
  tone = 'brand',
  className = '',
  ...rest
}) {
  injectStyles();
  const [w, setW] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setW(percent);
      return;
    }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        setW(percent);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    io.observe(node);
    return () => io.disconnect();
  }, [percent]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: `els-skill els-skill--${tone} ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "els-skill__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "els-skill__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "els-skill__pct"
  }, percent, "%")), /*#__PURE__*/React.createElement("div", {
    className: "els-skill__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "els-skill__fill",
    style: {
      width: `${w}%`
    }
  })));
}
Object.assign(__ds_scope, { SkillBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SkillBar.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SocialLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SocialLink — circular icon link (GitHub, LinkedIn, email…). Keeps the
 * heritage "swing" hover. Expects Lucide to be available on the page;
 * pass a Lucide icon name via `icon`.
 */

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
function SocialLink({
  icon = 'link',
  label,
  ghost = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide && ref.current) {
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        icons: window.lucide.icons,
        attrs: {}
      });
    }
  }, [icon]);
  return /*#__PURE__*/React.createElement("a", _extends({
    ref: ref,
    className: `els-social${ghost ? ' els-social--ghost' : ''} ${className}`.trim(),
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }));
}
Object.assign(__ds_scope, { SocialLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SocialLink.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TerminalPrompt.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function TerminalPrompt({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `els-term ${className}`.trim()
  }, rest), chrome && /*#__PURE__*/React.createElement("div", {
    className: "els-term__bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--danger)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--warning)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--signal-400)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "els-term__line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "els-term__prompt"
  }, user, "@", host, ":~$ "), /*#__PURE__*/React.createElement("span", {
    className: "els-term__cmd"
  }, command), !output && cursor && /*#__PURE__*/React.createElement("span", {
    className: "els-term__cursor"
  })), output && /*#__PURE__*/React.createElement("div", {
    className: "els-term__line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "els-term__out"
  }, "> ", output), cursor && /*#__PURE__*/React.createElement("span", {
    className: "els-term__cursor"
  })));
}
Object.assign(__ds_scope, { TerminalPrompt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TerminalPrompt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About + Skills — bio, stats, and a categorized pill toolbox that
// staggers in from the left on scroll.
function About() {
  const {
    SectionHeading,
    Card,
    Tag
  } = window.EstlopacuPortfolioDesignSystem_604ed3;
  const groups = [{
    label: 'core stack',
    tone: 'signal',
    items: ['TypeScript', 'React / Next.js', 'Node.js', 'Vue.js / Nuxt']
  }, {
    label: 'frontend',
    items: ['TanStack Query', 'React Router', 'Pinia', 'Tailwind', 'HTML', 'CSS']
  }, {
    label: 'infra & cloud',
    items: ['AWS', 'Docker']
  }, {
    label: 'testing',
    items: ['Playwright', 'Cypress', 'E2E']
  }, {
    label: 'databases',
    items: ['PostgreSQL', 'MySQL']
  }];
  let n = 0; // running index → cascade delay across all pills
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-about pf-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-about__text"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "about",
    title: "Engineer who sweats the details"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pf-prose"
  }, "I'm a senior full-stack engineer, originally from Costa Rica and based in Berlin. Over the last decade I've delivered high-impact digital products across startups and scale-ups \u2014 six years at GetYourGuide, then Root Global, and now Payrails. I care about product quality, team collaboration, and continuous improvement."), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "10+"), /*#__PURE__*/React.createElement("span", null, "years building")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "6 yr"), /*#__PURE__*/React.createElement("span", null, "at GetYourGuide")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "BER"), /*#__PURE__*/React.createElement("span", null, "based \xB7 from CR"))))), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__skills"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "skills",
    title: "My toolbox"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-skillgroups pf-reveal"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    className: "pf-skillgroup",
    key: g.label
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-skillgroup__label"
  }, "// ", g.label), /*#__PURE__*/React.createElement("div", {
    className: "pf-skillgroup__pills"
  }, g.items.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: g.tone || 'neutral',
    solid: !!g.tone,
    className: "pf-pill",
    style: {
      transitionDelay: n++ * 45 + 'ms'
    }
  }, t)))))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact — terminal-styled CTA with education footer.
function Contact() {
  const {
    SectionHeading,
    Button,
    TerminalPrompt,
    SocialLink
  } = window.EstlopacuPortfolioDesignSystem_604ed3;
  const education = [{
    dates: '2014',
    title: 'M.Sc. Computer Engineering — Software Development',
    center: 'ULACIT, San José CR'
  }, {
    dates: '2012',
    title: "Bachelor's in Computer Systems",
    center: 'Universidad Fidélitas, San José CR'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section pf-contact",
    id: "contact",
    "data-theme": "terminal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-contact__inner pf-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "contact",
    title: "Let's build something",
    align: "center",
    subtitle: "I'm open to new opportunities. The fastest way to reach me is email."
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact__term"
  }, /*#__PURE__*/React.createElement(TerminalPrompt, {
    user: "you",
    host: "estlopacu",
    command: "./hire --role=engineer",
    output: "Sending message to estlopacu@gmail.com\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "terminal",
    size: "lg",
    as: "a",
    href: "mailto:estlopacu@gmail.com"
  }, "estlopacu@gmail.com"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: "tel:+491772430239"
  }, "+49 177 243 0239")), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact__social"
  }, /*#__PURE__*/React.createElement(SocialLink, {
    icon: "github",
    label: "GitHub",
    ghost: true,
    href: "https://github.com/Estlopacu",
    target: "_blank"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    icon: "linkedin",
    label: "LinkedIn",
    ghost: true,
    href: "https://www.linkedin.com/in/estlopacu/",
    target: "_blank"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    icon: "mail",
    label: "Email",
    ghost: true,
    href: "mailto:estlopacu@gmail.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pf-edu"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-edu__label"
  }, "// education"), /*#__PURE__*/React.createElement("ul", null, education.map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-edu__d"
  }, e.dates), /*#__PURE__*/React.createElement("span", {
    className: "pf-edu__t"
  }, e.title), /*#__PURE__*/React.createElement("span", {
    className: "pf-edu__c"
  }, e.center))))), /*#__PURE__*/React.createElement("footer", {
    className: "pf-footer"
  }, "\xA9 ", new Date().getFullYear(), " Esteban L\xF3pez Acu\xF1a \xB7 built with the estlopacu design system")));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Experience.jsx
try { (() => {
// Experience — vertical timeline built from the current CV (06.2026).
function Experience() {
  const {
    SectionHeading,
    Tag
  } = window.EstlopacuPortfolioDesignSystem_604ed3;
  const jobs = [{
    dates: 'Jan 2026 — Present',
    company: 'Payrails',
    position: 'Senior Full Stack Engineer',
    location: 'Berlin, DE',
    highlight: 'Built & launched a new company-website CMS with Next.js and Sanity; maintained the legacy Webflow site.'
  }, {
    dates: 'Jul 2024 — Nov 2024',
    company: 'Root Global',
    position: 'Senior Full Stack Engineer',
    location: 'Berlin, DE',
    highlight: 'Led a new user-tracking system and executed critical PostgreSQL migrations for the new web app.'
  }, {
    dates: 'May 2018 — Jun 2024',
    company: 'GetYourGuide',
    position: 'Senior Full Stack Engineer',
    location: 'Berlin, DE',
    highlight: 'A/B tests lifting conversion ~7%; SLO dashboards + page-degradation monitoring; migrated E2E tests to internal services.'
  }, {
    dates: 'Feb 2017 — Dec 2017',
    company: 'Gorilla Logic',
    position: 'Senior Web Developer',
    location: 'San José, CR',
    highlight: 'Engineered continuous video playback, plus video tagging and thumbnails across the site.'
  }, {
    dates: 'Aug 2016 — Feb 2017',
    company: 'Informatec',
    position: 'Senior Web Developer',
    location: 'San José, CR',
    highlight: 'Built PDF invoice scanning and shipped UX updates for upper management.'
  }, {
    dates: 'Jul 2014 — Jul 2016',
    company: 'Konrad Group',
    position: 'Web Developer',
    location: 'San José, CR',
    highlight: 'Delivered web apps and POCs for clients including Deloitte.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section pf-section--alt",
    id: "experience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "experience",
    title: "Where I've worked",
    align: "center",
    subtitle: "10+ years across startups and scale-ups \u2014 the last six in Berlin."
  })), /*#__PURE__*/React.createElement("ol", {
    className: "pf-timeline pf-reveal"
  }, jobs.map((j, i) => /*#__PURE__*/React.createElement("li", {
    className: "pf-timeline__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-timeline__node"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-timeline__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-timeline__head"
  }, /*#__PURE__*/React.createElement("h3", null, j.position), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, j.dates)), /*#__PURE__*/React.createElement("p", {
    className: "pf-timeline__company"
  }, j.company), /*#__PURE__*/React.createElement("p", {
    className: "pf-timeline__hl"
  }, j.highlight), /*#__PURE__*/React.createElement("p", {
    className: "pf-timeline__loc"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), j.location))))));
}
window.Experience = Experience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Experience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — full-height landing: eyebrow, big headline, terminal motif, portrait.
function Hero() {
  const {
    Button,
    Tag,
    TerminalPrompt,
    SocialLink
  } = window.EstlopacuPortfolioDesignSystem_604ed3;
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__grid pf-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-hero__eyebrow"
  }, "// software engineer \xB7 berlin, germany"), /*#__PURE__*/React.createElement("h1", {
    className: "pf-hero__title"
  }, "Luis Esteban", /*#__PURE__*/React.createElement("br", null), "L\xF3pez Acu\xF1a", /*#__PURE__*/React.createElement("span", {
    className: "pf-hero__dot"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero__lead"
  }, "Senior full-stack engineer from Costa Rica, based in Berlin. Over 10 years delivering high-impact products for startups and scale-ups like GetYourGuide."), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__tags"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "signal",
    dot: true
  }, "Open to work"), /*#__PURE__*/React.createElement(Tag, null, "React \xB7 Next.js"), /*#__PURE__*/React.createElement(Tag, null, "TypeScript"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "10+ yrs")), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "#projects"
  }, "View work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: "#contact"
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__social"
  }, /*#__PURE__*/React.createElement(SocialLink, {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/Estlopacu",
    target: "_blank"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/estlopacu/",
    target: "_blank"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    icon: "mail",
    label: "Email",
    href: "mailto:estlopacu@gmail.com"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profile.jpg",
    alt: "Esteban L\xF3pez Acu\xF1a"
  })), /*#__PURE__*/React.createElement(TerminalPrompt, {
    command: "cat about.md",
    output: "Senior full-stack engineer \xB7 10+ yrs \xB7 Berlin."
  }))), /*#__PURE__*/React.createElement("a", {
    className: "pf-hero__scroll",
    href: "#about"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-down"
  }), " scroll"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Top navigation — fixed bar with monogram, section links, theme toggle.
function Nav({
  theme,
  onToggleTheme
}) {
  const links = ['about', 'experience', 'projects', 'skills', 'contact'];
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("header", {
    className: "pf-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "pf-nav__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-nav__mono"
  }, "EL"), /*#__PURE__*/React.createElement("span", {
    className: "pf-nav__wm"
  }, "estlopacu", /*#__PURE__*/React.createElement("span", {
    className: "pf-nav__cursor"
  }, "_"))), /*#__PURE__*/React.createElement("nav", {
    className: "pf-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l,
    className: "pf-nav__link"
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "pf-nav__right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pf-nav__theme",
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    title: "Toggle theme"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": theme === 'terminal' ? 'sun' : 'moon'
  })), /*#__PURE__*/React.createElement("a", {
    className: "pf-nav__cta",
    href: "#contact"
  }, "Hire me")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
// Projects — image cards with hover reveal of the tech stack.
function Projects() {
  const {
    SectionHeading,
    Tag,
    Card
  } = window.EstlopacuPortfolioDesignSystem_604ed3;
  const projects = [{
    name: 'Contratista Costa Rica',
    img: '../../assets/project-contratistacr.png',
    blurb: 'A marketplace connecting contractors and independent workers across the Costa Rican construction industry.',
    stack: ['HTML5', 'CSS3', 'jQuery', 'AngularJS', 'CodeIgniter', 'MySQL']
  }, {
    name: '#MamáVaPrimero — Monge',
    img: '../../assets/project-mamavaprimero.png',
    blurb: 'A Mother\'s Day campaign letting users record a personalized video card, integrated with Facebook.',
    stack: ['JavaScript', 'Facebook API', 'Video', 'AJAX']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section",
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "selected work",
    title: "Projects I've shipped",
    subtitle: "A few products I've built end-to-end. Hover for the stack."
  })), /*#__PURE__*/React.createElement("div", {
    className: "pf-projects pf-reveal"
  }, projects.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    className: "pf-project"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-project__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-project__overlay"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-project__label"
  }, "// stack"), /*#__PURE__*/React.createElement("div", {
    className: "pf-project__stack"
  }, p.stack.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "signal"
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "pf-project__body"
  }, /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("p", null, p.blurb))))));
}
window.Projects = Projects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SkillBar = __ds_scope.SkillBar;

__ds_ns.SocialLink = __ds_scope.SocialLink;

__ds_ns.TerminalPrompt = __ds_scope.TerminalPrompt;

})();
