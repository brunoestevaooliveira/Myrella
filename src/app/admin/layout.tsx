import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent } from '@/components/ui/card';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-var(--header-height)-var(--footer-height))]"> {/* Adjust height based on your header/footer */}
      <AdminSidebar />
      <main className="flex-1 p-6 bg-muted/30 rounded-r-xl">
        <Card className="h-full shadow-inner rounded-lg">
          <CardContent className="p-6">
            {children}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
