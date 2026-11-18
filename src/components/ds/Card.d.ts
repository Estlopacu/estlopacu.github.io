import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface style. @default "default" */
  variant?: 'default' | 'sunken' | 'terminal';
  /** Enable hover-lift + pointer cursor. @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * Elevated content surface with blue-tinted shadows. Use `interactive`
 * for clickable project / experience cards.
 *
 * @startingPoint section="Core" subtitle="Content surface — 3 variants, hover lift" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
export default Card;
