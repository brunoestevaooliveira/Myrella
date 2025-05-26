import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, LayoutDashboard } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-md rounded-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <LayoutDashboard className="w-10 h-10 text-primary" />
          <div>
            <CardTitle className="text-3xl font-lora">Admin Dashboard</CardTitle>
            <CardDescription>Manage all the content for Amor Anima.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Welcome to the content management area. From here, you can add, edit, or delete love messages, photos, reasons, and calendar memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AdminQuickLink href="/admin/messages" title="Manage Love Messages" description="Edit generated love message templates or add new ones." />
            <AdminQuickLink href="/admin/photos" title="Manage Photo Gallery" description="Upload new photos, edit captions, or remove old ones." />
            <AdminQuickLink href="/admin/reasons" title="Manage Reasons I Love You" description="Add more reasons or refine existing ones." />
            <AdminQuickLink href="/admin/memories" title="Manage Calendar Memories" description="Update important dates and memories on the interactive calendar." />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface AdminQuickLinkProps {
  href: string;
  title: string;
  description: string;
}

function AdminQuickLink({ href, title, description }: AdminQuickLinkProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 rounded-md">
      <CardHeader>
        <CardTitle className="text-xl font-lora">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={href}>
            Go to section <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
