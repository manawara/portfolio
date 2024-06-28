import SocialMedia from './SocialMedia'
import Nav from './Nav/Nav'
import Hamburger from './Nav/Hamburger'
import HamburgerProvider from '@/context/ContextHamburger'
const Header = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <h1 className="text-4xl bg-gradient-to-r from-violet-500  to-fuchsia-500 inline-block text-transparent bg-clip-text">
        {'<dev/>'}
      </h1>
      <div className="hidden md:flex flex-col items-center ml-auto  md:flex-row">
        <Nav />
        <SocialMedia />
      </div>
      <HamburgerProvider>
        <Hamburger />
      </HamburgerProvider>
    </header>
  )
}

export default Header
