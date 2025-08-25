import { AdminLayout } from '../../components/AdminLayout';
import { UserManagement } from '../../components/UserManagement';

const AdminUsersPage = () => {
  return (
    <AdminLayout>
      <UserManagement />
    </AdminLayout>
  );
};

export default AdminUsersPage;