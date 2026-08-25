// Experience — reframed as `git log --author=esteban --oneline`.
// Each job entry renders as a commit with tag, author, date, and body.
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../ds/SectionHeading.jsx';
import Button from '../ds/Button.jsx';
import CommandLine from '../ds/CommandLine.jsx';

// Deterministic pseudo-hash from index+company so the "commit" ids are stable.
function shortHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(16).padStart(7, '0').slice(0, 7);
}

function branchTag(dates) {
  // "Jan 2026 — Jul 2026" → "2026-jan..jul", "Feb 2017 — Dec 2017" → "2017-feb..dec"
  const m = dates.match(/(\w{3})\s+(\d{4})\s+[—-]\s+(\w{3})\s+(\d{4})/);
  if (!m) return dates.toLowerCase().replace(/\s+/g, '-');
  const [, m1, y1, m2, y2] = m;
  if (y1 === y2) return `${y1}-${m1.toLowerCase()}..${m2.toLowerCase()}`;
  return `${y1}-${m1.toLowerCase()}..${y2}-${m2.toLowerCase()}`;
}

function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);
  const jobs = [
    { dates: 'Jan 2026 — Jul 2026', company: 'Payrails', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'Built & launched a new company-website CMS with Next.js and Sanity; improved SEO and engagement; maintained the legacy Webflow site.' },
    { dates: 'Dec 2024 — Dec 2025', company: 'Freelance', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'Delivered frontend and backend work for clients; mentored developers on projects in Costa Rica; studied German intensively to B2.' },
    { dates: 'Jul 2024 — Nov 2024', company: 'Root Global', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'Contributed to the launch of the new web app; led implementation of a new tracking system enabling scalability and user-behavior insights.' },
    { dates: 'May 2018 — Jun 2024', company: 'GetYourGuide', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'A/B tests lifting conversion ~4% in several experiments; company-wide E2E test migration to a Dockerized service; internal TS tracking package adopted across teams.' },
    { dates: 'Feb 2017 — Dec 2017', company: 'Gorilla Logic', position: 'Senior Web Developer', location: 'San José, CR',
      highlight: 'Engineered continuous video playback, plus video tagging and thumbnails across the site.' },
    { dates: 'Aug 2016 — Feb 2017', company: 'Informatec', position: 'Senior Web Developer', location: 'San José, CR',
      highlight: 'Developed PDF scanning to process company invoices.' },
    { dates: 'Jul 2014 — Jul 2016', company: 'Konrad Group', position: 'Web Developer', location: 'San José, CR',
      highlight: 'Implemented POCs for multiple clients.' },
  ];
  const visible = showEarlier ? jobs : jobs.slice(0, -3);
  return (
    <section className="pf-section pf-section--alt" id="experience" data-nav-target>
      <div className="pf-reveal">
        <SectionHeading eyebrow="# experience" title="Where I've worked" align="center"
          subtitle="10+ years across startups and scale-ups — the last six in Berlin." />
      </div>
      <CommandLine command="git log --author=esteban --oneline" className="pf-gitlog__cmd" />
      <ol className="pf-gitlog pf-reveal">
        {visible.map((j, i) => {
          const hash = shortHash(j.company + j.dates);
          const branch = branchTag(j.dates);
          const isHead = i === 0;
          return (
            <li className="pf-gitlog__item" key={i} tabIndex="0" data-nav-row>
              <p className="pf-gitlog__commit">
                <span className="pf-gitlog__kw">commit</span>{' '}
                <span className="pf-gitlog__hash">{hash}</span>{' '}
                <span className="pf-gitlog__refs">
                  ({isHead && <><span className="pf-gitlog__head">HEAD -&gt; main</span>, </>}
                  <span className="pf-gitlog__branch">{branch}</span>)
                </span>
              </p>
              <p className="pf-gitlog__meta">
                <span className="pf-gitlog__kw">Author:</span>{' '}
                Esteban López Acuña &lt;estlopacu@gmail.com&gt;
              </p>
              <p className="pf-gitlog__meta">
                <span className="pf-gitlog__kw">Date:</span>{'   '}{j.dates}
              </p>
              <div className="pf-gitlog__body">
                <p className="pf-gitlog__subject">
                  {j.position} @ <span className="pf-gitlog__co">{j.company}</span>, {j.location}
                </p>
                <p className="pf-gitlog__desc">{j.highlight}</p>
              </div>
            </li>
          );
        })}
      </ol>
      {!showEarlier && (
        <div className="pf-timeline__more">
          <Button variant="secondary" onClick={() => setShowEarlier(true)}>
            $ git log --all <ChevronDown size={16} />
          </Button>
        </div>
      )}
    </section>
  );
}

export default Experience;
