import { useCallback, useEffect, useState } from "react";
import { socket } from "../api/socket";

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false);

  const on = useCallback((eventName: string, callback: (...args: unknown[]) => void) => {
    socket.on(eventName, callback);
  }, []);

  const off = useCallback((eventName: string) => {
    socket.off(eventName);
  }, []);

  const cleanUp = useCallback(() => {
    socket.offAny();
  }, [])

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  return {
    isConnected,
    on,
    off,
    cleanUp
  };
}
