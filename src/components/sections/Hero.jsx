// Hero — terminal-typewriter landing. The eyebrow and headline type themselves
// in like someone at a terminal, then the rest of the block staggers in.
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import Button from '../ds/Button.jsx';
import Tag from '../ds/Tag.jsx';
import TerminalPrompt from '../ds/TerminalPrompt.jsx';
import SocialLink from '../ds/SocialLink.jsx';
import Typewriter from '../ds/Typewriter.jsx';
import CommandLine from '../ds/CommandLine.jsx';
import { DUR, EASE, STAGGER } from '../../lib/motion-tokens.ts';

const EYEBROW = '// software engineer · berlin, germany';
const TITLE_L1 = 'Luis Esteban';
const TITLE_L2 = 'López Acuña';

function Hero() {
  const reduce = useReducedMotion();
  // Client-mount gate so SSR renders the final state (no hydration mismatch),
  // then the client swaps to the typing sequence.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);

  // Sequence stages. Each stage unlocks the next.
  // 0 = eyebrow typing, 1 = title L1 typing, 2 = title L2 typing,
  // 3 = rest fades in (stagger).
  const [stage, setStage] = React.useState(reduce || !mounted ? 3 : 0);
  React.useEffect(() => {
    if (reduce) setStage(3);
    else if (mounted && stage === 3 && !document.hasFocus?.() === false) {
      // no-op; stage transitions happen via Typewriter onDone
    }
  }, [reduce, mounted, stage]);

  const restVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: DUR.slow, ease: EASE.out },
    },
  };
  const restContainer = {
    hidden: {},
    show: { transition: { staggerChildren: STAGGER.hero, delayChildren: 0.05 } },
  };

  // Server + reduced-motion + not-yet-mounted path: render the full text with
  // no cursors so the page is fully readable without JS.
  const useTyper = mounted && !reduce;

  return (
    <section className="pf-hero" id="top" data-nav-target>
      <div className="pf-hero__grid">
        <div className="pf-hero__copy">
          <CommandLine command="whoami" />
          {useTyper ? (
            <Typewriter
              as="span"
              className="pf-hero__eyebrow"
              text={EYEBROW}
              speed={22}
              onDone={() => setStage((s) => Math.max(s, 1))}
            />
          ) : (
            <span className="pf-hero__eyebrow">{EYEBROW}</span>
          )}

          <h1 className="pf-hero__title">
            {useTyper ? (
              <>
                <Typewriter
                  as="span"
                  text={TITLE_L1}
                  speed={45}
                  startDelay={stage >= 1 ? 180 : 999999}
                  onDone={() => setStage((s) => Math.max(s, 2))}
                  style={{ display: 'inline-block' }}
                />
                <br />
                <Typewriter
                  as="span"
                  text={TITLE_L2}
                  speed={45}
                  startDelay={stage >= 2 ? 120 : 999999}
                  onDone={() => setStage((s) => Math.max(s, 3))}
                  keepCursor={false}
                  style={{ display: 'inline-block' }}
                />
                {stage >= 3 && <span className="pf-hero__dot">.</span>}
              </>
            ) : (
              <>
                {TITLE_L1}<br />
                {TITLE_L2}<span className="pf-hero__dot">.</span>
              </>
            )}
          </h1>

          <motion.div
            variants={restContainer}
            initial={useTyper ? 'hidden' : false}
            animate={stage >= 3 ? 'show' : 'hidden'}
          >
            <motion.p className="pf-hero__lead" variants={restVariants}>
              Senior full-stack engineer from Costa Rica, based in Berlin. Over 10 years
              delivering high-impact products for startups and scale-ups.
            </motion.p>
            <motion.div className="pf-hero__tags" variants={restVariants}>
              <Tag tone="signal" dot>Open to work</Tag>
              <Tag>React · Next.js</Tag>
              <Tag>TypeScript</Tag>
              <Tag tone="neutral">10+ yrs</Tag>
            </motion.div>
            <motion.div className="pf-hero__actions" variants={restVariants}>
              <Button variant="primary" size="lg" as="a" href="#projects">View work</Button>
              <Button variant="secondary" size="lg" as="a" href="#contact">Get in touch</Button>
            </motion.div>
            <motion.div className="pf-hero__social" variants={restVariants}>
              <SocialLink icon="github" label="GitHub" href="https://github.com/Estlopacu" target="_blank" />
              <SocialLink icon="linkedin" label="LinkedIn" href="https://www.linkedin.com/in/estlopacu/" target="_blank" />
              <SocialLink icon="mail" label="Email" href="mailto:estlopacu@gmail.com" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="pf-hero__aside"
          initial={useTyper ? { opacity: 0, y: 12 } : false}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DUR.slow, ease: EASE.out, delay: 0.3 }}
        >
          <div className="pf-hero__portrait">
            <img src="/profile.jpg" alt="Esteban López Acuña" />
          </div>
          <TerminalPrompt command="cat about.md" output="Senior full-stack engineer · 10+ yrs · Berlin." />
        </motion.div>
      </div>
      <a className="pf-hero__scroll" href="#about"><ArrowDown size={16} /> scroll</a>
    </section>
  );
}

export default Hero;
