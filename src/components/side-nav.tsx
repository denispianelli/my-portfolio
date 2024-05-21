'use client';

import { usePathname } from 'next/navigation';
import { SheetClose } from './ui/sheet';
import Link from 'next/link';
import clsx from 'clsx';
import { useEffect } from 'react';

export default function SideNav() {
  const pathname = usePathname();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about-me', label: 'About' },
    { href: '#portfolio', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Vérifiez si le code s'exécute côté client
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const position = window.scrollY;
        console.log('Scroll position:', position);
      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <nav className="text-md grid gap-6 font-medium">
      {links.map((link) => {
        return (
          <SheetClose key={link.label} asChild>
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                'transition-colors',
                {
                  'text-active': pathname === link.href,
                },
                {
                  'text-muted-foreground hover:text-foreground':
                    pathname !== link.href,
                },
              )}
            >
              {link.label}
            </Link>
          </SheetClose>
        );
      })}
    </nav>
  );
}
