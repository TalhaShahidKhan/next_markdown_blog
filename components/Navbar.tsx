import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./toggle";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="z-10 border-b shadow-sm bg-background/50 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl mr-8">
          TSKBlog
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
          <Link
            href="/login"
            className="text-lg font-semibold transition-colors bg-foreground dark:bg-background hover:bg-background dark:hover:bg-foreground border-2 border-gray-700 rounded-xl text-white dark:text-white hover:text-black dark:hover:text-black py-1 px-3 mx-1"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-lg font-semibold transition-colors bg-foreground dark:bg-background hover:bg-background dark:hover:bg-foreground border-2 border-gray-700 rounded-xl text-white dark:text-white hover:text-black dark:hover:text-black py-1 px-3 mx-1"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center gap-3 md:hidden">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild className="md:hidden ">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px]">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="font-bold text-xl mr-8">
                  TSKBlog
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </nav>
  );
}
