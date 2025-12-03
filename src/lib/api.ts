import { Project } from '@/interfaces/project'
import { Note } from '@/interfaces/note'
import { SideProject } from '@/interfaces/side-project'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const projectsDirectory = join(process.cwd(), '_projects')
const notesDirectory = join(process.cwd(), '_notes')
const sideProjectsDirectory = join(process.cwd(), '_side-projects')

export function getProjectSlugs() {
  const projectSlugs = fs.readdirSync(projectsDirectory).filter((slug) => /\.mdx$/.test(slug))

  return projectSlugs
}

export function getNoteSlugs() {
  const noteSlugs = fs.readdirSync(notesDirectory).filter((slug) => /\.mdx$/.test(slug))
  return noteSlugs
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as Project
}

export function getNoteBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(notesDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as Note
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))
    .filter((p) => !p.draft)
  return projects
}

export function getAllNotes() {
  const slugs = getNoteSlugs()
  const notes = slugs
    .map((slug) => getNoteBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  if (process.env.NODE_ENV === 'production') {
    return notes.filter((note) => note.published)
  } else {
    return notes
  }
}

export function getSideProjectSlugs() {
  if (!fs.existsSync(sideProjectsDirectory)) {
    return []
  }
  const sideProjectSlugs = fs.readdirSync(sideProjectsDirectory).filter((slug) => /\.mdx$/.test(slug))
  return sideProjectSlugs
}

export function getSideProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(sideProjectsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as SideProject
}

export function getAllSideProjects(): SideProject[] {
  const slugs = getSideProjectSlugs()
  const sideProjects = slugs
    .map((slug) => getSideProjectBySlug(slug))
    // sort side projects by order in ascending order
    .sort((sideProject1, sideProject2) => {
      const order1 = sideProject1.order ?? Number.MAX_SAFE_INTEGER
      const order2 = sideProject2.order ?? Number.MAX_SAFE_INTEGER
      return order1 - order2
    })
  return sideProjects
}
