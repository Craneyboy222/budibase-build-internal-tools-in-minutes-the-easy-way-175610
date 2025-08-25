import React from 'react';
import classNames from 'classnames';

interface NotificationProps {
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ title, message, type, onClose }) => {
  const notificationClasses = classNames(
    'p-4 rounded-md shadow-lg flex items-start',
    {
      'bg-green-100 text-green-700': type === 'success',
      'bg-red-100 text-red-700': type === 'error',
      'bg-blue-100 text-blue-700': type === 'info',
    }
  );

  return (
    <div className={notificationClasses} role="alert" aria-live="polite">
      <div className="flex-1">
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
      <button onClick={onClose} className="ml-4">
        Close
      </button>
    </div>
  );
};

export default Notification;