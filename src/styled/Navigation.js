import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const NavigationDiv = styled.div`
    height: 56px; 
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 500;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.2),
                0px -2px 4px rgba(0, 0, 0, 0.1);
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