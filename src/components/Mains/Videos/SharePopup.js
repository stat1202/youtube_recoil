import React from "react"
import { useRecoilState, useResetRecoilState } from "recoil"
import styled from "styled-components"
import {keyframes} from "styled-components"

import { isShareClickState } from "../../../recoil/VideoState"


const ModalShow = keyframes`
    from {
        opacity: 0;
        margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`

const BgShow = keyframes`
    from {
    opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Modal = styled.div`
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

const Section = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    overflow: hidden;
    animation: ${ModalShow} 0.3s
`
const Head = styled.div`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`

const CloseBtn = styled.button`
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

const MainTxt = styled.div`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`

const Footer = styled.footer`
    padding: 12px 16px;
    text-align: right;
`

const FooterClose = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    outline: none;
    cursor: pointer;
    border: 0;
`
const SharePopup = (props) =>{

    // ===== initialize =====
    const [shareClick, setShareClick] = useRecoilState(isShareClickState)

    // ===== event =====
    const shareClickEvent = ()=>{
        setShareClick(!shareClick)
    }

    const shareReset = useResetRecoilState(isShareClickState)
    React.useEffect( ()=>{
            shareReset()
    },[])

    return(
        <Modal shareClick = {shareClick}>
            {
                shareClick 
                ? 
                (
                    <Section>
                        <Head>
                            공유
                            <CloseBtn onClick={shareClickEvent}>
                            </CloseBtn>
                        </Head>
                        <MainTxt>{props.children}</MainTxt>
                        <Footer>
                            <FooterClose onClick={shareClickEvent}>
                                close
                            </FooterClose>
                        </Footer>
                    </Section>
                )
                : null
                }
        </Modal>
    )
}

export default SharePopup