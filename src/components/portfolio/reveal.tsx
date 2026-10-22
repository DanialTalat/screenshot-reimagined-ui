import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Staggered fade-in-up entrance with spring physics.
 * Respects the user's reduced-motion preference.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 110, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}
