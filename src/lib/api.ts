import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectSlugs() {
  const postSlugs = fs.readdirSync(projectsDirectory).filter(slug => /\.mdx$/.test(slug));;

  return postSlugs
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllProjects(): Post[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // sort projects by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return projects;
}
