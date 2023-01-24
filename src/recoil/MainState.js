import {atom, selector} from "recoil"


// Nav Header HamburgerIcon click => open wide nav
export const isMenuClickState = atom({
    "key" : "isMenuClickState",
    "default" : false
})

// NavIcon Click => show contents about icon
export const whichNavClickState = atom({
    "key" : "whichNavClickState",
    "default" : "홈"
})

// Mobile search click show search bar
export const isSearchClickState = atom({
    "key": "isSearchClickState",
    "default": false
})