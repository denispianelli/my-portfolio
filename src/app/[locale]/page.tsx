import Hero from '@/components/hero';
import AboutMe from '@/components/about-me';
import DevProjects from '@/components/dev-projects';
import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div id="home" className="relative -top-[64px]"></div>
      <Hero />
      <div id="about-me" className="relative -top-[45px]"></div>
      <AboutMe />
      <div id="portfolio" className="relative -top-[45px]"></div>
      <DevProjects />
      <div id="contact" className="relative -top-[45px]"></div>
      <Contact />
    </main>
  );
}
