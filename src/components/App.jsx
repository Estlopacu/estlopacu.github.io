import React from 'react';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import KeyboardNav from './ds/KeyboardNav.jsx';

const STORE_KEY = 'estlopacu-theme';
// One-time migration marker — flip existing visitors to terminal default
// even if they previously stored 'light'. Bump the version to re-migrate.
const MIGRATION_KEY = 'estlopacu-theme-migrated-v2-terminal-default';

export default function App() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof localStorage === 'undefined') return 'terminal';
    if (!localStorage.getItem(MIGRATION_KEY)) return 'terminal';
    return localStorage.getItem(STORE_KEY) || 'terminal';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'terminal');
    localStorage.setItem(STORE_KEY, theme);
    localStorage.setItem(MIGRATION_KEY, '1');
  }, [theme]);

  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.pf-reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === 'light' ? 'terminal' : 'light'))} />
      <KeyboardNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
