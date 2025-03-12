import { type Author } from '@/interfaces/author'
import Link from 'next/link'
import CoverImage from './cover-image'
import H from './h'
import FIP from '_c/fade-in-and-up'

type Props = {
  title: string
  coverImage: string
  slug: string
  key?: string | number
}

const ProjectPreview = ({ title, coverImage, slug }: Props) => {
  return (
    <FIP>
      <div className="block rounded max-w-[720px]">
        <Link href={`/project/${slug}`} aria-label={title}>
          <div className="mb-5">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>

          <FIP>
            <H s={3} className="text-4xl mb-3 leading-snug">
              {title}
            </H>
          </FIP>
        </Link>
      </div>
    </FIP>
  )
}

export default ProjectPreview
