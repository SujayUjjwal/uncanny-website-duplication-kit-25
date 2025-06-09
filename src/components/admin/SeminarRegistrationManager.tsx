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

type SubmissionStatus = 'New' | 'Contacted' | 'Processed' | 'Resolved' | 'Rejected' | 'Enrolled' | 'Registered';

interface SeminarRegistration {
  id: string;
  name: string;
  email: string;
  phone: string;
  course_interest: string;
  message: string;
  status: SubmissionStatus;
  created_at: string;
}

const SeminarRegistrationManager = () => {
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<SeminarRegistration[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('seminar_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching registrations:', error);
        toast({
          title: "Error",
          description: "Failed to fetch registrations",
          variant: "destructive",
        });
      } else {
        setRegistrations(data || []);
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const filteredRegistrations = registrations.filter(registration => {
    const matchesSearch = registration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         registration.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         registration.course_interest?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || registration.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('seminar_registrations')
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
        setRegistrations(prev => 
          prev.map(reg => reg.id === id ? { ...reg, status: newStatus as SubmissionStatus } : reg)
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
    if (!confirm('Are you sure you want to delete this registration?')) return;

    try {
      const { error } = await supabase
        .from('seminar_registrations')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting registration:', error);
        toast({
          title: "Error",
          description: "Failed to delete registration",
          variant: "destructive",
        });
      } else {
        setRegistrations(prev => prev.filter(reg => reg.id !== id));
        toast({
          title: "Success",
          description: "Registration deleted successfully",
        });
      }
    } catch (error) {
      console.error('Error deleting registration:', error);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Course Interest', 'Message', 'Status', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...registrations.map(registration => [
        registration.name,
        registration.email,
        registration.phone,
        registration.course_interest || '',
        registration.message?.replace(/,/g, ';') || '',
        registration.status,
        new Date(registration.created_at).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seminar-registrations.csv';
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
      case 'Registered': return 'bg-purple-500';
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
          <CardTitle>Seminar Registrations ({registrations.length})</CardTitle>
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
              <SelectItem value="Registered">Registered</SelectItem>
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
                <TableHead>Course Interest</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRegistrations.map((registration) => (
                <TableRow key={registration.id}>
                  <TableCell>
                    <div className="font-medium">{registration.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3 h-3" />
                        <a href={`mailto:${registration.email}`} className="text-blue-600 hover:underline text-sm">
                          {registration.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3 h-3" />
                        <a href={`tel:${registration.phone}`} className="text-blue-600 hover:underline text-sm">
                          {registration.phone}
                        </a>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{registration.course_interest}</TableCell>
                  <TableCell>
                    <Select value={registration.status} onValueChange={(value) => handleStatusChange(registration.id, value)}>
                      <SelectTrigger className="w-[120px]">
                        <Badge className={getStatusBadgeColor(registration.status)}>
                          {registration.status}
                        </Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Contacted">Contacted</SelectItem>
                        <SelectItem value="Processed">Processed</SelectItem>
                        <SelectItem value="Registered">Registered</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{new Date(registration.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Registration Details - {registration.name}</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-4 p-4">
                            <div><strong>Name:</strong> {registration.name}</div>
                            <div><strong>Email:</strong> {registration.email}</div>
                            <div><strong>Phone:</strong> {registration.phone}</div>
                            <div><strong>Course Interest:</strong> {registration.course_interest}</div>
                            <div className="col-span-2"><strong>Message:</strong> {registration.message}</div>
                            <div><strong>Status:</strong> {registration.status}</div>
                            <div><strong>Submitted:</strong> {new Date(registration.created_at).toLocaleString()}</div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(registration.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredRegistrations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No seminar registrations found.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SeminarRegistrationManager;
