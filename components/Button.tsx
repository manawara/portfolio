'use client'
import React, { ComponentPropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import { LinkProps } from 'next/link'
import Link from 'next/link'

type BaseType = {
  children: ReactNode
}

type ButtonType = Omit<ComponentPropsWithoutRef<'button'>, keyof HTMLMotionProps<'button'>> &
  HTMLMotionProps<'button'> &
  BaseType & {
    href?: never
    target?: never
    rel?: never
  } & RefAttributes<HTMLButtonElement>

type LinkType = LinkProps &
  Pick<ComponentPropsWithoutRef<'a'>, 'target' | 'rel'> & {
    href: string
    onClick?: never
    type?: never
    disabled?: never
  } & BaseType

type ButtonProps = ButtonType | LinkType

const isRouterLink = (props: ButtonProps): props is LinkType => {
  return 'href' in props
}
const ButtonContent = ({ children }: { children: ReactNode }) => (
  <>
    <span className="relative z-10"> {children}</span>
    <motion.span
      className="absolute top-0 left-0 w-full h-full bg-white"
      initial={{ x: '-100%', opacity: 0.7 }}
      variants={{
        hover: {
          x: '0',
          opacity: 0,
          transition: {
            duration: 0.4,
            ease: 'easeInOut',
          },
        },
      }}
    />
  </>
)

const commonProps = {
  className:
    'bg-[#363636] py-2 px-4 rounded-sm border-1 border border-gray-400 font-light font-poppins relative overflow-hidden',
  whileHover: 'hover',
  whileTap: 'tap',
  variants: {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  },
}

const Button = (props: ButtonProps) => {
  if (isRouterLink(props)) {
    const { href, children, ...otherProps } = props
    return (
      <Link href={href} {...otherProps}>
        <motion.div {...commonProps}>
          <ButtonContent>{children}</ButtonContent>
        </motion.div>
      </Link>
    )
  }

  const { children, ...otherProps } = props
  return (
    <motion.button {...commonProps} {...otherProps}>
      <ButtonContent>{children}</ButtonContent>
    </motion.button>
  )
}

export default Button
