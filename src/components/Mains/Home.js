import React from "react"
import MainContents from "./MainContents"
import {useRecoilState, useRecoilValue} from "recoil"

import { videoState } from "../../recoil/DataState"
// ===== Components =====
const Home = () =>{

    // ===== initialize =====
    const videos = useRecoilValue(videoState)
    
    // ===== random assign =====
    const random_set = new Set()
    
    while( random_set.size < videos.length){
        random_set.add(Math.floor(Math.random()*videos.length))
    }
    
    const random_arr = [...random_set]

    
    return(
        random_arr.map( (value) =>{
            return <MainContents data = {videos[value]}/>
        })
    )
}

export default Home