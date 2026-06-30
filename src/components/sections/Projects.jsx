// Projects — image cards with hover reveal of the tech stack.
import React from 'react';
import SectionHeading from '../ds/SectionHeading.jsx';
import Tag from '../ds/Tag.jsx';
import Card from '../ds/Card.jsx';

function Projects() {
  const projects = [
    {
      name: 'Contratista Costa Rica',
      img: '/project-contratistacr.png',
      blurb: 'A marketplace connecting contractors and independent workers across the Costa Rican construction industry.',
      stack: ['HTML5', 'CSS3', 'jQuery', 'AngularJS', 'CodeIgniter', 'MySQL'],
    },
    {
      name: '#MamáVaPrimero — Monge',
      img: '/project-mamavaprimero.png',
      blurb: 'A Mother\'s Day campaign letting users record a personalized video card, integrated with Facebook.',
      stack: ['JavaScript', 'Facebook API', 'Video', 'AJAX'],
    },
    {
      name: 'indicadores-economicos-bccr',
      img: '/project-bccr.png',
      href: 'https://www.npmjs.com/package/indicadores-economicos-bccr',
      blurb: 'Convert between US dollars and Costa Rican colones using live exchange rates from the Banco Central de Costa Rica web service.',
      stack: ['Node.js', 'npm', 'axios', 'xmldom', 'SOAP'],
    },
  ];
  return (
    <section className="pf-section" id="projects">
      <div className="pf-reveal">
        <SectionHeading eyebrow="selected work" title="Projects I've shipped"
          subtitle="A few products I've built end-to-end. Hover for the stack." />
      </div>
      <div className="pf-projects pf-reveal">
        {projects.map((p) => {
          const card = (
            <Card key={p.name} interactive className="pf-project">
              <div className="pf-project__media">
                <img src={p.img} alt={p.name} />
                <div className="pf-project__overlay">
                  <p className="pf-project__label">// stack</p>
                  <div className="pf-project__stack">
                    {p.stack.map((t) => <Tag key={t} tone="signal">{t}</Tag>)}
                  </div>
                </div>
              </div>
              <div className="pf-project__body">
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </div>
            </Card>
          );
          return p.href
            ? <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="pf-project__link">{card}</a>
            : card;
        })}
      </div>
    </section>
  );
}

export default Projects;
