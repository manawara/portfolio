'use client'
import NavLink from './NavLink'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { sections, Section } from '@/lib/helper'

const Nav: React.FC = () => {
  const { scrollToSection } = useScrollToSection(sections)

  return (
    <nav>
      <ul className="flex flex-col items-start md:flex-row gap-8">
        {sections.map((section: Section, index: number) => (
          <li key={index}>
            <NavLink index={index} href={`#${section.id}`} onAction={() => scrollToSection(index)}>
              {section.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
