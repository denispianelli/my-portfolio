import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import TopNav from './top-nav';
import SideNav from './side-nav';
import { ModeToggleSwitch } from './mode-toggle-switch';

export function Header() {
  return (
    <header className="sticky top-0 z-50 grid h-16 grid-cols-3 items-center gap-4 bg-background px-4 md:px-6">
      <TopNav className="col-start-2 justify-center" />
      <ModeToggleSwitch className="hidden justify-end md:col-start-3 md:flex" />
      <div className="col-start-3 w-fit justify-self-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="col-start-3 shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SideNav />
            <ModeToggleSwitch />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
