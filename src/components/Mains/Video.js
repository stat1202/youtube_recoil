import React from "react"
import {useRecoilValue} from "recoil"
import styled from "styled-components"

import Reply from "./Videos/Reply"
import Share from "./Videos/Share"
import Likes from "./Videos/Likes"
import ShareBtn from "./Videos/ShareBtn"
import Thumb from "./Videos/Thumb"

import { videoInfoState } from "../../recoil/VideoState"
import { videoState } from "../../recoil/DataState"

import { ChannelIcon } from "../../styles/Icon"
import { Div } from "../../styles/Div"
import { Button } from "../../styles/Button"
import {Routes, Route, useParams} from "react-router-dom"

// ===== style =====

const Article = styled.article`
    width: 100%;
    position: relative;
`

const Aside = styled.aside`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
`

// ===== component =====

const Video = () =>{

    // ===== initialize =====
    const {videoIndex} = useParams()
    const videoInfo = useRecoilValue(videoInfoState)
    const video = useRecoilValue(videoState)
    const {profile, video_head, channel_name} = {...video[videoInfo.index]}
    // console.log(videoInfo.index)
    // console.log(video[videoIndex])
    // console.log(profile)
    

    return(
        <React.Fragment>
                
                <Article>
                    <Thumb/>
                </Article>
                <Div flexDirection="column" width = "100%">
                    <h1>{video_head}</h1>
                    <Aside>
                        <Div alignItems="flex-end">
                            <Div margin = "0 24px 0 0">
                                <ChannelIcon src={profile}/>
                                <Div flexDirection = "column" justifyContent = "center">
                                    <Div margin = "0" height = "22px" alignItems="center">{channel_name}</Div>
                                    <Div height = "18px" alignItems="center">2만 명</Div>
                                </Div>
                            </Div>    
                            <Button bgColor = "#dbdbdb" margin="0 10px 0 0">가입</Button>
                            <Button bgColor = "#000" color="#FFF">구독</Button>
                        </Div>
                        <Div margin="10px 0 0 0">
                            <Likes/>
                            <ShareBtn/>
                        </Div>
                    </Aside>
                </Div>
                <Reply/>
                <Share/>
                
        </React.Fragment>
        
    )
}

export default Video