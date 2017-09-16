import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const CarouselDiv = styled.div`
   position: relative;
   width: 100%;
   height: 350px;
   overflow: hidden;
   .controlBtn {
       width: calc(100vw / 4);
       height: 300px;
       background: rgba(0 ,0, 0, 0.3);
       position: absolute;
       bottom: 0;
       z-index: 10;
       &.pre {
           left: 0;
       }
       &.next {
           right: -8px;
       }
       .controlBtn-icon {
           width: 50px;
           height: 50px;
           fill: #FFF;
       }
   }
   .itemLists {
       position: absolute;
       width: calc((100vw / 2) * 7) ;
       height: 350px;
       margin-top: 50px;
       .itemList {
           outline: 1px solid red;
           float: left;
           width: calc(100vw / 2);
           height: 300px;
           &.hide {
               visibility: hidden;
               height: 0;
           }
           /*&.active {
               height: 350px;
               margin-top: -50px;
               position: absolute;
               left: calc(100vw / 4);
           }*/
           &::before {

           }
           .title {

           }
           .meta {

           }
       }
   }

`


const defaultWidth = `calc(100vw / 2)`

export default CarouselDiv

export {
    defaultWidth
}