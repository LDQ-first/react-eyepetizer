import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoAreaDiv = styled.div`
     color: #FFF;
     padding: 1em;
     .authorVideo {
        padding: 15px 30px;
        .video {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2em 0;
            ${mediaQuery(500)} {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
            }
            
            .coverForFeed {
                width: 40%;
                border: 4px solid #EEE;
                position: relative;
                font-size: 0;
                ${mediaQuery(768)} {
                    width: 50%;
                }
                ${mediaQuery(500)} {
                    width: 90%;
                }
                .coverForFeedImg {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                &::before, &::after {
                    content: '';
                    position: absolute;
                    
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    background: #3f51b5;
                    border: 4px solid #FFF;
                }
                &::before {
                    transform: rotate(-3deg);
                    left: -4%;
                    top: -4%;
                }
                &::after {
                    transform: rotate(3deg);
                    left: 0;
                    top: -2%;
                }
            }
             .content {
                flex: 1;
                padding: 1em 2em;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                cursor: pointer;
                ${mediaQuery(500)} {
                    margin-top: 1em;
                }
                .title {
                    font-weight: bold;
                    font-size: 16px;
                }
                .meta {

                }
            }
        }
        
     }
     .end {
        position: relative;
        width: 100%;
        height: 1.6em;
        text-align: center;
         &::before, &::after {
            content: '';
            border: 2px solid #FFF;
            position: absolute;
            top: 50%;
            width: calc(50% - 70px);
        }
        &::before {
            left: 0;
        }
        &::after {
            right: 0;
        }
     }

`

export default VideoAreaDiv