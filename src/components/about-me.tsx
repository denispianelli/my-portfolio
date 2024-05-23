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
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations('AboutMe');
  return (
    <>
      <section className="my-8 flex w-[300px] flex-col items-center justify-center text-sm md:w-[500px]">
        <h2 className="mb-4 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
          {t('h2')} &#60;coder&#62;
        </h2>
        <p className="text-muted-foreground">{t('p1')}</p>
        <div className="mt-10 flex w-full flex-col justify-start gap-6">
          <div className="grid gap-2">
            <GraduationCap />
            <p className="text-foreground">{t('p2')}</p>
            <p className="text-muted-foreground">{t('p3')}</p>
          </div>
          <div className="grid gap-2">
            <FlaskConical />
            <p className="text-foreground">{t('p4')}</p>
            <p className="text-muted-foreground">{t('p5')}</p>
          </div>
          <div className="grid gap-2">
            <Users />
            <p className="text-foreground">{t('p6')}</p>
            <p className="text-muted-foreground">{t('p7')}</p>
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
            <p>{t('p8')}</p>
          </div>
        </div>
        <div className="flex">
          <Separator orientation="vertical" className="h-4 py-8" />

          <div className="ml-6 flex flex-col gap-4">
            <FaReact size={30} className="text-[#000002] dark:text-[#807D90]" />
            <p>React</p>
            <p>{t('p9')}</p>
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
            <p>{t('p10')}</p>
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
            <p>{t('p11')} </p>
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
            <p>{t('p12')}</p>
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
            <p>{t('p13')}</p>
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
            <p>{t('p14')} </p>
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
            <p>{t('p15')} </p>
          </div>
        </div>
      </section>
    </>
  );
}
