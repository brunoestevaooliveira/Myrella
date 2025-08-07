
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, CalendarDays, ListChecks, UserCog, Menu, Quote, Gift, Heart, FileHeart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';


const navItems = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/amor', label: 'Amor', icon: Heart },
  { href: '/promise', label: 'Promessa', icon: FileHeart },
  { href: '/calendar', label: 'Nosso Calendário', icon: CalendarDays },
  { href: '/reasons', label: 'Razões Que Te Amo', icon: ListChecks },
  { href: '/quotes', label: 'Citações de Amor', icon: Quote },
  { href: '/affection', label: 'Caixinha de Afeto', icon: Gift },
  { href: '/admin', label: 'Gerenciar Conteúdo', icon: UserCog },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => isMobile && setIsSheetOpen(false)}
          className={cn(
            'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary-foreground',
            pathname === item.href ? 'bg-primary/30 text-primary-foreground font-semibold' : 'text-foreground/80',
            isMobile && 'text-lg w-full justify-start py-3'
          )}
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </Link>
      ))}
    </>
  )


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Image 
            src="https://i.pinimg.com/736x/8c/6e/16/8c6e169a42578a693cfadcf389bbefbb.jpg" 
            alt="Gato fofo" 
            width={32} 
            height={32} 
            className="rounded-full"
            unoptimized
          />
          <span className="font-lora">Myrella <span className="text-primary/80 font-normal text-[0.7em] relative top-[-0.1em] ml-0.5">愛</span></span>
        </Link>

        <div className="flex items-center space-x-2">
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
          </nav>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks isMobile={true} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
