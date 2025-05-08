'use client'

import {div as MD} from 'motion/react-client'
import Link from 'next/link'
import { useState } from 'react'
import cn from 'classnames'
import { Roboto_Slab } from 'next/font/google'
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const AnimatedMenu = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/" className="hover:underline">
        <h2  className={cn(robotoSlab.className, 'text-xl md:text-xl font-bold tracking-tight')}>
          DH
        </h2>
      </Link>

      <MD
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -20,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="absolute left-0 top-full mt-2 "
      >
        <MD
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -20,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 }}
        >
          <Link href="/contact" className="block hover:underline">
            Contact
          </Link>
        </MD>

        <MD
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -20,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 }}
        >
          <Link href="/notes" className="block hover:underline mb-2">
            Notes
          </Link>
        </MD>
      </MD>
    </div>
  )
}

export default AnimatedMenu
