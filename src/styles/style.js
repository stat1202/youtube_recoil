import styled, {css} from "styled-components"

export const fontSize = (size)=>{
    if(size === "small") return "10px"
    else if( size === "medium") return "14px"
    else if( size === "large") return "16px"
}

export const whichColor = (color) =>{
    if(color === "white") return "#FFF"
    if(color === "main") return "#f8f8f8"
    if(color === "blue") return "#065fd4"
    if(color === "gray") return "#e9e9e9"
    if(color === "border") return "#858585"
    if(color === "black") return "#000"
}

export const whichFont = (font) =>{
    if( font === "main") return css`
        @font-face{
            font-family:'NanumSquare';
            src: url(./font/NanumSquareNeoTTF-cBd.woff);
        }
        font-family:"NanumSquare";
    `
    else if( font === "hand") return css`
        @font-face{
            font-family:'Kyobo';
            src: url(./font/KyoboHandwriting2021sjy.ttf);
        }
        font-family:"Kyobo";
    `
}