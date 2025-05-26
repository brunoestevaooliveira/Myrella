'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, MessageSquare, ImagePlus, ListPlus, CalendarPlus } from 'lucide-react'; // Changed MessageSquareEdit to MessageSquare and removed Settings
import { Card } from '@/components/ui/card'; // Removed CardContent as it's not used

const adminNavItems = [
  { href: '/admin', label: 'Painel', icon: LayoutDashboard },
  { href: '/admin/messages', label: 'Gerenciar Mensagens', icon: MessageSquare },
  { href: '/admin/photos', label: 'Gerenciar Fotos', icon: ImagePlus },
  { href: '/admin/reasons', label: 'Gerenciar Razões', icon: ListPlus },
  { href: '/admin/memories', label: 'Gerenciar Lembranças', icon: CalendarPlus }, 
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Card className="w-64 bg-card p-4 space-y-4 shadow-lg rounded-l-xl border-r">
        <h2 className="text-xl font-lora font-semibold text-primary-foreground/80 px-2 pt-2">Painel de Administração</h2>
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
