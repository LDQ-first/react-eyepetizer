import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const AuthorLeftInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 8px 15px;
    margin: 1em 0;
    cursor: pointer;
    .iconImg {
        height: 36px;
        width: 36px;
        margin: 0 20px 0 10px;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
    }
    .message {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .name {
            font-size: 14px;
            word-break: break-word;
        }
        .lastTime {
            font-size: 12px;
        }
        .des {
            font-size: 14px;
            margin: 0;
            word-break: break-word;
        }
    }
    .videoNum {
        margin-left: 10px;
    }

`

export default AuthorLeftInfoDiv