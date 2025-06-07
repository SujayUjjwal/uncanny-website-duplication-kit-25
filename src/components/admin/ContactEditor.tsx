
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';

const ContactEditor = () => {
  const { content, updateContent } = useContent();
  const [contactData, setContactData] = useState(content.contact);

  useEffect(() => {
    setContactData(content.contact);
  }, [content.contact]);

  const handleSave = () => {
    updateContent('contact', contactData);
    alert('Contact information updated successfully!');
  };

  const handleChange = (field: string, value: string) => {
    setContactData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <p className="text-sm text-gray-600">
            Manage your contact details and information
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
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
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={contactData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+91 12345 67890"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={contactData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="contact@sumitneet.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={contactData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="123 Education Street, Learning City, State 123456"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Operating Hours</Label>
            <Input
              id="hours"
              value={contactData.hours}
              onChange={(e) => handleChange('hours', e.target.value)}
              placeholder="Mon-Sat: 9AM-7PM"
            />
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Contact Information
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactEditor;
