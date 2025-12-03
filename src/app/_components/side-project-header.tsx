import { defaultTransition } from '@/lib/motion-transitions'
import AnimateIn from '_c/animate-in'
import { ProjectTitle } from '_c/project-title'
import * as motion from 'motion/react-client'

type Props = {
  title: string
  description?: string
}

export function SideProjectHeader({ title, description }: Props) {
  return (
    <motion.div
      data-testid="SideProjectHeader"
      className="max-w-5xl mx-auto opacity-0"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={defaultTransition}
      animate={{
        y: [45, 0],
        transition: { ease: ['easeIn', 'easeOut'] },
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <AnimateIn>
          <ProjectTitle>{title}</ProjectTitle>
          {/* {description && ( */}
          {/*   <AnimateIn> */}
          {/*     <p className="text-lg text-gray-600 dark:text-gray-400 mt-4"> */}
          {/*       {description} */}
          {/*     </p> */}
          {/*   </AnimateIn> */}
          {/* )} */}
        </AnimateIn>
      </div>
    </motion.div>
  )
}





















