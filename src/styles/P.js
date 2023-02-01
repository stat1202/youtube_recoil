import styled from "styled-components"
import { fontSize, whichColor } from "./style"

export const P = styled.p`
    margin : 0;
    font-size: ${fontSize("small")}
    
`

export const VideoHead = styled.p`
    display: -webkit-box;
    margin-top: 12px;
    margin-bottom: 6px;
    font-size: ${fontSize("medium")};
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
`

export const LoginTxt = styled(P)`
    font-weight: 200;
    font-size: ${fontSize("medium")};
    color: ${whichColor("blue")};
    position: relative;
    left: -5px;
`
