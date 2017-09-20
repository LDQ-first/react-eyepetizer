import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const NavigationDiv = styled.div`
    height: 56px; 
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    animation: showNav 0.8s ease-in-out;
    @keyframes showNav {
        0% {
            opacity: 0;
            transform: translateY(50%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
   
`

export default NavigationDiv