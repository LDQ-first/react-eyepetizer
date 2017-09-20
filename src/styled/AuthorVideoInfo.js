import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const AuthorVideoInfoDiv = styled.div`
     .authors-videos {
         width: 100%;
         padding: 0 10px;
         max-width: 800px;
         display: block;
         margin: 0 auto;
         .author-video {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .iconImg {
                height: 36px;
                width: 36px;
                margin: 0 20px 0 10px;
                border-radius: 50%;
                box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
            }
            .message {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                .name {
                    font-size: 14px;
                    width: 90%;
                }
                .meta {
                    font-size: 12px;
                    width: 90%;
                }
            }
         }
     }
    
`

export default AuthorVideoInfoDiv