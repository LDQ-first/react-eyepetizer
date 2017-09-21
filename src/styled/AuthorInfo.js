import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const AuthorInfoDiv = styled.div`
     color: #FFF;
     padding: 1em;
     cursor: pointer;
     ${mediaQuery(768)}  {
         padding: 0.5em;
     }
     .authorInfo {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         .icon {
            height: 60px;
            width: 60px;
            margin: 1em;
            border-radius: 50%;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
         }
         .name {
             font-size: 20px;
              word-break: break-word;
         }
         .brief {
             word-break: break-word;
         }
         .description {

         }
         .videoCount {
             position: relative;
             width: 100%;
             height: 1.6em;
             &::before, &::after {
                 content: '';
                 border: 2px solid #FFF;
                 position: absolute;
                 top: 50%;
                 margin-top: -1px;
                 width: 50%;
                 z-index: -1;
             }
             &::before {
                 left: 0;
             }
             &::after {
                 right: 0;
             }
             .videoCount-content {
                position: absolute;
                left: 50%;
                top: 0;
                transform: translateX(-50%);
                z-index: 10;
                background: #03A9F4;
                padding: 0 2em;
                ${mediaQuery(768)}  {
                    padding: 0 0.5em;
                }
             }

         }

     }
     

`

export default AuthorInfoDiv