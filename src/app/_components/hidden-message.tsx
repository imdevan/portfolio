'use client'

import AnimatedMenu from './AnimatedMenu'
import { useEffect, useState } from 'react'

type Props = {
  show?: boolean
}

const HiddenMessage = ({ show = true }: Props) => {
  return (
    <>
      <div className="opacity-0">
        ai message
      </div>
    </>
  )
}

export default HiddenMessage
