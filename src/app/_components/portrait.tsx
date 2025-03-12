import Image from 'next/image'
import CircleSVG from '_public/assets/icons/circle.svg'
import wavesSVG from '_public/assets/icons/waves.svg'
import SVG from 'react-inlinesvg'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'

const Portrait = () => {
  return (
    <div className="relative inline-block dark:text-neutral-50">
      <SVG
        src={CircleSVG.src}
        width={180}
        className="absolute top-0 left-0 translate-y-[-45%]	translate-x-[-45%]	z-0"
        title="React"
      />

      <SVG
        src={wavesSVG.src}
        width={180}
        className="absolute top-3/4 left-0 translate-y-[-50%]	translate-x-[-50%]	z-20 current-color"
        title="React"
      />
      <SVG
        src={wavesSVG.src}
        width={180}
        className="absolute top-1/4 right-0 translate-y-[-50%]	translate-x-[50%]	z-0 current-color"
        title="React"
      />
      <Image
        src={HOME_OG_IMAGE_URL}
        className="rounded mx-auto shadow-2xl relative z-10"
        alt={`Devan Huapaya`}
        width={320}
        height={480}
      />
    </div>
  )
}

export default Portrait
