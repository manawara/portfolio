import Link from 'next/link'
import { projects } from '@/lib/data'
import React from 'react'
import Card from './Card'
import SectionTransition from '../SectionTransition'

const CardList = ({ id }: { id: string }) => {
  return (
    <SectionTransition>
      <section className="my-20" id={id}>
        <h3 className="text-center text-3xl mb-2">Projects</h3>
        <p className="text-center mb-8">
          Visit my{' '}
          <Link
            href="https://github.com/manawara/"
            className="bg-gradient-to-r from-violet-500  to-fuchsia-500 inline-block text-transparent bg-clip-text hover:scale-105 duration-200"
            target="_blink"
          >
            GitHub
          </Link>{' '}
          to see more
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <Card key={project.name} {...project} />
          ))}
        </div>
      </section>
    </SectionTransition>
  )
}

export default CardList
