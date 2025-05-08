import {div as MD} from 'motion/react-client'

type Props = {
  children: React.ReactNode // To support any valid React content inside the header
  yOffset?: number
  duration?: number
  delay?: number
  className?: string
  ease?: string
}

const FadeInUp = ({
  children,
  yOffset = 40,
  duration = 1,
  delay = 0.2,
  className,
  ease = 'easeInOut',
}: Props) => {
  return (
    <MD
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, delay: delay, ease: ease }}
      viewport={{ once: true }}
    >
      {children}
    </MD>
  )
}

export default FadeInUp
