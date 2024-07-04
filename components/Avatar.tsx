'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profileIcon from '@/public/mnawara.png'

type AvatarProps = {
  height?: number
  width?: number
}

const Avatar = ({ height = 288, width = 288 }: AvatarProps) => {
  let classes = { width: `${width}px`, height: `${height}px` }
  return (
    <div className="relative overflow-hidden" style={classes}>
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
