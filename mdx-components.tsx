import type { MDXComponents } from 'mdx/types'
import { Fira_Code } from 'next/font/google'
import Video from '_c/video'

const firaCode = Fira_Code({ subsets: ['latin'] })

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Video,
    pre: ({ children, ...props }) => (
      <pre className={`${firaCode.className} bg-gray-100 dark:bg-zinc-800 rounded-lg p-4 overflow-x-auto my-4`} {...props}>
        {children}
      </pre>
    ),
    code: ({ children, className, ...props }) => {
      // Inline code (no className) vs code block (has className)
      const isInline = !className
      return isInline ? (
        <code className={`${firaCode.className} bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm`} {...props}>
          {children}
        </code>
      ) : (
        <code className={`${firaCode.className} ${className || ''}`} {...props}>
          {children}
        </code>
      )
    },
  }
}
