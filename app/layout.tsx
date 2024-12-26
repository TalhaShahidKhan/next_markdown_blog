import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TSKBlog - Your Modern Tech Blog',
  description: 'A modern blog platform for sharing tech insights and knowledge',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

