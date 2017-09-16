import styled from 'styled-components'
import {mediaQuery} from './index.js'

const TopScreenDiv = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
    .menu {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 1;
        button {
            height: 36px;
            margin: 0 8px;
            transition: opacity .6s;
            opacity: .7;
            padding: 0;
            width: 36px;
        }
        .email, .wechat, .weibo {
            background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/sprite_share.bc0f4494.png);
            background-repeat: no-repeat;
        }
        .wechat {
            background-size: 36px;
            background-position: 0 -26px;
        }
        .weibo {
            background-size: 36px;
            background-position: 0 -63px;
        }
        .email {
            background-size: 54px;
            background-position: 0 0;
        }
    }
    .video-wrap {
        position: absolute;
        z-index: -100;
        height: 100%;
        width: 100%;
        overflow: hidden;
        ${mediaQuery()} {
            display: none;
        }
        .video {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            min-height: 100vh;
            min-width: 100vw;    
        }
    }
    .bgImg-list {
        display: none;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -200;
        ${mediaQuery()} {
            display: block;
        }
        .imglist {
            animation: even 20s linear infinite alternate;
            opacity: 0;
            position: absolute;
            transition: opacity 1.25s;
            width: 120%;
            &.hide {
                opacity: 1;
            }
            &:nth-child(odd) {
                animation: odd 8s ease infinite alternate;
            }
            @keyframes even {
               0% {
                    transform: scaleX(1)
                }
                100% {
                    transform: scale3d(1.3, 1.3, 1.3)
                }
            }
            @keyframes odd {
                0% {
                    transform: translateZ(0)
                }
                100% {
                    transform: translate3d(-5%, -2%, 0)
                }
            }

        }
    }


`

export default TopScreenDiv