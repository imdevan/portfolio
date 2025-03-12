import { ReactNode } from 'react'
import H from '_c/h'

type Props = {
  children?: ReactNode
}

export function ProjectTitle({ children }: Props) {
  return <H className="text-center">{children}</H>
}
