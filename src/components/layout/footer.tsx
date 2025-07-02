import Link from 'next/link';
import { Terminal } from 'lucide-react';

export function Footer({ year }: { year: number }) {
  return (
    <footer className="bg-background/50 text-muted-foreground py-8 px-4 sm:px-6 lg:px-8 mt-auto border-t border-primary/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4" aria-label="LinuxCustom Home">
            <Terminal className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline text-primary">Vincre</span>
          </Link>
          <p className="text-sm max-w-xs">The ultimate destination for Linux enthusiasts seeking customization resources and AI tools.</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/linux" className="hover:text-primary transition-colors">Linux</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4 font-headline">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-border text-center text-sm">
        <p>© {year} LinuxCustom. All rights reserved.</p>
      </div>
    </footer>
  );
}
