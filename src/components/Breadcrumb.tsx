import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <a
              href={item.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <ChevronRightIcon className="w-5 h-5 mx-2 text-gray-400" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
