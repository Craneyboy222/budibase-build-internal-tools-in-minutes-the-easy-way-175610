import React from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

const ProfilePage: NextPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log('Profile data:', data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={register({ required: "Name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <span role="alert" className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={register({ required: "Email is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span role="alert" className="text-red-500">{errors.email.message}</span>}
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
