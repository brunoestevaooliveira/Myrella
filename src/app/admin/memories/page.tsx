import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarPlus, PlusCircle } from 'lucide-react';

export default function AdminMemoriesPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <CalendarPlus className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Manage Calendar Memories</CardTitle>
        </div>
        <CardDescription>
          Add, edit, or delete important dates and memories on the interactive calendar. (Functionality coming soon)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Add New Memory
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            Calendar memory management tools will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
