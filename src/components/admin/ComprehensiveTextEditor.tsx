
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useContent } from '@/contexts/ContentContext';
import { 
  Edit3, 
  Download, 
  Upload, 
  Search, 
  Navigation as NavigationIcon,
  Star,
  Settings,
  Target,
  BarChart3,
  Users,
  Phone,
  FileText,
  Loader2
} from 'lucide-react';

// Import enhanced editors
import NavigationTextEditor from './text-editors/NavigationTextEditor';
import EnhancedHeroTextEditor from './text-editors/EnhancedHeroTextEditor';
import ServicesTextEditor from './text-editors/ServicesTextEditor';
import StrategyTextEditor from './text-editors/StrategyTextEditor';
import StatisticsTextEditor from './text-editors/StatisticsTextEditor';
import TeamTextEditor from './text-editors/TeamTextEditor';
import ContactTextEditor from './text-editors/ContactTextEditor';
import FooterTextEditor from './text-editors/FooterTextEditor';

const ComprehensiveTextEditor = () => {
  const { exportContent, importContent, isLoading } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  const handleContentChange = () => {
    setHasChanges(true);
  };

  const handleExport = () => {
    const contentData = exportContent();
    const blob = new Blob([contentData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sumit-neet-content-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target?.result as string;
        const success = await importContent(content);
        if (success) {
          setHasChanges(false);
        }
      };
      reader.readAsText(file);
    }
  };

  const sections = [
    { id: 'navigation', name: 'Navigation', icon: NavigationIcon, component: NavigationTextEditor },
    { id: 'hero', name: 'Hero Section', icon: Star, component: EnhancedHeroTextEditor },
    { id: 'services', name: 'Services', icon: Settings, component: ServicesTextEditor },
    { id: 'strategy', name: 'Strategy', icon: Target, component: StrategyTextEditor },
    { id: 'statistics', name: 'Statistics', icon: BarChart3, component: StatisticsTextEditor },
    { id: 'team', name: 'Team', icon: Users, component: TeamTextEditor },
    { id: 'contact', name: 'Contact', icon: Phone, component: ContactTextEditor },
    { id: 'footer', name: 'Footer', icon: FileText, component: FooterTextEditor },
  ];

  const filteredSections = sections.filter(section =>
    section.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="ml-2">Loading content...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Edit3 className="w-6 h-6" />
              <span>Website Content & Typography Editor</span>
              {hasChanges && (
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  Unsaved Changes
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Button onClick={handleExport} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Import
                </Button>
              </div>
            </div>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Edit all website content with advanced typography controls. Changes are saved globally and sync across all browsers in real-time.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search sections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <div className="flex-1" />
            <div className="text-sm text-gray-500">
              Real-time sync enabled • {filteredSections.length} sections
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="navigation" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 gap-1">
          {filteredSections.map((section) => {
            const Icon = section.icon;
            return (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="flex flex-col items-center space-y-1 h-auto py-2"
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{section.name}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {filteredSections.map((section) => {
          const Component = section.component;
          return (
            <TabsContent key={section.id} value={section.id} className="mt-6">
              <Component onContentChange={handleContentChange} />
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Global Status */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700">Real-time Sync Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-700">Global Storage Enabled</span>
              </div>
            </div>
            <span className="text-gray-600">
              All changes automatically saved to global database
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveTextEditor;
