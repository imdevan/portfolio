import AppTitle from "_c/appTitle";
import H from "_c/h";
import { Fira_Code } from "next/font/google";
import classNames from "classnames";
import Portrait from "./portrait";
const firaCode = Fira_Code({ subsets: ["latin"] });
import AnimateIn from "_c/animate-in";
import Container from "./container";

export function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mb-32 mt-24 md:mt-32 max-w-6xl mx-auto w-full overflow-x-hidden overflow-y-hidden">
      <AnimateIn>
        <div className="mb-32 md:mb-32">
          <Container>
            <AppTitle>
              Devan Huapaya
            </AppTitle>
          </Container>
        </div>

        <AnimateIn>
          <div className="mb-24">
              <div className="flex justify-center items-center" >
                <Portrait />
              </div>
          </div>

            <AnimateIn>
              <Container>
                <H s={2} className={classNames(firaCode.className, "text-2xl md:text-3xl")}>
                  <AnimateIn>
                    <span className="dark:text-pink-200 text-pink-400">
                      Full-stack Typescript Developer.
                    </span>
                    <AnimateIn>
                      That builds web and native apps, deploys them to production, and cares about the people who use them.
                    </AnimateIn>
                  </AnimateIn>
                </H>
              </Container>
            </AnimateIn>
        </AnimateIn>
      </AnimateIn>
    </section>
  );
}
