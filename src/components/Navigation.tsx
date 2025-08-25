import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <ul className="flex space-x-4 p-4">
        <li>
          <NavLink to="/" activeClassName="font-bold" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="font-bold">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;