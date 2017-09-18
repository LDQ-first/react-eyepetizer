import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const TagsDiv = styled.div`
     color: #FFF;
     background: rgba(0, 0, 0, 0.2);
     padding: 15px; 
     .header {
         text-align: center;
         .title {
             font-size: 20px;
         }
     }
     .tags {
         margin-top: 1em;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-wrap: wrap;
         .tag {
             margin: 0 1em;
             .tagBtn {
                background: rgba(255, 255, 255, 0.3);
                border-radius: 2px;
                font-size: 12px;
                letter-spacing: 3px;
                line-height: 22px;
                margin: 4px;
                padding: 0 6px 0 9px;
                color: #FFF;
                min-width: 0;
                min-height: 0;
             }
         }
     }

`

export default TagsDiv