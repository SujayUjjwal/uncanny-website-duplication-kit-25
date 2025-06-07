
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Plus, Trash2 } from 'lucide-react';

const NavigationEditor = () => {
  const { content, updateContent } = useContent();
  const [navData, setNavData] = useState(content.navigation);

  useEffect(() => {
    setNavData(content.navigation);
  }, [content.navigation]);

  const handleSave = () => {
    updateContent('navigation', navData);
    alert('Navigation updated successfully!');
  };

  const handleBrandNameChange = (value: string) => {
    setNavData(prev => ({
      ...prev,
      brandName: value
    }));
  };

  const handleMenuItemChange = (index: number, field: string, value: string) => {
    setNavData(prev => ({
      ...prev,
      menuItems: prev.menuItems.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addMenuItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: "New Item",
      href: "#",
      section: "Section"
    };
    setNavData(prev => ({
      ...prev,
      menuItems: [...prev.menuItems, newItem]
    }));
  };

  const removeMenuItem = (index: number) => {
    setNavData(prev => ({
      ...prev,
      menuItems: prev.menuItems.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Navigation Settings</CardTitle>
          <p className="text-sm text-gray-600">
            Manage your website navigation and branding
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="brandName">Brand Name</Label>
            <Input
              id="brandName"
              value={navData.brandName}
              onChange={(e) => handleBrandNameChange(e.target.value)}
              placeholder="SUMIT NEET COACHING"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Menu Items</Label>
              <Button onClick={addMenuItem} size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
            
            <div className="space-y-3">
              {navData.menuItems.map((item, index) => (
                <div key={item.id} className="flex gap-3 items-end p-3 border rounded-lg">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Display Name</Label>
                      <Input
                        value={item.name}
                        onChange={(e) => handleMenuItemChange(index, 'name', e.target.value)}
                        placeholder="HOME"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Link (href)</Label>
                      <Input
                        value={item.href}
                        onChange={(e) => handleMenuItemChange(index, 'href', e.target.value)}
                        placeholder="#services"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Section Name</Label>
                      <Input
                        value={item.section}
                        onChange={(e) => handleMenuItemChange(index, 'section', e.target.value)}
                        placeholder="Services"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => removeMenuItem(index)}
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

          <Button onClick={handleSave} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Navigation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationEditor;
