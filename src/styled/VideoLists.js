import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoListsDiv = styled.div`
    text-align: center;
    position: relative;
    z-index: 500;
    background: linear-gradient(80deg, #00aeff, #3369e7);
    .date {
        background: #FFF;
        font-family: Lobster,cursive;
        font-size: 16px;
        line-height: 90px;
    }

`

export default VideoListsDiv