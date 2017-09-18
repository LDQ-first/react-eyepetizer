import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const DownloadDiv = styled.div`
    padding: 60px 0;
    .intro {
       background: url(${eyeApi.sprite}) no-repeat 0 100% / 428px;
       height: 22px;
       margin: 0 auto 50px;
       width: 428px;
       ${mediaQuery()} {
          background: url(${eyeApi.sprite}) no-repeat 0 100% / 285px;
          height: 15px;
          width: 285px;
       }
    }
    .download {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        ${mediaQuery()} {
            width: 162px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .icon {
            background: url(${eyeApi.sprite}) no-repeat 0 40.79045% / 428px;
            border: 1px solid #888;
            border-radius: 20px;
            height: 100px;
            width: 100px;
            margin-right: 50px;
            ${mediaQuery()} {
               margin: 0 0 30px;
            }
        }
        .logo {
            background: url(${eyeApi.sprite}) no-repeat 0 95.2381% / 642px;
            height: 75px;
            width: 120px;
            margin-right: 50px;
             ${mediaQuery()} {
               margin: 0 0 30px;
            }
        }
        .download-button-list {
            height: 120px;
            position: relative;
            width: 162px;
            .btn {
                height: 52px;
                position: absolute;
                width: 162px;
                &.ios {
                    background: url(${eyeApi.sprite}) no-repeat 0 28.49707% / 642px;
                    top: 0;
                    ${mediaQuery()} {
                      left: 0;
                    }
                }
                &.android {
                    background: url(${eyeApi.sprite}) no-repeat 0 14.3136% / 642px;
                    bottom: 0;
                    ${mediaQuery()} {
                      left: 0;
                    }
                }
            }
        }
        
    }


`

export default DownloadDiv