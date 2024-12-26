import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Post = {
  title: string
  description: string
  author: string
  date: string
  slug: string
  image: string
}

function getBlogPosts(): Post[] {
  // Get files from content directory
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir)
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      // Read file content
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      
      // Parse frontmatter
      const { data } = matter(fileContent)
      
      return {
        title: data.title,
        description: data.description,
        author: data.author,
        date: data.date,
        slug: data.slug,
        image: data.image
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export default function Blog() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Blog</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-card rounded-xl shadow-xl bg-gray-200 dark:bg-gray-950 p-6 transition-colors duration-200">
            <div className="relative w-full h-48 mb-4">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-card-foreground">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground text-sm">By {post.author}</p>
              <p className="text-muted-foreground text-sm">{new Date(post.date).toLocaleDateString()}</p>
            </div>
            <Button asChild className="w-full mt-4">
              <Link href={`/blog/${post.slug}`}>
                Read more
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}