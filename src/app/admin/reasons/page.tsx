import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ListPlus, PlusCircle } from 'lucide-react';

export default function AdminReasonsPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <ListPlus className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Manage Reasons I Love You</CardTitle>
        </div>
        <CardDescription>
          Add new reasons, edit existing ones, or change their order. (Functionality coming soon)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Add New Reason
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            The interface for managing the list of reasons will be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
