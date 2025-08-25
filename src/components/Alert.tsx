import React from 'react';
import classNames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const alertClasses = classNames(
    'p-4 rounded-md shadow-md flex items-center',
    {
      'bg-green-100 text-green-700': type === 'success',
      'bg-red-100 text-red-700': type === 'error',
      'bg-yellow-100 text-yellow-700': type === 'warning',
      'bg-blue-100 text-blue-700': type === 'info',
    }
  );

  return (
    <div className={alertClasses} role="alert" aria-live="assertive">
      <span className="flex-1">{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-4">
          <AiOutlineClose aria-label="Close alert" />
        </button>
      )}
    </div>
  );
};

export default Alert;