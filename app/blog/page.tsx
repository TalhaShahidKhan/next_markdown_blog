
import React from 'react'
import 'tailwindcss/tailwind.css'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const blogPosts = [
    {
        title: 'First Blog Post',
        description: 'This is the description for the first blog post.',
        slug: 'first-blog-post',
        author: 'Author One',
        image: '/images/blog1.jpg'
    },
    {
        title: 'Second Blog Post',
        description: 'This is the description for the second blog post.',
        slug: 'second-blog-post',
        author: 'Author Two',
        image: '/images/blog2.jpg'
    },
    {
        title: 'Third Blog Post',
        description: 'Exploring the latest trends in web development and technology.',
        slug: 'third-blog-post',
        author: 'Author Three',
        image: '/images/blog3.jpg'
    },
    {
        title: 'Fourth Blog Post',
        description: 'Tips and tricks for becoming a better programmer.',
        slug: 'fourth-blog-post',
        author: 'Author Four',
        image: '/images/blog4.jpg'
    },
    {
        title: 'Fifth Blog Post',
        description: 'Understanding modern JavaScript frameworks and libraries.',
        slug: 'fifth-blog-post',
        author: 'Author Five',
        image: '/images/blog5.jpg'
    }
]

export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-8 min-h-screen bg-background">
            <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Blog</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.slug} className="bg-card rounded-lg shadow-md p-6 transition-colors duration-200">
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
                        <p className="text-muted-foreground text-sm">By {post.author}</p>
                        <Button asChild>
                            <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline mt-4">
                                Read more
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}