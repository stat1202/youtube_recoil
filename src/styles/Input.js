import styled from "styled-components"
import { fontSize, whichColor } from "./style"

export const Input = styled.input`
    width : 100%;
    padding : ${props => props.padding || 0};
    border : ${props => props.border || "none"};
    height : ${props => props.height || "fit-content"};
    margin : ${props => props.margin || 0};
    font-size: ${fontSize("large")};
`

export const SearchBar = styled(Input)`
    border-right: none;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    &:focus{
        outline: 1px solid ${whichColor("blue")};
    }
`