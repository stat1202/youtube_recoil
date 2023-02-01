import React from "react"
import {useRecoilState, useSetRecoilState, useRecoilValue} from "recoil"
import styled from "styled-components"

import NavIcon from "./NavIcon"
import { isMenuClickState } from "../recoil/MainState"
import { Div } from "../styles/Div"


// ===== style =====

const NavStyle = styled.nav`
    position: fixed;
    top: 56px;
    height: 100vh;
    width: ${props => props.isMenuClick ? "216px": "64px"};
    padding: ${props => props.isMenuClick ? "0 12px": "0 4px"};
    display: flex;
    background-color: #f8f8f8;
    flex-direction: column;
    z-index: 1000;
`
const Overlay = styled(Div)`
    position: fixed;
    z-index: 1001;
    left: 240px;
    top: 0;
`

// ===== component =====

const Nav = () =>{

    //===== data =====
    const navList = [
        {
            "id" : 1,
            "src" : "./img/nav/home.png",
            "txt" : "홈",
            "address" : "home"
        },
        {   
            "id" : 2,
            "src" : "./img/nav/shorts.png",
            "txt" : "Shorts",
            "address" : "shorts"
        },
        {   
            "id" : 3,
            "src" : "./img/nav/playlist.png",
            "txt" : "구독",
            "address" : "subscribe"
        },
        {
            "id" : 4,
            "src" : "./img/nav/gallery.png",
            "txt" : "보관함",
            "address" : "gallery"
        },
    ]

    const [isMenuClick, setMenuClick] = useRecoilState(isMenuClickState)

    // ===== event =====
    const isMenuClickEvent = () =>{
        setMenuClick(!isMenuClick)
        
    }

    return(
        <React.Fragment>
            <NavStyle isMenuClick = {isMenuClick}>
                {
                    navList.map( (value) => {
                        return(
                            <NavIcon data = {value}/>
                        )
                    })
                }

            </NavStyle>
            {
                isMenuClick && <Overlay onClick={isMenuClickEvent} width = "calc(100% - 240px)" height = "100%"
                bgColor = "rgba(0,0,0,0.25)"></Overlay>                    
            }
        </React.Fragment>           
    )
}

export default Nav