import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ToastProps {
  message: string;
  duration?: number;
  onDismiss: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 5000, onDismiss }) => {
  React.useEffect(() => {
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-md shadow-lg" role="status">
      <div className="flex items-center">
        <span className="flex-1">{message}</span>
        <button onClick={onDismiss} className="ml-2">
          <AiOutlineClose aria-label="Dismiss toast" />
        </button>
      </div>
    </div>
  );
};

export default Toast;