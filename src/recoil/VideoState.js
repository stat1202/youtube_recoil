import {atom, selector} from "recoil"

// Reply value input button changed blue
export const replyState = atom({
    "key" : "replyState",
    "default" : ""
})

// Share click true popup false exit
export const isShareClickState = atom({
    "key" : "isShareClickState",
    "default" : false
})

export const videoInfoState = atom({
    "key" : "videoInfoState",
    "default": {
        "index" : null,
    }
})
