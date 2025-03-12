import React from 'react'
import { remark } from 'remark'
import html from 'remark-html'

import rehypeReact from 'rehype-react'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
// import remarkCustomBlocks from 'remark-custom-blocks';

import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeRemoveComments from 'rehype-remove-comments'

// import { ProjectTitle } from "_c/project-title";

export default async function markdownToHtml(markdown: string) {
  // const result = await remark().use(html).process(markdown);
  const result = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    // .use(remarkRehype) // Transforms Markdown to HTML
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeRemoveComments)
    // .use(rehypeReact, {
    //   createElement: React.createElement,
    //   components: {
    //     ProjectTitle: ProjectTitle,  // Register custom components here
    //   },
    // })
    .use(rehypeStringify) // Converts Markdown to HTML
    .process(markdown)

  return result.toString()
}
