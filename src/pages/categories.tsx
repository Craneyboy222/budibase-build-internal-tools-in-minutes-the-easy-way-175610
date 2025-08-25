import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../components/Spinner';
import { ErrorComponent } from '../components/ErrorComponent';
import { CategoryList } from '../components/CategoryList';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/categories')
      .then(response => setCategories(response.data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner aria-label="Loading categories" />;
  if (error) return <ErrorComponent message="Failed to load categories." />;

  return <CategoryList categories={categories} />;
};

export default CategoriesPage;