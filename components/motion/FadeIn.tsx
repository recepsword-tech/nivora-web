"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, DURATION } from "@/lib/animations";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = DURATION.base,
  y = 24,
  className,
}: FadeInProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
