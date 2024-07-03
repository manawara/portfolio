'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

type IconProps<T> = {
  src: T
  alt: T
  icon: T
}
const Icon = ({ src, alt, icon }: IconProps<string>) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Link href={src} target="_blank">
        <Image src={icon} alt={alt} width={25} height={25} />
      </Link>
    </motion.div>
  )
}

export default Icon
