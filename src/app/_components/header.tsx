'use client'

import AnimatedMenu from './AnimatedMenu'
import { useEffect, useState } from 'react'

type Props = {
  link?: boolean
}

const Header = ({ link = true }: Props) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollThreshold = pageHeight * 0.15

      // Show header if scrolling up and past 15% of page height
      if (currentScrollY < lastScrollY && currentScrollY > scrollThreshold) {
        setIsVisible(true)
      }
      // Hide header if scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      // Always show at top of page
      else if (currentScrollY < 100) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-gradient-to-b dark:from-zinc-900 from-white to-transparent dark:text-neutral-50 transition-colors duration-200 w-full opacity-90 dark:opacity-95">
          <div className="container p-8 flex justify-between items-center">
            {link ? (
              <AnimatedMenu isVisible={isVisible} />
            ) : (
              <div />
            )}
            <div />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
