import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoInfoDiv = styled.div`
    color: #FFF;
    background: rgba(0,0,0,.2);
    padding-top: ${props => props.paddingTop}px;
   .video-meta {
       padding: 8px 15px;
       position: fixed;
       margin-top: -${props => props.paddingTop}px;
        width: 100%;
        max-width: 600px;
        z-index: 1000;
        background: #5EACEC;
       .title {
           font-size: 18px;
           margin: 0;
           margin-bottom: 4px;
           ${mediaQuery()} {
               font-size: 16px;
           }
           ${mediaQuery(768)} {
               font-size: 14px;
           }
       }
       .meta {
           font-size: 1em;
           display: inline-block;
           padding-top: 4px;
           border-top: 1px solid #FFF;
           margin: 0;
           margin-bottom: 6px;
           ${mediaQuery()} {
               font-size: 0.8em;
           }
           ${mediaQuery(768)} {
               font-size: 0.6em;
           }
       }
       .description {
           margin: 4px 0;
           opacity: 0.85;
            ${mediaQuery(768)} {
               font-size: 12px;
           }
       }
   }
   .consumptions {
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 1em 0;
       .consumption {
            margin: 0 1em;   
            display: flex;
            justify-content: center;
            align-items: center;
           .iconBtn {
               .list-icon {
                   fill: #FFF !important;
               }
           }
       }
   }
   .download-area {
        
        height: 70px;
        position: relative;
        z-index: 10;
        .logo {
            background: url(${eyeApi.logoLaunch}) no-repeat center/ cover;
            position: absolute;
            height: 44px ;
            left: 15px;
            top: 12px;
            width: 174px;
        }
        .appLink {
           
        }
        .appLinkBtn {
            background: url(${eyeApi.btnLaunch}) no-repeat center/ 100%;
            position: absolute !important;
            height: 33px !important;
            right: 15px;
            top: 18px;
            width: 86px;
        }
   }

`

export default VideoInfoDiv