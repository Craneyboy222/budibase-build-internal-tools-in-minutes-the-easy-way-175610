import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-100 w-64 p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="block text-gray-700">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block text-gray-700">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;