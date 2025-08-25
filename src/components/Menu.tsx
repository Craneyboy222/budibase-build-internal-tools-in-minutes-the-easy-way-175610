import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface MenuItem {
  label: string;
  path: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const location = useLocation();

  return (
    <nav aria-label="Main Menu">
      <ul className="flex space-x-4">
        {items.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={classNames(
                'text-sm font-medium',
                location.pathname === item.path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-500'
              )}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
