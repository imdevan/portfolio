import AnimateIn from '_c/animate-in'
import AppTitle from '_c/appTitle'
import H from '_c/h'
import classNames from 'classnames'
import { Fira_Code } from 'next/font/google'
import Container from './container'
import Portrait from './portrait'
const firaCode = Fira_Code({ subsets: ['latin'] })

export function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mb-32 mt-24 md:mt-32 max-w-6xl mx-auto w-full overflow-x-hidden overflow-y-hidden">
      <AnimateIn>
        <div className="mb-32 md:mb-32">
          <Container>
            <AppTitle>Devan Huapaya</AppTitle>
          </Container>
        </div>

        <AnimateIn>
          <div className="mb-24">
            <div className="flex justify-center items-center">
              <Portrait />
            </div>
          </div>

          <AnimateIn>
            <Container>
              <H s={2} className={classNames(firaCode.className, 'text-2xl md:text-3xl')}>
                <AnimateIn>
                  <span className="dark:text-[#e26460] text-[#e26460]">
                    {"<"}Full Stack Typescript Developer{"/>"}
                  </span>
                  <AnimateIn>
                    <span className="text-[#73808d] dark:text-[#8C7F72]">
                      {"//"} That builds web and native apps, deploys them to production, and cares about the
                    people who use them.
                    </span>
                  </AnimateIn>
                </AnimateIn>
              </H>
            </Container>
          </AnimateIn>
        </AnimateIn>
      </AnimateIn>
    </section>
  )
}
