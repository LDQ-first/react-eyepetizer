import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const CarouselDiv = styled.div`
   position: relative;
   width: 100%;
   height: 480px;
   overflow: hidden;
   transform: perspective(1000px);
   color: #FFF;
   ${mediaQuery()} {
      height: 415px;
   }
   ${mediaQuery(415)} {
       height: 255px;
   }
   .controlBtn {
       width: 12.5%;
       height: 400px;
       background: rgba(0 ,0, 0, 0.3);
       position: absolute;
       bottom: 30px;
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
       bottom: 30px;
       ${mediaQuery()} {
          height: 350px;
       }
       ${mediaQuery(415)} {
          height: 200px;
       }
       .itemList {
           outline: 1px solid red;
           float: left;
           width: 50vw;
           height: 400px;
           min-width: 160px;
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
           &::before {

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
       bottom: 30px;
       transform: translateZ(100px);
       ${mediaQuery()} {
          height: 385px;
       }
       ${mediaQuery(415)} {
          height: 225px;
       }
       .activeItemList {
           outline: 1px solid lightgreen;
           position: absolute;
           left: 12.5%;
           width: 75%;
           visibility: hidden;
           height: 0;
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
      }
   }
   .bullets {
       position: absolute;
       bottom: 0px;
       width: 100%;
       height: 30px;
       background: rgba(255, 255, 255, 0.1);
       display: flex;
       justify-content: center;
       align-items: center;
       z-index: 50;
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