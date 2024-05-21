'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggleSwitch({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const handleModeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="relative flex items-center gap-3">
        <Moon className="absolute left-1 -z-10 h-4 w-4" />
        <button
          onClick={handleModeSwitch}
          type="button"
          className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-[#FF9E3D] px-[2px] before:h-4 before:w-4 before:cursor-pointer before:rounded-full before:bg-[#FF9E3D] before:ring-0 before:transition-all before:content-[''] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background before:focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-white before:dark:translate-x-5"
        ></button>
        <Sun className="absolute right-1 -z-10 h-4 w-4" />
      </div>
    </div>
  );
}
