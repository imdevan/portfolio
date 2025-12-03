import Link from 'next/link'
import H from './h'
import FIP from '_c/fade-in-and-up'

type Props = {
  title: string
  slug: string
  key?: string | number
}

const SideProjectPreviewNextUp = ({ title, slug }: Props) => {
  return (
    <FIP>
      <div className="block rounded max-w-[540px]">
        <Link href={`/side-projects/${slug}`} aria-label={title}>
          <FIP>
            <H s={4} className="mb-3 leading-snug">
              {title}
            </H>
          </FIP>
        </Link>
      </div>
    </FIP>
  )
}

export default SideProjectPreviewNextUp





















