'use client'

import { useState } from 'react'
import cn from 'classnames'
import AnimatedGradientBg from './animated-gradient-bg'

type Props = {
  url?: string
  className?: string
  gradientColors?: [string, string, string]
}

const Video = ({ url, className, gradientColors }: Props) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  if (!url) {
    return (
      <div className={cn('flex justify-center my-8 w-full', className)}>
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700 relative">
          <AnimatedGradientBg colors={gradientColors}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                🎬 video coming soon
              </div>
            </div>
          </AnimatedGradientBg>
        </div>
      </div>
    )
  }

  // Ensure URL has protocol
  const videoUrl = url.startsWith('http') ? url : `https://${url}`

  return (
    <div className={cn('flex justify-center my-8 w-full', className)}>
      <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700 relative">
        <AnimatedGradientBg colors={gradientColors} fadeOut={videoLoaded} />
        <iframe
          src={videoUrl}
          className="w-full h-full border-0 relative z-10 bg-transparent"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
          loading="lazy"
          onLoad={() => setVideoLoaded(true)}
        />
      </div>
    </div>
  )
}

export default Video

