import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const CarouselDiv = styled.div`
   position: relative;
   width: 100%;
   height: 520px;
   overflow: hidden;
   color: #FFF;
   background: #5EACEC;
   ${mediaQuery()} {
      height: 526px;
   }
   ${mediaQuery(415)} {
       height: 366px;
   }
   .controlBtn {
       width: 12.5%;
       height: 400px;
       background: rgba(0 ,0, 0, 0.2);
       position: absolute;
       bottom: 145px;
       z-index: 100;
       min-width: 8px;
       ${mediaQuery(768)} {
          display: none;
       }
       ${mediaQuery()} {
          height: 350px;
          bottom: 138px;
       }
      /* ${mediaQuery(415)} {
          height: 200px;
          bottom: 43px;
       }*/
       &.pre {
           left: 0;
       }
       &.next {
           right: 0px;
       }
       .controlBtn-icon {
           width: 50px !important;
           height: 50px !important;
           fill: #FFF !important;
       }
   }
   .itemLists {
       position: absolute;
       height: 400px;
       bottom: 145px;
       ${mediaQuery()} {
          height: 350px;
          bottom: 138px;
       }
       ${mediaQuery(415)} {
          height: 200px;
          bottom: 133px;
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
               font-size: 16px;
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
       bottom: 120px;
        ${mediaQuery(768)} {
          left: 0;
          width: 100%;
       }
       ${mediaQuery()} {
          height: 386px;
       }
       ${mediaQuery(415)} {
          height: 226px;
       }
       &:hover {
           &::before {
            z-index: -1;
            background: transparent;
          }
       }
        &::before {
            content: '';
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            transition: background .6s;  
            z-index: 10; 
            background: rgba(0, 0, 0, 0.4);
        }
       .activeItemList {
           position: relative;
           visibility: hidden;
           height: 0;
           display: flex;
           justify-content: center;
           box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.8);
           cursor: pointer;
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
                bottom: 20px;
                width: 50%;
                height: 50%;
                border: none;
                z-index: -10;
                animation: showShadow 0.5s ease-in-out 1s forwards;
                ${mediaQuery(1500)} {
                   bottom: 16px;
                }
                ${mediaQuery()} {
                   bottom: 12px;
                }
                @media (min-width: 2200px) {
                    opacity: 0;
                }
                @keyframes showShadow {
                    0% {
                        opacity: 0;
                        box-shadow: none;
                    }
                    100% {
                        opacity: 1;
                        box-shadow: 0 15px 10px rgba(0, 0, 0, 0.9);
                    }
                }
                }
                &::before {
                    left: 8px;
                    transform: rotate(-3deg);
                    ${mediaQuery(500)} {
                        left: 0px;
                    }
                }
                &::after {
                    right: 8px;
                    transform: rotate(3deg);
                    ${mediaQuery(500)} {
                        right: 0px;
                    }
                }   
           }
           
           .title {
             position: absolute;
             bottom: -50px;
             z-index: 11;
             font-weight: bold;
             font-size: 16px;
             padding: 0 10px;
             width: 100%;
             text-align: center;
           }
           .meta {
              position: absolute;
              bottom: -80px;
              z-index: 11;
              font-weight: bold;
              padding: 0 10px;
              width: 100%;
              text-align: center;
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