import { Project } from "@/interfaces/project";
import ProjectPreview from "./project-preview";
import H from "./h";

import FIP from "_c/fade-in-and-up";

// import ScrollContainer from "./scroll-container";
type Props = {
  projects: Project[];
};

export function Works({ projects }: Props) {
  return (
    <section className="mb-16 md:mb-20 lg:mb-48">
      <FIP>
        <div className="max-w-7xl mx-auto">
          <H s={1} className="mb-16 md:mb-32">
            Works
          </H>
        </div>
      </FIP>

      {/* <ScrollContainer> */}
      <div className="grid grid-cols-1 gap-y-16 md:gap-y-32 lg:gap-y-40 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <div className="flex justify-start even:justify-end" key={proj.slug}>
            <ProjectPreview
              title={proj.title}
              coverImage={proj.coverImage}
              slug={proj.slug}
            />
          </div>
        ))}
      </div>
      {/* </ScrollContainer> */}
    </section>
  );
}
