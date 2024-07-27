'use client'
import Link from 'next/link'
import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

type NavLinkProps = {
  href: string
  index: number
  children: ReactNode
  onAction: (item: number) => void
}

const NavLink = ({ href, index, children, onAction }: NavLinkProps) => {
  return (
    <>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        <Link href={href} className="hover:text-gray-400" onClick={() => onAction(index)}>
          {children}
        </Link>
      </motion.div>
    </>
  )
}

export default NavLink
