'use client'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTransition from './SectionTransition'
import Button from './Button'
import useCopyText from '@/hooks/useCopyText'

const Footer = () => {
  const { status, copyText } = useCopyText()
  const handleCopy = async (text: string) => {
    await copyText(text)
  }

  return (
    <>
      <footer className="flex gap-4 justify-center  py-8 mt-10">
        <SectionTransition>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button href="https://www.linkedin.com/in/marcin-nawara/" target="_blink">
              Linkedin
            </Button>
            <Button href="mailto:marcinnawara@int.pl">E-mail</Button>
            <Button onClick={() => handleCopy('marcinnawara@int.pl')}>marcinnawara@int.pl</Button>
            <Button href="https://github.com/manawara" target="_blink">
              GitHub
            </Button>
          </div>
        </SectionTransition>
      </footer>
      <AnimatePresence>
        {status && (
          <motion.div
            key="status"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-8 bg-gradient-to-r from-violet-500  to-fuchsia-500 text-white py-2 px-4 rounded"
          >
            {status}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
