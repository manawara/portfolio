'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { useContextHamburger } from '@/context/ContextHamburger'
const NavMobile = () => {
  const ctx = useContextHamburger()
  return (
    <>
      <AnimatePresence>{ctx.open && <Sidebar />}</AnimatePresence>
      <Hamburger />
    </>
  )
}

export default NavMobile
