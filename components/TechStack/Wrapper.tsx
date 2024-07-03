'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const frameVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.5,
        staggerChildren: 0.07,
      },
    },
  }
  return (
    <motion.div
      variants={frameVariants}
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-3 max-w-[400px] sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-8 gap-8 sm:max-w-screen-lg mx-auto"
    >
      {children}
    </motion.div>
  )
}

export default Wrapper
