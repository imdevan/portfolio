import { SideProject } from '@/interfaces/side-project'
import SideProjectPreview from './side-project-preview'
import H from './h'
import Container from './container'
import FIP from './fade-in-and-up'

type Props = {
  sideProjects: SideProject[]
}

export function SideProjects({ sideProjects }: Props) {
  return (
    <Container>
      <section className="mt-24 md:mt-32 mb-16 md:mb-20 lg:mb-48">
        <FIP>
          <div className="max-w-7xl mx-auto">
            <H s={1} className="mb-16 md:mb-32">
              Side Projects
            </H>
          </div>
        </FIP>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sideProjects.map((sideProject) => (
            <SideProjectPreview
              key={sideProject.slug}
              title={sideProject.title}
              description={sideProject.description}
              slug={sideProject.slug}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}


