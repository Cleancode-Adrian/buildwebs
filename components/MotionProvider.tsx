'use client'

import { MotionConfig } from 'framer-motion'

// Turns off framer-motion transform animations when the OS "reduce motion" setting is on
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
