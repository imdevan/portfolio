'use client'

import { defaultTransition } from '@/lib/motion-transitions'
import * as motion from 'motion/react-client'

type Props = {
  children: React.ReactNode // To support any valid React content inside the header
  delay?: number // Delay in seconds before animation starts
}

function AnimateIn({ children, delay = 0 }: Props) {
  return (
    <motion.div
      data-testid="AnimateIn"
      className="opacity-0"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...defaultTransition, delay }}
      animate={{
        y: [45, 0],
        transition: { ease: ['easeIn', 'easeOut'], delay },
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateIn
