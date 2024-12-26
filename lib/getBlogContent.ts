import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml } from './markdownToHtml'

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

export async function getBlogContent(slug: string): Promise<BlogPost | null> {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir)
  
  for (const file of files) {
    const filePath = path.join(contentDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    if (data.slug === slug) {
      const htmlContent = await markdownToHtml(content)
      return {
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        content: htmlContent
      }
    }
  }
  
  return null
}