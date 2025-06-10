import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, MessageSquare, GraduationCap, BarChart3, Edit3 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import SeminarRegistrationManager from '@/components/admin/SeminarRegistrationManager';
import ContactMessageManager from '@/components/admin/ContactMessageManager';
import CourseEnrollmentManager from '@/components/admin/CourseEnrollmentManager';
import TextEditor from '@/components/admin/TextEditor';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

type ActiveSection = 'dashboard' | 'seminar' | 'contact' | 'enrollment' | 'text-editor';

interface Stats {
  seminarRegistrations: number;
  contactMessages: number;
  courseEnrollments: number;
  totalSubmissions: number;
}

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');
  const [stats, setStats] = useState<Stats>({
    seminarRegistrations: 0,
    contactMessages: 0,
    courseEnrollments: 0,
    totalSubmissions: 0
  });
  const [loading, setLoading] = useState(true);
  const { logout, user } = useAuth();
  const { toast } = useToast();

  const fetchStats = async () => {
    try {
      const [seminarResult, contactResult, enrollmentResult] = await Promise.all([
        supabase.from('seminar_registrations').select('*', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
        supabase.from('course_enrollments').select('*', { count: 'exact', head: true })
      ]);

      const seminarCount = seminarResult.count || 0;
      const contactCount = contactResult.count || 0;
      const enrollmentCount = enrollmentResult.count || 0;

      setStats({
        seminarRegistrations: seminarCount,
        contactMessages: contactCount,
        courseEnrollments: enrollmentCount,
        totalSubmissions: seminarCount + contactCount + enrollmentCount
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      toast({
        title: "Success",
        description: "Logged out successfully!",
      });
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to logout",
        variant: "destructive",
      });
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CMS Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">Welcome back, {user?.email}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <BarChart3 className="w-4 h-4" />
            <span>Real-time Data</span>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('seminar')}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Seminar Registrations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '...' : stats.seminarRegistrations}</div>
            <p className="text-xs text-muted-foreground">Click to manage</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('contact')}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '...' : stats.contactMessages}</div>
            <p className="text-xs text-muted-foreground">Click to manage</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('enrollment')}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Enrollments</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '...' : stats.courseEnrollments}</div>
            <p className="text-xs text-muted-foreground">Click to manage</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '...' : stats.totalSubmissions}</div>
            <p className="text-xs text-muted-foreground">All forms combined</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button onClick={() => setActiveSection('seminar')} variant="outline" className="justify-start">
              <Users className="w-4 h-4 mr-2" />
              Manage Seminar Registrations
            </Button>
            <Button onClick={() => setActiveSection('contact')} variant="outline" className="justify-start">
              <MessageSquare className="w-4 h-4 mr-2" />
              Manage Contact Messages
            </Button>
            <Button onClick={() => setActiveSection('enrollment')} variant="outline" className="justify-start">
              <GraduationCap className="w-4 h-4 mr-2" />
              Manage Course Enrollments
            </Button>
            <Button onClick={() => setActiveSection('text-editor')} variant="outline" className="justify-start">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Text Content
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Overview */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Database Connection</span>
              <span className="text-green-600 font-medium">✓ Connected</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Real-time Updates</span>
              <span className="text-green-600 font-medium">✓ Active</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Data Backup</span>
              <span className="text-green-600 font-medium">✓ Automated</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'seminar':
        return <SeminarRegistrationManager />;
      case 'contact':
        return <ContactMessageManager />;
      case 'enrollment':
        return <CourseEnrollmentManager />;
      case 'text-editor':
        return <TextEditor />;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection !== 'dashboard' && (
          <div className="mb-6">
            <Button 
              onClick={() => setActiveSection('dashboard')} 
              variant="ghost" 
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Button>
          </div>
        )}
        
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
