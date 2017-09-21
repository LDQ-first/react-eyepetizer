import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 


const TopScreenDiv = styled.div`
    min-height: 100%;
    position: relative;
    overflow: hidden;
    ::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: -10;
    }
    .github {
        position: absolute;
        left: 10px;
        top: 10px;
        z-index: 1;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-center: center;
        .icon {
            width: 30px;
            height: 30px;
        }
    }
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
                    transform: translate(0)
                }
                100% {
                    transform: translate(-5%, -2%)
                }
            }

        }
    }
    .content {
        display: flex;
        justify-content: center;
        align-center: center;
        .logo {
            background: url(${eyeApi.sprite}) no-repeat ;
            background-size: 642px;
            background-position: 0 81.02435%;
            height: 225px;
            width: 180px;
            position: absolute;
            top: 10%;
            ${mediaQuery()} {
                background-position: 0 81.02435%;
                background-size: 342.4px;
                height: 120px;
                top: 20%;
                width: 96px;
            }
        }
        .intro {
            background: url(${eyeApi.sprite}) no-repeat;
            background-size: 642px;
            background-position: 0 55.5773%;
            height: 54px;
            position: absolute;
            top: 48%;
            width: 351px;
            ${mediaQuery()} {
                background-position: 0 55.5773%;
                background-size: 528.59829px;
                height: 44px;
                width: 289px;
            }
        }
        .download-button-list {
            position: absolute ;
            font-size: 0;
            height: 52px;
            top: 64%;
            .btn {
                height: 52px;
                margin: 0 14px;
                opacity: .9;
                transition: opacity .3s;
                width: 162px;
                background: url(${eyeApi.sprite}) no-repeat;
                background-size: 642px;
                &.ios {
                    background-position: 0 21.40534%;
                }
                &.android {
                    background-position: 0 7.22186%;
                }
            }
            ${mediaQuery()} {
                height: 124px;
                top: 60%;
                width: 162px;
                .btn {
                    margin: 0;
                    position: absolute;
                    &.ios {

                    }
                    &.android {
                        bottom: 0;
                    }
                }
            }
        }
        .entry-button {
            position: absolute;
            height: 52px;
            margin-top: 120px;
            top: 60%;
            .audit {
                height: 53px;
                margin: 0 14px;
                opacity: .4;
                -webkit-transition: opacity .3s;
                transition: opacity .3s;
                width: 220px;
                cursor: pointer;
                background: url(${eyeApi.sprite}) no-repeat 0 0 /642px;
            }
            .text {
                margin: 0;
                position: absolute;
                font-size: 14px;
                text-align: center;
                pointer-events: none;
                color: #fff;
                top: 0;
                width: 100%;
                height: 100%;
                line-height: 52px;
                letter-spacing: 4px;
             }
            ${mediaQuery()} {
                display: none;
            }
        }
    }


`

export default TopScreenDiv