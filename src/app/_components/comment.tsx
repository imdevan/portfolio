// React component to render a comment in a blog post
import cn from 'classnames'

const Comment = ({ children, prefix = '//', className }: { children: React.ReactNode, prefix?: string, className?: string }) => {
  return <div className={cn('text-gray-500', className)}>{prefix} {children}</div>
}

export default Comment
