import Container from "_c/container";
import { Intro } from "_c/intro";
import { Works } from "_c/works";
import { getAllProjects } from "@/lib/api";

export default function Index() {
  const allProjects = getAllProjects();

  return (
    <main>
      <Container>
        <Intro />
        {allProjects.length > 0 && <Works projects={allProjects} />}
      </Container>
    </main>
  );
}
