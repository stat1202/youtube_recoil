import { createGlobalStyle } from "styled-components";
import { fontSize, whichColor, whichFont } from "./style"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-size: ${fontSize("small")};
        background-color: ${whichColor("main")};
        ${whichFont("main")};
    }
    a{
        text-decoration: none;
        color: ${whichColor("black")}
    }
`
// 폰트 적용해보기


export default GlobalStyle;