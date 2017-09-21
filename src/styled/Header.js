import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const HeaderDiv = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    width: 100vw;
    top: 0px;
    z-index: 500;
    background: #2196f3; 
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    color: rgba(255, 255, 255, 0.7);
    z-index: 1000;
    button {
        opacity: .7;
    }
    .subtitle {
        font-size: 14px;
    }
    .title {
        font-size: 16px;
    }
`

export default HeaderDiv