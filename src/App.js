import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"

import GlobalStyle from "./styles/GlobalStyle"

const App = ()=>{
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Header/>
            <Nav/>
            <Main/>
        </React.Fragment>
    )
}

export default App