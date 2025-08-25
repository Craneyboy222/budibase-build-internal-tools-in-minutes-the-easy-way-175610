import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center border-b border-gray-300 py-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        production-ready="Search..."
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        aria-label="Search"
      />
      <button
        onClick={handleSearch}
        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
        aria-label="Execute search"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;