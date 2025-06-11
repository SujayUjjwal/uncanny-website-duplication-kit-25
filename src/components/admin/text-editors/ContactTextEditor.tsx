
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Phone } from 'lucide-react';

interface ContactTextEditorProps {
  onContentChange: () => void;
}

const ContactTextEditor = ({ onContentChange }: ContactTextEditorProps) => {
  const { content, updateContent } = useContent();
  const [contactData, setContactData] = useState(content.contact);

  useEffect(() => {
    setContactData(content.contact);
  }, [content.contact]);

  const handleSave = () => {
    updateContent('contact', contactData);
    alert('Contact section saved successfully!');
  };

  const handleChange = (field: string, value: string) => {
    setContactData(prev => ({ ...prev, [field]: value }));
    onContentChange();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Phone className="w-5 h-5" />
          <span>Contact Section Content</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your contact information and section titles
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactTitle">Section Title</Label>
            <Input
              id="contactTitle"
              value={contactData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Contact Us"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactSubtitle">Subtitle</Label>
            <Input
              id="contactSubtitle"
              value={contactData.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              placeholder="Get in touch with us"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactPhone">Phone Number</Label>
            <Input
              id="contactPhone"
              value={contactData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+91 12345 67890"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Email Address</Label>
            <Input
              id="contactEmail"
              value={contactData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contact@sumitneet.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactAddress">Physical Address</Label>
          <Input
            id="contactAddress"
            value={contactData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="123 Education Street, Learning City, State 123456"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactHours">Business Hours</Label>
          <Input
            id="contactHours"
            value={contactData.hours}
            onChange={(e) => handleChange('hours', e.target.value)}
            placeholder="Mon-Sat: 9AM-7PM"
          />
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Contact Section
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactTextEditor;
