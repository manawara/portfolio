import React from 'react'
import Button from '../Button'
import Avatar from '../Avatar'
import { generateQuote } from '@/lib/helper'
import SectionTransition from '../SectionTransition'

const About = () => {
  const qoute = generateQuote()

  return (
    <SectionTransition>
      <section>
        <h3 className="text-center text-3xl mb-4">About me</h3>
        <div className="flex flex-col-reverse sm:flex-row items-center my-8 gap-8">
          <div className="sm:max-w-[60%]">
            <p className="bg-[#1e2c3d] rounded-2xl py-8 px-8 inline-block">{qoute}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center sm:justify-start">
              <Avatar height={144} width={144} />
            </div>

            <h4 className="mt-4 font-semibold text-2xl">More about me</h4>
            <div className="my-4">Click the button below to read more.</div>
            <div>
              <Button>About me</Button>
            </div>
          </div>
        </div>
      </section>
    </SectionTransition>
  )
}

export default About
