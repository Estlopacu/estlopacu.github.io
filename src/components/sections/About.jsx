// About + Skills — reframed as `cat about.md` and `cat skills.yaml`
// terminal panes. Same content, terminal-shell presentation.
import React from 'react';
import SectionHeading from '../ds/SectionHeading.jsx';
import Card from '../ds/Card.jsx';
import Tag from '../ds/Tag.jsx';
import TerminalWindow from '../ds/TerminalWindow.jsx';
import CommandLine from '../ds/CommandLine.jsx';

function About() {
  const groups = [
    { label: 'core_stack', tone: 'signal', items: ['TypeScript', 'React / Next.js', 'Node.js', 'Vue.js / Nuxt'] },
    { label: 'frontend',   items: ['React Native', 'TanStack Query', 'React Router', 'Pinia', 'Tailwind', 'HTML', 'CSS'] },
    { label: 'cms',        items: ['Sanity', 'Webflow'] },
    { label: 'infra_cloud',items: ['AWS', 'Docker'] },
    { label: 'testing',    items: ['Playwright', 'Cypress', 'E2E'] },
    { label: 'observability', items: ['PostHog', 'Datadog', 'Sentry'] },
    { label: 'databases',  items: ['PostgreSQL', 'MySQL'] },
  ];
  let n = 0;
  return (
    <section className="pf-section" id="about" data-nav-target>
      <div className="pf-about pf-reveal">
        <div className="pf-about__text">
          <CommandLine command="cat about.md" />
          <TerminalWindow title="about.md" className="pf-about__win">
            <SectionHeading eyebrow="# about" title="Engineer who sweats the details" />
            <p className="pf-prose">
              I'm a senior full-stack engineer, originally from Costa Rica and based in Berlin.
              Over the last decade I've delivered high-impact digital products across startups
              and scale-ups. I'm currently open to new opportunities. I care about product
              quality, team collaboration, and continuous improvement.
            </p>
            <Card variant="sunken">
              <div className="pf-stats">
                <div><b>10+</b><span>years building</span></div>
                <div><b>6 yr</b><span>longest role</span></div>
                <div><b>BER</b><span>based · from CR</span></div>
              </div>
            </Card>
          </TerminalWindow>
        </div>
        <div className="pf-about__skills" id="skills" data-nav-target>
          <CommandLine command="cat skills.yaml" />
          <TerminalWindow title="skills.yaml" className="pf-about__win">
            <div className="pf-skillgroups pf-reveal pf-yaml">
              {groups.map((g) => (
                <div className="pf-skillgroup pf-yaml__block" key={g.label}>
                  <p className="pf-yaml__key">{g.label}:</p>
                  <div className="pf-skillgroup__pills pf-yaml__list">
                    {g.items.map((t) => (
                      <span className="pf-yaml__item" key={t}>
                        <span className="pf-yaml__dash">-</span>
                        <Tag tone={g.tone || 'neutral'} solid={!!g.tone}
                          className="pf-pill" style={{ transitionDelay: (n++ * 45) + 'ms' }}>{t}</Tag>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}

export default About;
