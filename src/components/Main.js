import React from "react"
import {useRecoilValue} from "recoil"
import styled from "styled-components"

import Shorts from "./Mains/Shorts"
import Subscription from "./Mains/Subscription"
import Gallery from "./Mains/Gallery"
import Home from "./Mains/Home"
import Video from "./Mains/Video"

import { whichNavClickState } from "../recoil/MainState"
import { videoInfoState } from "../recoil/VideoState"

// ===== style =====

const MainStyle = styled.main`
    width: calc(100% - 104px);
    position: relative;
    top: 80px;
    left: 72px;
    margin: 0 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: ${props => props.index === null && "column"};
`

//  ===== component =====

const Main = () =>{
    
    //===== useSelector =====
    const navName = useRecoilValue(whichNavClickState)
    const videoInfo = useRecoilValue(videoInfoState)
    return(
        <MainStyle videoInfo = {videoInfo.index}>
            <React.Fragment>
                {navName === "홈" && videoInfo.index === null && <Home/>}
                {navName === "Shorts" && videoInfo.index === null && <Shorts/>}
                {navName === "구독" && videoInfo.index === null && <Subscription/>}
                {navName === "보관함" && videoInfo.index === null && <Gallery/>}
                {videoInfo.index !== null && <Video/>}
            </React.Fragment>
        </MainStyle>
    )
}
export default Main