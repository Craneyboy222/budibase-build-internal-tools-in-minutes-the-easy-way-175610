import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
      <p className="mt-3 text-lg">
        Start building enterprise applications with ease.
      </p>
      <div className="mt-5">
        <Link href="/register">
          <a className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
