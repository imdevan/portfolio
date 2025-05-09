'use client'

import {div as MD} from 'motion/react-client'
import Link from 'next/link'
import { useState, useRef } from 'react'
import cn from 'classnames'
import { Roboto_Slab } from 'next/font/google'
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const AnimatedMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleBlur = (e: React.FocusEvent) => {
    // Check if the new focus target is within the menu
    if (menuRef.current && !menuRef.current.contains(e.relatedTarget as Node)) {
      setIsOpen(false)
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={menuRef}
    >
      <Link
        href="/"
        className="hover:underline"
        onFocus={() => setIsOpen(true)}
        onBlur={handleBlur}
      >
        <h2 className={cn(robotoSlab.className, 'text-xl md:text-xl font-bold tracking-tight')}>
          DH
        </h2>
      </Link>

      <MD
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="absolute left-0 top-full mt-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
      >
        <MD
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 }}
        >
          <Link
            href="/contact"
            className="block hover:underline"
            onBlur={handleBlur}
          >
            Contact
          </Link>
        </MD>

        <MD
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 }}
        >
          <Link
            href="/notes"
            className="block hover:underline mb-2"
            onBlur={handleBlur}
          >
            Notes
          </Link>
        </MD>
      </MD>
    </div>
  )
}

export default AnimatedMenu
