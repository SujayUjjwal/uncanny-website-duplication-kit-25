
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Home, Settings, Users, Phone, BarChart3, Bookmark, Download, Upload } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import HeroEditor from '@/components/admin/HeroEditor';
import ServicesEditor from '@/components/admin/ServicesEditor';
import StrategyEditor from '@/components/admin/StrategyEditor';
import StatisticsEditor from '@/components/admin/StatisticsEditor';
import TeamEditor from '@/components/admin/TeamEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import NavigationEditor from '@/components/admin/NavigationEditor';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const { exportContent, importContent } = useContent();
  const [activeTab, setActiveTab] = useState('hero');

  const handleExport = () => {
    const content = exportContent();
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website-content-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Settings className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">
                Content Management System
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </Button>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                  asChild
                >
                  <span>
                    <Upload className="w-4 h-4" />
                    <span>Import</span>
                  </span>
                </Button>
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Website Content Management
            </CardTitle>
            <p className="text-gray-600">
              Manage all your website content from this dashboard. Changes are saved automatically.
            </p>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="navigation" className="flex items-center space-x-2">
                  <Bookmark className="w-4 h-4" />
                  <span className="hidden sm:inline">Navigation</span>
                </TabsTrigger>
                <TabsTrigger value="hero" className="flex items-center space-x-2">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Hero</span>
                </TabsTrigger>
                <TabsTrigger value="services" className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Services</span>
                </TabsTrigger>
                <TabsTrigger value="strategy" className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Strategy</span>
                </TabsTrigger>
                <TabsTrigger value="statistics" className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Stats</span>
                </TabsTrigger>
                <TabsTrigger value="team" className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Team</span>
                </TabsTrigger>
                <TabsTrigger value="contact" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Contact</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value="navigation" className="space-y-6">
                  <NavigationEditor />
                </TabsContent>
                
                <TabsContent value="hero" className="space-y-6">
                  <HeroEditor />
                </TabsContent>

                <TabsContent value="services" className="space-y-6">
                  <ServicesEditor />
                </TabsContent>

                <TabsContent value="strategy" className="space-y-6">
                  <StrategyEditor />
                </TabsContent>

                <TabsContent value="statistics" className="space-y-6">
                  <StatisticsEditor />
                </TabsContent>

                <TabsContent value="team" className="space-y-6">
                  <TeamEditor />
                </TabsContent>

                <TabsContent value="contact" className="space-y-6">
                  <ContactEditor />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
