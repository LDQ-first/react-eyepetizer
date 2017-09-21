import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const AuthorLeftInfoDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
    margin: 1em 0;
    cursor: pointer;
    ${mediaQuery(768)}  {
        padding: 15px 8px;
    }
    .iconImg {
        height: 36px;
        width: 36px;
        margin: 0 20px 0 10px;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
        ${mediaQuery(768)}  {
         margin: 0 20px 0 0;
        }
    }
    .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: calc(100% - 170px);
        ${mediaQuery(768)} {
           width: calc(100% - 70px);
        }
        .name {
            font-size: 14px;
            width: 100%;
        }
        .lastTime {
            font-size: 12px;
        }
        .des {
            font-size: 14px;
            margin: 0;
            width: 100%;
        }
    }
    .videoNum {
        margin-left: 10px;
        ${mediaQuery(768)} {
            display: none;
        }
    }

`

export default AuthorLeftInfoDiv