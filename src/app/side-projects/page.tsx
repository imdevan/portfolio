import { SideProjects } from '_c/side-projects'
import { getAllSideProjects } from '@/lib/api'
import Header from '_c/header'

export default function SideProjectsPage() {
  const allSideProjects = getAllSideProjects()

  return (
    <>
      <Header />
      {allSideProjects.length > 0 && <SideProjects sideProjects={allSideProjects} />}
    </>
  )
}


