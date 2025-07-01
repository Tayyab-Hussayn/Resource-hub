import Link from 'next/link';
import { Terminal, Menu, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/linux', label: 'Linux' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Linux Customization Hub Home">
          <Terminal className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline text-primary">vincre</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-base">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:flex">
            <Link href="https://github.com/tayyabhussayn" target="_blank" rel="noopener noreferrer">
              <Github />
              Star on GitHub
            </Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Linux Customization Hub Home">
                    <Terminal className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold font-headline text-primary">LinuxCustom</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-lg text-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
