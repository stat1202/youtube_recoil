import { createGlobalStyle } from "styled-components";
import { fontSize, whichColor } from "./style"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-size: ${fontSize("small")};
        background-color: ${whichColor("main")};
    }
`

export default GlobalStyle;