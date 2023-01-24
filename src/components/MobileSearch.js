// import React from "react"
// import {useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil"
// import styled from "styled-components"

// import { isSearchClickState } from "../recoil/MainState"
// import { Div } from "../styles/Div"
// import { Icon, Logo } from "../styles/Icon"
// import { Mobile } from "../styles/MediaQuery"

// const SearchBar = styled.input`
//     width: 100%;
//     padding: 0px 4px 0px 16px;
//     border: 1px solid #858585;
//     height: 38px;
//     font-size: 16px;
//     border-right: none;
//     border-bottom-left-radius: 50px;
//     border-top-left-radius: 50px;
//     &:focus{
//         outline: 1px solid #065fd4;
//     }
// `

// const SearchIcon = styled(Icon)`
//     padding: 7px 19px;
//     border: 1px solid #858585;
//     border-bottom-right-radius: 50px;
//     border-top-right-radius: 50px;
//     border-bottom-left-radius: 0px;
//     border-top-left-radius: 0px;
//     background-color: #f8f8f8;
//     &:hover{
//         background-color: #e9e9e9;
//     }
// `


// const MobileSearch = (props) =>{
//     const headerList = props.headerList
//     const setSearchClick = useSetRecoilState(isSearchClickState)
//     const resetSearchClick = useResetRecoilState(isSearchClickState)

//     React.useEffect( ()=>{
//         return resetSearchClick()
//     }, [document.getElementById("mobile_search")])

//     return(
//         <React.Fragment>
//             <Div alignItems="center" margin="8px 0 8px 16px">
//                 <Icon src = {headerList[0]} borderRadius="50%" onClick={()=>setSearchClick(false)}/>
//             </Div>
//             <Mobile>
//                 <Div alignItems = "center" flexBasis = "640px" id="mobile_search">
//                     <Div width = "100%" padding = "0 4px" margin = "0 0 0 40px">
//                         <SearchBar type="text" placeholder = "검색"/>
//                         <SearchIcon src = {headerList[3]}/>
//                     </Div>
//                 </Div>
//             </Mobile>
//         </React.Fragment>
//     )
// }
// export default MobileSearch