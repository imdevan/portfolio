import createMDX from '@next/mdx'
 
import remarkGfm from 'remark-gfm';
import rehypeRemoveComments from 'rehype-remove-comments'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from Cloudinary
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/bisonstudio/**',
        search: '',
      },
    ],
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  extension: /\.mdx?$/,

  // Add markdown plugins here, as desired
  options: {
    jsx: true,
    remarkPlugins: [['remark-gfm'], ['remark-frontmatter'], ['remark-mdx-frontmatter']],
    rehypePlugins: [],
  },
})

 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
 