import React from "react"
import { useSetRecoilState} from "recoil"
import styled from "styled-components"

import { videoInfoState } from "../../recoil/VideoState"
import { Icon, SetIcon, ProfileIcon } from "../../styles/Icon"
import { P, VideoHead } from "../../styles/P"
import { Div, Contents, ContentsBox, ContentsTop, HiddenBox } from "../../styles/Div"
import { Span, Timer } from "../../styles/Span"

// ===== Style =====

const Thumb = styled.img`
    width: 100%;
`

// =====Components =====
const MainContents = (props) =>{

    // ===== initailize =====
    const data = props.data
    const {index, timer, thumb, profile, video_head, channel_name, post_time, view} = {...data}                        
    // const video_info = `${thumb}, ${profile}, ${video_head}, ${channel_name}`

    const setVideoInfo = useSetRecoilState(videoInfoState)

    // ===== state =====
    const [hover, setHover] = React.useState(false)
    const [topHover, setTopHover] = React.useState(false)
    

    // ===== event =====
    const thumbClickEvent = (e)=>{
        setVideoInfo({
            "index" : index,
        })
    }

    return(
        <Contents onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}
        margin = "0 8px 40px 8px" flexBasis = "250px">
            <ContentsBox topHover = {topHover} flexDirection = "column">
                <ContentsTop onMouseOver={()=>setTopHover(true)} onMouseOut={()=>setTopHover(false)} onClick = {thumbClickEvent}>
                    <Timer>{timer}</Timer>
                    <Thumb src={thumb} alt=""/>
                </ContentsTop>
                <Div width = "100%">
                    <ProfileIcon src={profile} alt=""/>
                    {hover? <SetIcon src="./img/main/set.png" alt=""/> :""}
                    <Div width = "100% - 80px" padding = "0 24px 0 0" flexDirection = "column">
                        <VideoHead>
                            {video_head}
                        </VideoHead>
                        <P class = "channel_name">
                            {channel_name}
                        </P>
                        <Div>
                            <span> {view}</span>
                            <span>{post_time}</span>
                        </Div>
                    </Div>
                </Div>
                {/* thumb Hover시 나오는 부분 */}
                <HiddenBox topHover = {topHover} padding = "20px 0 0 0" flexDirection = "column" width = "100%">
                    
                    <Div justifyContent="center" alignItems = "center" 
                    width = "calc(100%-24px)" height = "36px" borderRadius="50px"
                    bgColor = "#e9e9e9" margin = "0px 12px 10px 12px">
                        <Icon src="./img/main/clock_icon.png" alt=""/>
                        <Span>나중에 볼 동영상</Span>
                    </Div>
                    <Div justifyContent="center" alignItems = "center" 
                    width = "calc(100%-24px)" height = "36px" borderRadius="50px"
                    bgColor = "#e9e9e9" margin = "0px 12px 10px 12px">
                        <Icon src="./img/main/playlist_icon.png" alt=""/>
                        <Span>현재 재생목록에 추가</Span>
                    </Div>
                </HiddenBox>
            </ContentsBox>
        </Contents>
    )
}

export default MainContents