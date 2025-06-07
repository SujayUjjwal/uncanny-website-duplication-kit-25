
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Home, Settings, Users, Phone, BarChart3, Bookmark, Download, Upload, FileText, UserPlus, MessageSquare, TrendingUp, Clock, CheckCircle } from 'lucide-react';
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
    a.download = `website-backup-${new Date().toISOString().split('T')[0]}.json`;
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
          alert('Content imported successfully! All website content has been updated.');
        } else {
          alert('Failed to import content. Please check that the file is a valid backup file.');
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

  const processedSubmissions = totalSubmissions - newSubmissions;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Content Management System
                </h1>
                <p className="text-xs text-gray-500">Sumit NEET Coaching</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span>Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Backup</span>
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
                    <span>Restore</span>
                  </span>
                </Button>
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 hover:bg-red-50"
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
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
              Website Management Dashboard
            </CardTitle>
            <p className="text-gray-600">
              Manage your website content, view form submissions, and track performance metrics.
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 lg:grid-cols-11 mb-6">
                <TabsTrigger value="overview" className="flex items-center space-x-1 text-xs">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Overview</span>
                </TabsTrigger>
                <TabsTrigger value="navigation" className="flex items-center space-x-1 text-xs">
                  <Bookmark className="w-4 h-4" />
                  <span className="hidden sm:inline">Menu</span>
                </TabsTrigger>
                <TabsTrigger value="hero" className="flex items-center space-x-1 text-xs">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Hero</span>
                </TabsTrigger>
                <TabsTrigger value="services" className="flex items-center space-x-1 text-xs">
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Services</span>
                </TabsTrigger>
                <TabsTrigger value="strategy" className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Strategy</span>
                </TabsTrigger>
                <TabsTrigger value="statistics" className="flex items-center space-x-1 text-xs">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Stats</span>
                </TabsTrigger>
                <TabsTrigger value="team" className="flex items-center space-x-1 text-xs">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Team</span>
                </TabsTrigger>
                <TabsTrigger value="contact" className="flex items-center space-x-1 text-xs">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Contact</span>
                </TabsTrigger>
                <TabsTrigger value="enrollments" className="flex items-center space-x-1 text-xs">
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Students</span>
                </TabsTrigger>
                <TabsTrigger value="registrations" className="flex items-center space-x-1 text-xs">
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Seminars</span>
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex items-center space-x-1 text-xs">
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">Messages</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value="overview" className="space-y-6">
                  {/* Enhanced Statistics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Submissions</CardTitle>
                        <FileText className="h-4 w-4 text-blue-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">{totalSubmissions}</div>
                        <p className="text-xs text-gray-500 mt-1">All form submissions received</p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-orange-500">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Pending Review</CardTitle>
                        <Clock className="h-4 w-4 text-orange-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-orange-600">{newSubmissions}</div>
                        <p className="text-xs text-gray-500 mt-1">Awaiting your attention</p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-green-500">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Processed</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">{processedSubmissions}</div>
                        <p className="text-xs text-gray-500 mt-1">Successfully handled</p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-purple-500">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Student Enrollments</CardTitle>
                        <Users className="h-4 w-4 text-purple-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-purple-600">{content.submissions.enrollments.length}</div>
                        <p className="text-xs text-gray-500 mt-1">Course enrollment applications</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Actions Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                        Quick Actions
                      </CardTitle>
                      <p className="text-sm text-gray-600">Common tasks and shortcuts</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button 
                          onClick={() => setActiveTab('enrollments')} 
                          variant="outline" 
                          className="h-20 flex flex-col justify-center hover:bg-blue-50 hover:border-blue-300"
                        >
                          <UserPlus className="w-6 h-6 mb-2 text-blue-600" />
                          <span className="text-sm font-medium">Review Students</span>
                          {content.submissions.enrollments.filter(e => e.status === 'New').length > 0 && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full mt-1">
                              {content.submissions.enrollments.filter(e => e.status === 'New').length} new
                            </span>
                          )}
                        </Button>
                        <Button 
                          onClick={() => setActiveTab('registrations')} 
                          variant="outline" 
                          className="h-20 flex flex-col justify-center hover:bg-green-50 hover:border-green-300"
                        >
                          <FileText className="w-6 h-6 mb-2 text-green-600" />
                          <span className="text-sm font-medium">Seminar Signups</span>
                          {content.submissions.registrations.filter(r => r.status === 'New').length > 0 && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full mt-1">
                              {content.submissions.registrations.filter(r => r.status === 'New').length} new
                            </span>
                          )}
                        </Button>
                        <Button 
                          onClick={() => setActiveTab('messages')} 
                          variant="outline" 
                          className="h-20 flex flex-col justify-center hover:bg-purple-50 hover:border-purple-300"
                        >
                          <MessageSquare className="w-6 h-6 mb-2 text-purple-600" />
                          <span className="text-sm font-medium">Messages</span>
                          {content.submissions.contacts.filter(c => c.status === 'New').length > 0 && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full mt-1">
                              {content.submissions.contacts.filter(c => c.status === 'New').length} new
                            </span>
                          )}
                        </Button>
                        <Button 
                          onClick={() => setActiveTab('hero')} 
                          variant="outline" 
                          className="h-20 flex flex-col justify-center hover:bg-yellow-50 hover:border-yellow-300"
                        >
                          <Home className="w-6 h-6 mb-2 text-yellow-600" />
                          <span className="text-sm font-medium">Edit Content</span>
                          <span className="text-xs text-gray-500 mt-1">Update website</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tips Section */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800 flex items-center">
                        <Settings className="w-5 h-5 mr-2" />
                        Pro Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-blue-700">
                      <ul className="space-y-2">
                        <li>• Use the "Backup" button regularly to save your content settings</li>
                        <li>• Click on email addresses and phone numbers in submissions to contact students directly</li>
                        <li>• All changes to content are automatically saved and immediately visible on your website</li>
                        <li>• Export submission data to CSV for record keeping and analysis</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="navigation" className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">Navigation Menu Management</h3>
                    <p className="text-sm text-blue-600">Configure your website's main navigation menu items and links.</p>
                  </div>
                  <NavigationEditor />
                </TabsContent>
                
                <TabsContent value="hero" className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-green-800 mb-2">Hero Section Editor</h3>
                    <p className="text-sm text-green-600">Edit the main banner, title, and call-to-action on your homepage.</p>
                  </div>
                  <HeroEditor />
                </TabsContent>

                <TabsContent value="services" className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-purple-800 mb-2">Services & Courses Management</h3>
                    <p className="text-sm text-purple-600">Manage your course offerings, subjects, and service descriptions.</p>
                  </div>
                  <ServicesEditor />
                </TabsContent>

                <TabsContent value="strategy" className="space-y-6">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-orange-800 mb-2">Teaching Strategy Section</h3>
                    <p className="text-sm text-orange-600">Update your coaching methodology and strategic approach.</p>
                  </div>
                  <StrategyEditor />
                </TabsContent>

                <TabsContent value="statistics" className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-red-800 mb-2">Success Statistics</h3>
                    <p className="text-sm text-red-600">Display your coaching achievements and success metrics.</p>
                  </div>
                  <StatisticsEditor />
                </TabsContent>

                <TabsContent value="team" className="space-y-6">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-indigo-800 mb-2">Faculty Team Management</h3>
                    <p className="text-sm text-indigo-600">Add and manage your teaching faculty members and their profiles.</p>
                  </div>
                  <TeamEditor />
                </TabsContent>

                <TabsContent value="contact" className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-teal-800 mb-2">Contact Information</h3>
                    <p className="text-sm text-teal-600">Update your contact details, address, and business hours.</p>
                  </div>
                  <ContactEditor />
                </TabsContent>

                <TabsContent value="enrollments" className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">Student Enrollment Management</h3>
                    <p className="text-sm text-blue-600">Review and manage student course enrollment applications.</p>
                  </div>
                  <EnrollmentManager />
                </TabsContent>

                <TabsContent value="registrations" className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-green-800 mb-2">Seminar Registration Management</h3>
                    <p className="text-sm text-green-600">Track and manage seminar registrations and participant information.</p>
                  </div>
                  <RegistrationManager />
                </TabsContent>

                <TabsContent value="messages" className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-purple-800 mb-2">Contact Messages</h3>
                    <p className="text-sm text-purple-600">View and respond to general inquiries and contact form submissions.</p>
                  </div>
                  <ContactManager />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-center space-x-4">
            <span>© 2024 Content Management System</span>
            <span>•</span>
            <span>Version 1.0</span>
            <span>•</span>
            <span>Last Backup: {localStorage.getItem('last-backup') || 'Never'}</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;
