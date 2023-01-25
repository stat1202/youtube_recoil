import React from "react"
import { useRecoilState, useResetRecoilState } from "recoil"

import { isShareClickState } from "../../../recoil/VideoState"
import { Modal, Section, Head, CloseBtn, MainTxt, Footer, FooterClose } from "../../../styles/ModalStyle"

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