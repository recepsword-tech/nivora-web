"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { fadeUp, EASE_OUT, DURATION } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** How far below the fold to trigger — default "-80px" means trigger 80px before element enters */
  margin?: `${number}px` | `${number}%` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  margin = "0px 0px -80px 0px",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: DURATION.base, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
