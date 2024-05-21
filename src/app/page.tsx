import Hero from '@/components/hero';
import AboutMe from '@/components/about-me';
import DevProjects from '@/components/dev-projects';

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div id="home" className="relative"></div>
      <Hero />
      <div id="about-me" className="relative -top-[45px]"></div>
      <AboutMe />
      <div id="portfolio" className="relative -top-[45px]"></div>
      <DevProjects />
    </main>
  );
}
