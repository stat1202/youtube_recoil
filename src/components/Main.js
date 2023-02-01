import React from "react"
import {useRecoilValue} from "recoil"
import styled from "styled-components"

import Shorts from "./Mains/Shorts"
import Subscription from "./Mains/Subscription"
import Gallery from "./Mains/Gallery"
import Home from "./Mains/Home"
import Video from "./Mains/Video"
import NotFound from "./Mains/NotFound"


import { whichNavClickState } from "../recoil/MainState"
import { videoInfoState } from "../recoil/VideoState"
import {Routes, Route, useParams} from "react-router-dom"


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
    // const navName = useRecoilValue(whichNavClickState)
    const videoInfo = useRecoilValue(videoInfoState)

    return(
        <MainStyle videoInfo = {videoInfo.index}>
            {/* <React.Fragment> */}
                <Routes>
                    <Route path="/" element = {<Home/>}></Route>
                    <Route path="/shorts" element = {<Shorts/>}></Route>
                    <Route path="/subscribe" element = {<Subscription/>}></Route>
                    <Route path="/gallery" element = {<Gallery/>}></Route>
                    <Route path={"/video/:videoIndex"} element = {<Video/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
                
            {/* </React.Fragment> */}
        </MainStyle>
    )
}
export default Main