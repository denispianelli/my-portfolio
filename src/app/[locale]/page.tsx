import Hero from '@/components/hero';
import AboutMe from '@/components/about-me';
import DevProjects from '@/components/dev-projects';
import Contact from '@/components/contact';

import Testimonials from '@/components/testimonials';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;

  if (locale !== 'en' && locale !== 'fr') notFound();

  return (
    <main className="flex flex-col items-center">
      <div id="home" className="relative -top-[64px]"></div>
      <Hero />
      <div id="about-me" className="relative -top-[45px]"></div>
      <AboutMe />
      <div id="portfolio" className="relative -top-[45px]"></div>
      <DevProjects />
      <Testimonials />
      <div id="contact" className="relative -top-[45px]"></div>
      <Contact />
    </main>
  );
}
