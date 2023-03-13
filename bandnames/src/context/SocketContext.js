import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();
export const Socketprovider=({children})=>{
    const{socket, online}=useSocket('http://localhost:8081');
    return(
        <SocketContext.Provider value={{socket,online}}>
            {children}
        </SocketContext.Provider>
    )
}