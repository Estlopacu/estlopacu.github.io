// About + Skills — bio, stats, and a categorized pill toolbox that
// staggers in from the left on scroll.
import React from 'react';
import SectionHeading from '../ds/SectionHeading.jsx';
import Card from '../ds/Card.jsx';
import Tag from '../ds/Tag.jsx';

function About() {
  const groups = [
    { label: 'core stack', tone: 'signal', items: ['TypeScript', 'React / Next.js', 'Node.js', 'Vue.js / Nuxt'] },
    { label: 'frontend', items: ['React Native', 'TanStack Query', 'React Router', 'Pinia', 'Tailwind', 'HTML', 'CSS'] },
    { label: 'cms', items: ['Sanity', 'Webflow'] },
    { label: 'infra & cloud', items: ['AWS', 'Docker'] },
    { label: 'testing', items: ['Playwright', 'Cypress', 'E2E'] },
    { label: 'databases', items: ['PostgreSQL', 'MySQL'] },
  ];
  let n = 0; // running index → cascade delay across all pills
  return (
    <section className="pf-section" id="about">
      <div className="pf-about pf-reveal">
        <div className="pf-about__text">
          <SectionHeading eyebrow="about" title="Engineer who sweats the details" />
          <p className="pf-prose">
            I'm a senior full-stack engineer, originally from Costa Rica and based in Berlin.
            Over the last decade I've delivered high-impact digital products across startups
            and scale-ups — six years at GetYourGuide, then Root Global, a year of freelance
            work and intensive German (B2), and most recently Payrails. I'm currently open to
            new opportunities. I care about product quality, team collaboration, and continuous
            improvement.
          </p>
          <Card variant="sunken">
            <div className="pf-stats">
              <div><b>10+</b><span>years building</span></div>
              <div><b>6 yr</b><span>at GetYourGuide</span></div>
              <div><b>BER</b><span>based · from CR</span></div>
            </div>
          </Card>
        </div>
        <div className="pf-about__skills">
          <SectionHeading eyebrow="skills" title="My toolbox" />
          <div className="pf-skillgroups pf-reveal">
            {groups.map((g) => (
              <div className="pf-skillgroup" key={g.label}>
                <p className="pf-skillgroup__label">// {g.label}</p>
                <div className="pf-skillgroup__pills">
                  {g.items.map((t) => (
                    <Tag key={t} tone={g.tone || 'neutral'} solid={!!g.tone}
                      className="pf-pill" style={{ transitionDelay: (n++ * 45) + 'ms' }}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
