import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoInfoDiv = styled.div`
    color: #FFF;
   .video-meta {
       background: rgba(0, 0, 0, 0.2);
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

`

export default VideoInfoDiv