'use client'
import { useState } from 'react'
import Link from 'next/link'
import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

type NavLinkProps = {
  href: string
  index: number
  children: ReactNode
  onAction: (item: number) => void
  select: number
}

const NavLink = ({ href, index, children, onAction, select }: NavLinkProps) => {
  return (
    <>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        <Link
          href={href}
          className={`${select === index ? 'text-gray-400' : 'hover:text-gray-400'}`}
          onClick={() => onAction(index)}
        >
          {children}

          {select === index && <motion.div layoutId="nav" className={'w-full h-[2px] bg-gray-400'}></motion.div>}
        </Link>
      </motion.div>
    </>
  )
}

export default NavLink
