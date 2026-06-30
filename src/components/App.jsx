import React from 'react';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';

const STORE_KEY = 'estlopacu-theme';

export default function App() {
  const [theme, setTheme] = React.useState(() =>
    (typeof localStorage !== 'undefined' && localStorage.getItem(STORE_KEY)) || 'light'
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'terminal' ? 'terminal' : '');
    localStorage.setItem(STORE_KEY, theme);
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
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === 'terminal' ? 'light' : 'terminal'))} />
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
