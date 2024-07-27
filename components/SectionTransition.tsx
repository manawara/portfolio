'use client'
import { motion } from 'framer-motion'
const SectionTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'spring' }}>
      {children}
    </motion.div>
  )
}

export default SectionTransition
