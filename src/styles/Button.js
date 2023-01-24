import styled from "styled-components"

export const Button = styled.button`
    width: 60px;
    height: 36px;
    border: none;
    background-color: ${props=> props.bgColor};
    color: ${props=> props.color};
    border-radius: 50px;
    margin: ${props => props.margin};
    cursor:pointer;
`