import { defaultTransition } from '@/lib/motion-transitions'
import AnimateIn from '_c/animate-in'
import { ProjectTitle } from '_c/project-title'
import * as motion from 'motion/react-client'
import CoverImage from './cover-image'

type Props = {
  title: string
  coverImage: string
  date: string
}

export function ProjectHeader({ title, coverImage, date }: Props) {
  return (
    <motion.div
      data-testid="ProjectHeader"
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
        <div className="mb-20">
          <CoverImage title={title} src={coverImage} />
        </div>

        <AnimateIn>
          <ProjectTitle>{title}</ProjectTitle>
        </AnimateIn>
      </div>
    </motion.div>
  )
}
