import styled from "styled-components"

export const Icon = styled.img`
    width : 24px;
    height : 24px;
    padding : 8px;
    cursor : pointer;
    margin : ${props => props.margin};
    display : ${props => props.display};
    border-radius : ${props => props.borderRadius};
    &:active{
        background-color: #e9e9e9;
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
        background-color: #e9e9e9;
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