// Projects — each project rendered as `$ cat <slug>/README.md` inside a
// TerminalWindow. Images visible by default; hover no longer required.
// The `body` field is markdown-lite: '##' becomes a heading, blank lines
// separate paragraphs. Add real Problem/Outcome copy over time — the
// component doesn't care what sections exist, it just renders whatever's
// in `body`.
import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../ds/SectionHeading.jsx';
import Tag from '../ds/Tag.jsx';
import TerminalWindow from '../ds/TerminalWindow.jsx';
import CommandLine from '../ds/CommandLine.jsx';

const PROJECTS = [
  {
    slug: 'contratista-costa-rica',
    name: 'Contratista Costa Rica',
    img: '/project-contratistacr.png',
    body: `A marketplace connecting contractors and independent workers across the Costa Rican construction industry. Two-sided platform: contractors post jobs, workers apply, both build reputation over time.`,
    stack: ['HTML5', 'CSS3', 'jQuery', 'AngularJS', 'CodeIgniter', 'MySQL'],
  },
  {
    slug: 'mamavaprimero-monge',
    name: '#MamáVaPrimero — Monge',
    img: '/project-mamavaprimero.png',
    body: `A Mother's Day campaign for retail chain Monge letting users record a personalized video card and share it back through Facebook. In-browser video capture, upload pipeline, and social integration.`,
    stack: ['JavaScript', 'Facebook API', 'Video', 'AJAX'],
  },
  {
    slug: 'graphql-costa-rica-locations',
    name: 'GraphQL Costa Rica Locations',
    img: '/project-graphql-cr.png',
    href: 'https://github.com/Estlopacu/graphql-costa-rica-locations',
    body: `A schema-first GraphQL API serving Costa Rica's administrative divisions — 7 provincias, 82 cantones, 474 distritos — with stable IDs and postal codes. Resolvers are type-checked against the schema via GraphQL Code Generator so a bad return shape fails tsc, not a live query. Deployed on EC2 behind nginx as a systemd service.`,
    stack: ['TypeScript', 'GraphQL', 'Apollo Server', 'graphql-codegen', 'Node.js'],
  },
  {
    slug: 'indicadores-economicos-bccr',
    name: 'indicadores-economicos-bccr',
    img: '/project-bccr.png',
    href: 'https://www.npmjs.com/package/indicadores-economicos-bccr',
    body: `An npm package for converting between US dollars and Costa Rican colones using live exchange rates from the Banco Central de Costa Rica SOAP web service. Handles XML parsing, rate caching, and typed responses so downstream code stays clean.`,
    stack: ['Node.js', 'npm', 'axios', 'xmldom', 'SOAP'],
  },
];

// Split body into paragraphs (blank-line separated) and optional '##' headings.
function renderBody(body) {
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return <h4 className="pf-readme__h" key={i}>{block.slice(3)}</h4>;
    }
    return <p className="pf-readme__p" key={i}>{block}</p>;
  });
}

function ProjectPane({ p }) {
  const filename = `${p.slug}/README.md`;
  return (
    <div className="pf-readme pf-reveal" data-nav-row>
      <CommandLine command={`cat ${filename}`} />
      <TerminalWindow title={filename} className="pf-readme__win">
        <div className="pf-readme__media">
          <img src={p.img} alt={p.name} loading="lazy" />
        </div>
        <div className="pf-readme__content">
          <h3 className="pf-readme__title"># {p.name}</h3>
          {renderBody(p.body)}
          <h4 className="pf-readme__h">## stack</h4>
          <div className="pf-readme__stack">
            {p.stack.map((t) => <Tag key={t} tone="signal">{t}</Tag>)}
          </div>
          {p.href && (
            <>
              <h4 className="pf-readme__h">## live</h4>
              <a className="pf-readme__link" href={p.href} target="_blank" rel="noopener noreferrer">
                {p.href} <ExternalLink size={14} />
              </a>
            </>
          )}
        </div>
      </TerminalWindow>
    </div>
  );
}

function Projects() {
  return (
    <section className="pf-section" id="projects" data-nav-target>
      <div className="pf-reveal">
        <SectionHeading eyebrow="# selected work" title="Projects I've shipped"
          subtitle="A few products I've built end-to-end." />
      </div>
      <CommandLine command="ls work/" className="pf-ls__cmd" />
      <p className="pf-ls__total">total {PROJECTS.length}</p>
      <div className="pf-readme__grid">
        {PROJECTS.map((p) => <ProjectPane p={p} key={p.slug} />)}
      </div>
    </section>
  );
}

export default Projects;
