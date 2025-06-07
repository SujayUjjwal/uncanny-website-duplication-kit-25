
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Plus, Trash2 } from 'lucide-react';

const ServicesEditor = () => {
  const { content, updateContent } = useContent();
  const [servicesData, setServicesData] = useState(content.services);

  useEffect(() => {
    setServicesData(content.services);
  }, [content.services]);

  const handleSave = () => {
    updateContent('services', servicesData);
    alert('Services updated successfully!');
  };

  const colorOptions = [
    { value: 'bg-red-500', label: 'Red' },
    { value: 'bg-blue-500', label: 'Blue' },
    { value: 'bg-green-500', label: 'Green' },
    { value: 'bg-yellow-500', label: 'Yellow' },
    { value: 'bg-orange-500', label: 'Orange' },
    { value: 'bg-purple-500', label: 'Purple' },
    { value: 'bg-teal-500', label: 'Teal' },
    { value: 'bg-pink-500', label: 'Pink' }
  ];

  const widthOptions = [
    { value: 'w-1/2', label: '50%' },
    { value: 'w-3/5', label: '60%' },
    { value: 'w-2/3', label: '66%' },
    { value: 'w-3/4', label: '75%' },
    { value: 'w-4/5', label: '80%' },
    { value: 'w-5/6', label: '83%' },
    { value: 'w-11/12', label: '92%' },
    { value: 'w-full', label: '100%' }
  ];

  const iconOptions = [
    { value: 'Book', label: 'Book' },
    { value: 'TestTube', label: 'Test Tube' },
    { value: 'Stethoscope', label: 'Stethoscope' },
    { value: 'Calculator', label: 'Calculator' },
    { value: 'Microscope', label: 'Microscope' },
    { value: 'Atom', label: 'Atom' }
  ];

  const handleServiceChange = (index: number, field: string, value: string) => {
    setServicesData(prev => ({
      ...prev,
      services: prev.services.map((service, i) => 
        i === index ? { ...service, [field]: value } : service
      )
    }));
  };

  const handleSubjectChange = (index: number, field: string, value: string) => {
    setServicesData(prev => ({
      ...prev,
      subjects: prev.subjects.map((subject, i) => 
        i === index ? { ...subject, [field]: value } : subject
      )
    }));
  };

  const addService = () => {
    const newService = {
      id: Date.now().toString(),
      name: "New Service",
      color: "bg-blue-500",
      width: "w-full"
    };
    setServicesData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const addSubject = () => {
    const newSubject = {
      id: Date.now().toString(),
      title: "New Subject",
      description: "Subject description",
      icon: "Book"
    };
    setServicesData(prev => ({
      ...prev,
      subjects: [...prev.subjects, newSubject]
    }));
  };

  const removeService = (index: number) => {
    setServicesData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const removeSubject = (index: number) => {
    setServicesData(prev => ({
      ...prev,
      subjects: prev.subjects.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Services Section</CardTitle>
          <p className="text-sm text-gray-600">
            Manage your services and subject offerings
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="servicesTitle">Section Title</Label>
            <Input
              id="servicesTitle"
              value={servicesData.title}
              onChange={(e) => setServicesData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="What Do We Offer"
            />
          </div>

          {/* Services List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Service Items</Label>
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
                      <Label className="text-xs">Progress Bar Color</Label>
                      <Select
                        value={service.color}
                        onValueChange={(value) => handleServiceChange(index, 'color', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {colorOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Progress Width</Label>
                      <Select
                        value={service.width}
                        onValueChange={(value) => handleServiceChange(index, 'width', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {widthOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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

          {/* Subject Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Subject Cards</Label>
              <Button onClick={addSubject} size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Subject
              </Button>
            </div>
            
            <div className="space-y-3">
              {servicesData.subjects.map((subject, index) => (
                <div key={subject.id} className="p-4 border rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Subject Title</Label>
                      <Input
                        value={subject.title}
                        onChange={(e) => handleSubjectChange(index, 'title', e.target.value)}
                        placeholder="Physics"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Icon</Label>
                      <Select
                        value={subject.icon}
                        onValueChange={(value) => handleSubjectChange(index, 'icon', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {iconOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={() => removeSubject(index)}
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 w-full"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
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
            Save Services Content
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesEditor;
