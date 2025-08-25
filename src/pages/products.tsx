import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const ProductsPage: NextPage = () => {
  const products = [
    { id: 1, name: 'Product A', description: 'Description of Product A' },
    { id: 2, name: 'Product B', description: 'Description of Product B' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <li key={product.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
            <Link href={`/products/${product.id}`}>
              <a className="mt-3 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                View Details
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
