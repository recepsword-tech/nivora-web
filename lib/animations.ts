import type { Variants } from "motion/react";

export const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const DURATION = {
  fast: 0.25,
  base: 0.5,
  slow: 0.7,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};
