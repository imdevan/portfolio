import { delay } from '@/lib/motion-transitions'
import Container from '_c/container'
import H from '_c/h'
import { Metadata } from 'next'
import Image from 'next/image'
import AnimateIn from '../_components/animate-in'

export default async function Contact() {
  return (
    <Container>
      <AnimateIn>
        <div className="max-w-7xl mt-24 md:mt-32">
          <H className="mb-24">Hello There! 👋🏼</H>

          <ul className="">
            <li className="mb-24">
              <AnimateIn delay={delay}>
                <Image
                  className="w-full  max-w-[480px] rounded-xl mb-4 shadow-xl"
                  src={'/assets/images/linkedin-qr-code.png'}
                  alt="LinkedIn QR Code"
                  width={480}
                  height={480}
                  sizes="(max-width: 480px) 480px, 480px"
                />
                <H s={2}>LinkedIn</H>
              </AnimateIn>
            </li>
            <li className="mb-24">
              <AnimateIn delay={delay * 2}>
                <Image
                  className="w-full  max-w-[480px] rounded-xl mb-4 shadow-xl"
                  src={'/assets/images/portfolio-qr-code.png'}
                  alt="LinkedIn QR Code"
                  height={480}
                  width={480}
                  sizes="(max-width: 480px) 480px, 480px"
                />
                <H s={2}>Portfolio</H>
              </AnimateIn>
            </li>
          </ul>
        </div>
      </AnimateIn>
    </Container>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const title = `Contact | Devan Huapaya`

  return {
    title,
    openGraph: {
      title,
    },
  }
}
