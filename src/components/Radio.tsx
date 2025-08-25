import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
}

const Radio: React.FC<RadioProps> = ({ label, id, name, ...props }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        name={name}
        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        {...props}
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Radio;