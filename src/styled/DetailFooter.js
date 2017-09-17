import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const DetailFooterDiv = styled.div`
     color: #FFF;
     background: rgba(0, 0, 0, 0.2);
     padding: 15px 15px 100px 15px; 
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     .indexLink {
         margin-bottom: 40px;
         .bottom-logo {
            background: url(${eyeApi.bottomLogo}) no-repeat center/cover;
            height: 94px;
            width: 90px;
         }
     }
     .eyepetizerWxQr {
         width: 80px;
         margin-bottom: 20px;
     }
     .qr-tips {
         margin-bottom: 40px;
         font-size: 12px;
     }

`

export default DetailFooterDiv