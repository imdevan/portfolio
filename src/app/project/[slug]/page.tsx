import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllProjects, getProjectBySlug } from '@/lib/api'
import Container from '_c/container'
import ProjectBody from '_c/project-body'
import { ProjectHeader } from '_c/project-header'
import AnimateIn from '_c/animate-in'
import ProjectNextUp from '_c/project-next-up'

export default async function Project(props: Props) {
  const params = await props.params
  const allProjects = getAllProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
    coverImage: p.coverImage,
  }))
  const project = getProjectBySlug(params.slug)
  const projectExported = await import(`_projects/${params.slug}.mdx`)
  const { default: Project } = projectExported

  if (!project) {
    return notFound()
  }

  return (
    <Container>
      <article className="mb-16 md:mb-24 lg:mb-32">
        <AnimateIn>
          <ProjectHeader
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            author={project.author}
          />

          <ProjectBody className="my-16 md:my-24 lg:my-32 lg:mb-48">
            <Project />
          </ProjectBody>

          <AnimateIn>
            <ProjectNextUp slug={params.slug} projects={allProjects} />
          </AnimateIn>
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
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return notFound()
  }

  const title = `${project.title} | Devan Huapaya`

  return {
    title,
    openGraph: {
      title,
      images: [project.ogImage.url],
    },
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}
