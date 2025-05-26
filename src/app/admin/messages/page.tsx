import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquareEdit, PlusCircle } from 'lucide-react';

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <MessageSquareEdit className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Manage Love Messages</CardTitle>
        </div>
        <CardDescription>
          View, edit, or delete love message templates. (Functionality coming soon)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Add New Message Template
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            Love message management interface will be here. You&apos;ll be able to curate and adjust AI prompt examples or pre-written messages.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
