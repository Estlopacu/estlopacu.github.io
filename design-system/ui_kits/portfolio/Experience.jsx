// Experience — vertical timeline built from the current CV (06.2026).
function Experience() {
  const { SectionHeading, Tag } = window.EstlopacuPortfolioDesignSystem_604ed3;
  const jobs = [
    { dates: 'Jan 2026 — Jul 2026', company: 'Payrails', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'Built & launched a new company-website CMS with Next.js and Sanity; improved SEO and engagement; maintained the legacy Webflow site.' },
    { dates: 'Dec 2024 — Dec 2025', company: 'Freelance', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'Delivered frontend and backend work for clients; mentored developers on projects in Costa Rica; studied German intensively to B2.' },
    { dates: 'Jul 2024 — Nov 2024', company: 'Root Global', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'Contributed to a document ingestion pipeline (S3 upload, AWS Lambda, PDF processing & DB storage); led a PostHog tracking system tying actions to individual users to clarify how users use the app.' },
    { dates: 'May 2018 — Jun 2024', company: 'GetYourGuide', position: 'Senior Full Stack Engineer', location: 'Berlin, DE',
      highlight: 'A/B tests lifting conversion ~4% in several experiments; company-wide E2E test migration to a Dockerized service; internal TS tracking package adopted across teams; Datadog/Sentry observability for critical services.' },
    { dates: 'Feb 2017 — Dec 2017', company: 'Gorilla Logic', position: 'Senior Web Developer', location: 'San José, CR',
      highlight: 'Engineered continuous video playback, plus video tagging and thumbnails across the site.' },
    { dates: 'Aug 2016 — Feb 2017', company: 'Informatec', position: 'Senior Web Developer', location: 'San José, CR',
      highlight: 'Developed PDF scanning to process company invoices.' },
    { dates: 'Jul 2014 — Jul 2016', company: 'Konrad Group', position: 'Web Developer', location: 'San José, CR',
      highlight: 'Implemented POCs for multiple clients.' },
  ];
  return (
    <section className="pf-section pf-section--alt" id="experience">
      <div className="pf-reveal">
        <SectionHeading eyebrow="experience" title="Where I've worked" align="center"
          subtitle="10+ years across startups and scale-ups — the last six in Berlin." />
      </div>
      <ol className="pf-timeline pf-reveal">
        {jobs.map((j, i) => (
          <li className="pf-timeline__item" key={i}>
            <span className="pf-timeline__node" />
            <div className="pf-timeline__card">
              <div className="pf-timeline__head">
                <h3>{j.position}</h3>
                <Tag tone="neutral">{j.dates}</Tag>
              </div>
              <p className="pf-timeline__company">{j.company}</p>
              <p className="pf-timeline__hl">{j.highlight}</p>
              <p className="pf-timeline__loc"><i data-lucide="map-pin" />{j.location}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
window.Experience = Experience;
