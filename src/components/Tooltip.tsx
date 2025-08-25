import React from 'react';
import { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className="absolute z-10 px-2 py-1 text-sm text-white bg-black rounded shadow-lg"
          style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '0.5rem' }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
