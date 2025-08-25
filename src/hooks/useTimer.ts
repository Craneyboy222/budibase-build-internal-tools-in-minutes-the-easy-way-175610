import { useState, useEffect } from 'react';

function useTimer(initialTime: number = 0, interval: number = 1000): [number, () => void, () => void] {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, interval);

      return () => clearInterval(timerId);
    }
  }, [isRunning, interval]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  return [time, start, stop];
}

export default useTimer;