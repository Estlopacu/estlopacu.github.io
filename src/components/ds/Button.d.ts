import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'terminal';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: 'button' | 'a';
  /** Optional element rendered before the label (an icon). */
  iconLeft?: React.ReactNode;
  /** Optional element rendered after the label (an icon). */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary action control. Brand-blue by default; use `terminal` for the
 * signal-green developer accent and `secondary`/`ghost` for lower emphasis.
 *
 * @startingPoint section="Core" subtitle="Action button — 4 variants, 3 sizes" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
export default Button;
