import Link from 'next/link'
import NavLink from './NavLink'
import React from 'react'

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/tech-stack">Tech Stack</NavLink>
        </li>
        <li>
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
