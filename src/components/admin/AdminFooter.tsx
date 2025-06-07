
const AdminFooter = () => {
  return (
    <footer className="mt-8 text-center text-sm text-gray-500 bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-center space-x-4">
        <span>© 2024 Content Management System</span>
        <span>•</span>
        <span>Version 1.0</span>
        <span>•</span>
        <span>Last Backup: {localStorage.getItem('last-backup') || 'Never'}</span>
      </div>
    </footer>
  );
};

export default AdminFooter;
