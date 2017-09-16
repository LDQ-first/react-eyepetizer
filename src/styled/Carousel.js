import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const CarouselDiv = styled.div`
   position: relative;
   width: 100%;
   height: 300px;
   overflow: hidden;
   .controlBtn {
       &.pre {

       }
       &.next {

       }
   }
   .itemLists {
       position: absolute;
       left: 0;
       width: calc((100vw / 3) * 6) ;
       height: 300px;
       .itemList {
           outline: 1px solid red;
           float: left;
           width: calc(100vw / 3);
           height: 300px;
           &.active {

           }
           &::before {

           }
           .title {

           }
           .meta {

           }
       }
   }

`

export default CarouselDiv