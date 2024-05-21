import { FlaskConical, GraduationCap, Users } from 'lucide-react';
import { Separator } from './ui/separator';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export default function AboutMe() {
  return (
    <>
      <section className="my-8 flex w-[300px] flex-col items-center justify-center text-sm md:w-[500px]">
        <h2 className="mb-4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          Problem solver &#60;coder&#62;
        </h2>
        <p className="text-muted-foreground">
          Full Stack Developer with over 2 years of experience.
        </p>
        <div className="mt-10 flex w-full flex-col justify-start gap-6">
          <div className="grid gap-2">
            <GraduationCap />
            <p className="text-foreground">Certification:</p>
            <p className="text-muted-foreground">
              Professional Title: Web and Mobile Web Developer Level 5
              (equivalent to a diploma at the level of a two-year undergraduate
              degree) registered in the RNCP under number 37674.
            </p>
          </div>
          <div className="grid gap-2">
            <FlaskConical />
            <p className="text-foreground">Specializing in React & Next.js:</p>
            <p className="text-muted-foreground">
              I am constantly working on learning new technologies and improving
              my skills.
            </p>
          </div>
          <div className="grid gap-2">
            <Users />
            <p className="text-foreground">Love working in team:</p>
            <p className="text-muted-foreground">
              I enjoy working with other developers and designers to create the
              best possible product. I am always open to new ideas and
              suggestions.
            </p>
          </div>
        </div>
      </section>
      <Separator className="w-[90%]" />
      <section className="mx-4 my-8 grid gap-x-8 gap-y-8 text-sm md:grid-cols-2 lg:mx-24 lg:grid-cols-4">
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />
          <div className="ml-6 flex flex-col gap-4">
            <IoLogoJavascript
              size={25}
              className="text-[#000002] dark:text-[#807D90]"
            />
            <p>Javascript</p>
            <p>Strong JavaScript knowledge and advanced web development.</p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <FaReact size={30} className="text-[#000002] dark:text-[#807D90]" />
            <p>React</p>
            <p>Building fast React App&apos;s and websites.</p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <SiNextdotjs
              size={30}
              className="text-[#000002] dark:text-[#807D90]"
            />
            <p>Next.js</p>
            <p>
              Fast client-side and Server-side Rendering with Client and Server
              Components. Further optimized with Static and Dynamic Rendering on
              the server.
            </p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <SiTailwindcss
              size={30}
              className="text-[#000002] dark:text-[#807D90]"
            />
            <p>Tailwind CSS</p>
            <p>
              Tailwind CSS lets me build custom, responsive designs faster with
              its utility-first approach and pre-defined classes..
            </p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <BiLogoPostgresql
              size={30}
              className="text-[#000002] dark:text-[#807D90]"
            />
            <p>PostgreSQL</p>
            <p>Using PostgreSQL for scalable databases on the backend.</p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <SiPrisma
              size={30}
              className="text-[#000002] dark:text-[#807D90]"
            />
            <p>Prisma</p>
            <p>
              Next-generation Node.js and TypeScript ORM that unlocks a new
              level of developer experience when working with databases.
            </p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <FaNodeJs
              size={30}
              className="text-[#000002] dark:text-[#807D90]"
            />
            <p>Node.js</p>
            <p>
              Enables efficient, scalable server-side applications with its
              non-blocking, event-driven architecture.
            </p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <SiExpress
              size={30}
              className="text-[#000002] dark:text-[#807D90]"
            />
            <p>Express</p>
            <p>
              Streamlines Node.js web application development with its minimal,
              flexible framework and robust set of features.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
