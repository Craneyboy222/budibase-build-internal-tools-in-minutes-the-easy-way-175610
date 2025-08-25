import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  // test product data
  const product = { id, name: `Product ${id}`, description: `Description of Product ${id}` };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <p>{product.description}</p>
      <button
        className="mt-3 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetailPage;
