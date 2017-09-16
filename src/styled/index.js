import {injectGlobal} from 'styled-components'
import styled from 'styled-components'
import { lightBlue, deepPurple, blue } from 'material-ui/colors'
const bgBlue = lightBlue[400]
const bgPurple = deepPurple[200]
const mainBlue = blue[500]
const svgBlue = blue[600]


export default injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        overflow: auto;
    }
    body {
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
        width: 0.5em
    }

    ::-webkit-scrollbar-track {
        border-radius: 0.25em;
        background: #ceb9d1
    }

    ::-webkit-scrollbar-thumb {
        height: 0.5em;
        border-radius: 0.25em;
        background: #498bd6 linear-gradient(180deg,#fff,rgba(3,169,244,.5),#0277bd)
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
    .noPadding {
        padding: 0;
    }
    .noMargin {
        margin: 0;
    }
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    svg {
        fill: ${svgBlue} !important;
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
`

const Container = styled.div`
   
`


const mediaQuery = (mediaSize = 1024) => `@media screen and (max-width: ${mediaSize}px)`

module.exports = {
    Container,
    mediaQuery
}