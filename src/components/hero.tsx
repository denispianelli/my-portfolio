import { Laptop, MapPin, MessageSquareMore, Star } from 'lucide-react';
import Image from 'next/image';
import avatar from '../../public/denis-pianelli-avatar.jpeg';
import Link from 'next/link';
import { Button } from './ui/button';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center lg:grid  lg:w-[80%] lg:grid-flow-row lg:grid-cols-2 lg:px-0 ">
      <div className="lg:self-end">
        <h1 className=" z-50 mb-4 scroll-m-20 text-7xl font-extrabold tracking-tight lg:mb-0 lg:max-w-[800px] lg:self-end lg:text-[10rem]">
          {t('h1')}
        </h1>
        <h2 className="mb-1 text-3xl font-semibold">{t('h1')}</h2>
        <p className="lg:mb-2">&#123; {t('p1')} &#125;</p>
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
            <MessageSquareMore className="text-active" size={20} /> {t('p2')}
          </p>
          <p className="mb-1 flex justify-center gap-2">
            <Star className="text-active" size={20} /> {t('p3')}
          </p>
          <p className="mb-1 flex justify-center gap-2">
            <Laptop className="text-active" size={20} /> {t('p4')}
          </p>
        </div>
      </div>
      <div className="mx-auto w-fit lg:self-start">
        <h3 className="mb-4 scroll-m-20 text-2xl tracking-tight">
          Denis Pianelli
        </h3>
        <p className="text-muted-foreground">{t('p5')}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/work">
            <Button className="bg-active">{t('button1')}</Button>
          </Link>
          <a href="/Denis-Pianelli-cv.pdf" download>
            <Button variant="default">{t('button2')}</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
