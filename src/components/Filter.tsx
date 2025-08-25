import React from 'react';
import 'tailwindcss/tailwind.css';

interface FilterProps {
  options: string[];
  selected: string;
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ options, selected, onFilterChange }) => {
  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onFilterChange(option)}
          className={`px-4 py-2 rounded-full ${selected === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          aria-label={`Filter by ${option}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Filter;