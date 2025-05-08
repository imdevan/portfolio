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
                <AnimateIn>
              <H s={2} className={classNames(firaCode.className, 'text-2xl md:text-3xl mb-4')}>
                  <span className="dark:text-[#e26460] text-[#e26460]">
                    {"<"}Full Stack Typescript Developer{"/>"}
                  </span>
              </H>
                  <AnimateIn>
              <H s={2} className={classNames(firaCode.className, 'text-2xl md:text-3xl')}>
              <span className="opacity-80">
                      {"//"} That builds web and native apps, deploys them to production, and cares about the
                    people who use them.
                    </span>
              </H>
                  </AnimateIn>
                </AnimateIn>
            </Container>
          </AnimateIn>
        </AnimateIn>
      </AnimateIn>
    </section>
  )
}
