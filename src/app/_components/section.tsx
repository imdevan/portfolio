import cn from 'classnames'

type Props = {
  children: React.ReactNode // To support any valid React content inside the header
  className?: string
}

function Section({ children, className }: Props) {
  return <section className={cn('my-16 md:my-24 lg:my-32', className)}>{children}</section>
}

export default Section
