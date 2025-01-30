import AppTitle from "_c/appTitle";
import H from "_c/h";
import { Fira_Code } from "next/font/google";
import classNames from "classnames";
import Portrait from "./portrait";
const firaCode = Fira_Code({ subsets: ["latin"] });
import AnimateIn from "_c/animate-in";

export function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-32 max-w-6xl mx-auto">
      <AnimateIn>
        <div className="md:mt-8 mb-32 md:mb-32">
          <AppTitle>
            Devan Huapaya
          </AppTitle>
        </div>

        <AnimateIn>
          <div className="mb-24">
              <div className="flex justify-center items-center">
                <Portrait />
              </div>
          </div>

            <AnimateIn>
              <H s={2} className={classNames(firaCode.className, "text-2xl md:text-3xl")}> 
                <AnimateIn>
                  <span className="dark:text-pink-200 text-pink-400">
                    Full-stack Typescript Developer.
                  </span>    

                  <AnimateIn>
                    That builds web and native apps, deploys them to production, and cares about people.
                  </AnimateIn>
                </AnimateIn>
              </H>
            </AnimateIn>
        </AnimateIn>
      </AnimateIn>
    </section>
  );
}
