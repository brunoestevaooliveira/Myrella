'use client';

import Link from 'next/link';
import { Heart, Home, CalendarDays, Images, MessageSquareHeart, ListChecks, UserCog } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';


const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/love-messages', label: 'Love Messages', icon: MessageSquareHeart },
  { href: '/calendar', label: 'Our Calendar', icon: CalendarDays },
  { href: '/gallery', label: 'Photo Gallery', icon: Images },
  { href: '/reasons', label: 'Reasons I Love You', icon: ListChecks },
  { href: '/admin', label: 'Manage Content', icon: UserCog },
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
          <Heart className="h-8 w-8" />
          <span className="font-lora">Amor Anima</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
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
    </header>
  );
}
