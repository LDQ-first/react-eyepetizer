import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const SearchDiv = styled.div`
     background: #EEE;
     position: absolute;
     top: 0;
     z-index: 2000;
     height: 100%;
     width: 100%;
     .header {
         padding: 5px; 
         background: #007ACC;
         position: relative;
         &::before {
             content: '';
             position: absolute;
             width: calc(100% - 10px);
             height: calc(100% - 10px);
             top: 5px;
             left: 5px;
             background: rgba(255, 255, 255, 0.3);
             z-index: 0;
         }
         .content {
             position: relative;
             z-index: 1;
             display: flex;
            justify-content: center;
            align-items: center;
         }
         .searchBtn {
             
         }
         .searchArea {
             border-radius: 2px;
             flex: 1;
             padding-right: 8px;
             .searchInput {
                 width: 100%;
                 padding: 8px 20px;
                 border: none;
                 outline: none;
                 background: none;
                 color: #FFF;
                 ::-webkit-input-placeholder { /* WebKit browsers */
                　　color: #FFF;
            　　  }
            　　  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            　　      color:#FFF;
            　　  }
            　　  ::-moz-placeholder { /* Mozilla Firefox 19+ */
            　　      color:#FFF;
            　　  }
            　　  :-ms-input-placeholder { /* Internet Explorer 10+ */
            　　      color:#FFF;
            　　  }
             }
         }
         .cancelBtn {
             height: 32px;
             color: #FFF;
             margin-left: 10px;
             padding: 0 5px;
         }
     }
     .main {
         padding: 15px; 
         overflow-y: auto;
         .hotWordArea {
           /* display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;*/
             .tipArea {
                padding: 1em 0;
                 .tip {
                     text-align: center;
                 }
             }
             .title {
                 text-align: center;
             }
             .hotWords {
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: center;
                 align-items: center;
                 .hotWord {
                     background: #CCC;
                     color: #FFF;
                     margin: 4px;
                     padding: 4px 8px;
                     font-size: 12px;
                 }
             }
         }
         .result {
             .resultNum {
                  text-align: center;
            }
         }
         
     }
     

`

export default SearchDiv