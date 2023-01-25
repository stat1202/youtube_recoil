import styled from "styled-components"

import { fontSize, whichColor } from "./style"

export const Div = styled.div`
    display: flex;
    flex-direction: ${props=> props.flexDirection};
    justify-content: ${props=> props.justifyContent};
    align-items: ${props=> props.alignItems};
    width : ${props=> props.width};
    height: ${props=> props.height};
    margin: ${props=> props.margin};
    padding: ${props=> props.padding};
    border: ${props=> props.border};
    background-color: ${props=> props.bgColor};
    flex-basis: ${props=> props.flexBasis};
    border-radius: ${props => props.borderRadius || 0}
`

export const NavBox = styled(Div)`
    flex-direction: ${props => props.isMenuClick ? "row": "column"};
    align-items: center;
    width: ${props => props.isMenuClick ? "180px": "64px"};
    height: ${props => props.isMenuClick ? "40px": "44px"};;
    padding: ${props => props.isMenuClick ? "0 12px": "16px 0 14px 0"};
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: ${props => props.isMenuClick ? fontSize("medium"): fontSize("small")};
    &: hover{
        background-color: ${whichColor("gray")};
        border-radius: 10px;
    }
`

export const LoginBox = styled(Div)`
    border-radius: 50px;
    cursor: pointer;
    &:hover{
        background-color: rgba(62,166,255,0.3);
    }
`

export const Contents = styled(Div)`
    position: relative;
    flex-grow: 1;
    cursor:pointer;
    max-width: 310px;
`

export const ContentsBox = styled(Div)`
    position: ${props => props.topHover ? "absolute": "relative"};
    z-index : ${props =>props.topHover && 999};
    width : ${props => props.topHover && "360px"};
    background-color: ${props => props.topHover ? whichColor("white"): whichColor("main")};
`

export const ContentsTop = styled(Div)`
    position: relative;
`

export const HiddenBox = styled(Div)`
    display: ${props => props.topHover ? "flex" : "none" };
`


// 기본값 지정 필요 웹페이지에 따라 에러가 나는 경우도 있음