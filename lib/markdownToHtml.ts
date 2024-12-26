import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // Parse markdown to mdast
    .use(remarkGfm) // Support GFM (tables, autolinks, etc)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to hast
    .use(rehypeRaw) // Parse HTML in markdown
    .use(rehypeSlug) // Add ids to headings
    .use(rehypeAutolinkHeadings) // Add links to headings
    .use(rehypeCodeTitles) // Add titles to code blocks
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      keepBackground: true,
      defaultLang: 'plaintext',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ]
    }) // Pretty code blocks
    .use(rehypeStringify) // Convert hast to HTML string
    .process(markdown)

  return result.toString()
}