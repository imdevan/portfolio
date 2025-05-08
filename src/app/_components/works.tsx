import { Project } from '@/interfaces/project'
import Container from '_c/container'
import FIP from '_c/fade-in-and-up'
import H from '_c/h'
import ProjectPreview from '_c/project-preview'

// import ScrollContainer from "./scroll-container";
type Props = {
  projects: Project[]
}

export function Works({ projects }: Props) {
  return (
    <Container>
      <section className="mb-16 md:mb-20 lg:mb-48">
        <FIP>
          <div className="max-w-7xl mx-auto">
            <H s={1} className="mb-16 md:mb-32">
              Works
            </H>
          </div>
        </FIP>

        <div className="grid grid-cols-1 gap-y-16 md:gap-y-32 lg:gap-y-40 max-w-6xl mx-auto">
          {projects.map((proj) => (
            <div className="flex justify-start even:justify-end" key={proj.slug}>
              <ProjectPreview title={proj.title} coverImage={proj.coverImage} slug={proj.slug} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}


// TODO: Add infinite scroll function such that the first project shows, then the next.
// Bonus points for updating the url, such that the GA registers another page view

