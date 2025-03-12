import { Note } from '@/interfaces/note'
import NotePreview from './note-preview'
import H from './h'
import Container from './container'
import FIP from './fade-in-and-up'

type Props = {
  notes: Note[]
}

export function Notes({ notes }: Props) {
  return (
    <Container>
      <section className="mt-24 md:mt-32 mb-16 md:mb-20 lg:mb-48">
        <FIP>
          <div className="max-w-7xl mx-auto">
            <H s={1} className="mb-16 md:mb-32">
              Notes
            </H>
          </div>
        </FIP>

        <div className="grid grid-cols-1 gap-y-8 max-w-3xl mx-auto">
          {notes.map((note) => (
            <NotePreview
              key={note.slug}
              title={note.title}
              subtitle={note.subtitle}
              description={note.description}
              date={note.date}
              slug={note.slug}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}
