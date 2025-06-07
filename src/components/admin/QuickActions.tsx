
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, UserPlus, FileText, MessageSquare, Home } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

interface QuickActionsProps {
  setActiveTab: (tab: string) => void;
}

const QuickActions = ({ setActiveTab }: QuickActionsProps) => {
  const { content } = useContent();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
          Quick Actions
        </CardTitle>
        <p className="text-sm text-gray-600">Common tasks and shortcuts</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button 
            onClick={() => setActiveTab('enrollments')} 
            variant="outline" 
            className="h-20 flex flex-col justify-center hover:bg-blue-50 hover:border-blue-300"
          >
            <UserPlus className="w-6 h-6 mb-2 text-blue-600" />
            <span className="text-sm font-medium">Review Students</span>
            {content.submissions.enrollments.filter(e => e.status === 'New').length > 0 && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full mt-1">
                {content.submissions.enrollments.filter(e => e.status === 'New').length} new
              </span>
            )}
          </Button>
          <Button 
            onClick={() => setActiveTab('registrations')} 
            variant="outline" 
            className="h-20 flex flex-col justify-center hover:bg-green-50 hover:border-green-300"
          >
            <FileText className="w-6 h-6 mb-2 text-green-600" />
            <span className="text-sm font-medium">Seminar Signups</span>
            {content.submissions.registrations.filter(r => r.status === 'New').length > 0 && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full mt-1">
                {content.submissions.registrations.filter(r => r.status === 'New').length} new
              </span>
            )}
          </Button>
          <Button 
            onClick={() => setActiveTab('messages')} 
            variant="outline" 
            className="h-20 flex flex-col justify-center hover:bg-purple-50 hover:border-purple-300"
          >
            <MessageSquare className="w-6 h-6 mb-2 text-purple-600" />
            <span className="text-sm font-medium">Messages</span>
            {content.submissions.contacts.filter(c => c.status === 'New').length > 0 && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full mt-1">
                {content.submissions.contacts.filter(c => c.status === 'New').length} new
              </span>
            )}
          </Button>
          <Button 
            onClick={() => setActiveTab('hero')} 
            variant="outline" 
            className="h-20 flex flex-col justify-center hover:bg-yellow-50 hover:border-yellow-300"
          >
            <Home className="w-6 h-6 mb-2 text-yellow-600" />
            <span className="text-sm font-medium">Edit Content</span>
            <span className="text-xs text-gray-500 mt-1">Update website</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
