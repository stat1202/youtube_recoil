import React from "react"
import {useRecoilValue, useSetRecoilState} from "recoil"
import styled from "styled-components"


import { isMenuClickState, whichNavClickState } from "../recoil/MainState"
import { videoInfoState } from "../recoil/VideoState"
import { Div } from "../styles/Div"
import {  Icon } from "../styles/Icon"

// ===== style =====

const NavBox = styled(Div)`
    display: flex;
    flex-direction: ${props => props.isMenuClick ? "row": "column"};
    align-items: center;
    width: ${props => props.isMenuClick ? "180px": "64px"};
    height: ${props => props.isMenuClick ? "40px": "44px"};;
    padding: ${props => props.isMenuClick ? "0 12px": "16px 0 14px 0"};
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: ${props => props.isMenuClick ? "14px": "10px"};
    &: hover{
        background-color: #e9e9e9e9;
        border-radius: 10px;
    }
`

// ===== component =====

const NavIcon = (props) =>{

    // ===== initialize =====
    const isMenuClick = useRecoilValue(isMenuClickState)
    const setWhichNavClick = useSetRecoilState(whichNavClickState)
    const setVideoInfo = useSetRecoilState(videoInfoState)

    // ===== props =====
    const data = props.data

    // ===== data =====
    const {src, txt} = {...data}
    
    const whichNavClickEvent = ()=>{
        setWhichNavClick(txt)
        setVideoInfo({
            "thumb" : "none", 
            "profile" : "none", 
            "videoHead" : "none",
            "channelName": "none"
        })
    }

    return(
        <NavBox href="" isMenuClick = {isMenuClick} onClick={whichNavClickEvent}>
            <Icon src = {src}/>
            <span>{txt}</span>
        </NavBox>
    )
}

export default NavIcon