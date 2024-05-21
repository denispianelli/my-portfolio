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
const { projects } = require('@/lib/projects-data');

export default function DevProjects() {
  interface Project {
    id: number;
    type: string;
    tech: string[];
    title: string;
    description: string;
    image: string;
    codeLink: string;
    demoLink: string;
  }

  const [filter, setFilter] = useState('All');

  const filteredProjects: Project[] =
    filter === 'All'
      ? projects
      : projects.filter((project: Project) => project.type === filter);

  return (
    <section className="my-32">
      <h2 className="mb-2 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
        My &#123;dev&#125; projects
      </h2>
      <p className="mb-6 text-center text-muted-foreground">
        From Web Apps to Website & Games
      </p>
      <div className="mb-6 flex justify-center gap-4">
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
          All
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
          Apps
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
          Websites
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
          Games
        </Button>
      </div>
      <div className="mx-auto grid w-[90%] gap-12 md:grid-cols-2 xl:grid-cols-3">
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
              />
              <ul className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                {project.tech.map((tech: string) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
              <p className="mt-4 line-clamp-6 text-ellipsis text-sm leading-6">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
              <Link className="grid" href={project.codeLink} target="_blank">
                <Button className="gap-2">
                  <FaGithub />
                  View Code
                </Button>
              </Link>
              <Link className="grid" href={project.demoLink} target="_blank">
                <Button className="gap-2 bg-active">
                  <IoBrowsersOutline />
                  View Demo
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
