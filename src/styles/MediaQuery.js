import React from "react"
import { useMediaQuery } from "react-responsive"

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:600px)"
    });
    return <React.Fragment>{isMobile && children}</React.Fragment>
}

export const Pc = ({ children }) => {
    const isPc = useMediaQuery({
        query: "(min-width:601px)"
    });
    return <React.Fragment>{isPc && children}</React.Fragment>
}