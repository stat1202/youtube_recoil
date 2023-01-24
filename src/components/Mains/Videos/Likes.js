import React from "react"
import styled from "styled-components"

import {Div} from "../../../styles/Div"
import { Span } from "../../../styles/Span"

// ===== style =====
const LikeDiv = styled(Div)`
    display: flex;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    cursor:pointer;
`

const DisLikeDiv = styled(Div)`
    display: flex;  
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    cursor:pointer;
`

const VideoIcon = styled.img`
    display: flex;
    width: 24px;
    padding:6px;
`

// ===== components =====
const Likes = ()=>{
    // ===== state =====
    const [isLikeClick, setLikeClick] = React.useState(false)
    const [isDislikeClick, setDislikeClick] = React.useState(false)
    const [likes, setLikes] = React.useState(0)

    //===== event =====
    const likeClickEvent = ()=>{
        setLikeClick(!isLikeClick)

        if(!isLikeClick) {
            const tmp = likes +1
            setLikes(tmp)
        }
        else{
            const tmp = likes -1
            setLikes(tmp)
        }
        if(isDislikeClick) setDislikeClick(!isDislikeClick)
    }

    const dislikeClickEvent = ()=>{
        setDislikeClick(!isDislikeClick)
        if(isLikeClick) {
            setLikeClick(!isLikeClick)
            const tmp = likes -1
            setLikes(tmp)
        }
    }

    return(
        <React.Fragment>
            <LikeDiv onClick = {likeClickEvent} width="90px" height="36px" justifyContent = "center" alignItems = "center" bgColor = "#dbdbdb">
                <VideoIcon src= {isLikeClick ? "./img/video/like_check_icon.png" :"./img/video/like_icon.png"} alt=""/>
                <Span>{likes}</Span>
            </LikeDiv>
            <DisLikeDiv onClick = {dislikeClickEvent} width = "52px" height = "36px" bgColor = "#dbdbdb" margin = "0 10px 0 0">
                <VideoIcon src= {isDislikeClick ? "./img/video/dislike_check_icon.png" : "./img/video/dislike_icon.png" } alt=""/>
            </DisLikeDiv>
        </React.Fragment>
        
    )
}

export default Likes