'use client';

import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState, useRef, useMemo } from 'react';

export default function TopNav({ className }: { className?: string }) {
  const [activeSection, setActiveSection] = useState<string>('/');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const links = useMemo(
    () => [
      { href: '#home', label: 'Home' },
      { href: '#about-me', label: 'About' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#contact', label: 'Contact' },
    ],
    [],
  );

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentLink = links.find((link) => link.href === `#${id}`);
          if (currentLink) {
            setActiveSection(currentLink.href);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px 0px -50% 0px',
    });

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [links]);

  useEffect(() => {
    links.forEach((link) => {
      const sectionId = link.href.startsWith('#') ? link.href.substring(1) : '';
      if (sectionId) {
        sectionsRef.current[link.href] = document.getElementById(sectionId);
      }
    });
  }, [links]);

  return (
    <nav
      className={cn(
        'hidden flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-base lg:gap-6',
        className,
      )}
    >
      {links.map((link) => {
        const isActive = activeSection === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={clsx(
              'py-4 transition-colors',
              {
                'border-b border-active text-active': isActive,
              },
              {
                'border-b border-background hover:text-foreground': !isActive,
              },
            )}
          >
            <p>{link.label}</p>
          </Link>
        );
      })}
    </nav>
  );
}
