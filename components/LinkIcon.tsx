import React, { type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImageType } from './CardList/Card'
type LinkIconType = {
  href: string
  children: ReactNode
}

type LinkProps = LinkIconType & ImageType

const LinkIcon = ({ image, href, children }: LinkProps) => {
  return (
    <div className="flex items-center gap-2 px-2">
      <Image src={image.src} alt={image.alt} height={20} width={20} />
      <Link href={href} className="text-xs hover:scale-105 duration-300">
        {children}
      </Link>
    </div>
  )
}

export default LinkIcon
