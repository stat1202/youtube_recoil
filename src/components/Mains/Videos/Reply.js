import React from "react"
import { useRecoilState} from "recoil"
import styled from "styled-components"

import { whichColor } from "../../../styles/style"
import { replyState } from "../../../recoil/VideoState"
import { Div } from "../../../styles/Div"
import { Button } from "../../../styles/Button"
import { Input } from "../../../styles/Input"

const Reply = () =>{
    
    // ===== initialize =====
    const [reply, setReply] = useRecoilState(replyState)

    //===== event =====
    const changeReplyEvent = (e)=>{
        setReply(e.target.value)
    }
    
    return(
        <Div width = "100%" flexDirection = "column" margin = "20px 0 0 0" alignItems = "flex-end">
            <Input type="text" placeholder="댓글 추가..." onChange={changeReplyEvent}
            margin = "0 0 10px 0" height = "31.5px"/>
            <div>
                <Button bgColor = "#dbdbdb">취소</Button>
                <Button bgColor = {reply === "" ? "#dbdbdb" : whichColor("blue")}
                color = {reply === "" || whichColor("white")}>댓글</Button>
            </div>
        </Div>
            
    )
}
export default Reply