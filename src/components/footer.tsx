import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="m-4 flex items-center justify-around">
        <small>Copyright © 2024 All rights reserved.</small>
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
          Designed by{' '}
          <Link
            className="border-b border-primary"
            href={'https://dribbble.com/dejan-vukicevic'}
            target="_blank"
          >
            Dejan | Devu Design
          </Link>
        </small>
      </div>
    </footer>
  );
}
