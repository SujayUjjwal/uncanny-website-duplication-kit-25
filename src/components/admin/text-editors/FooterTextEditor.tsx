
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, FileText } from 'lucide-react';

interface FooterTextEditorProps {
  onContentChange: () => void;
}

const FooterTextEditor = ({ onContentChange }: FooterTextEditorProps) => {
  const { content, updateContent } = useContent();
  const [footerData, setFooterData] = useState(content.footer);

  useEffect(() => {
    setFooterData(content.footer);
  }, [content.footer]);

  const handleSave = () => {
    updateContent('footer', footerData);
    alert('Footer content saved successfully!');
  };

  const handleChange = (field: string, value: string) => {
    setFooterData(prev => ({ ...prev, [field]: value }));
    onContentChange();
  };

  const getCurrentYear = () => new Date().getFullYear();

  const footerTemplates = [
    `© ${getCurrentYear()} Sumit NEET Coaching. All rights reserved.`,
    `© ${getCurrentYear()} Sumit NEET Coaching. Excellence in NEET preparation.`,
    `© ${getCurrentYear()} Sumit NEET Coaching. Your success is our mission.`,
    `© ${getCurrentYear()} Sumit NEET Coaching. Preparing students for medical excellence.`
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-5 h-5" />
          <span>Footer Content</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your website footer text and copyright information
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
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

        <div className="space-y-4">
          <Label>Quick Footer Templates</Label>
          <div className="grid grid-cols-1 gap-2">
            {footerTemplates.map((template, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto p-3"
                onClick={() => handleChange('text', template)}
              >
                <span className="text-sm">{template}</span>
              </Button>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Footer Content
        </Button>
      </CardContent>
    </Card>
  );
};

export default FooterTextEditor;
