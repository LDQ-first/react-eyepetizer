import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const SearchDiv = styled.div`
     padding-bottom: 50px;
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
                    /* background: #;
                     color: #FFF;
                     margin: 4px;
                     font-size: 12px;*/
                        background: #7e57c2;
                        border-radius: 2px;
                        padding: 0;
                        box-shadow: 0 1px 6px rgba(0,0,0,.4), 0 1px 4px rgba(0,0,0,.2);
                        margin: 10px;
                       /* padding: 0 10px;*/
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