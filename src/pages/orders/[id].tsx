import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../../components/Spinner';
import { ErrorComponent } from '../../components/ErrorComponent';
import { OrderDetail } from '../../components/OrderDetail';

const OrderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/orders/${id}`)
        .then(response => setOrder(response.data))
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Spinner aria-label="Loading order details" />;
  if (error) return <ErrorComponent message="Failed to load order details." />;

  return <OrderDetail order={order} />;
};

export default OrderDetailPage;