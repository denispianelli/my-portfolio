'use client';

import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TopNav({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : '',
  );

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about-me', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []),
    useEffect(() => {
      const home = document.getElementById('home');
      const about = document.getElementById('about-me');
      const portfolio = document.getElementById('portfolio');
      const contact = document.getElementById('contact');

      const sections = [home, about, portfolio, contact];

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -90% 0px',
        threshold: 0.2,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'home') {
              setActiveSection('#home');
            }
            if (entry.target.id === 'about-me') {
              setActiveSection('#about-me');
            }
            if (entry.target.id === 'portfolio') {
              setActiveSection('#portfolio');
            }
            if (entry.target.id === 'contact') {
              setActiveSection('#contact');
            }
          }
        });
      }, observerOptions);

      sections.forEach((section) => {
        section && observer.observe(section);
      });
    }, []);

  return (
    <nav
      className={cn(
        'hidden flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-base lg:gap-6',
        className,
      )}
    >
      {links.map((link) => {
        const isActive = isMounted && activeSection === link.href;

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
