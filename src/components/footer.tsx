import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer>
      <div className="m-4 grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3">
        <small>{t('p1')}</small>
        <div className="flex gap-2">
          <Link
            href={'https://github.com/denispianelli'}
            target="_blank"
            className="transition-all hover:-translate-y-2"
          >
            {' '}
            <FaGithub size={30} />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/denis-pianelli/'}
            target="_blank"
            className="transition-all hover:-translate-y-2"
          >
            {' '}
            <FaLinkedin size={30} />
          </Link>
        </div>
        <small>
          {t('p2')}{' '}
          <Link
            className="border-b border-primary"
            href={'https://dribbble.com/dejan-vukicevic'}
            target="_blank"
          >
            Dejan | Devu Design
          </Link>{' '}
          - {t('p3')} Denis Pianelli
        </small>
      </div>
    </footer>
  );
}
