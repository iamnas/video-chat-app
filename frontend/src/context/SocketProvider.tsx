import  { createContext, useMemo, useContext,  ReactNode } from "react";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
const SocketContext = createContext<Socket | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () =>  {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props: { children: ReactNode }) => {
  const socket = useMemo(() => io("localhost:8000"), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};