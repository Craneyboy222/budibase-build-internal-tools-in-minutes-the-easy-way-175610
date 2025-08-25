import React from 'react';
import { FaSort } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

interface SortProps {
  onSortChange: (direction: 'asc' | 'desc') => void;
}

const Sort: React.FC<SortProps> = ({ onSortChange }) => {
  const handleSort = (direction: 'asc' | 'desc') => {
    onSortChange(direction);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleSort('asc')}
        className="flex items-center px-2 py-1 border rounded bg-gray-200 hover:bg-blue-500 hover:text-white"
        aria-label="Sort ascending"
      >
        <FaSort /> Asc
      </button>
      <button
        onClick={() => handleSort('desc')}
        className="flex items-center px-2 py-1 border rounded bg-gray-200 hover:bg-blue-500 hover:text-white"
        aria-label="Sort descending"
      >
        <FaSort /> Desc
      </button>
    </div>
  );
};

export default Sort;