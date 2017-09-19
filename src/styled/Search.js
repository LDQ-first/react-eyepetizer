import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const SearchDiv = styled.div`
     background: #EEE;
     .header {
         text-align: center;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 5px; 
         .searchBtn {

         }
         .searchArea {
             background: rgba(255, 255, 255, 0.15);
             border-radius: 2px;
             .searchInput {
                 padding: 8px 8px 8px 30px;
                 border: 0;
                 margin: 0;
                 display: block;
                 background: none;
                 white-space: normal;
             }
         }
         .cancelBtn {
             background: rgba(255, 255, 255, 0.15);
         }
     }
     .main {
         padding: 15px; 
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
             .hotWords {
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: center;
                 align-items: center;
                 .hotWord {
                     background: #CCC;
                     color: #FFF;
                     margin: 0 1em;
                     padding: 4px;
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