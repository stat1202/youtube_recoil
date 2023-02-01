import {atom, selector} from "recoil"
import {recoilPersist} from "recoil-persist"

// Reply value input button changed blue
const {persistAtom} = recoilPersist()

export const replyState = atom({
    "key" : "replyState",
    "default" : ""
})

// Share click true popup false exit
export const isShareClickState = atom({
    "key" : "isShareClickState",
    "default" : false
})

// video click video index save
export const videoInfoState = atom({
    "key" : "videoInfoState",
    "default": {
        "index" : null,
    },
    effects_UNSTABLE: [persistAtom],
})
