import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const GoToTopDiv = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    ${mediaQuery(768)}  {
        bottom: 10px;
        right: 10px;
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.3),
                     0px 4px 8px rgba(0, 0, 0, 0.2);
        background: #03A9F4;
        ${mediaQuery(768)}  {
            width: 36px;
            height: 36px;
        }
        svg {
            fill: #FFF !important;
        }
        &:hover {
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5),
                        0px 4px 12px rgba(0, 0, 0, 0.4);
        }
    }
`


export default GoToTopDiv