
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trash2, Phone, Mail, Eye, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CourseEnrollment {
  id: string;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  education: string;
  course_selection: string;
  parent_name: string;
  parent_phone: string;
  address: string;
  message: string;
  status: string;
  created_at: string;
}

const CourseEnrollmentManager = () => {
  const { toast } = useToast();
  const [enrollments, setEnrollments] = useState<CourseEnrollment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchEnrollments = async () => {
    try {
      const { data, error } = await supabase
        .from('course_enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching enrollments:', error);
        toast({
          title: "Error",
          description: "Failed to fetch enrollments",
          variant: "destructive",
        });
      } else {
        setEnrollments(data || []);
      }
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const filteredEnrollments = enrollments.filter(enrollment => {
    const matchesSearch = enrollment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enrollment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enrollment.course_selection.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || enrollment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('course_enrollments')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
        toast({
          title: "Error",
          description: "Failed to update status",
          variant: "destructive",
        });
      } else {
        setEnrollments(prev => 
          prev.map(enrollment => enrollment.id === id ? { ...enrollment, status: newStatus } : enrollment)
        );
        toast({
          title: "Success",
          description: "Status updated successfully",
        });
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enrollment?')) return;

    try {
      const { error } = await supabase
        .from('course_enrollments')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting enrollment:', error);
        toast({
          title: "Error",
          description: "Failed to delete enrollment",
          variant: "destructive",
        });
      } else {
        setEnrollments(prev => prev.filter(enrollment => enrollment.id !== id));
        toast({
          title: "Success",
          description: "Enrollment deleted successfully",
        });
      }
    } catch (error) {
      console.error('Error deleting enrollment:', error);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Date of Birth', 'Education', 'Course', 'Parent Name', 'Parent Phone', 'Address', 'Message', 'Status', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...enrollments.map(enrollment => [
        enrollment.name,
        enrollment.email,
        enrollment.phone,
        enrollment.date_of_birth,
        enrollment.education,
        enrollment.course_selection,
        enrollment.parent_name,
        enrollment.parent_phone,
        enrollment.address.replace(/,/g, ';'),
        enrollment.message?.replace(/,/g, ';') || '',
        enrollment.status,
        new Date(enrollment.created_at).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'course-enrollments.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-500';
      case 'Contacted': return 'bg-yellow-500';
      case 'Processed': return 'bg-green-500';
      case 'Enrolled': return 'bg-purple-500';
      case 'Rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-32">Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Course Enrollments ({enrollments.length})</CardTitle>
          <Button onClick={exportToCSV} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search by name, email, or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Contacted">Contacted</SelectItem>
              <SelectItem value="Processed">Processed</SelectItem>
              <SelectItem value="Enrolled">Enrolled</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Parent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEnrollments.map((enrollment) => (
                <TableRow key={enrollment.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{enrollment.name}</div>
                      <div className="text-sm text-gray-500">{enrollment.education}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3 h-3" />
                        <a href={`mailto:${enrollment.email}`} className="text-blue-600 hover:underline text-sm">
                          {enrollment.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3 h-3" />
                        <a href={`tel:${enrollment.phone}`} className="text-blue-600 hover:underline text-sm">
                          {enrollment.phone}
                        </a>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{enrollment.course_selection}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-sm">{enrollment.parent_name}</div>
                      <a href={`tel:${enrollment.parent_phone}`} className="text-blue-600 hover:underline text-xs">
                        {enrollment.parent_phone}
                      </a>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select value={enrollment.status} onValueChange={(value) => handleStatusChange(enrollment.id, value)}>
                      <SelectTrigger className="w-[120px]">
                        <Badge className={getStatusBadgeColor(enrollment.status)}>
                          {enrollment.status}
                        </Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Contacted">Contacted</SelectItem>
                        <SelectItem value="Processed">Processed</SelectItem>
                        <SelectItem value="Enrolled">Enrolled</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{new Date(enrollment.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Enrollment Details - {enrollment.name}</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-4 p-4">
                            <div><strong>Name:</strong> {enrollment.name}</div>
                            <div><strong>Email:</strong> {enrollment.email}</div>
                            <div><strong>Phone:</strong> {enrollment.phone}</div>
                            <div><strong>Date of Birth:</strong> {enrollment.date_of_birth}</div>
                            <div><strong>Education:</strong> {enrollment.education}</div>
                            <div><strong>Course:</strong> {enrollment.course_selection}</div>
                            <div><strong>Parent Name:</strong> {enrollment.parent_name}</div>
                            <div><strong>Parent Phone:</strong> {enrollment.parent_phone}</div>
                            <div className="col-span-2"><strong>Address:</strong> {enrollment.address}</div>
                            <div className="col-span-2"><strong>Message:</strong> {enrollment.message}</div>
                            <div><strong>Status:</strong> {enrollment.status}</div>
                            <div><strong>Submitted:</strong> {new Date(enrollment.created_at).toLocaleString()}</div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(enrollment.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredEnrollments.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No course enrollments found.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseEnrollmentManager;
