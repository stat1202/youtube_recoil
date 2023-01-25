import React from "react"
import {useRecoilValue, useSetRecoilState} from "recoil"
import styled from "styled-components"


import { isMenuClickState, whichNavClickState } from "../recoil/MainState"
import { videoInfoState } from "../recoil/VideoState"
import { Div, NavBox } from "../styles/Div"
import {  Icon } from "../styles/Icon"


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
            "index" : null
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