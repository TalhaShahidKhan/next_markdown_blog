import { notFound } from 'next/navigation'
import { getBlogContent } from '@/lib/getBlogContent'

type BlogPostParams = {
  params: {
    slug: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BlogPost({ params, searchParams }: BlogPostParams) {
  const { slug } = params

  if (!slug) {
    notFound()
  }

  const post = await getBlogContent(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <span className="mr-4">By {post.author}</span>
              <time>{new Date(post.date).toLocaleDateString()}</time>
            </div>
          </header>
          
          <div 
            className="dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-code:p-4 
              prose-code:rounded-xl prose-code:px-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  )
}