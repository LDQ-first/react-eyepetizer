import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const CarouselDiv = styled.div`
   position: relative;
   width: 100%;
   height: 490px;
   overflow: hidden;
   transform: perspective(1000px);
   color: #FFF;
   ${mediaQuery()} {
      height: 425px;
   }
   ${mediaQuery(415)} {
       height: 265px;
   }
   .controlBtn {
       width: 12.5%;
       height: 400px;
       background: rgba(0 ,0, 0, 0.2);
       position: absolute;
       bottom: 40px;
       z-index: 100;
       min-width: 8px;
       ${mediaQuery()} {
          height: 350px;
       }
       ${mediaQuery(415)} {
          height: 200px;
       }
       &.pre {
           left: 0;
       }
       &.next {
           right: 0px;
       }
       .controlBtn-icon {
           width: 50px;
           height: 50px;
           fill: #FFF;
       }
   }
   .itemLists {
       position: absolute;
       height: 400px;
       bottom: 40px;
       ${mediaQuery()} {
          height: 350px;
       }
       ${mediaQuery(415)} {
          height: 200px;
       }
       .itemList {
           float: left;
           width: 50vw;
           height: 400px;
           min-width: 160px;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           box-shadow: 0 0px 4px rgba(0, 0, 0, 0.8);
           ${mediaQuery()} {
                height: 350px;
            }
           ${mediaQuery(415)} {
               height: 200px;
           }
           &.hide {
               visibility: hidden;
               height: 0;
           }
           
           .title {

           }
           .meta {

           }
       }
   }
   .activeItemLists {
       position: absolute;
       bottom: 0;
       z-index: 50;
       width: 100%;
       height: 450px;
       bottom: 40px;
       transform: translateZ(100px);
       ${mediaQuery()} {
          height: 385px;
       }
       ${mediaQuery(415)} {
          height: 225px;
       }
       .activeItemList {
           position: relative;
           left: 12.5%;
           width: 75%;
           visibility: hidden;
           height: 0;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
           &.active {
              visibility: visible;
              height: 450px;
             ${mediaQuery()} {
                height: 385px;
             }
              ${mediaQuery(415)} {
                height: 225px;
             }
             
           }
           &:hover::before {
                background: transparent;
           }
           &::before {
                content: '';
                background: rgba(0,0,0,.4);
                height: 100%;
                width: 100%;
                position: absolute;
                left: 0;
                transition: background .6s;  
                cursor: pointer;  
                z-index: 0; 
           }
           .title {
             position: relative;
             z-index: 10;
             font-weight: bold;
           }
           .meta {
               position: relative;
              z-index: 10;
           }
      }
   }
   .bullets {
       position: absolute;
       bottom: 10px;
       width: 100%;
       height: 30px;
       background: rgba(255, 255, 255, 0.1);
       display: flex;
       justify-content: center;
       align-items: center;
       z-index: 50;
       box-shadow: 0 0px 4px rgba(0, 0, 0, 0.8);
       .bullet {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #CCC;
          margin: 0 5px;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
          &.active {
              background: #3399FF;
              width: 30px;
          }
       }
   }

`


const defaultWidth = `calc(50vw)`

export default CarouselDiv

export {
    defaultWidth
}