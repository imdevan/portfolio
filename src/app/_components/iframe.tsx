'use client'

import { useState, useRef, useEffect } from 'react'
import { Monitor, Smartphone } from 'react-feather'
import cn from 'classnames'
import AnimatedGradientBg from './animated-gradient-bg'

type Props = {
  src: string
  className?: string
  mobile?: boolean
  hideControls?: boolean
  buttonText?: string
  gradientColors?: [string, string, string]
}

const Iframe = ({ src, className, mobile = false, hideControls = false, buttonText = 'Load Demo', gradientColors }: Props) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>(mobile ? 'mobile' : 'desktop')
  const [isLoaded, setIsLoaded] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  // If hideControls is true, force desktop view
  const effectiveViewMode = hideControls ? 'desktop' : viewMode

  // Perceived width is 1200px for desktop, 640px for mobile
  const perceivedWidth = effectiveViewMode === 'desktop' ? 1200 : 640

  // Ensure src has protocol
  const iframeSrc = src.startsWith('http') ? src : `https://${src}`

  // Calculate scale based on container width (only when iframe is loaded)
  useEffect(() => {
    if (!isLoaded) return

    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const currentPerceivedWidth = effectiveViewMode === 'desktop' ? 1200 : 640
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
  }, [effectiveViewMode, isLoaded, hideControls])

  // Calculate iframe height based on aspect ratio
  // Desktop: 16:9 aspect ratio means width:height = 16:9, so height = width * 9/16
  // Mobile: 9:16 aspect ratio means width:height = 9:16, so height = width * 16/9
  const iframeHeight = effectiveViewMode === 'desktop'
    ? perceivedWidth * (9 / 16)  // Desktop: 1200 * 9/16 = 675px
    : perceivedWidth * (16 / 9)  // Mobile: 640 * 16/9 = 1137.78px

  return (
    <div className={cn('flex flex-col items-center gap-4 my-8 w-full', className)}>
      {/* Toggle buttons - only show if hideControls is false */}
      {!hideControls && (
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
      )}

      {/* Iframe container */}
      <div className="w-full flex justify-center">
        {!isLoaded ? (
          <div
            className={cn(
              'border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-lg relative',
              // Desktop responsive widths
              effectiveViewMode === 'desktop' && [
                'w-full sm:w-full md:w-[600px] lg:w-[800px] xl:w-[800px]',
              ],
              // Mobile responsive widths
              effectiveViewMode === 'mobile' && [
                'max-w-[400px] sm:max-w-[400px] md:w-[400px] lg:w-[300px] xl:w-[300px]',
              ]
            )}
            style={{
              // Calculate height based on aspect ratio
              aspectRatio: effectiveViewMode === 'desktop' ? '16/9' : '9/16',
            }}
          >
            <AnimatedGradientBg colors={gradientColors}>
              <div className="w-full h-full flex items-center justify-center">
                <button
                  onClick={() => setIsLoaded(true)}
                  className="px-6 py-3 bg-white/80 dark:bg-zinc-700/80 backdrop-blur-md text-gray-900 dark:text-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all font-medium border border-white/20 dark:border-zinc-600/20 hover:bg-white/90 dark:hover:bg-zinc-600/90"
                >
                  {buttonText}
                </button>
              </div>
            </AnimatedGradientBg>
          </div>
        ) : (
          <div
            ref={containerRef}
            className={cn(
              'border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-lg relative',
              // Desktop responsive widths
              effectiveViewMode === 'desktop' && [
                'w-full sm:w-full md:w-[600px] lg:w-[800px] xl:w-[800px]',
              ],
              // Mobile responsive widths
              effectiveViewMode === 'mobile' && [
                'max-w-[400px] sm:max-w-[400px] md:w-[400px] lg:w-[300px] xl:w-[300px]',
              ]
            )}
            style={{
              // Calculate height based on aspect ratio
              aspectRatio: effectiveViewMode === 'desktop' ? '16/9' : '9/16',
            }}
          >
            <div className="absolute inset-0 z-0">
              <AnimatedGradientBg colors={gradientColors} fadeOut={iframeLoaded} />
            </div>
            <div className="w-full h-full relative overflow-hidden z-10">
              <iframe
                src={iframeSrc}
                className="border-0 absolute top-0 left-0 bg-white dark:bg-zinc-900"
                style={{
                  width: `${perceivedWidth}px`,
                  height: `${iframeHeight}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
                title={`Preview of ${src}`}
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Iframe

