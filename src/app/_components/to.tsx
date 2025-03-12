import cn from 'classnames'

type Props = {
  children?: React.ReactNode
  className?: string
  blank?: boolean
  a: string
}

const To = ({ children, className, blank = true, a }: Props) => {
  return (
    <a
      data-testid="To"
      className={cn('container mx-auto px-5 lg:px-0', className)}
      href={a}
      target={blank ? '_blank' : undefined}
    >
      {children}
    </a>
  )
}

export default To
