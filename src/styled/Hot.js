import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const HotDiv = styled.div`
    color: #FFF;
    margin: 10px 0;
    overflow: auto;
    .top {
        padding-top: 50px;
    }
    .ranklist {
        margin: 0 10px;
        .imgs {
            overflow-x: auto;
            display: flex;
            justify-content: center;
            padding: 10px 0;
            ${mediaQuery(1200)} {
               justify-content: flex-start;
            }
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