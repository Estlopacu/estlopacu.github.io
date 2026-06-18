// Contact — terminal-styled CTA with education footer.
function Contact() {
  const { SectionHeading, Button, TerminalPrompt, SocialLink } = window.EstlopacuPortfolioDesignSystem_604ed3;
  const education = [
    { dates: '2014', title: 'M.Sc. Computer Engineering — Software Development', center: 'ULACIT, San José CR' },
    { dates: '2012', title: "Bachelor's in Computer Systems", center: 'Universidad Fidélitas, San José CR' },
  ];
  return (
    <section className="pf-section pf-contact" id="contact" data-theme="terminal">
      <div className="pf-contact__inner pf-reveal">
        <SectionHeading eyebrow="contact" title="Let's build something" align="center"
          subtitle="I'm open to new opportunities. The fastest way to reach me is email." />
        <div className="pf-contact__term">
          <TerminalPrompt user="you" host="estlopacu" command="./hire --role=engineer"
            output="Sending message to estlopacu@gmail.com…" />
        </div>
        <div className="pf-contact__actions">
          <Button variant="terminal" size="lg" as="a" href="mailto:estlopacu@gmail.com">
            estlopacu@gmail.com
          </Button>
          <Button variant="secondary" size="lg" as="a" href="tel:+491772430239">+49 177 243 0239</Button>
        </div>
        <div className="pf-contact__social">
          <SocialLink icon="github" label="GitHub" ghost href="https://github.com/Estlopacu" target="_blank" />
          <SocialLink icon="linkedin" label="LinkedIn" ghost href="https://www.linkedin.com/in/estlopacu/" target="_blank" />
          <SocialLink icon="mail" label="Email" ghost href="mailto:estlopacu@gmail.com" />
        </div>
        <div className="pf-edu">
          <p className="pf-edu__label">// education</p>
          <ul>
            {education.map((e, i) => (
              <li key={i}><span className="pf-edu__d">{e.dates}</span><span className="pf-edu__t">{e.title}</span><span className="pf-edu__c">{e.center}</span></li>
            ))}
          </ul>
        </div>
        <footer className="pf-footer">© {new Date().getFullYear()} Esteban López Acuña · built with the estlopacu design system</footer>
      </div>
    </section>
  );
}
window.Contact = Contact;
