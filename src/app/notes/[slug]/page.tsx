import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllNotes, getNoteBySlug } from '@/lib/api'
import Container from '_c/container'
import NoteBody from '_c/project-body'
import AnimateIn from '_c/animate-in'
import H from '_c/h'

type Props = {
  params: {
    slug: string
  }
}

export default async function Note(props: Props) {
  const params = await props.params
  const note = getNoteBySlug(params.slug)
  const noteExported = await import(`_notes/${params.slug}.mdx`)
  const { default: Note } = noteExported

  if (!note) {
    return notFound()
  }

  return (
    <Container className="pt-16 md:pt-24 lg:pt-32">
      <article className="my-16 md:my-24 lg:my-32">
        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <div className=" mb-16 md:mb-24 lg:mb-32 text-center">
              <H>{note.title}</H>
              <time className="text-gray-500 mt-2 block">
                {new Date(note.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <NoteBody className="prose prose-lg mx-auto">
              <Note />
            </NoteBody>
          </div>
        </AnimateIn>
      </article>
    </Container>
  )
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const note = getNoteBySlug(params.slug)

  if (!note) {
    return notFound()
  }

  const title = `${note.title} | Notes | Devin Huapaya`

  return {
    title,
    description: note.description,
  }
}
