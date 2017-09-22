import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoHorizontalDiv = styled.div`
    .authorVideos {
        overflow-x: auto;
        display: flex;
        justify-content: flex-start;
        padding: 10px 0;
        .video {
            margin-right: 10px;
            width: calc(50% - 50px);
            max-width: 400px;
            min-width: 200px;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            + .video  {
                margin-left: 10px;
            }
            .videoImg {
                width: 100%;
                cursor: pointer;
                height: 150px;
                margin-bottom: 10px;
            }
            .videoDes {
                .name {
                    font-size: 12px;
                }
                .meta {
                    font-size: 12px;
                }
            }
        }
    }

`

export default VideoHorizontalDiv