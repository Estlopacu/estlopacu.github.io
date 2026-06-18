import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "brand" */
  tone?: 'brand' | 'neutral' | 'signal';
  /** Fill the chip instead of the soft tint. @default false */
  solid?: boolean;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Compact monospace chip for technologies, topics, or filters.
 */
export function Tag(props: TagProps): JSX.Element;
export default Tag;
