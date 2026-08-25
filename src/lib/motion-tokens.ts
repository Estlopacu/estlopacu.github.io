// Motion tokens — JS mirror of CSS custom properties defined in spacing.css.
// Keep in sync when the CSS values change.

export const DUR = {
  fast: 0.14,
  base: 0.24,
  slow: 0.42,
  reveal: 0.7,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
};

export const SPRING = {
  soft: { type: 'spring', stiffness: 180, damping: 22, mass: 0.9 } as const,
  snappy: { type: 'spring', stiffness: 320, damping: 28, mass: 0.8 } as const,
};

export const STAGGER = {
  hero: 0.06,
  timeline: 0.08,
} as const;
