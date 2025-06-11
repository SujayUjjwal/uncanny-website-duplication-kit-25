
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Settings, Plus, Trash2 } from 'lucide-react';

interface ServicesTextEditorProps {
  onContentChange: () => void;
}

const ServicesTextEditor = ({ onContentChange }: ServicesTextEditorProps) => {
  const { content, updateContent } = useContent();
  const [servicesData, setServicesData] = useState(content.services);

  useEffect(() => {
    setServicesData(content.services);
  }, [content.services]);

  const handleSave = () => {
    updateContent('services', servicesData);
    alert('Services section saved successfully!');
  };

  const handleTitleChange = (value: string) => {
    setServicesData(prev => ({ ...prev, title: value }));
    onContentChange();
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    setServicesData(prev => ({
      ...prev,
      services: prev.services.map((service, i) => 
        i === index ? { ...service, [field]: value } : service
      )
    }));
    onContentChange();
  };

  const handleSubjectChange = (index: number, field: string, value: string) => {
    setServicesData(prev => ({
      ...prev,
      subjects: prev.subjects.map((subject, i) => 
        i === index ? { ...subject, [field]: value } : subject
      )
    }));
    onContentChange();
  };

  const addService = () => {
    const newService = {
      id: Date.now().toString(),
      name: "New Service",
      color: "bg-blue-500",
      width: "w-3/4"
    };
    setServicesData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
    onContentChange();
  };

  const removeService = (index: number) => {
    setServicesData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
    onContentChange();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="w-5 h-5" />
          <span>Services Section Content</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your services section title, services list, and subject descriptions
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="servicesTitle">Section Title</Label>
          <Input
            id="servicesTitle"
            value={servicesData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="What Do We Offer"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Services List</Label>
            <Button onClick={addService} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Service
            </Button>
          </div>
          
          <div className="space-y-3">
            {servicesData.services.map((service, index) => (
              <div key={service.id} className="flex gap-3 items-end p-3 border rounded-lg">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Service Name</Label>
                    <Input
                      value={service.name}
                      onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                      placeholder="Complete Level of Learning"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Color Class</Label>
                    <Input
                      value={service.color}
                      onChange={(e) => handleServiceChange(index, 'color', e.target.value)}
                      placeholder="bg-red-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Width Class</Label>
                    <Input
                      value={service.width}
                      onChange={(e) => handleServiceChange(index, 'width', e.target.value)}
                      placeholder="w-full"
                    />
                  </div>
                </div>
                <Button
                  onClick={() => removeService(index)}
                  size="sm"
                  variant="outline"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Label>Subject Cards</Label>
          <div className="space-y-4">
            {servicesData.subjects.map((subject, index) => (
              <div key={subject.id} className="p-4 border rounded-lg space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Subject Title</Label>
                    <Input
                      value={subject.title}
                      onChange={(e) => handleSubjectChange(index, 'title', e.target.value)}
                      placeholder="Physics"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Icon Name</Label>
                    <Input
                      value={subject.icon}
                      onChange={(e) => handleSubjectChange(index, 'icon', e.target.value)}
                      placeholder="Book"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Description</Label>
                  <Textarea
                    value={subject.description}
                    onChange={(e) => handleSubjectChange(index, 'description', e.target.value)}
                    placeholder="Subject description..."
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Services Section
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServicesTextEditor;
