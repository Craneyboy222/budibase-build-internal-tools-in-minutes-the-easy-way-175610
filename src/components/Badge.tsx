import React from 'react';
import classNames from 'classnames';

interface BadgeProps {
  text: string;
  color?: 'blue' | 'green' | 'red' | 'yellow';
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  const colorClass = classNames({
    'bg-blue-100 text-blue-800': color === 'blue',
    'bg-green-100 text-green-800': color === 'green',
    'bg-red-100 text-red-800': color === 'red',
    'bg-yellow-100 text-yellow-800': color === 'yellow',
  });

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
      {text}
    </span>
  );
};

export default Badge;
