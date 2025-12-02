import { getAllSideProjects, getSideProjectBySlug } from '@/lib/api'
import AnimateIn from '_c/animate-in'
import Container from '_c/container'
import H from '_c/h'
import FIP from '_c/fade-in-and-up'
import Section from '_c/section'
import ProjectBody from '_c/project-body'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SideProjectNextUp from '_c/side-project-next-up'
import To from '_c/to'
import { SideProjectHeader } from '_c/side-project-header'

export default async function SideProject(props: Props) {
  const params = await props.params
  const allSideProjects = getAllSideProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
  }))
  const sideProject = getSideProjectBySlug(params.slug)
  const sideProjectExported = await import(`_side-projects/${params.slug}.mdx`)
  const { default: SideProjectContent } = sideProjectExported

  if (!sideProject) {
    return notFound()
  }

  return (
    <Container>
      <article className="mb-16 md:mb-24 lg:mb-32">
        <AnimateIn>
          <SideProjectHeader
            title={sideProject.title}
            description={sideProject.description}
          />

          <div className="max-w-3xl mx-auto">

            <ProjectBody className="my-16 md:my-24 lg:my-32 lg:mb-48">
              <SideProjectContent />
            </ProjectBody>

            {(sideProject.project_url || sideProject.cta_url) && (
              <AnimateIn>
                <Section className="links">
                  <FIP>
                    <H>Links</H>
                  </FIP>

                  {sideProject.project_url && (
                    <FIP>
                      <To a={sideProject.project_url}>View Project</To>
                    </FIP>
                  )}

                  {sideProject.cta_url && (
                    <>
                      {Array.isArray(sideProject.cta_url) ? (
                        sideProject.cta_url.map((url, index) => {
                          const fullUrl = url.startsWith('http') ? url : `https://${url}`
                          return (
                            <FIP key={index}>
                              <To a={fullUrl}>{url}</To>
                            </FIP>
                          )
                        })
                      ) : (
                        <FIP>
                          <To a={sideProject.cta_url}>Learn More</To>
                        </FIP>
                      )}
                    </>
                  )}
                </Section>
              </AnimateIn>
            )}

            <AnimateIn>
              <SideProjectNextUp slug={params.slug} sideProjects={allSideProjects} />
            </AnimateIn>
          </div>
        </AnimateIn>
      </article>
    </Container>
  )
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const sideProject = getSideProjectBySlug(params.slug)

  if (!sideProject) {
    return notFound()
  }

  const title = `${sideProject.title} | Side Projects | Devan Huapaya`

  return {
    title,
    description: sideProject.description,
  }
}

export async function generateStaticParams() {
  const sideProjects = getAllSideProjects()

  return sideProjects.map((sideProject) => ({
    slug: sideProject.slug,
  }))
}

