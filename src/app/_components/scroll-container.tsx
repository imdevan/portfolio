'use client'

import { useState } from 'react'
import cn from 'classnames'
import { useMotionValueEvent, useScroll } from 'motion/react'

type Props = {
  children: React.ReactNode // To support any valid React content inside the header
  className?: string
}

const ScrollContainer = ({ children, className }: Props) => {
  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = useState('down')

  useMotionValueEvent(scrollY, 'change', (current) => {
    const prev = scrollY.getPrevious()

    if (prev) {
      const diff = current - prev
      setScrollDirection(diff > 0 ? 'down' : 'up')
    }
  })

  return <div className={cn(className)}>{children}</div>
}

export default ScrollContainer
