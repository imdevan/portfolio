import { createElement } from 'react'
import cn from 'classnames'
import { Playfair_Display } from 'next/font/google'
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

type Props = {
  s?: 1 | 2 | 3 | 4 | 5 | 6 // Only accepts numbers 1-6
  children: React.ReactNode // To support any valid React content inside the header
  className?: string
}

const H = ({ s = 1, children, className }: Props) => {
  const HeaderTag = `h${s}` // Will be 'h1', 'h2', etc.
  let size = 'base'

  switch (s) {
    case 1:
      size = '4xl md:text-7xl lg:text-8xl md:leading-none'
      break
    case 2:
      size = '2xl mb:text-4xl lg:text-5xl md:leading-none'
      break
    case 3:
      size = '2xl md:text-4xl'
      break
    case 4:
      size = 'lg'
      break
    case 5:
      size = 'lg'
      break
    case 6:
      size = 'base'
      break
  }

  return createElement(
    HeaderTag,
    {
      className: cn(`text-${size}`, playfairDisplay.className, className),
    },
    children
  )
}

export default H
