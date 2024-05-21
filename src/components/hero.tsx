import { Laptop, MapPin, MessageSquareMore, Star } from 'lucide-react';
import Image from 'next/image';
import avatar from '../../public/denis-pianelli-avatar.jpeg';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center lg:grid  lg:w-[80%] lg:grid-flow-row lg:grid-cols-2 lg:px-0 ">
      <div className="lg:self-end">
        <h1 className=" z-50 mb-4 scroll-m-20 text-7xl font-extrabold tracking-tight lg:mb-0 lg:max-w-[800px] lg:self-end lg:text-[10rem]">
          Hello.
        </h1>
        <h2 className="mb-1 text-3xl font-semibold">Full Stack Developer</h2>
        <p className="lg:mb-2">
          &#123; JavaScript, React, Next.js, Prisma, Tailwind... &#125;
        </p>
      </div>
      <div className="mx-auto lg:row-span-2">
        <Image
          src={avatar}
          sizes="100vw"
          alt="Denis Pianelli"
          className="mx-auto my-8 w-[200px] rounded-full lg:h-auto lg:w-[330px]"
          priority
        />
        <div className="flex w-full flex-col gap-x-4 md:flex-row md:justify-around">
          <p className="mb-1 flex justify-center gap-2">
            <MapPin className="text-active" size={20} /> Paris, France
          </p>
          <p className="mb-1 flex justify-center gap-2">
            <MessageSquareMore className="text-active" size={20} /> English,
            French
          </p>
          <p className="mb-1 flex justify-center gap-2">
            <Star className="text-active" size={20} /> Available for hire
          </p>
          <p className="mb-1 flex justify-center gap-2">
            <Laptop className="text-active" size={20} /> On-site, Remote
          </p>
        </div>
      </div>
      <div className="mx-auto w-fit lg:self-start">
        <h3 className="mb-4 scroll-m-20 text-2xl tracking-tight">
          Denis Pianelli
        </h3>
        <p className="text-muted-foreground">
          Specializing in React and Next.js, I utilize advanced technologies to
          create dynamic and engaging web applications.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/work">
            <Button className="bg-active">See my dev works</Button>
          </Link>
          <a href="/Denis-Pianelli-cv.pdf" download>
            <Button variant="default">Download CV</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
