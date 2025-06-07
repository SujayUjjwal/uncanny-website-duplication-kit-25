
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Home, Settings, Users, Phone, BarChart3, Bookmark, Download, Upload, FileText, UserPlus, MessageSquare } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import HeroEditor from '@/components/admin/HeroEditor';
import ServicesEditor from '@/components/admin/ServicesEditor';
import StrategyEditor from '@/components/admin/StrategyEditor';
import StatisticsEditor from '@/components/admin/StatisticsEditor';
import TeamEditor from '@/components/admin/TeamEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import NavigationEditor from '@/components/admin/NavigationEditor';
import EnrollmentManager from '@/components/admin/EnrollmentManager';
import RegistrationManager from '@/components/admin/RegistrationManager';
import ContactManager from '@/components/admin/ContactManager';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const { content, exportContent, importContent } = useContent();
  const [activeTab, setActiveTab] = useState('overview');

  const handleExport = () => {
    const contentData = exportContent();
    const blob = new Blob([contentData], { type: 'application/json' });
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
        const contentData = e.target?.result as string;
        if (importContent(contentData)) {
          alert('Content imported successfully!');
        } else {
          alert('Failed to import content. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const totalSubmissions = content.submissions.enrollments.length + 
                          content.submissions.registrations.length + 
                          content.submissions.contacts.length;

  const newSubmissions = content.submissions.enrollments.filter(e => e.status === 'New').length +
                        content.submissions.registrations.filter(r => r.status === 'New').length +
                        content.submissions.contacts.filter(c => c.status === 'New').length;

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
              Manage all your website content and form submissions from this dashboard. Changes are saved automatically.
            </p>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-10">
                <TabsTrigger value="overview" className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Overview</span>
                </TabsTrigger>
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
                <TabsTrigger value="enrollments" className="flex items-center space-x-2">
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Enrollments</span>
                </TabsTrigger>
                <TabsTrigger value="registrations" className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Registrations</span>
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">Messages</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{totalSubmissions}</div>
                        <p className="text-xs text-muted-foreground">All form submissions</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Submissions</CardTitle>
                        <UserPlus className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-blue-600">{newSubmissions}</div>
                        <p className="text-xs text-muted-foreground">Require attention</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Enrollments</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{content.submissions.enrollments.length}</div>
                        <p className="text-xs text-muted-foreground">Course enrollments</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{content.submissions.contacts.length}</div>
                        <p className="text-xs text-muted-foreground">General inquiries</p>
                      </CardContent>
                    </Card>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button onClick={() => setActiveTab('enrollments')} variant="outline" className="h-20 flex flex-col">
                          <UserPlus className="w-6 h-6 mb-2" />
                          Manage Enrollments
                        </Button>
                        <Button onClick={() => setActiveTab('registrations')} variant="outline" className="h-20 flex flex-col">
                          <FileText className="w-6 h-6 mb-2" />
                          Seminar Registrations
                        </Button>
                        <Button onClick={() => setActiveTab('messages')} variant="outline" className="h-20 flex flex-col">
                          <MessageSquare className="w-6 h-6 mb-2" />
                          Contact Messages
                        </Button>
                        <Button onClick={() => setActiveTab('hero')} variant="outline" className="h-20 flex flex-col">
                          <Home className="w-6 h-6 mb-2" />
                          Edit Content
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
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

                <TabsContent value="enrollments" className="space-y-6">
                  <EnrollmentManager />
                </TabsContent>

                <TabsContent value="registrations" className="space-y-6">
                  <RegistrationManager />
                </TabsContent>

                <TabsContent value="messages" className="space-y-6">
                  <ContactManager />
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
