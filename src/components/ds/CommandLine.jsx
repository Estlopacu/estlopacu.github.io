// CommandLine — renders a shell prompt line like `$ command`.
// Used as section headers in the terminal theme to establish rhythm.
import React from 'react';

export default function CommandLine({
  user = 'esteban',
  host = 'portfolio',
  path = '~',
  command,
  className = '',
  ...rest
}) {
  return (
    <p className={('pf-cmd ' + className).trim()} {...rest}>
      <span className="pf-cmd__user">{user}@{host}</span>
      <span className="pf-cmd__sep">:</span>
      <span className="pf-cmd__path">{path}</span>
      <span className="pf-cmd__prompt">$</span>{' '}
      <span className="pf-cmd__cmd">{command}</span>
    </p>
  );
}
