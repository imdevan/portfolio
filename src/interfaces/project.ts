export type Project = {
  slug: string
  title: string
  coverImage: string
  excerpt: string
  date: string
  ogImage?: {
    url: string
  }
  content: string
  preview?: boolean
  externalBody?: boolean
  draft?: boolean
}
