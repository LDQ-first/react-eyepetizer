import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const CarouselDiv = styled.div`
   position: relative;
   width: 100%;
   height: 480px;
   overflow: hidden;
   color: #FFF;
   background: #FFF;
   ${mediaQuery()} {
      height: 416px;
   }
   ${mediaQuery(415)} {
       height: 256px;
   }
   .controlBtn {
       width: 12.5%;
       height: 400px;
       background: rgba(0 ,0, 0, 0.2);
       position: absolute;
       bottom: 55px;
       z-index: 100;
       min-width: 8px;
       ${mediaQuery()} {
          height: 350px;
          bottom: 48px;
       }
       ${mediaQuery(415)} {
          height: 200px;
          bottom: 43px;
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
       bottom: 55px;
       ${mediaQuery()} {
          height: 350px;
          bottom: 48px;
       }
       ${mediaQuery(415)} {
          height: 200px;
          bottom: 43px;
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
       left: 12.5%;
       width: 75%;
       height: 450px;
       bottom: 30px;
       ${mediaQuery()} {
          height: 386px;
       }
       ${mediaQuery(415)} {
          height: 226px;
       }
       &:hover::before {
            background: rgba(0, 0, 0, 0.05);
        }
        &::before {
            content: '';
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            transition: background .6s;  
            cursor: pointer;  
            z-index: 10; 
            background: rgba(0, 0, 0, 0.4);
        }
       .activeItemList {
           position: relative;
           visibility: hidden;
           height: 0;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.8);
           &.pre {
               animation: pre 0.5s ease-in-out;
               @keyframes pre {
                   0% {
                       transform: scale(0.5) translateX(50%);
                   }
                   100% {
                       transform: scale(1) translateX(0);
                   }
               }
           }
           &.next {
               animation: next 0.5s ease-in-out;
               @keyframes next {
                   0% {
                       transform: scale(0.5) translateX(-50%);
                   }
                   100% {
                       transform: scale(1) translateX(0);
                   }
               }
           }
           &.active {
              visibility: visible;
              height: 450px;
             ${mediaQuery()} {
                height: 386px;
             }
              ${mediaQuery(415)} {
                height: 226px;
             }
             &::before, &::after {
                content: '';
                position: absolute;
                bottom: 0;
                width: 50%;
                height: 50%;
                border: none;
                z-index: -1;
                animation: show 0.5s ease-in-out 0.5s forwards;
                @keyframes show {
                   0% {
                       box-shadow: none;
                   }
                   100% {
                       box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.9);
                   }
               }
            }
            &::before {
                left: 0; 
                transform: skew(-10deg, -4deg) translate(13%, -5%);
            }
            &::after {
                right: 0;
                transform: skew(10deg, 4deg) translate(-13%, -5%);
            }
             
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