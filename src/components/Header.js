import React from "react"
import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil"
import styled from "styled-components"

import { isMenuClickState, isSearchClickState } from "../recoil/MainState"
import { Div, LoginBox } from "../styles/Div"
import { Icon, Logo, SearchIcon, LoginIcon } from "../styles/Icon"
import { SearchBar } from "../styles/Input"
import { LoginTxt } from "../styles/P"



import { Pc } from "../styles/MediaQuery"
import { Mobile } from "../styles/MediaQuery"


// ===== style =====

const HeaderStyle = styled.header`
    display: flex;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    position: fixed;
    z-index: 1000;
    background-color: #f8f8f8;
`

// ===== component =====

const Header = () =>{

    // ===== initialize =====
    const headerList = [
        "./img/header/back.png",
        "./img/header/menu.png",
        "./img/header/logo.png",
        "./img/header/search.png",
        "./img/header/mic.png",
        "./img/header/search.png",
        "./img/header/mic.png",
        "./img/header/set.png",
        "./img/header/user.png",
    ]
    const [isMenuClick, setMenuClick] = useRecoilState(isMenuClickState)
    const [isSearchClick, setSearchClick] = useRecoilState(isSearchClickState)
    // const resetSearchClick = useResetRecoilState(isSearchClickState)
    // const mobile_search = document.getElementById("mobile_search")

    // ===== event =====

    return(
        <React.Fragment>
            <HeaderStyle>
                {
                    isSearchClick
                    ?
                    <React.Fragment>
                        <Div alignItems="center" margin="8px 0 8px 16px">
                            <Icon src = {headerList[0]} borderRadius="50%" onClick={()=>setSearchClick(false)}/>
                        </Div>
                        <Mobile>
                            <Div alignItems = "center" flexBasis = "640px" id="mobile_search">
                                <Div width = "100%" padding = "0 4px" margin = "0 0 0 40px">
                                    <SearchBar type="text" placeholder = "검색" padding="0px 4px 0px 16px" border = "1px solid #858585" height = "38px"/>
                                    <SearchIcon src = {headerList[3]} padding="7px 19px"/>
                                </Div>
                            </Div>
                        </Mobile>
                    </React.Fragment>
                    // <MobileSearch headerList = {headerList}/>
                    :
                    <React.Fragment>
                        <Div alignItems = "center" padding = "0 64px 0 16px">
                            <Icon src = {headerList[1]} onClick = {()=>setMenuClick(!isMenuClick)} borderRadius="50%"/>
                            <Logo src = {headerList[2]} onClick = {()=>window.location.reload()}/>
                        </Div>
                        <Pc>
                            <Div alignItems = "center" flexBasis = "640px" id="pc_search">
                                <Div width = "100%" padding = "0 4px" margin = "0 0 0 40px">
                                <SearchBar type="text" placeholder = "검색" padding="0px 4px 0px 16px" border = "1px solid #858585" height = "38px"/>
                                    <SearchIcon src = {headerList[3]} padding="7px 19px"/>
                                </Div>
                                <Icon src = {headerList[4]} borderRadius="50%"/>
                            </Div>
                        </Pc>
                    </React.Fragment>
                }
                <Div alignItems = "center" padding = "0 16px 0 0">
                    {
                        isSearchClick
                        ||
                        <Mobile>
                            <Icon src = {headerList[5]} borderRadius="50%" onClick = {()=>setSearchClick(true)}/>
                            <Icon id="mobile" src = {headerList[6]} borderRadius="50%"/>
                        </Mobile>
                    }
                    
                    <Icon src = {headerList[7]} borderRadius="50%"/>
                    <LoginBox width = "97.5px" height = "34px" justifyContents = "center" 
                    alignItems = "center" border = "1px solid #dbdbdb" margin = "0 0 0 4px">
                        <LoginIcon src = {headerList[8]}/>
                        <LoginTxt>로그인</LoginTxt>
                    </LoginBox>
                </Div>
            </HeaderStyle>
        </React.Fragment>
    )
}

export default Header