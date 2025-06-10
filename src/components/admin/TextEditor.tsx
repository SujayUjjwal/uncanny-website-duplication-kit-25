
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';

const TextEditor = () => {
  const { content, updateContent } = useContent();
  const [footerData, setFooterData] = useState(content.footer);

  useEffect(() => {
    setFooterData(content.footer);
  }, [content.footer]);

  const handleSave = () => {
    updateContent('footer', footerData);
    alert('Footer content updated successfully!');
  };

  const handleChange = (field: string, value: string) => {
    setFooterData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Edit3 className="w-5 h-5" />
            <span>Text Content Editor</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Edit general text content and footer information
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="footerText">Footer Text</Label>
              <Textarea
                id="footerText"
                value={footerData.text}
                onChange={(e) => handleChange('text', e.target.value)}
                placeholder="© 2024 Sumit NEET Coaching. All rights reserved."
                rows={3}
              />
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Text Content
          </Button>
        </CardContent>
      </Card>

      {/* Quick Text Editing Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Text Templates</CardTitle>
          <p className="text-sm text-gray-600">
            Common text snippets you can copy and use
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <Label className="text-xs font-medium text-gray-700">Copyright Template</Label>
              <p className="text-sm text-gray-600 mt-1">© {new Date().getFullYear()} Sumit NEET Coaching. All rights reserved.</p>
            </div>
            
            <div className="p-3 border rounded-lg">
              <Label className="text-xs font-medium text-gray-700">Contact Footer</Label>
              <p className="text-sm text-gray-600 mt-1">Contact us for excellence in NEET preparation</p>
            </div>
            
            <div className="p-3 border rounded-lg">
              <Label className="text-xs font-medium text-gray-700">Privacy Notice</Label>
              <p className="text-sm text-gray-600 mt-1">Your privacy is important to us. View our privacy policy.</p>
            </div>
            
            <div className="p-3 border rounded-lg">
              <Label className="text-xs font-medium text-gray-700">Terms Template</Label>
              <p className="text-sm text-gray-600 mt-1">By using our services, you agree to our terms and conditions.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextEditor;
