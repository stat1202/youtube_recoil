import styled from "styled-components"

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
`

// 기본값 지정 필요 웹페이지에 따라 에러가 나는 경우도 있음