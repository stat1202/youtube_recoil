import React from "react"
import {useRecoilValue, useRecoilState} from "recoil"
import styled from "styled-components"

import { isShareClickState } from "../../../recoil/VideoState"
import { Div } from "../../../styles/Div"
import { Span } from "../../../styles/Span"

const ShareDiv = styled(Div)`
    border-radius: 50px;
    cursor:pointer;
`

const VideoIcon = styled.img`
    display: flex;
    width: 24px;
    padding:6px;
`

const ShareBtn = () =>{

    // ===== initialize =====
    const [shareClick, setShareClick] = useRecoilState(isShareClickState)

    // ===== event =====
    const shareClickEvent = ()=>{
        setShareClick(!shareClick)
    }
    
    return(
        <ShareDiv onClick ={shareClickEvent} width="84px" height ="36px" justifyContent = "center"
        alignItems = "center" bgColor = "#dbdbdb">
            <VideoIcon src= "./img/video/share_icon.png" alt=""/>
            <Span>공유</Span>
        </ShareDiv>
    )
}

export default ShareBtn