import { useRef, useEffect } from 'react';

function useWebSocket(url: string, onMessage: (event: MessageEvent) => void) {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);
    const { current: socket } = socketRef;

    socket.onmessage = onMessage;

    return () => {
      socket.close();
    };
  }, [url, onMessage]);

  const sendMessage = (message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    }
  };

  return { sendMessage };
}

export default useWebSocket;