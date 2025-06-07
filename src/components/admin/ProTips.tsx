
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';

const ProTips = () => {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-blue-800 flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Pro Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-blue-700">
        <ul className="space-y-2">
          <li>• Use the "Backup" button regularly to save your content settings</li>
          <li>• Click on email addresses and phone numbers in submissions to contact students directly</li>
          <li>• All changes to content are automatically saved and immediately visible on your website</li>
          <li>• Export submission data to CSV for record keeping and analysis</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProTips;
