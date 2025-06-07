
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Clock, CheckCircle, Users } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

const DashboardStats = () => {
  const { content } = useContent();

  const totalSubmissions = content.submissions.enrollments.length + 
                          content.submissions.registrations.length + 
                          content.submissions.contacts.length;

  const newSubmissions = content.submissions.enrollments.filter(e => e.status === 'New').length +
                        content.submissions.registrations.filter(r => r.status === 'New').length +
                        content.submissions.contacts.filter(c => c.status === 'New').length;

  const processedSubmissions = totalSubmissions - newSubmissions;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Total Submissions</CardTitle>
          <FileText className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">{totalSubmissions}</div>
          <p className="text-xs text-gray-500 mt-1">All form submissions received</p>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Pending Review</CardTitle>
          <Clock className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-600">{newSubmissions}</div>
          <p className="text-xs text-gray-500 mt-1">Awaiting your attention</p>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-l-green-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Processed</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{processedSubmissions}</div>
          <p className="text-xs text-gray-500 mt-1">Successfully handled</p>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Student Enrollments</CardTitle>
          <Users className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-600">{content.submissions.enrollments.length}</div>
          <p className="text-xs text-gray-500 mt-1">Course enrollment applications</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
