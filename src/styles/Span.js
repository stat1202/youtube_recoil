import styled from "styled-components"
import { fontSize, whichColor } from "./style"


export const Span = styled.span`
    width: fit-content;
    font-size: ${fontSize("medium")};
`

export const Timer = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    margin: 4px;
    padding: 3px 4px;
    background-color: ${whichColor("black")};
    color: ${whichColor("white")};
    border-radius: 3px;
    height: 12px;
    right: 5px;
    bottom: 5px;
`