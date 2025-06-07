
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trash2, Phone, Mail, Eye, Download } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
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

const RegistrationManager = () => {
  const { content, updateSubmissionStatus, deleteSubmission } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const registrations = content.submissions.registrations;

  const filteredRegistrations = registrations.filter(registration => {
    const matchesSearch = registration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         registration.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         registration.courseInterest.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || registration.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: string) => {
    updateSubmissionStatus('registrations', id, newStatus);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this registration?')) {
      deleteSubmission('registrations', id);
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
        registration.courseInterest,
        registration.message.replace(/,/g, ';'),
        registration.status,
        new Date(registration.submittedAt).toLocaleDateString()
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
                  <TableCell>{registration.courseInterest}</TableCell>
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
                  <TableCell>{new Date(registration.submittedAt).toLocaleDateString()}</TableCell>
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
                            <div><strong>Course Interest:</strong> {registration.courseInterest}</div>
                            <div className="col-span-2"><strong>Message:</strong> {registration.message}</div>
                            <div><strong>Status:</strong> {registration.status}</div>
                            <div><strong>Submitted:</strong> {new Date(registration.submittedAt).toLocaleString()}</div>
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

export default RegistrationManager;
