import markdownStyles from './markdown-styles.module.css'
import './markdown-nested-styles.css'
import { SideProject } from '@/interfaces/side-project'
import AnimateIn from '_c/animate-in'
import FIP from '_c/fade-in-and-up'
import SideProjectPreviewNextUp from '_c/side-project-preview-next-up'
import H from '_c/h'
import cn from 'classnames'
import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })

type Props = {
  slug: string
  sideProjects: { title: string; slug: string }[]
}

function SideProjectNextUp({ slug, sideProjects }: Props) {
  const sideProjIndex = sideProjects.findIndex((p) => p.slug === slug)
  const prevSideProj = sideProjIndex > 0 ? sideProjects[sideProjIndex - 1] : null
  const nextSideProj = sideProjIndex < sideProjects.length - 1 ? sideProjects[sideProjIndex + 1] : null

  return (
    <div className="max-w-7xl mx-auto">
      <div className="leading-relaxed mx-auto mb-16 ">
        <AnimateIn>
          <H className={cn(firaCode.className)}>
            {'Other Side Projects'.split('').map((c, i) => (
              <FIP key={c + i} className="inline" delay={0.2 + i * 0.1} yOffset={i * 100}>
                {c}
              </FIP>
            ))}
          </H>
        </AnimateIn>
      </div>
      <AnimateIn>
        <div className="grid grid-cols-2 gap-4 mb-16 md:mb-24 lg:mb-32">
          <div className="flex justify-center items-center">
            {prevSideProj && (
              <SideProjectPreviewNextUp
                title={prevSideProj.title}
                slug={prevSideProj.slug}
              />
            )}
          </div>
          <div className="flex justify-center items-center">
            <AnimateIn>
              {nextSideProj && (
                <SideProjectPreviewNextUp
                  title={nextSideProj.title}
                  slug={nextSideProj.slug}
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




