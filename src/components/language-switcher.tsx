'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import Image from 'next/image';
import { Separator } from './ui/separator';
import clsx from 'clsx';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function handleFrenchClick() {
    const hash = window && window.location.hash;

    router.replace(`fr${hash}`);
  }

  function handleEnglishClick() {
    const hash = window && window.location.hash;

    router.replace(`en${hash}`);
  }

  return (
    <div className="flex gap-2">
      <Button
        className={clsx({
          'bg-accent': pathname.includes('/fr'),
        })}
        variant={'ghost'}
        size={'icon'}
        onClick={handleFrenchClick}
      >
        <Image
          src="/flags/FR.svg"
          alt="french flag"
          width={24}
          height={24}
        ></Image>
      </Button>
      <Separator orientation={'vertical'} />
      <Button
        className={clsx({
          'bg-accent': pathname.includes('/en'),
        })}
        variant={'ghost'}
        size={'icon'}
        onClick={handleEnglishClick}
      >
        <Image
          src="/flags/GB.svg"
          alt="french flag"
          width={24}
          height={24}
        ></Image>
      </Button>
    </div>
  );
}
