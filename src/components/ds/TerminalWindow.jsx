// TerminalWindow — a bordered terminal frame around content, drawn with
// box-drawing characters via CSS (::before/::after). Optional title bar
// with the classic 3-dot chrome. Used to wrap section blocks so each
// section reads as its own "pane" in the shell environment.
import React from 'react';

export default function TerminalWindow({
  title,
  chrome = true,     // show 3-dot title bar
  children,
  className = '',
  ...rest
}) {
  return (
    <div className={('pf-term ' + className).trim()} {...rest}>
      {chrome && (
        <div className="pf-term__chrome" aria-hidden="true">
          <span className="pf-term__dot pf-term__dot--r" />
          <span className="pf-term__dot pf-term__dot--y" />
          <span className="pf-term__dot pf-term__dot--g" />
          {title && <span className="pf-term__title">{title}</span>}
        </div>
      )}
      <div className="pf-term__body">{children}</div>
    </div>
  );
}
