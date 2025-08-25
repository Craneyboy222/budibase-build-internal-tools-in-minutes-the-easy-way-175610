import { useState } from 'react';

interface NotificationOptions {
  title: string;
  options?: NotificationOptions;
}

function useNotification() {
  const [permission, setPermission] = useState(Notification.permission);

  const requestPermission = () => {
    Notification.requestPermission().then(setPermission);
  };

  const notify = ({ title, options }: NotificationOptions) => {
    if (permission === 'granted') {
      new Notification(title, options);
    }
  };

  return { permission, requestPermission, notify };
}

export default useNotification;