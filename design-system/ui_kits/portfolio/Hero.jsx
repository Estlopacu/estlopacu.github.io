// Hero — full-height landing: eyebrow, big headline, terminal motif, portrait.
function Hero() {
  const { Button, Tag, TerminalPrompt, SocialLink } = window.EstlopacuPortfolioDesignSystem_604ed3;
  return (
    <section className="pf-hero" id="top">
      <div className="pf-hero__grid pf-reveal">
        <div className="pf-hero__copy">
          <span className="pf-hero__eyebrow">// software engineer · berlin, germany</span>
          <h1 className="pf-hero__title">
            Luis Esteban<br />López Acuña<span className="pf-hero__dot">.</span>
          </h1>
          <p className="pf-hero__lead">
            Senior full-stack engineer from Costa Rica, based in Berlin. Over 10 years
            delivering high-impact products for startups and scale-ups like GetYourGuide.
          </p>
          <div className="pf-hero__tags">
            <Tag tone="signal" dot>Open to work</Tag>
            <Tag>React · Next.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag tone="neutral">10+ yrs</Tag>
          </div>
          <div className="pf-hero__actions">
            <Button variant="primary" size="lg" as="a" href="#projects">View work</Button>
            <Button variant="secondary" size="lg" as="a" href="#contact">Get in touch</Button>
          </div>
          <div className="pf-hero__social">
            <SocialLink icon="github" label="GitHub" href="https://github.com/Estlopacu" target="_blank" />
            <SocialLink icon="linkedin" label="LinkedIn" href="https://www.linkedin.com/in/estlopacu/" target="_blank" />
            <SocialLink icon="mail" label="Email" href="mailto:estlopacu@gmail.com" />
          </div>
        </div>
        <div className="pf-hero__aside">
          <div className="pf-hero__portrait">
            <img src="design-system/assets/profile.jpg" alt="Esteban López Acuña" />
          </div>
          <TerminalPrompt command="cat about.md" output="Senior full-stack engineer · 10+ yrs · Berlin." />
        </div>
      </div>
      <a className="pf-hero__scroll" href="#about"><i data-lucide="arrow-down" /> scroll</a>
    </section>
  );
}
window.Hero = Hero;
