'use client'
import NavLink from './NavLink'
import { useState } from 'react'

const Nav = () => {
  const [select, setSelect] = useState<number>(0)

  const handleClick = (item: number) => {
    setSelect(item)
  }

  const nav = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/',
      name: 'About',
    },
    {
      path: '/',
      name: 'Tech stack',
    },
    {
      path: '/',
      name: 'Projects',
    },
    {
      path: '/',
      name: 'Contact  ',
    },
  ]

  return (
    <nav>
      <ul className="flex flex-col items-start md:flex-row gap-8">
        {nav.map((link, index) => (
          <li key={index}>
            <NavLink index={index} href="/" select={select} onAction={handleClick}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
