// Top navigation — fixed bar with monogram, section links, theme toggle.
function Nav({ theme, onToggleTheme }) {
  const links = ['about', 'experience', 'projects', 'skills', 'contact'];
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <header className="pf-nav">
      <a href="#top" className="pf-nav__brand">
        <span className="pf-nav__mono">EL</span>
        <span className="pf-nav__wm">estlopacu<span className="pf-nav__cursor">_</span></span>
      </a>
      <nav className="pf-nav__links">
        {links.map((l) => (
          <a key={l} href={'#' + l} className="pf-nav__link">{l}</a>
        ))}
      </nav>
      <div className="pf-nav__right">
        <button className="pf-nav__theme" onClick={onToggleTheme} aria-label="Toggle theme" title="Toggle theme">
          <i data-lucide={theme === 'terminal' ? 'sun' : 'moon'} />
        </button>
        <a className="pf-nav__cta" href="#contact">Hire me</a>
      </div>
    </header>
  );
}
window.Nav = Nav;
