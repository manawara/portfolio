'use client'
import React, { useRef } from 'react'
import Button from '../Button'
import Avatar from '../Avatar'
import { generateQuote } from '@/lib/helper'
import SectionTransition from '../SectionTransition'
import Modal, { ModalHandle } from '../Modal'
import QuoteComponent from '../QuoteComponent'

const About = ({ qoute }: { qoute: string }) => {
  const modalRef = useRef<ModalHandle>(null)
  const handleModalOpen = () => {
    modalRef.current?.open()
  }
  return (
    <SectionTransition>
      <section>
        <h3 className="text-center text-3xl mb-4">About me</h3>
        <div className="flex flex-col-reverse sm:flex-row items-center my-8 gap-8">
          <div className="sm:max-w-[60%]">
            <QuoteComponent quote={qoute} />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center sm:justify-start">
              <Avatar height={144} width={144} />
            </div>
            <h4 className="mt-4 font-semibold text-2xl">More about me</h4>
            <div className="my-4">Click the button below to read more.</div>
            <div>
              <Button onClick={handleModalOpen}>About me</Button>
            </div>
          </div>
        </div>
      </section>
      <Modal ref={modalRef}>
        <div className="flex flex-col">
          <div>
            I&apos;m a passionate frontend developer with a keen eye for creating engaging and user-friendly web
            experiences. With 5+ years of experience in crafting responsive and interactive websites. I&apos;m always
            eager to learn new technologies and stay up-to-date with the latest frontend trends. My goal is to build
            seamless, accessible, and visually appealing interfaces that enhance user experience.
          </div>
          <div>
            <p className="font-semibold mt-4">I specialize in:</p>
            <ol>
              <li>- HTML5, CSS3, and JavaScript (ES6+)</li>
              <li>- React.js and Next.js frameworks</li>
              <li>- Responsive web design</li>
              <li>- CSS preprocessors (Sass, Less)</li>
              <li>- Version control with Git</li>
              <li>- Performance optimization</li>
              <li>- Cross-browser compatibility</li>
            </ol>
            <p className="my-4">Let&apos;s connect and create something amazing together!</p>
          </div>
        </div>
      </Modal>
    </SectionTransition>
  )
}

export default About
