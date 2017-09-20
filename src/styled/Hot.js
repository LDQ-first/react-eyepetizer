import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const HotDiv = styled.div`
    color: #FFF;
    .top {
        
    }
    .ranklist {
        margin: 0 10px;
        .imgs {
            overflow-x: auto;
            display: flex;
            justify-content: flex-start;
            padding: 10px 0;
            .img-wrap {
                margin: 0 10px;
                width: calc(50% - 50px);
                max-width: 400px;
                min-width: 200px;
                font-size: 14px;
                .img {
                    width: 100%;
                    cursor: pointer;
                }
            }
        }
    }
    .others {

    }
    .header {
        margin: 10px 0;
        .title {
            text-align: center;
        }
    }
    .videos {
        .video {

        }
    }

`

export default HotDiv