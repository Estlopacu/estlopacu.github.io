import * as React from 'react';

export interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Lucide icon name, e.g. "github", "linkedin", "mail". @default "link" */
  icon?: string;
  /** Accessible label / tooltip. */
  label?: string;
  /** Ghost style for dark surfaces. @default false */
  ghost?: boolean;
}

/**
 * Circular social icon link with the heritage "swing" hover. Requires
 * Lucide on the page (CDN). Pass a Lucide icon name via `icon`.
 */
export function SocialLink(props: SocialLinkProps): JSX.Element;
export default SocialLink;
