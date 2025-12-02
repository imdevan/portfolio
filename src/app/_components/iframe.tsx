'use client'

import { useState, useRef, useEffect } from 'react'
import { Monitor, Smartphone } from 'react-feather'
import cn from 'classnames'

type Props = {
  src: string
  className?: string
}

const Iframe = ({ src, className }: Props) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  // Perceived width is 1200px for desktop, 640px for mobile
  const perceivedWidth = viewMode === 'desktop' ? 1200 : 640

  // Ensure src has protocol
  const iframeSrc = src.startsWith('http') ? src : `https://${src}`

  // Calculate scale based on container width
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const currentPerceivedWidth = viewMode === 'desktop' ? 1200 : 640
        const newScale = containerWidth / currentPerceivedWidth
        setScale(newScale)
      }
    }

    // Small delay to ensure container has rendered with new dimensions
    const timeoutId = setTimeout(updateScale, 0)
    window.addEventListener('resize', updateScale)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', updateScale)
    }
  }, [viewMode])

  // Calculate iframe height based on aspect ratio
  // Desktop: 16:9 aspect ratio means width:height = 16:9, so height = width * 9/16
  // Mobile: 9:16 aspect ratio means width:height = 9:16, so height = width * 16/9
  const iframeHeight = viewMode === 'desktop'
    ? perceivedWidth * (9 / 16)  // Desktop: 1200 * 9/16 = 675px
    : perceivedWidth * (16 / 9)  // Mobile: 640 * 16/9 = 1137.78px

  return (
    <div className={cn('flex flex-col items-center gap-4 my-8 w-full', className)}>
      {/* Iframe container */}
      <div className="w-full flex justify-center">
        <div
          ref={containerRef}
          className={cn(
            'border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-zinc-900 relative',
            // Desktop responsive widths
            viewMode === 'desktop' && [
              'w-full sm:w-full md:w-[400px] lg:w-[600px] xl:w-[800px]',
            ],
            // Mobile responsive widths
            viewMode === 'mobile' && [
              'max-w-[400px] sm:max-w-[400px] md:w-[400px] lg:w-[300px] xl:w-[300px]',
            ]
          )}
          style={{
            // Calculate height based on aspect ratio
            aspectRatio: viewMode === 'desktop' ? '16/9' : '9/16',
          }}
        >
          <div className="w-full h-full relative overflow-hidden">
            <iframe
              src={iframeSrc}
              className="border-0 absolute top-0 left-0"
              style={{
                width: `${perceivedWidth}px`,
                height: `${iframeHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              title={`Preview of ${src}`}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Toggle buttons - moved below iframe */}
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-zinc-800 rounded-lg">
        <button
          onClick={() => setViewMode('desktop')}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-md transition-all',
            viewMode === 'desktop'
              ? 'bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
          )}
          aria-label="Desktop view"
        >
          <Monitor size={18} />
          <span className="text-sm font-medium">Desktop</span>
        </button>
        <button
          onClick={() => setViewMode('mobile')}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-md transition-all',
            viewMode === 'mobile'
              ? 'bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
          )}
          aria-label="Mobile view"
        >
          <Smartphone size={18} />
          <span className="text-sm font-medium">Mobile</span>
        </button>
      </div>
    </div>
  )
}

export default Iframe

