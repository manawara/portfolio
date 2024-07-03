import Image from 'next/image'
import Link from 'next/link'
import githubIcon from '@/public/github.svg'
import linkedinIcon from '@/public/linkedin.svg'
import { motion } from 'framer-motion'
import Icon from './Icon'
const SocialMedia = () => {
  return (
    <div>
      <ul className="flex">
        <li className="ml-8">
          <Icon icon={githubIcon} alt="icon github" src="https://github.com/manawara" />
        </li>
        <li className="ml-4 group ">
          <Icon icon={linkedinIcon} alt="icon linkedin" src="https://www.linkedin.com/in/marcin-nawara" />
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
