import Image from 'next/image'
import Link from 'next/link'
import githubIcon from '@/public/github.svg'
import linkedinIcon from '@/public/linkedin.svg'

const SocialMedia = () => {
  return (
    <div>
      <ul className="flex">
        <li className="ml-8 group">
          <Link href="https://github.com/manawara">
            <Image
              src={githubIcon}
              alt="icon github"
              width={24}
              height={24}
              className="group-hover:scale-110 duration-100 transition-transform"
            />
          </Link>
        </li>
        <li className="ml-4 group ">
          <Link href="https://www.linkedin.com/in/marcin-nawara">
            <Image
              src={linkedinIcon}
              alt="icon linkedin"
              width={25}
              height={25}
              className="group-hover:scale-110 duration-100 transition-transform"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
