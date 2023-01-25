import React from "react"
import {useRecoilValue, useRecoilState} from "recoil"
import styled from "styled-components"

import { isShareClickState } from "../../../recoil/VideoState"
import { Div } from "../../../styles/Div"
import { Span } from "../../../styles/Span"
import {Icon} from "../../../styles/Icon"

const ShareDiv = styled(Div)`
    cursor:pointer;
`

const VideoIcon = styled(Icon)`
    display: flex;
    &:active{
        background-color: transparent;
    }
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
        alignItems = "center" bgColor = "#dbdbdb" borderRadius="50px">
            <VideoIcon src= "./img/video/share_icon.png" alt="" padding="6px"/>
            <Span>공유</Span>
        </ShareDiv>
    )
}

export default ShareBtn