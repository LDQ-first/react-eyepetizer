import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoInfoDiv = styled.div`
    color: #FFF;
    background: rgba(0,0,0,.2);
   .video-meta {
       padding: 15px 15px 8px 15px;
       .title {
           font-size: 20px;
           margin: 0;
           margin-bottom: 7px;
       }
       .meta {
           font-size: 1em;
           display: inline-block;
           padding-top: 8px;
           border-top: 1px solid #FFF;
           margin: 0;
           margin-bottom: 12px;
       }
       .description {
           margin-bottom: 11px;
           opacity: 0.85;
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