import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../../components/Spinner';
import { ErrorComponent } from '../../components/ErrorComponent';
import { CategoryDetail } from '../../components/CategoryDetail';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/categories/${id}`)
        .then(response => setCategory(response.data))
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Spinner aria-label="Loading category details" />;
  if (error) return <ErrorComponent message="Failed to load category details." />;

  return <CategoryDetail category={category} />;
};

export default CategoryDetailPage;