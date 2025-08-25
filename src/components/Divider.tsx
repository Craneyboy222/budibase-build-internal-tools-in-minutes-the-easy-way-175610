import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal' }) => {
  return (
    <div
      className={`$ {
        orientation === 'horizontal' ? 'border-t' : 'border-l'
      } border-gray-300 my-2`}
      role="separator"
    />
  );
};

export default Divider;