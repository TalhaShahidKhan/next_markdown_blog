import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="py-4 bg-background dark:bg-background lg:pt-12 lg:pb-16">
        <div className="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-gray-100 lg:text-center xl:px-36 lg:mb-7">
            Welcome to my # Markdown # Blog
          </h1>

          <p className="mb-10 text-lg font-normal text-gray-600 dark:text-gray-300 lg:text-center lg:text-xl xl:px-60">
            Start developing with an open-source library of over 600+ UI
            components, sections, and pages built with the utility classes from
            Tailwind CSS and designed in Figma.
          </p>

          <div className="flex flex-col mb-8 md:flex-row lg:justify-center">
          <Link
            href="/blog"
            className="text-lg text-center font-semibold transition-colors bg-foreground dark:bg-background hover:bg-background dark:hover:bg-foreground border-2 border-gray-700 rounded-xl text-white dark:text-white hover:text-black dark:hover:text-black py-3 px-3 mx-1"
          >
            Get Started
          </Link>


          </div>
        </div>
      </section>
      <section className="py-4 bg-background dark:bg-background lg:pt-12 lg:pb-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Tutorial
              </span>
              <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href="#">How to quickly deploy a static website</Link>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.
            </p>
            <div className="flex justify-between items-center">
              
              <Button asChild>
                <Link href="/blog" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Read more
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
              </Button>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href="#">Our first project with React</Link>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.
            </p>
            <div className="flex justify-between items-center">
              
              <Button asChild>
                <Link href="/blog" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Read more
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
      </section>
    </main>
  );
}
