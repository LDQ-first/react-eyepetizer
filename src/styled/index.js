import {injectGlobal} from 'styled-components'
import styled from 'styled-components'
const bgBlue = '#29B6F6'
const bgPurple = '#B39DDB'
const mainBlue = '#2196F3'
const svgBlue = '#1E88E5'

import {eyeApi} from '../api/api.js' 

export default injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        overflow: auto;
        height: 100%;
    }
    body {
        height: 100%;
        line-height: 1.6;
        min-width: 320px;
        color: #2c3e50;
        background: linear-gradient(135deg, ${bgBlue}, ${bgPurple});
        background-attachment: fixed;
        font-family: "Helvetica Neue", "Arial", " Segoe UI",
                     "PingFang SC", "Hiragino Sans GB", "STHeiti",
                      "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", 
                      "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", 
                      "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei",
                      SimSun, sans-serif !important;
    }
    ::-webkit-scrollbar {
        width: 0.25em;
        ${navigator.platform.indexOf("Win")} || 
        ${navigator.platform.indexOf("Mac")} ||
        ${navigator.platform.indexOf("Linux")}
        ? null :  visibility: hidden;
       
    }

    ::-webkit-scrollbar-track {
        border-radius: 0.125em;
        background: #ceb9d1;
        ${navigator.platform.indexOf("Win")} || 
        ${navigator.platform.indexOf("Mac")} ||
        ${navigator.platform.indexOf("Linux")}
        ? null :  visibility: hidden;
    }

    ::-webkit-scrollbar-thumb {
        height: 0.125em;
        border-radius: 0.05em;
        background: #498bd6 linear-gradient(180deg, #fff,rgba(3,169,244,.5), #0277bd);
        ${navigator.platform.indexOf("Win")} || 
        ${navigator.platform.indexOf("Mac")} ||
        ${navigator.platform.indexOf("Linux")}
        ? null :  visibility: hidden;
    }
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a {
        display: inline-block;
        text-decoration: none;
        color: #0060E9;
        &:hover, &:hover * {
            color: #3f51b5;
        }
    }
    p {
        margin: 10px 0;
    }
    button {
        display: inline-block;
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        -webkit-appearance: none;
    }
    video {
        display: inline-block;
    }
    .noPadding {
        padding: 0;
    }
    .noMargin {
        margin: 0;
    }
    .none {
        display: none !important;
    }
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .fade-enter {
        opacity: 0.01;
        transform: translateY(-100%);
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 500ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
    #app {
        height: 100%;
    }
    .app {
        height: 100%;
    }
    .routes {
        height: 100%;
    }
    .index {
        height: 100%;
    }
    .detail {
        margin: 0 auto;
        max-width: 700px;
        overflow: hidden;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }
    .searchArea {
        
    }
`

const Container = styled.div`
   
`


const mediaQuery = (mediaSize = 1024) => `@media (max-width: ${mediaSize}px)`

module.exports = {
    Container,
    mediaQuery
}