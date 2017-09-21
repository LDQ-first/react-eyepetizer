import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const FooterDiv = styled.div`
    height: 150px;
    background: #444;
    font-size: 14px;
    padding: 55px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-center: center;
    color: #FFF;
    margin-bottom: 56px;
    .copyRight {
        text-align: center;
        letter-spacing: 2px;
        .githubUrl {
            color: #03a9f4;
            margin: 0 10px;
        }
    }
    .githubRep {
        text-align: center;
        letter-spacing: 2px;
        .githubRepUrl {
            .icon {
                width: 30px;
                height: 30px;
                vertical-align: bottom;
                margin: 0 10px;
                transform-origin: 50% 100%;
                animation: githubSway 2s ease-in-out infinite alternate;
                @keyframes githubSway {
                    0% {
                        transform: rotate(-35deg);
                    }
                    100% {
                        transform: rotate(35deg);
                    }
                }
            
            }
        }
        
    }
`

export default FooterDiv