import { AdminLayout } from '../../components/AdminLayout';
import { ProductManagement } from '../../components/ProductManagement';

const AdminProductsPage = () => {
  return (
    <AdminLayout>
      <ProductManagement />
    </AdminLayout>
  );
};

export default AdminProductsPage;