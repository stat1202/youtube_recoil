import React from "react"
import {useRecoilValue} from "recoil"
import styled from "styled-components"

import {videoInfoState} from "../../../recoil/VideoState"
import {videoState} from "../../../recoil/DataState"

const FullIcon = styled.img`
    position: absolute;
    display: flex;
    width: 48px;
    bottom: 0;
    right: 0;
    cursor: pointer;
`

const ThumbStyle = styled.img`
    width: 100%
`
const Thumb = () =>{

    // ===== initialize =====
    const videoInfo = useRecoilValue(videoInfoState)
    const video = useRecoilValue(videoState)
    const thumb = video[videoInfo.index].thumb

    const [thumbHover, setThumbHover] = React.useState(false)

    const screenClickEvent = ()=>{
        document.getElementById("video").requestFullscreen()
    }

    return(
        <React.Fragment>
            {thumbHover && <FullIcon src ="./img/video/fullscreen_icon.png"alt="" onClick={screenClickEvent} onMouseOver={()=>setThumbHover(true)} 
            onMouseOut={()=>setThumbHover(false)}/>}
            <ThumbStyle src={thumb} alt="" onMouseOver={()=>setThumbHover(true)} onMouseOut={()=>setThumbHover(false)} 
            id="video"/>
        </React.Fragment>
    )
}

export default Thumb