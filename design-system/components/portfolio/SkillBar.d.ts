import * as React from 'react';

export interface SkillBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skill label, e.g. "React". */
  name: string;
  /** Proficiency 0–100. @default 0 */
  percent?: number;
  /** Fill color. @default "brand" */
  tone?: 'brand' | 'signal';
}

/**
 * Animated proficiency meter — fills when scrolled into view. Modernized
 * from the original online-CV skill bars.
 */
export function SkillBar(props: SkillBarProps): JSX.Element;
export default SkillBar;
