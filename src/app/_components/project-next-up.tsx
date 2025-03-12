import markdownStyles from './markdown-styles.module.css'
import './markdown-nested-styles.css'
import { Project } from '@/interfaces/project'
import AnimateIn from '_c/animate-in'
import FIP from '_c/fade-in-and-up'
import ProjectPreview from '_c/project-preview-next-up'
import { getAllProjects } from '@/lib/api'
import H from '_c/h'
import cn from 'classnames'
import { Playfair_Display, Fira_Code, Montserrat } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })

type Props = {
  slug: string
  projects: { title: string; coverImage: string; slug: string }[]
}

function ProjectNextUp({ slug, projects }: Props) {
  const projIndex = projects.findIndex((p) => p.slug === slug)
  // const prevProj = projIndex === 0 ? projects[projIndex + 1] : projIndex === projects.length - 1 ? projects[projIndex - 2] : projects[projIndex - 1];
  // const nextProj = projIndex === 0 ?  projects[projIndex + 2] :
  //   projIndex === projects.length - 1 ? projects[projIndex - 1] : projects[projIndex +
  const prevProj = projIndex > 0 ? projects[projIndex - 1] : null
  const nextProj = projIndex < projects.length - 1 ? projects[projIndex + 1] : null

  return (
    <div className="max-w-7xl mx-auto">
      <div className="leading-relaxed mx-auto mb-16 ">
        <AnimateIn>
          <H className={cn(firaCode.className)}>
            {'Other Projects'.split('').map((c, i) => (
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
            {prevProj && (
              <ProjectPreview
                title={prevProj.title}
                coverImage={prevProj.coverImage}
                slug={prevProj.slug}
              />
            )}
          </div>
          <div className="flex justify-center items-center">
            <AnimateIn>
              {nextProj && (
                <ProjectPreview
                  title={nextProj.title}
                  coverImage={nextProj.coverImage}
                  slug={nextProj.slug}
                />
              )}
            </AnimateIn>
          </div>
        </div>
      </AnimateIn>
    </div>
  )
}

export default ProjectNextUp
