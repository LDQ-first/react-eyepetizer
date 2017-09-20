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
    background: linear-gradient(135deg,#32B4F4,#5EACEC); 
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