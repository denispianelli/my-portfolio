'use client';

import { SheetClose } from './ui/sheet';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

export default function SideNav() {
  let hash = '';

  if (typeof window !== 'undefined') {
    hash = window.location.hash;
  }

  console.log('const[hash,setHash]=useState ~ hash:', hash);

  const t = useTranslations('Navigation');

  const links = [
    { href: '#home', label: t('home.label') },
    { href: '#about-me', label: t('about.label') },
    { href: '#portfolio', label: t('portfolio.label') },
    { href: '#contact', label: t('contact.label') },
  ];

  return (
    <nav className="text-md mb-6 grid gap-6 font-medium">
      {links.map((link) => {
        return (
          <SheetClose key={link.label} asChild>
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                'transition-colors',
                {
                  'text-active': hash === link.href,
                },
                {
                  'text-muted-foreground hover:text-foreground':
                    hash !== link.href,
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
