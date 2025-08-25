import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const DashboardPage: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Applications</h2>
          <p className="mt-2">Manage your applications here.</p>
          <button
            className="mt-3 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => router.push('/applications')}
          >
            View Applications
          </button>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Reports</h2>
          <p className="mt-2">Access your data analytics.</p>
          <button
            className="mt-3 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => router.push('/reports')}
          >
            View Reports
          </button>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Settings</h2>
          <p className="mt-2">Configure your preferences.</p>
          <button
            className="mt-3 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => router.push('/settings')}
          >
            Go to Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
