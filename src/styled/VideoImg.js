import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const VideoImgDiv = styled.div`
    width: 100%;
    cursor: pointer;
    .img {
        width: 100%;
        max-width: 800px;
        display: block;
        margin: 1em auto;
        box-shadow: 0 0px 4px 2px rgba(161, 103, 192, 0.8);
    }

`

export default VideoImgDiv