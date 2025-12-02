import FIP from '_c/fade-in-and-up'
import H from './h'
import Link from 'next/link'
import { ExternalLink } from 'react-feather'

type Props = {
  title: string
  description?: string
  slug: string
  external_url?: string
}

const SideProjectPreview = ({ title, description, slug, external_url }: Props) => {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <H s={3} className="text-4xl mb-2 leading-snug">
          {title}
        </H>
        {external_url && (
          <ExternalLink size={20} className="text-gray-400 dark:text-gray-500 mb-2 flex-shrink-0" />
        )}
      </div>

      {description && (
        <FIP>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 mb-4">
            {description}
          </p>
        </FIP>
      )}
    </>
  )

  return (
    <FIP>
      <div className="block max-w-[720px] p-6 hover:shadow-xl hover:shadow-xxl hover:text-underline hover:bg-white hover:dark:bg-zinc-900 rounded-lg transition ease-in duration-[300ms]">
        {external_url ? (
          <a
            href={external_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} (opens in new tab)`}
            className="block"
          >
            {content}
          </a>
        ) : (
          <Link href={`/side-projects/${slug}`} aria-label={title}>
            {content}
          </Link>
        )}
      </div>
    </FIP>
  )
}

export default SideProjectPreview


