import React from "react"
import { useRecoilState} from "recoil"
import styled from "styled-components"

import { replyState } from "../../../recoil/VideoState"
import { Div } from "../../../styles/Div"
import { Button } from "../../../styles/Button"

const ReplyForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    align-items: flex-end;
`

const ReplyInput = styled.input`
    width: 100%;
    border: none;
    font-size: 16px;
    margin-bottom: 10px;
    height: 31.5px;
`

const ReplyBtn = styled.button`
    width: 60px;
    height: 36px;
    margin-right: 10px;
    border: none;
    border-radius: 50px;
    background-color: #dbdbdb;
    cursor:pointer;
`

const Reply = () =>{
    
    // ===== initialize =====
    const [reply, setReply] = useRecoilState(replyState)

    //===== event =====
    const changeReplyEvent = (e)=>{
        setReply(e.target.value)
    }
    
    return(
        <Div width = "100%" flexDirection = "column" margin = "20px 0 0 0" alignItems = "flex-end">
            <ReplyInput type="text" placeholder="댓글 추가..." onChange={changeReplyEvent}/>
            <div>
                <Button bgColor = "#dbdbdb">취소</Button>
                <Button bgColor = {reply === "" ? "#dbdbdb" : "#065fd4"}
                color = {reply === "" || "#FFF"}>댓글</Button>
            </div>
        </Div>
            
    )
}
export default Reply