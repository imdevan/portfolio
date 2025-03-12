import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  return (
    <Image
      src={src}
      className="rounded mx-auto  shadow-sm hover:shadow-lg transition-shadow duration-200 "
      alt={`Cover Image for ${title}`}
      width={720}
      height={480}
    />
  )
}

export default CoverImage
