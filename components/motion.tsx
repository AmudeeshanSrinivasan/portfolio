"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionA = motion.a;

export const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
} satisfies Variants;

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
} satisfies Variants;
