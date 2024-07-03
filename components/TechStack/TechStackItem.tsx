'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { dataType } from './TechStack'

const TechStackItem = ({ image, alt, description }: dataType) => {
  const itemFramer = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }
  return (
    <motion.div
      key={alt}
      className="flex flex-col"
      variants={itemFramer}
      whileHover={{ scale: 1.2 }}
      transition={{
        type: 'spring',
      }}
    >
      <Image src={image} alt={alt} width={40} className="mb-4 self-center min-h-12" />
      <p className="text-center">{description}</p>
    </motion.div>
  )
}

export default TechStackItem
