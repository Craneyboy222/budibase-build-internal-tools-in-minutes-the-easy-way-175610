import { AdminLayout } from '../../components/AdminLayout';
import { OrderManagement } from '../../components/OrderManagement';

const AdminOrdersPage = () => {
  return (
    <AdminLayout>
      <OrderManagement />
    </AdminLayout>
  );
};

export default AdminOrdersPage;