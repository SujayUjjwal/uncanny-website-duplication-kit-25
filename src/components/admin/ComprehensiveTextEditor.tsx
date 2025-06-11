
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Search, Download, Upload, RotateCcw } from 'lucide-react';
import NavigationTextEditor from './text-editors/NavigationTextEditor';
import HeroTextEditor from './text-editors/HeroTextEditor';
import ServicesTextEditor from './text-editors/ServicesTextEditor';
import StrategyTextEditor from './text-editors/StrategyTextEditor';
import StatisticsTextEditor from './text-editors/StatisticsTextEditor';
import TeamTextEditor from './text-editors/TeamTextEditor';
import ContactTextEditor from './text-editors/ContactTextEditor';
import FooterTextEditor from './text-editors/FooterTextEditor';

const ComprehensiveTextEditor = () => {
  const { content, updateContent, exportContent, importContent } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleGlobalSave = () => {
    // Trigger save across all sections
    setHasUnsavedChanges(false);
    alert('All content saved successfully!');
  };

  const handleExport = () => {
    const dataStr = exportContent();
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `website-content-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (importContent(content)) {
          alert('Content imported successfully!');
        } else {
          alert('Failed to import content. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Comprehensive Website Text Editor</span>
            <div className="flex items-center space-x-2">
              {hasUnsavedChanges && (
                <span className="text-sm text-orange-600 font-medium">Unsaved changes</span>
              )}
              <Button onClick={handleGlobalSave} size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save All
              </Button>
            </div>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Edit every text element on your website in one organized interface
          </p>
        </CardHeader>
        <CardContent>
          {/* Global Actions */}
          <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <Label htmlFor="search" className="sr-only">Search content</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="search"
                  placeholder="Search across all content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button onClick={handleExport} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <div>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                style={{ display: 'none' }}
                id="import-file"
              />
              <Button
                onClick={() => document.getElementById('import-file')?.click()}
                variant="outline"
                size="sm"
              >
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </div>
          </div>

          {/* Tabbed Editor Interface */}
          <Tabs defaultValue="sitewide" className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="sitewide">Site-wide</TabsTrigger>
              <TabsTrigger value="homepage">Homepage</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="sitewide" className="space-y-6">
              <NavigationTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
              <FooterTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
            </TabsContent>

            <TabsContent value="homepage" className="space-y-6">
              <HeroTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
              <ServicesTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
              <StrategyTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
              <StatisticsTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
            </TabsContent>

            <TabsContent value="about" className="space-y-6">
              <TeamTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
              <ContactTextEditor onContentChange={() => setHasUnsavedChanges(true)} />
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Management Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start h-auto p-4">
                      <div className="text-left">
                        <div className="font-medium">Search & Replace</div>
                        <div className="text-sm text-gray-600">Find and replace text across all sections</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4">
                      <div className="text-left">
                        <div className="font-medium">Content Templates</div>
                        <div className="text-sm text-gray-600">Use pre-made text templates</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4">
                      <div className="text-left">
                        <div className="font-medium">Content History</div>
                        <div className="text-sm text-gray-600">View and restore previous versions</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4">
                      <div className="text-left">
                        <div className="font-medium">Bulk Operations</div>
                        <div className="text-sm text-gray-600">Edit multiple items at once</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveTextEditor;
