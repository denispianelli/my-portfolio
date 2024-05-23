'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
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

  const [filter, setFilter] = useState('All');

  const filteredProjects: Project[] =
    filter === 'All'
      ? projects
      : projects.filter((project: Project) => project.type === filter);

  return (
    <section className="mx-4 my-32">
      <h2 className="mb-2 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
        {t('h2')}
      </h2>
      <p className="mb-6 text-center text-muted-foreground">{t('p1')}</p>
      <div className="mb-6 flex justify-center gap-2 [&>button]:text-xs sm:[&>button]:text-base">
        <Button
          onClick={() => setFilter('All')}
          variant={'ghost'}
          className={clsx(
            'bg-none hover:bg-active hover:text-primary-foreground',
            {
              'bg-active text-primary-foreground hover:bg-active':
                filter === 'All',
            },
          )}
        >
          {t('button1')}
        </Button>
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
      <div className="mx-auto grid w-[90%] grid-flow-row gap-12 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project: Project) => (
          <Card key={project.id} className="grid overflow-hidden">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                priority
              />
              <ul className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                {project.tech.map((tech: string) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
              <p className="mt-4 line-clamp-6 text-ellipsis text-sm leading-6">
                {locale === 'en'
                  ? project.descriptionEn
                  : project.descriptionFr}
              </p>
            </CardContent>
            <CardFooter className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Link className="grid" href={project.codeLink} target="_blank">
                <Button className="gap-2">
                  <FaGithub />
                  {t('button5')}
                </Button>
              </Link>
              <Link className="grid" href={project.demoLink} target="_blank">
                <Button className="gap-2 bg-active">
                  <IoBrowsersOutline />
                  {t('button6')}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
