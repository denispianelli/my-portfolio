import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import TopNav from './top-nav';
import SideNav from './side-nav';
import { ModeToggleSwitch } from './mode-toggle-switch';
import LocaleSwitcher from './language-switcher';
import Image from 'next/image';
import { Separator } from './ui/separator';

import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('Hero');
  return (
    <header className="sticky top-0 z-50 grid h-16 items-center gap-4 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6  lg:grid-cols-[180px_auto_180px]">
      <div className="cap-2 flex items-center gap-2">
        <Image
          src={'/apple-touch-icon.png'}
          alt="Denis Pianelli Logo"
          width={32}
          height={32}
          priority
        />
        <div className="hidden lg:block">
          <h2 className="font-semibold">Denis Pianelli</h2>
          <h3 className="text-xs text-muted-foreground">{t('h2')}</h3>
        </div>
      </div>
      <TopNav className="col-start-2 justify-center" />
      <div className="flex justify-start gap-2 md:justify-end">
        <ModeToggleSwitch className="hidden  md:col-start-3 md:flex" />
        <LocaleSwitcher className="hidden md:flex" />
      </div>
      <div className="col-start-3 w-fit justify-self-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="col-start-3 shrink-0 md:hidden"
            >
              <Menu />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SideNav />
            <Separator orientation="horizontal" />
            <ModeToggleSwitch className="mt-6" />
            <LocaleSwitcher className="mt-6 " />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
