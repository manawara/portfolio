import React from 'react'
import Image, { type StaticImageData } from 'next/image'
import LinkIcon from '../LinkIcon'
import liveIcon from '@/public/linkIcon.svg'
import linkIconSVG from '@/public/githubWhite.svg'
export type ImageType = {
  image: {
    src: StaticImageData
    alt: string
  }
}

type CardProps = {
  name: string
  description: string
  techStack: string
  href: string
  liveLink: string
} & ImageType

const Card = ({ name, description, liveLink, techStack, href, image }: CardProps) => {
  return (
    <div className="max-w-80 rounded-b-lg">
      <Image src={image.src} alt={image.alt} className="rounded-t-lg object-cover  h-64" />
      <div className="bg-[#363636] p-4 rounded-b-lg">
        <h4 className="text-xl font-semibold mb-4">{name}</h4>
        <p className="text-sm">{description}</p>
        <p className="text-xs my-4">
          <span className="font-semibold">Tech stack:</span> {techStack}
        </p>
        <div className="flex justify-between text-sm">
          <LinkIcon image={{ src: liveIcon, alt: 'Link github repo' }} href={liveIcon}>
            Live Preview
          </LinkIcon>
          <LinkIcon image={{ src: linkIconSVG, alt: 'Link icon ' }} href={href}>
            View Code
          </LinkIcon>
        </div>
      </div>
    </div>
  )
}

export default Card
