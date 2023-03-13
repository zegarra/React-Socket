import React from "react"
import HomePage from "./pages/HomePage"
import { Socketprovider } from "./context/SocketContext"


export const BandNamesApp = () => {
    return(
        <Socketprovider>
            <HomePage/>
        </Socketprovider>
    )
}

