import React from "react"
import {useRecoilValue, useSetRecoilState} from "recoil"
import styled from "styled-components"


import { isMenuClickState, whichNavClickState } from "../recoil/MainState"
import { videoInfoState } from "../recoil/VideoState"
import { Div, NavBox } from "../styles/Div"
import {  Icon } from "../styles/Icon"

import {Route, Link} from "react-router-dom"

// ===== component =====

const NavIcon = (props) =>{

    // ===== initialize =====
    const isMenuClick = useRecoilValue(isMenuClickState)
    const setWhichNavClick = useSetRecoilState(whichNavClickState)
    const setVideoInfo = useSetRecoilState(videoInfoState)

    // ===== props =====
    const data = props.data

    // ===== data =====
    const {src, txt, address} = {...data}
    
    const whichNavClickEvent = ()=>{
        setWhichNavClick(address)
        setVideoInfo({
            "index" : null
        })
    }

    return(
        <Link to={address === "home" ? "/" :`/${address}`}>
            <NavBox isMenuClick = {isMenuClick} onClick={whichNavClickEvent}>
                <Icon src = {src}/>
                <span>{txt}</span>
            </NavBox>
        </Link>
    )
}

export default NavIcon