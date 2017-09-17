import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const RelatedVideoDiv = styled.div`
     color: #FFF;
    .video-lists {
        background: rgba(0, 0, 0, 0.2);
        padding: 15px 15px 8px 15px;
        .video-list {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .coverForFeed {
                width: 40%;
                border: 4px solid #EEE;
                margin: 1em;
            }
            .content {
                flex: 1;
                padding: 1em;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                cursor: pointer;
                .title {
                    font-weight: bold;
                    font-size: 16px;
                }
                .meta {

                }
            }
        }
    }

`

export default RelatedVideoDiv
