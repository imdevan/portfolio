import cn from 'classnames'

type Props = {
  url?: string
  className?: string
}

const Video = ({ url, className }: Props) => {
  if (!url) {
    return (
      <div className={cn('flex justify-center my-8 w-full', className)}>
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center">
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            🎬 video coming soon
          </div>
        </div>
      </div>
    )
  }

  // Ensure URL has protocol
  const videoUrl = url.startsWith('http') ? url : `https://${url}`

  return (
    <div className={cn('flex justify-center my-8 w-full', className)}>
      <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-zinc-800">
        <iframe
          src={videoUrl}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Video

