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
            <CardTitle className="text-3xl font-lora">Painel de Administração</CardTitle>
            <CardDescription>Gerencie todo o conteúdo do Amor Anima.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Bem-vindo(a) à área de gerenciamento de conteúdo. Daqui, você pode adicionar, editar ou excluir mensagens de amor, fotos, razões e lembranças do calendário.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AdminQuickLink href="/admin/messages" title="Gerenciar Mensagens de Amor" description="Edite modelos de mensagens de amor geradas ou adicione novos." />
            <AdminQuickLink href="/admin/photos" title="Gerenciar Galeria de Fotos" description="Carregue novas fotos, edite legendas ou remova as antigas." />
            <AdminQuickLink href="/admin/reasons" title="Gerenciar Razões Que Te Amo" description="Adicione mais razões ou refine as existentes." />
            <AdminQuickLink href="/admin/memories" title="Gerenciar Lembranças do Calendário" description="Atualize datas importantes e lembranças no calendário interativo." />
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
            Ir para seção <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
