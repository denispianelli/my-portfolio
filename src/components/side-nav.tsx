'use client';

import { usePathname } from 'next/navigation';
import { SheetClose } from './ui/sheet';
import Link from 'next/link';
import clsx from 'clsx';

export default function SideNav() {
  const pathname = usePathname();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about-me', label: 'About' },
    { href: '#portfolio', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

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
