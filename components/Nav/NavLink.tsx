'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

type NavLinkProps = {
  href: string
  children: ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname()

  return (
    <>
      <Link href={href} className={`${path === href ? 'text-gray-400' : 'hover:text-gray-400'}`}>
        {children}
      </Link>
    </>
  )
}

export default NavLink
