import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoDiv = styled.div`
     .video-wrap {
        overflow: hidden;
        position: relative;
        width: 100%;
     }
     .video {
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
     }
     .cover {
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
     }
     .play-btn {
        background-color: rgba(0,0,0,.15);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 60px 60px;
        transition: background-color 0.5s;
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        &:hover {
            background-color: rgba(0,0,0,.5);
        }
     }
`

export default VideoDiv