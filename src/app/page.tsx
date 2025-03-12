import { Intro } from '_c/intro'
import { Works } from '_c/works'
import { getAllProjects } from '@/lib/api'
import Header from '_c/header'

export default function Index() {
  const allProjects = getAllProjects()

  return (
    <>
      <Header link={false} />

      <Intro />

      {allProjects.length > 0 && <Works projects={allProjects} />}
    </>
  )
}
