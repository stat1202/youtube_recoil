import styled from "styled-components"
import { whichColor } from "./style"
export const Icon = styled.img`
    width : ${props => props.width || "24px"};
    height : ${props => props.height || "24px"};
    padding : ${props => props.padding || "8px"};
    cursor : pointer;
    margin : ${props => props.margin || "0"};
    display : ${props => props.display};
    border-radius : ${props => props.borderRadius || "0"};
    &:active{
        background-color: ${whichColor("gray")};
    }
`

export const SetIcon = styled.img`
    display: flex;
    position: absolute;
    width: 24px;
    margin-top: 12px;
    right: 0;
    border-radius: 50%;
    &:active{
        background-color: ${whichColor("gray")};
    }
`

export const ProfileIcon = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 12px 12px 0 0 ;
`

export const ChannelIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
`

export const Logo = styled.img`
    width: 90px;
    height: 20px;
    padding: 18px 14px 18px 16px;
    cursor: pointer;
`

export const SearchIcon = styled(Icon)`
    border: 1px solid ${whichColor("border")};
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    background-color: ${whichColor("main")};
    &:hover{
        background-color: ${whichColor("gray")};
    }
`

export const LoginIcon = styled.img`
    width: fit-content;
    position: relative;
    height: 34px;
    padding: 0;
    &:active{
        background-color: none;
    }
`

export const FullIcon = styled.img`
    position: absolute;
    display: flex;
    width: 48px;
    bottom: 0;
    right: 0;
    cursor: pointer;
`
