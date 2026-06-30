import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Monospace eyebrow label (auto-prefixed with `//`). */
  eyebrow?: string;
  /** Display title. */
  title?: string;
  /** Optional supporting line. */
  subtitle?: string;
  /** Alignment. @default "left" */
  align?: 'left' | 'center';
}

/**
 * Recurring section header: a `//` monospace eyebrow over a display title.
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
export default SectionHeading;
