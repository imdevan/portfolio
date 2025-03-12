import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'
import './markdown-nested-styles.css'

type Props = {
  children?: React.ReactNode
  className?: string
}

function ProjectBody({ children, className }: Props) {
  return <div className={cn(markdownStyles['markdown'], className)}>{children}</div>
}

export default ProjectBody
