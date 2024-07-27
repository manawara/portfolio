import { motion } from 'framer-motion'
import Nav from './Nav'

const Sidebar = () => {
  return (
    <motion.aside
      initial={{
        x: 400,
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ type: 'spring' }}
      className="fixed top-0 -left-1 flex justify-center items-center bg-gray-900 w-screen h-full md:hidden z-10"
    >
      <Nav />
    </motion.aside>
  )
}

export default Sidebar
