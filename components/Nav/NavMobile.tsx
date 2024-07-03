'use client'

import React from 'react'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { useContextHamburger } from '@/context/ContextHamburger'
import { AnimatePresence } from 'framer-motion'
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
