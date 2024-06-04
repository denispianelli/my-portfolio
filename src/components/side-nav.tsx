'use client';

import { SheetClose } from './ui/sheet';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function SideNav() {
  let hash = '';

  if (typeof window !== 'undefined') {
    hash = window.location.hash;
  }

  const params = useParams();
  const { locale } = params;

  const t = useTranslations('Navigation');

  const links = [
    { href: `/${locale}/#home`, label: t('home.label') },
    { href: `/${locale}/#about-me`, label: t('about.label') },
    { href: `/${locale}/#portfolio`, label: t('portfolio.label') },
    { href: `/${locale}/#contact`, label: t('contact.label') },
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
