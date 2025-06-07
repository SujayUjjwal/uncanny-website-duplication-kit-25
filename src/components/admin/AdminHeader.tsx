
import { Button } from '@/components/ui/button';
import { LogOut, Settings, Clock, Download, Upload } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useContent } from '@/contexts/ContentContext';

interface AdminHeaderProps {
  onExport: () => void;
  onImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdminHeader = ({ onExport, onImport }: AdminHeaderProps) => {
  const { logout } = useAuth();

  return (
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
              onClick={onExport}
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Backup</span>
            </Button>
            <label className="cursor-pointer">
              <input
                type="file"
                accept=".json"
                onChange={onImport}
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
  );
};

export default AdminHeader;
