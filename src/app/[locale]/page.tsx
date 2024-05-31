import Hero from '@/components/hero';
import AboutMe from '@/components/about-me';
import DevProjects from '@/components/dev-projects';
import Contact from '@/components/contact';

import { getTranslations } from 'next-intl/server';
import Testimonials from '@/components/testimonials';
import { notFound } from 'next/navigation';

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }) {
//   const t = await getTranslations({ locale, namespace: 'Metadata' });

//   return {
//     title: t('title'),
//     description: t('description'),
//   };
// }

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
