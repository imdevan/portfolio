import { SideProject } from '@/interfaces/side-project'
import AnimateIn from '_c/animate-in'
import SideProjectPreview from '_c/side-project-preview'
import H from '_c/h'
import cn from 'classnames'
import { Fira_Code } from 'next/font/google'
import * as motion from 'motion/react-client'

const firaCode = Fira_Code({ subsets: ['latin'] })

type Props = {
  slug: string
  sideProjects: Pick<SideProject, 'title' | 'slug' | 'description' | 'external_url'>[]
}

function SideProjectNextUp({ slug, sideProjects }: Props) {
  const sideProjIndex = sideProjects.findIndex((p) => p.slug === slug)
  const prevSideProj = sideProjIndex > 0 ? sideProjects[sideProjIndex - 1] : null
  const nextSideProj = sideProjIndex < sideProjects.length - 1 ? sideProjects[sideProjIndex + 1] : null

  const text = 'Other Side Projects'
  const letters = text.split('')
  const animationDelay = 0.6
  const letterDelay = 0.05
  const cursorOpacityDelay = 0.02 // Small delay for cursor opacity animation after letter appears

  return (
    <div className="max-w-7xl mx-auto">
      <div className="leading-relaxed mx-auto mb-16 ">
        <AnimateIn>
          <H s={2} className={cn(firaCode.className)}>
            {letters.map((c, i) => {
              const letterDelayTime = animationDelay + 0.2 + i * letterDelay
              const cursorDelayTime = letterDelayTime + cursorOpacityDelay
              const isLastLetter = i === letters.length - 1

              return (
                <span key={c + i} className="inline">
                  <motion.span
                    className="inline"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.1,
                      delay: letterDelayTime,
                      ease: 'linear',
                    }}
                  >
                    {c}
                  </motion.span>
                  <motion.span
                    className={`inline-block w-2 h-[1em] bg-current ml-1 align-middle ${isLastLetter ? 'animate-cursor-blink' : ''}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: isLastLetter ? 1 : 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.15,
                      delay: cursorDelayTime,
                      ease: 'easeOut',
                    }}
                  />
                </span>
              )
            })}
          </H>
        </AnimateIn>
      </div>
      <AnimateIn>
        <div className="grid grid-cols-2 gap-4 mb-16 md:mb-24 lg:mb-32">
          <div className="flex justify-center items-center">
            {prevSideProj && (
              <SideProjectPreview
                title={prevSideProj.title}
                slug={prevSideProj.slug}
                description={prevSideProj.description}
                external_url={prevSideProj.external_url}
              />
            )}
          </div>
          <div className="flex justify-center items-center">
            <AnimateIn>
              {nextSideProj && (
                <SideProjectPreview
                  title={nextSideProj.title}
                  slug={nextSideProj.slug}
                  description={nextSideProj.description}
                  external_url={nextSideProj.external_url}
                />
              )}
            </AnimateIn>
          </div>
        </div>
      </AnimateIn>
    </div>
  )
}

export default SideProjectNextUp





