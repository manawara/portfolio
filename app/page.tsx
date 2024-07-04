import About from '@/components/About/About'
import Avatar from '@/components/Avatar'
import CardList from '@/components/CardList/CardList'
import TechStack from '@/components/TechStack/TechStack'
import { dataTechStack } from '@/lib/data'

export default function Home() {
  return (
    <main className="px-8">
      <header>
        <section className="flex flex-col-reverse items-center sm:flex-row mt-12">
          <h2 className="font-poppins text-xl">
            <span className="text-3xl sm:text-4xl  lg:text-5xl text-center font-semibold bg-gradient-to-r from-violet-500  to-fuchsia-500 inline-block text-transparent bg-clip-text w-full leading-snug  ">
              Frontend developer
            </span>
            <span className="block text-center mt-2 mb-6">Hello everyone!</span>
            Welcome to my world of front-end development, where creativity meets functionality to craft exceptional
            digital experiences.
          </h2>
          <div className="mb-4 w-full max-w-sm flex justify-center">
            <Avatar />
          </div>
        </section>
      </header>
      <TechStack data={dataTechStack} title="Skills" />
      <CardList />
      <About />
    </main>
  )
}
