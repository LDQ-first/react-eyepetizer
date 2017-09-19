import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const DatePickerDiv = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 0;
    .picker {
        background: rgb(0, 188, 212);
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
                    rgba(0, 0, 0, 0.12) 0px 1px 4px;
        margin-right: 10px;
        
        > div {
            height: 36px !important;
            width: 120px !important;      
        }
        > div > div {
            height: 36px;
            line-height: 36px;
            left: 40px ;
            bottom: 0px !important;
            width: 80px;
            color: #FFF !important;
        }
        input {
            cursor: pointer !important;
        }
        hr {
            display: none;
        }
        svg {
            fill: #FFF !important;
            margin-top: 3px;
            left: -40px;
            width: 30px !important;
            height: 30px !important;
        }
    }

`

export default DatePickerDiv