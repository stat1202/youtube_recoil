import React from "react"
import { useSetRecoilState} from "recoil"
import styled from "styled-components"

import { videoInfoState } from "../../recoil/VideoState"
import { Icon, SetIcon, ProfileIcon } from "../../styles/Icon"
import { P, VideoHead } from "../../styles/P"
import { Div } from "../../styles/Div"


// ===== Style =====
const Contents = styled(Div)`
    position: relative;
    flex-grow: 1;
    cursor:pointer;
    max-width: 310px;
`
const ContentsBox = styled(Div)`
    position: ${props => props.topHover ? "absolute": "relative"};
    z-index : ${props =>props.topHover && 999};
    width : ${props => props.topHover && "360px"};
    background-color: ${props => props.topHover ? "#FFF": "#F8F8F8"};
`

const ContentsTop = styled(Div)`
    position: relative;
`

const Timer = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    margin: 4px;
    padding: 3px 4px;
    background-color: #000;
    color: #FFF;
    border-radius: 3px;
    height: 12px;
    right: 5px;
    bottom: 5px;
`

const Thumb = styled.img`
    width: 100%;
`

const HiddenBox = styled(Div)`
    display: ${props => props.topHover ? "flex" : "none" };
`

const ContentsHidden = styled(Div)`
    justify-content: center;
    align-items: center;
    width: calc(100% - 24px);
    height: 36px;
    font-size: 14px;
    border-radius: 50px;
    background-color: #e9e9e9;
    margin: 0px 12px;
    margin-bottom: 10px;
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
                <HiddenBox topHover = {topHover} padding = "20px 0 0 0" flexDirection = "column" width = "100%">
                    <ContentsHidden>
                        <Icon src="./img/main/clock_icon.png" alt=""/>
                        <span>나중에 볼 동영상</span>
                    </ContentsHidden>
                    <ContentsHidden>
                        <Icon src="./img/main/playlist_icon.png" alt=""/>
                        <span>현재 재생목록에 추가</span>
                    </ContentsHidden>
                </HiddenBox>
            </ContentsBox>
        </Contents>
    )
}

export default MainContents