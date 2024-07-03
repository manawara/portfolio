'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profileIcon from '@/public/mnawara.png'
const Avatar = () => {
  return (
    <div className="relative w-72 h-72 overflow-hidden">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-500 via-violet-600 to-darkMode"
      />
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
        <Image src={profileIcon} alt="Person image" />
      </div>
    </div>
  )
}

export default Avatar
