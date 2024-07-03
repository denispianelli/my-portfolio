'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { FaGithub } from 'react-icons/fa';
import { IoBrowsersOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
const { projects } = require('@/lib/projects-data');

export default function DevProjects() {
  interface Project {
    id: number;
    type: string;
    tech: string[];
    title: string;
    descriptionEn: string;
    descriptionFr: string;
    image: string;
    codeLink: string;
    demoLink: string;
  }

  const t = useTranslations('DevProjects');
  const language = useTranslations('Language');
  const locale = language('locale');

  const [filter, setFilter] = useState('App');

  const filteredProjects: Project[] =
    filter === 'All'
      ? projects
      : projects.filter((project: Project) => project.type === filter);

  return (
    <section className="mx-4 my-32 w-full">
      <h2 className="mb-2 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
        {t('h2')}
      </h2>
      <p className="mb-6 text-center text-muted-foreground">{t('p1')}</p>
      <div className="mb-6 flex justify-center gap-2 [&>button]:text-xs sm:[&>button]:text-base">
        <Button
          onClick={() => setFilter('App')}
          variant={'ghost'}
          className={clsx(
            'bg-none hover:bg-active hover:text-primary-foreground',
            {
              'bg-active text-primary-foreground hover:bg-active':
                filter === 'App',
            },
          )}
        >
          {t('button2')}
        </Button>
        <Button
          onClick={() => setFilter('Website')}
          variant={'ghost'}
          className={clsx(
            'bg-none hover:bg-active hover:text-primary-foreground',
            {
              'bg-active text-primary-foreground hover:bg-active':
                filter === 'Website',
            },
          )}
        >
          {t('button3')}
        </Button>
        <Button
          onClick={() => setFilter('Game')}
          variant={'ghost'}
          className={clsx(
            'bg-none hover:bg-active hover:text-primary-foreground',
            {
              'bg-active text-primary-foreground hover:bg-active':
                filter === 'Game',
            },
          )}
        >
          {t('button4')}
        </Button>
      </div>
      <div className="mx-auto grid grid-flow-row grid-cols-[358px] justify-center justify-items-center gap-12 md:grid-cols-[repeat(2,358px)] xl:grid-cols-[repeat(3,358px)]">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="grid gap-2 border-none bg-transparent"
          >
            <Link href={project.demoLink} target="_blank">
              <div className="relative h-[180px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="30vw"
                  priority
                  className="rounded-md object-contain"
                />
              </div>
            </Link>

            <ul className="mt-2 flex h-[52px] flex-wrap gap-2 text-sm text-muted-foreground">
              {project.tech.map((tech: string) => (
                <li key={tech}>
                  <Badge variant={'outline'}>{tech}</Badge>
                </li>
              ))}
            </ul>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {project.title}
            </h4>
            <p className="mt-4 h-[170px] text-sm leading-6">
              {locale === 'en' ? project.descriptionEn : project.descriptionFr}
            </p>

            <Link className="grid" href={project.codeLink} target="_blank">
              <Button
                className="gap-2 border-active text-active"
                variant={'outline'}
              >
                <FaGithub />
                {t('button5')}
              </Button>
            </Link>
            <Link className="grid" href={project.demoLink} target="_blank">
              <Button className="gap-2 underline" variant={'link'}>
                <IoBrowsersOutline />
                {t('button6')}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
