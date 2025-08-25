import { useState, useEffect } from 'react';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useApi = <T,>(url: string, options?: RequestInit): ApiResponse<T> => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setResponse({ data, error: null, loading: false });
      } catch (error) {
        setResponse({ data: null, error: error.message, loading: false });
      }
    };
    fetchData();
  }, [url, options]);

  return response;
};

export default useApi;