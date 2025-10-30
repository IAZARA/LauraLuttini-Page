import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-rose-200"
      style={{ transformOrigin: '0% 50%' }}
    >
      <motion.div className="h-full bg-rose-400" style={{ scaleX }} />
    </motion.div>
  )
}

