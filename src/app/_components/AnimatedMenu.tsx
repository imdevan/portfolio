'use client'

import {div as MD} from 'motion/react-client'
import Link from 'next/link'
import cn from 'classnames'
import { Roboto_Slab } from 'next/font/google'
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const MENU_ITEMS = [
  { href: '/contact', label: 'Contact' },
  { href: '/notes', label: 'Notes' },
  { href: '/side-projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
]

type Props = {
  isVisible: boolean
}

const AnimatedMenu = ({ isVisible }: Props) => {
  return (
    <div className="flex items-center gap-6">
      <MD
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : -20,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Link href="/" className="hover:underline">
          <h2 className={cn(robotoSlab.className, 'text-xl md:text-xl font-bold tracking-tight')}>
            DH
          </h2>
        </Link>
      </MD>

      {MENU_ITEMS.map((item, index) => (
        <MD
          key={item.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : -20,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 + (index * 0.1) }}
        >
          <Link href={item.href} className="hover:underline whitespace-nowrap">
            {item.label}
          </Link>
        </MD>
      ))}
    </div>
  )
}

export default AnimatedMenu
