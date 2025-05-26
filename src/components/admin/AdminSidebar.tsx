'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, MessageSquareEdit, ImagePlus, ListPlus, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const adminNavItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/messages', label: 'Manage Messages', icon: MessageSquareEdit },
  { href: '/admin/photos', label: 'Manage Photos', icon: ImagePlus },
  { href: '/admin/reasons', label: 'Manage Reasons', icon: ListPlus },
  { href: '/admin/memories', label: 'Manage Memories', icon: Settings }, // Added for calendar memories
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Card className="w-64 bg-card p-4 space-y-4 shadow-lg rounded-l-xl border-r">
        <h2 className="text-xl font-lora font-semibold text-primary-foreground/80 px-2 pt-2">Admin Panel</h2>
        <nav className="flex flex-col space-y-1">
        {adminNavItems.map((item) => (
            <Link
            key={item.href}
            href={item.href}
            className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-foreground/70 transition-all hover:bg-primary/10 hover:text-primary',
                pathname === item.href && 'bg-primary/20 text-primary font-medium shadow-sm'
            )}
            >
            <item.icon className="h-5 w-5" />
            {item.label}
            </Link>
        ))}
        </nav>
    </Card>
  );
}
