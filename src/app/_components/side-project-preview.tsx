import FIP from '_c/fade-in-and-up'
import H from './h'
import Link from 'next/link'

type Props = {
  title: string
  description?: string
  slug: string
}

const SideProjectPreview = ({ title, description, slug }: Props) => {
  return (
    <FIP>
      <div className="block max-w-[720px] p-6 hover:shadow-xl hover:shadow-xxl hover:text-underline hover:bg-white hover:dark:bg-zinc-900 rounded-lg transition ease-in duration-[300ms]">
        <Link href={`/side-projects/${slug}`} aria-label={title}>
          <H s={3} className="text-4xl mb-2 leading-snug">
            {title}
          </H>

          {description && (
            <FIP>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 mb-4">
                {description}
              </p>
            </FIP>
          )}
        </Link>
      </div>
    </FIP>
  )
}

export default SideProjectPreview


