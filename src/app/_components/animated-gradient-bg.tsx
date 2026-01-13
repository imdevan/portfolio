'use client'

import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

type Props = {
  colors?: [string, string, string]
  className?: string
  children?: React.ReactNode
  fadeOut?: boolean
}

const AnimatedGradientBg = ({
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'], // default: blue, purple, pink
  className,
  children,
  fadeOut = false
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 })
  const animationRef = useRef<number | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }
    updateSize()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }

    // Animation loop
    let time = 0
    const animate = () => {
      time += 0.005
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Create larger, more overlapping gradient circles influenced by mouse position
      const circles = [
        {
          x: width * (0.2 + mouseRef.current.x * 0.1 + Math.sin(time) * 0.15),
          y: height * (0.3 + mouseRef.current.y * 0.1 + Math.cos(time * 0.8) * 0.15),
          radius: Math.min(width, height) * (0.7 + Math.sin(time * 1.2) * 0.15),
          color: colors[0],
        },
        {
          x: width * (0.7 + mouseRef.current.x * 0.15 + Math.cos(time * 1.1) * 0.2),
          y: height * (0.5 + mouseRef.current.y * 0.15 + Math.sin(time * 0.9) * 0.2),
          radius: Math.min(width, height) * (0.75 + Math.cos(time * 0.9) * 0.15),
          color: colors[1],
        },
        {
          x: width * (0.5 + mouseRef.current.x * 0.12 + Math.sin(time * 0.7) * 0.18),
          y: height * (0.7 + mouseRef.current.y * 0.12 + Math.cos(time * 1.3) * 0.18),
          radius: Math.min(width, height) * (0.8 + Math.sin(time * 1.1) * 0.15),
          color: colors[2],
        },
      ]

      // Draw circles with blur and higher opacity
      ctx.filter = 'blur(100px)'
      circles.forEach(circle => {
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        )
        gradient.addColorStop(0, circle.color + 'ff') // 100% opacity at center
        gradient.addColorStop(0.5, circle.color + 'aa') // 66% opacity at middle
        gradient.addColorStop(1, circle.color + '33') // 20% opacity at edge

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', updateSize)
    animate()

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', updateSize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [colors, mounted])

  return (
    <div className={cn('relative w-full h-full', className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 pointer-events-none"
        style={{ opacity: mounted && !fadeOut ? 1 : 0 }}
      />
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  )
}

export default AnimatedGradientBg
