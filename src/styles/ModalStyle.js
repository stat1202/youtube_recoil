import styled from "styled-components"
import {keyframes} from "styled-components"

export const ModalShow = keyframes`
    from {
        opacity: 0;
        margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`

export const BgShow = keyframes`
    from {
    opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Modal = styled.div`
    display: ${props => props.shareClick ? "flex" : "none" };
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    align-items: center;
    animation: ${BgShow} 0.3s
`

export const Section = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    overflow: hidden;
    animation: ${ModalShow} 0.3s
`
export const Head = styled.div`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 0;
`

export const MainTxt = styled.div`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`

export const Footer = styled.footer`
    padding: 12px 16px;
    text-align: right;
`

export const FooterClose = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    outline: none;
    cursor: pointer;
    border: 0;
`