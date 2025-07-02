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
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-bounce" style={{ top: '20%', left: '10%', animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
        <div className="absolute w-3 h-3 bg-blue-400/20 rounded-full animate-ping" style={{ top: '40%', left: '30%', animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-cyan-300/50 rounded-full animate-bounce" style={{ top: '80%', left: '60%', animationDuration: '2.5s', animationDelay: '1.5s' }}></div>
        <div className="absolute w-2 h-2 bg-purple-300/30 rounded-full animate-pulse" style={{ top: '15%', left: '70%', animationDelay: '3s' }}></div>
      </div>

      <header className="relative z-50 py-2 px-4 sm:px-6 lg:px-8 bg-white/2 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg shadow-cyan-400/10">

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"></div>
        
        <div className="container mx-auto flex justify-between items-center relative z-10">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group transition-all duration-300" aria-label="Linux Customization Hub Home">
            <div className="relative p-2">
              <Terminal className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 drop-shadow-lg" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-sm group-hover:bg-cyan-400/30 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <span className="text-3xl font-bold font-headline bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
              vincre
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-base">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group py-2 px-4 rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Enhanced CTA Button */}
            <Button asChild className="hidden sm:flex relative overflow-hidden bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105 group">
              <Link href="https://github.com/tayyab-hussayn" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Github className="relative z-10 mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Star on GitHub</span>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="bg-gray-800/80 border-cyan-400/30 hover:bg-gray-700/80 hover:border-cyan-400/50 text-cyan-400 hover:text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-xl border-l border-cyan-400/20">
                  <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="flex items-center gap-3 mb-6 group transition-all duration-300" aria-label="Linux Customization Hub Home">
                      <div className="relative p-2">
                        <Terminal className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300" />
                        <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-sm group-hover:bg-cyan-400/30 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <span className="text-2xl font-bold font-headline bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">vincre</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link 
                          key={link.href} 
                          href={link.href} 
                          className="text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-cyan-400/10 group relative hover:shadow-lg hover:shadow-cyan-400/20"
                        >
                          <span className="relative z-10">{link.label}</span>
                          <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 transform -translate-y-1/2 rounded-full"></div>
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
    </>
  );
}
